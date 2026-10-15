import{C as e,S as t,_ as n,a as r,b as i,c as a,d as o,f as s,g as c,h as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _,v,w as y,x as b,y as x}from"./index-DZZRaEsI.js";var S=y(),C={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},w={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},T=1e3,E=1001,D=1002,O=1003,k=1004,A=1005,ee=1006,te=1007,ne=1008,re=1009,j=1010,ie=1011,ae=1012,oe=1013,M=1014,se=1015,N=1016,P=1017,ce=1018,le=1020,ue=35902,de=35899,fe=1021,pe=1022,me=1023,he=1026,ge=1027,_e=1028,ve=1029,ye=1030,be=1031,xe=1033,Se=33776,Ce=33777,we=33778,Te=33779,Ee=35840,De=35841,Oe=35842,ke=35843,Ae=36196,je=37492,Me=37496,Ne=37488,F=37489,Pe=37490,Fe=37491,Ie=37808,I=37809,Le=37810,L=37811,R=37812,Re=37813,ze=37814,Be=37815,Ve=37816,He=37817,Ue=37818,We=37819,Ge=37820,Ke=37821,qe=36492,Je=36494,Ye=36495,Xe=36283,Ze=36284,Qe=36285,$e=36286,et=2300,tt=2301,nt=2302,rt=2303,it=2400,at=2401,ot=2402,st=3200,ct=`srgb`,lt=`srgb-linear`,ut=`linear`,dt=`srgb`,ft=7680,pt=35044,mt=`300 es`,ht=2e3;function gt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function _t(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function vt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function yt(){let e=vt(`canvas`);return e.style.display=`block`,e}var bt={};function xt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function St(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=St(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=St(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ct(...e){let t=e.join(` `);t in bt||(bt[t]=!0,z(...e))}function wt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Dt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ot=1234567,kt=Math.PI/180,At=180/Math.PI;function jt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dt[e&255]+Dt[e>>8&255]+Dt[e>>16&255]+Dt[e>>24&255]+`-`+Dt[t&255]+Dt[t>>8&255]+`-`+Dt[t>>16&15|64]+Dt[t>>24&255]+`-`+Dt[n&63|128]+Dt[n>>8&255]+`-`+Dt[n>>16&255]+Dt[n>>24&255]+Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function Mt(e,t){return(e%t+t)%t}function Nt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Pt(e,t,n){return e===t?0:(n-e)/(t-e)}function Ft(e,t,n){return(1-n)*e+n*t}function It(e,t,n,r){return Ft(e,t,1-Math.exp(-n*r))}function Lt(e,t=1){return t-Math.abs(Mt(e,t*2)-t)}function Rt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function zt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Vt(e,t){return e+Math.random()*(t-e)}function Ht(e){return e*(.5-Math.random())}function Ut(e){e!==void 0&&(Ot=e);let t=Ot+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wt(e){return e*kt}function Gt(e){return e*At}function Kt(e){return!(e&e-1)&&e!==0}function qt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Jt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Yt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Xt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Qt={DEG2RAD:kt,RAD2DEG:At,generateUUID:jt,clamp:V,euclideanModulo:Mt,mapLinear:Nt,inverseLerp:Pt,lerp:Ft,damp:It,pingpong:Lt,smoothstep:Rt,smootherstep:zt,randInt:Bt,randFloat:Vt,randFloatSpread:Ht,seededRandom:Ut,degToRad:Wt,radToDeg:Gt,isPowerOfTwo:Kt,ceilPowerOfTwo:qt,floorPowerOfTwo:Jt,setQuaternionFromProperEuler:Yt,normalize:Zt,denormalize:Xt},H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return en.copy(this).projectOnVector(e),this.sub(en)}reflect(e){return this.sub(en.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},en=new U,tn=new $t,W=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ct(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(nn.makeScale(e,t)),this}rotate(e){return Ct(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(nn.makeRotation(-e)),this}translate(e,t){return Ct(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(nn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nn=new W,rn=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),an=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function on(){let e={enabled:!0,workingColorSpace:lt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=cn(e.r),e.g=cn(e.g),e.b=cn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ln(e.r),e.g=ln(e.g),e.b=ln(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ut:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ct(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ct(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[lt]:{primaries:t,whitePoint:r,transfer:ut,toXYZ:rn,fromXYZ:an,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:t,whitePoint:r,transfer:dt,toXYZ:rn,fromXYZ:an,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),e}var sn=on();function cn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ln(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var un,dn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{un===void 0&&(un=vt(`canvas`)),un.width=e.width,un.height=e.height;let t=un.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=un}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=vt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=cn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(cn(t[e]/255)*255):t[e]=cn(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},fn=0,pn=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=jt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(mn(r[t].image)):e.push(mn(r[t]))}else e=mn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function mn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?dn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var hn=0,gn=new U,_n=class e extends Et{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=E,i=E,a=ee,o=ne,s=me,c=re,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=jt(),this.name=``,this.source=new pn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gn).x}get height(){return this.source.getSize(gn).y}get depth(){return this.source.getSize(gn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case T:e.x-=Math.floor(e.x);break;case E:e.x=e.x<0?0:1;break;case D:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case T:e.y-=Math.floor(e.y);break;case E:e.y=e.y<0?0:1;break;case D:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null,_n.DEFAULT_MAPPING=300,_n.DEFAULT_ANISOTROPY=1;var vn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yn=class extends Et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ee,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t),this.textures=[];let r=new _n({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ee,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new pn(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},bn=class extends yn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xn=class extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=O,this.minFilter=O,this.wrapR=E,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Sn=class extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=O,this.minFilter=O,this.wrapR=E,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/wn.setFromMatrixColumn(e,0).length(),i=1/wn.setFromMatrixColumn(e,1).length(),a=1/wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(En,e,Dn)}lookAt(e,t,n){let r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),On.crossVectors(n,An),On.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),On.crossVectors(n,An)),On.normalize(),kn.crossVectors(An,On),r[0]=On.x,r[4]=kn.x,r[8]=An.x,r[1]=On.y,r[5]=kn.y,r[9]=An.y,r[2]=On.z,r[6]=kn.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],ne=r[3],re=r[7],j=r[11],ie=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*A+c*re,i[8]=a*C+o*D+s*ee+c*j,i[12]=a*w+o*O+s*te+c*ie,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*A+f*re,i[9]=l*C+u*D+d*ee+f*j,i[13]=l*w+u*O+d*te+f*ie,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*A+g*re,i[10]=p*C+m*D+h*ee+g*j,i[14]=p*w+m*O+h*te+g*ie,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*A+b*re,i[11]=_*C+v*D+y*ee+b*j,i[15]=_*w+v*O+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=wn.set(r[0],r[1],r[2]).length(),o=wn.set(r[4],r[5],r[6]).length(),s=wn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Tn.copy(this);let c=1/a,l=1/o,u=1/s;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=l,Tn.elements[5]*=l,Tn.elements[6]*=l,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=ht,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ht,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},wn=new U,Tn=new Cn,En=new U(0,0,0),Dn=new U(1,1,1),On=new U,kn=new U,An=new U,jn=new Cn,Mn=new $t,Nn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mn.setFromEuler(this),this.setFromQuaternion(Mn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER=`XYZ`;var Pn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Fn=0,In=new U,Ln=new $t,Rn=new Cn,zn=new U,Bn=new U,Vn=new U,Hn=new $t,Un=new U(1,0,0),Wn=new U(0,1,0),Gn=new U(0,0,1),Kn={type:`added`},qn={type:`removed`},Jn={type:`childadded`,child:null},Yn={type:`childremoved`,child:null},Xn=class e extends Et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fn++}),this.uuid=jt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Nn,r=new $t,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Cn},normalMatrix:{value:new W}}),this.matrix=new Cn,this.matrixWorld=new Cn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.premultiply(Ln),this}rotateX(e){return this.rotateOnAxis(Un,e)}rotateY(e){return this.rotateOnAxis(Wn,e)}rotateZ(e){return this.rotateOnAxis(Gn,e)}translateOnAxis(e,t){return In.copy(e).applyQuaternion(this.quaternion),this.position.add(In.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Un,e)}translateY(e){return this.translateOnAxis(Wn,e)}translateZ(e){return this.translateOnAxis(Gn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zn.copy(e):zn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Bn,zn,this.up):Rn.lookAt(zn,Bn,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),Ln.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ln.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qn),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,e,Vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,Hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Xn.DEFAULT_UP=new U(0,1,0),Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=class extends Xn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Qn={type:`move`},$n=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},er={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},nr={h:0,s:0,l:0};function rr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=sn.workingColorSpace){return this.r=e,this.g=t,this.b=n,sn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=sn.workingColorSpace){if(e=Mt(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=rr(i,r,e+1/3),this.g=rr(i,r,e),this.b=rr(i,r,e-1/3)}return sn.colorSpaceToWorking(this,r),this}setStyle(e,t=ct){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let n=er[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=ln(e.r),this.g=ln(e.g),this.b=ln(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return sn.workingToColorSpace(ir.copy(this),e),Math.round(V(ir.r*255,0,255))*65536+Math.round(V(ir.g*255,0,255))*256+Math.round(V(ir.b*255,0,255))}getHexString(e=ct){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sn.workingColorSpace){sn.workingToColorSpace(ir.copy(this),t);let n=ir.r,r=ir.g,i=ir.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=sn.workingColorSpace){return sn.workingToColorSpace(ir.copy(this),t),e.r=ir.r,e.g=ir.g,e.b=ir.b,e}getStyle(e=ct){sn.workingToColorSpace(ir.copy(this),e);let t=ir.r,n=ir.g,r=ir.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(nr);let n=Ft(tr.h,nr.h,t),r=Ft(tr.s,nr.s,t),i=Ft(tr.l,nr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ir=new G;G.NAMES=er;var ar=class extends Xn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},or=new U,sr=new U,cr=new U,lr=new U,ur=new U,dr=new U,fr=new U,pr=new U,mr=new U,hr=new U,gr=new vn,_r=new vn,vr=new vn,yr=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),or.subVectors(e,t),r.cross(or);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){or.subVectors(r,t),sr.subVectors(n,t),cr.subVectors(e,t);let a=or.dot(or),o=or.dot(sr),s=or.dot(cr),c=sr.dot(sr),l=sr.dot(cr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,lr)!==null&&lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,lr)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,lr.x),s.addScaledVector(a,lr.y),s.addScaledVector(o,lr.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return gr.setScalar(0),_r.setScalar(0),vr.setScalar(0),gr.fromBufferAttribute(e,t),_r.fromBufferAttribute(e,n),vr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gr,i.x),a.addScaledVector(_r,i.y),a.addScaledVector(vr,i.z),a}static isFrontFacing(e,t,n,r){return or.subVectors(n,t),sr.subVectors(e,t),or.cross(sr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return or.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),or.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ur.subVectors(r,n),dr.subVectors(i,n),pr.subVectors(e,n);let s=ur.dot(pr),c=dr.dot(pr);if(s<=0&&c<=0)return t.copy(n);mr.subVectors(e,r);let l=ur.dot(mr),u=dr.dot(mr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ur,a);hr.subVectors(e,i);let f=ur.dot(hr),p=dr.dot(hr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(dr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return fr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(fr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ur,a).addScaledVector(dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},br=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Sr):Sr.fromBufferAttribute(r,t),Sr.applyMatrix4(e.matrixWorld),this.expandByPoint(Sr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sr),Sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),jr.subVectors(this.max,Ar),wr.subVectors(e.a,Ar),Tr.subVectors(e.b,Ar),Er.subVectors(e.c,Ar),Dr.subVectors(Tr,wr),Or.subVectors(Er,Tr),kr.subVectors(wr,Er);let t=[0,-Dr.z,Dr.y,0,-Or.z,Or.y,0,-kr.z,kr.y,Dr.z,0,-Dr.x,Or.z,0,-Or.x,kr.z,0,-kr.x,-Dr.y,Dr.x,0,-Or.y,Or.x,0,-kr.y,kr.x,0];return!Pr(t,wr,Tr,Er,jr)||(t=[1,0,0,0,1,0,0,0,1],!Pr(t,wr,Tr,Er,jr))?!1:(Mr.crossVectors(Dr,Or),t=[Mr.x,Mr.y,Mr.z],Pr(t,wr,Tr,Er,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xr=[new U,new U,new U,new U,new U,new U,new U,new U],Sr=new U,Cr=new br,wr=new U,Tr=new U,Er=new U,Dr=new U,Or=new U,kr=new U,Ar=new U,jr=new U,Mr=new U,Nr=new U;function Pr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Nr.fromArray(e,a);let o=i.x*Math.abs(Nr.x)+i.y*Math.abs(Nr.y)+i.z*Math.abs(Nr.z),s=t.dot(Nr),c=n.dot(Nr),l=r.dot(Nr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Fr=new U,Ir=new H,Lr=0,Rr=class extends Et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=pt,this.updateRanges=[],this.gpuType=se,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix4(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyNormalMatrix(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.transformDirection(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},zr=class extends Rr{constructor(e,t,n){super(new Uint8Array(e),t,n)}},Br=class extends Rr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Vr=class extends Rr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Hr=class extends Rr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ur=new br,Wr=new U,Gr=new U,Kr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ur.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wr.subVectors(e,this.center);let t=Wr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Wr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wr.copy(e.center).add(Gr)),this.expandByPoint(Wr.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qr=0,Jr=new Cn,Yr=new Xn,Xr=new U,Zr=new br,Qr=new br,$r=new U,ei=class e extends Et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=jt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(gt(e)?Vr:Br)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jr.makeRotationFromQuaternion(e),this.applyMatrix4(Jr),this}rotateX(e){return Jr.makeRotationX(e),this.applyMatrix4(Jr),this}rotateY(e){return Jr.makeRotationY(e),this.applyMatrix4(Jr),this}rotateZ(e){return Jr.makeRotationZ(e),this.applyMatrix4(Jr),this}translate(e,t,n){return Jr.makeTranslation(e,t,n),this.applyMatrix4(Jr),this}scale(e,t,n){return Jr.makeScale(e,t,n),this.applyMatrix4(Jr),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Zr.setFromBufferAttribute(n),this.morphTargetsRelative?($r.addVectors(this.boundingBox.min,Zr.min),this.boundingBox.expandByPoint($r),$r.addVectors(this.boundingBox.max,Zr.max),this.boundingBox.expandByPoint($r)):(this.boundingBox.expandByPoint(Zr.min),this.boundingBox.expandByPoint(Zr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Zr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Qr.setFromBufferAttribute(n),this.morphTargetsRelative?($r.addVectors(Zr.min,Qr.min),Zr.expandByPoint($r),$r.addVectors(Zr.max,Qr.max),Zr.expandByPoint($r)):(Zr.expandByPoint(Qr.min),Zr.expandByPoint(Qr.max))}Zr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)$r.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared($r));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)$r.fromBufferAttribute(a,t),o&&(Xr.fromBufferAttribute(e,t),$r.add(Xr)),r=Math.max(r,n.distanceToSquared($r))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Rr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Rr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$r.fromBufferAttribute(e,t),$r.normalize(),e.setXYZ(t,$r.x,$r.y,$r.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Rr(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},ti=0,ni=class extends Et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ti++}),this.uuid=jt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ft,this.stencilZFail=ft,this.stencilZPass=ft,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ri=new U,ii=new U,ai=new U,oi=new U,si=new U,ci=new U,li=new U,ui=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ii.copy(e).add(t).multiplyScalar(.5),ai.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ii);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ai),o=oi.dot(this.direction),s=-oi.dot(ai),c=oi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ii).addScaledVector(ai,d),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),r=ri.dot(ri)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,r,i){si.subVectors(t,e),ci.subVectors(n,e),li.crossVectors(si,ci);let a=this.direction.dot(li),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);let s=o*this.direction.dot(ci.crossVectors(oi,ci));if(s<0)return null;let c=o*this.direction.dot(si.cross(oi));if(c<0||s+c>a)return null;let l=-o*oi.dot(li);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},di=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fi=new Cn,pi=new ui,mi=new Kr,hi=new U,gi=new U,_i=new U,vi=new U,yi=new U,bi=new U,xi=new U,Si=new U,Ci=class extends Xn{constructor(e=new ei,t=new di){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){bi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(yi.fromBufferAttribute(s,e),a?bi.addScaledVector(yi,r):bi.addScaledVector(yi.sub(t),r))}t.add(bi)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mi.copy(n.boundingSphere),mi.applyMatrix4(i),pi.copy(e.ray).recast(e.near),!(mi.containsPoint(pi.origin)===!1&&(pi.intersectSphere(mi,hi)===null||pi.origin.distanceToSquared(hi)>(e.far-e.near)**2))&&(fi.copy(i).invert(),pi.copy(e.ray).applyMatrix4(fi),(n.boundingBox===null||pi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ti(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ti(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ti(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ti(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function wi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Si.copy(s),Si.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Si);return l<n.near||l>n.far?null:{distance:l,point:Si.clone(),object:e}}function Ti(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,gi),e.getVertexPosition(c,_i),e.getVertexPosition(l,vi);let u=wi(e,t,n,r,gi,_i,vi,xi);if(u){let e=new U;yr.getBarycoord(xi,gi,_i,vi,e),i&&(u.uv=yr.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=yr.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=yr.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};yr.getNormal(gi,_i,vi,t.normal),u.face=t,u.barycoord=e}return u}var Ei=class extends _n{constructor(e=null,t=1,n=1,r,i,a,o,s,c=O,l=O,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Di=new U,Oi=new U,ki=new W,Ai=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Di.subVectors(n,t).cross(Oi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Di),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ki.getNormalMatrix(e),r=this.coplanarPoint(Di).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new Kr,Mi=new H(.5,.5),Ni=new U,Pi=class{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,i=new Ai,a=new Ai){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ht,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476+Mi.distanceTo(e.center),ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ni.x=r.normal.x>0?e.max.x:e.min.x,Ni.y=r.normal.y>0?e.max.y:e.min.y,Ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=class extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ii=new U,Li=new U,Ri=new Cn,zi=new ui,Bi=new Kr,Vi=new U,Hi=new U,Ui=class extends Xn{constructor(e=new ei,t=new Fi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ii.fromBufferAttribute(t,e-1),Li.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ii.distanceTo(Li);e.setAttribute(`lineDistance`,new Hr(n,1))}else z(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere),Bi.applyMatrix4(r),Bi.radius+=i,e.ray.intersectsSphere(Bi)===!1)return;Ri.copy(r).invert(),zi.copy(e.ray).applyMatrix4(Ri);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Wi(this,e,zi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Wi(this,e,zi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Wi(this,e,zi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Wi(this,e,zi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Wi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ii.fromBufferAttribute(s,i),Li.fromBufferAttribute(s,a),n.distanceSqToSegment(Ii,Li,Vi,Hi)>r)return;Vi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Vi);if(!(c<t.near||c>t.far))return{distance:c,point:Hi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Gi=new U,Ki=new U,qi=class extends Ui{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Gi.fromBufferAttribute(t,e),Ki.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Gi.distanceTo(Ki);e.setAttribute(`lineDistance`,new Hr(n,1))}else z(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ji=class extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yi=new Cn,Xi=new ui,Zi=new Kr,Qi=new U,$i=class extends Xn{constructor(e=new ei,t=new Ji){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Zi.radius+=i,e.ray.intersectsSphere(Zi)===!1)return;Yi.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(Yi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Qi.fromBufferAttribute(l,n),ea(Qi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Qi.fromBufferAttribute(l,a),ea(Qi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ea(e,t,n,r,i,a,o){let s=Xi.distanceSqToPoint(e);if(s<n){let n=new U;Xi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ta=class extends _n{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},na=class extends _n{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ra=class extends _n{constructor(e,t,n=M,r,i,a,o=O,s=O,c,l=he,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ia=class extends ra{constructor(e,t=M,n=301,r,i,a=O,o=O,s,c=he){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},aa=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},oa=class e extends ei{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Hr(c,3)),this.setAttribute(`normal`,new Hr(l,3)),this.setAttribute(`uv`,new Hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},sa=class e extends ei{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Hr(p,3)),this.setAttribute(`normal`,new Hr(m,3)),this.setAttribute(`uv`,new Hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function ca(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ua(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ua(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function la(e){let t={};for(let n=0;n<e.length;n++){let r=ca(e[n]);for(let e in r)t[e]=r[e]}return t}function ua(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function da(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function fa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:sn.workingColorSpace}var pa={clone:ca,merge:la},ma=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ha=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ga=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ma,this.fragmentShader=ha,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=da(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new vn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Cn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_a=class extends ga{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},va=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=st,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ya=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ba(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var xa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Sa=class extends xa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:it,endingEnd:it}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case at:i=e,o=2*t-n;break;case ot:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case at:a=e,s=2*n-t;break;case ot:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ca=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},wa=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ta=class extends xa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Ea=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ta(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case et:t=this.InterpolantFactoryMethodDiscrete;break;case tt:t=this.InterpolantFactoryMethodLinear;break;case nt:t=this.InterpolantFactoryMethodSmooth;break;case rt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return et;case this.InterpolantFactoryMethodLinear:return tt;case this.InterpolantFactoryMethodSmooth:return nt;case this.InterpolantFactoryMethodBezier:return rt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&_t(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===nt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ea.prototype.ValueTypeName=``,Ea.prototype.TimeBufferType=Float32Array,Ea.prototype.ValueBufferType=Float32Array,Ea.prototype.DefaultInterpolation=tt;var Da=class extends Ea{constructor(e,t,n){super(e,t,n)}};Da.prototype.ValueTypeName=`bool`,Da.prototype.ValueBufferType=Array,Da.prototype.DefaultInterpolation=et,Da.prototype.InterpolantFactoryMethodLinear=void 0,Da.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}};Oa.prototype.ValueTypeName=`color`;var ka=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}};ka.prototype.ValueTypeName=`number`;var Aa=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)$t.slerpFlat(i,0,a,c-o,a,c,s);return i}},ja=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Aa(this.times,this.values,this.getValueSize(),e)}};ja.prototype.ValueTypeName=`quaternion`,ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends Ea{constructor(e,t,n){super(e,t,n)}};Ma.prototype.ValueTypeName=`string`,Ma.prototype.ValueBufferType=Array,Ma.prototype.DefaultInterpolation=et,Ma.prototype.InterpolantFactoryMethodLinear=void 0,Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}};Na.prototype.ValueTypeName=`vector`;var Pa={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Fa(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Fa(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Fa(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Ia=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},La=class{constructor(e){this.manager=e===void 0?Ia:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};La.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ra=new WeakMap,za=class extends La{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Pa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Ra.get(a);e===void 0&&(e=[],Ra.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=vt(`img`);function s(){l(),t&&t(this);let n=Ra.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Ra.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Pa.remove(`image:${e}`);let n=Ra.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Ra.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pa.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Ba=class extends La{constructor(e){super(e)}load(e,t,n,r){let i=new _n,a=new za(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Va=new U,Ha=new $t,Ua=new U,Wa=class extends Xn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Cn,this.projectionMatrix=new Cn,this.projectionMatrixInverse=new Cn,this.coordinateSystem=ht,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Ha,Ua),Ua.x===1&&Ua.y===1&&Ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,Ua.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Va,Ha,Ua),Ua.x===1&&Ua.y===1&&Ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Ha,Ua.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ga=new U,Ka=new H,qa=new H,Ja=class extends Wa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=At*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return At*2*Math.atan(Math.tan(kt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,t){return this.getViewBounds(e,Ka,qa),t.subVectors(qa,Ka)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ya=class extends Wa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xa=-90,Za=1,Qa=class extends Xn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ja(Xa,Za,e,t);r.layers=this.layers,this.add(r);let i=new Ja(Xa,Za,e,t);i.layers=this.layers,this.add(i);let a=new Ja(Xa,Za,e,t);a.layers=this.layers,this.add(a);let o=new Ja(Xa,Za,e,t);o.layers=this.layers,this.add(o);let s=new Ja(Xa,Za,e,t);s.layers=this.layers,this.add(s);let c=new Ja(Xa,Za,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},$a=class extends Ja{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},eo=`\\[\\]\\.:\\/`,to=RegExp(`[\\[\\]\\.:\\/]`,`g`),no=`[^\\[\\]\\.:\\/]`,ro=`[^`+eo.replace(`\\.`,``)+`]`,io=`((?:WC+[\\/:])*)`.replace(`WC`,no),ao=`(WCOD+)?`.replace(`WCOD`,ro),oo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,no),so=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,no),co=RegExp(`^`+io+ao+oo+so+`$`),lo=[`material`,`materials`,`bones`,`map`],uo=class{constructor(e,t,n){let r=n||fo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},fo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(to,``)}static parseTrackName(e){let t=co.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);lo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fo.Composite=uo,fo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},fo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},fo.prototype.GetterByBindingType=[fo.prototype._getValue_direct,fo.prototype._getValue_array,fo.prototype._getValue_arrayElement,fo.prototype._getValue_toArray],fo.prototype.SetterByBindingTypeAndVersioning=[[fo.prototype._setValue_direct,fo.prototype._setValue_direct_setNeedsUpdate,fo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fo.prototype._setValue_array,fo.prototype._setValue_array_setNeedsUpdate,fo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fo.prototype._setValue_arrayElement,fo.prototype._setValue_arrayElement_setNeedsUpdate,fo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fo.prototype._setValue_fromArray,fo.prototype._setValue_fromArray_setNeedsUpdate,fo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var po=new Cn,mo=class{constructor(e,t,n=0,r=1/0){this.ray=new ui(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Pn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):B(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return po.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(po),this}intersectObject(e,t=!0,n=[]){return go(e,this,n,t),n.sort(ho),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)go(e[r],this,n,t);return n.sort(ho),n}};function ho(e,t){return e.distance-t.distance}function go(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)go(r[e],t,n,!0)}}var _o=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=V(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(V(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var vo=class extends qi{constructor(e=10,t=10,n=4473924,r=8947848){n=new G(n),r=new G(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new ei;l.setAttribute(`position`,new Hr(s,3)),l.setAttribute(`color`,new Hr(c,3));let u=new Fi({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}},yo=class extends Et{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){z(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function bo(e,t,n,r){let i=xo(r);switch(n){case fe:return e*t;case _e:return e*t/i.components*i.byteLength;case ve:return e*t/i.components*i.byteLength;case ye:return e*t*2/i.components*i.byteLength;case be:return e*t*2/i.components*i.byteLength;case pe:return e*t*3/i.components*i.byteLength;case me:return e*t*4/i.components*i.byteLength;case xe:return e*t*4/i.components*i.byteLength;case Se:case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case we:case Te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case De:case ke:return Math.max(e,16)*Math.max(t,8)/4;case Ee:case Oe:return Math.max(e,8)*Math.max(t,8)/2;case Ae:case je:case Ne:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Me:case Pe:case Fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case I:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Le:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case L:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case R:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Re:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ze:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case He:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ue:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case We:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ge:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ke:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case qe:case Je:case Ye:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Xe:case Ze:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Qe:case $e:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function xo(e){switch(e){case re:case j:return{byteLength:1,components:1};case ae:case ie:case N:return{byteLength:2,components:1};case P:case ce:return{byteLength:2,components:4};case M:case oe:case se:return{byteLength:4,components:1};case ue:case de:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function So(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Co(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},wo={basic:{uniforms:la([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:la([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:la([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:la([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:la([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new G(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:la([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:la([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:la([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:la([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:la([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:la([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:la([q.common,q.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:la([q.lights,q.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};wo.physical={uniforms:la([wo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var To={r:0,b:0,g:0},Eo=new Cn,Do=new W;Do.set(-1,0,0,0,1,0,0,0,1);function Oo(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Ci(new oa(1,1,1),new ga({name:`BackgroundCubeMaterial`,uniforms:ca(wo.backgroundCube.uniforms),vertexShader:wo.backgroundCube.vertexShader,fragmentShader:wo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Eo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Do),l.material.toneMapped=sn.getTransfer(i.colorSpace)!==dt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ci(new sa(2,2),new ga({name:`BackgroundMaterial`,uniforms:ca(wo.background.uniforms),vertexShader:wo.background.vertexShader,fragmentShader:wo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=sn.getTransfer(i.colorSpace)!==dt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(To,fa(e)),n.buffers.color.setClear(To.r,To.g,To.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ko(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ao(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function jo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Mo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ai,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var No=4,Po=[.125,.215,.35,.446,.526,.582],Fo=20,Io=256,Lo=new Ya,Ro=new G,zo=null,Bo=0,Vo=0,Ho=!1,Uo=new U,Wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Uo}=i;zo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,Bo,Vo),this._renderer.xr.enabled=Ho,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ee,minFilter:ee,generateMipmaps:!1,type:N,format:me,colorSpace:lt,depthBuffer:!1},r=Ko(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Go(r)),this._blurMaterial=Yo(r,e,t),this._ggxMaterial=Jo(r,e,t)}return r}_compileMaterial(e){let t=new Ci(new ei,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,r,i){let a=new Ja(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ro),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new oa,new di({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ro),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;qo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;qo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Lo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-No?n-d+No:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,qo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Lo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,qo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Lo)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&B(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Fo;m>Fo&&z(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fo}`);let h=[],g=0;for(let e=0;e<Fo;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];qo(t,3*v*(r>_-No?r-_+No:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Lo)}};function Go(e){let t=[],n=[],r=[],i=e,a=e-No+1+Po.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-No?s=Po[o-e+No-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new ei;h.setAttribute(`position`,new Rr(f,3)),h.setAttribute(`uv`,new Rr(p,2)),h.setAttribute(`faceIndex`,new Rr(m,1)),r.push(new Ci(h,null)),i>No&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Ko(e,t,n){let r=new bn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function qo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Jo(e,t,n){return new ga({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Io,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yo(e,t,n){let r=new Float32Array(Fo),i=new U(0,1,0);return new ga({name:`SphericalGaussianBlur`,defines:{n:Fo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xo(){return new ga({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zo(){return new ga({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var $o=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oa(5,5,5),i=new ga({name:`CubemapFromEquirect`,uniforms:ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ci(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ee),new Qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function es(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new $o(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Wo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Wo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ts(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ct(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ns(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Vr:Br)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function rs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function is(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function as(e,t,n){let r=new WeakMap,i=new vn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new xn(h,p,m,u);g.type=se,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new H(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function os(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ss={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function cs(e,t,n,r,i,a){let o=new bn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new ra(t,n):void 0}),s=new bn(t,n,{type:N,depthBuffer:!1,stencilBuffer:!1}),c=new ei;c.setAttribute(`position`,new Hr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new Hr([0,2,0,0,2,0],2));let l=new _a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ci(c,l),d=new Ya(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},sn.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=ss[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var ls=new _n,us=new ra(1,1),ds=new xn,fs=new Sn,ps=new ta,ms=[],hs=[],gs=new Float32Array(16),_s=new Float32Array(9),vs=new Float32Array(4);function ys(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ms[i];if(a===void 0&&(a=new Float32Array(i),ms[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function bs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ss(e,t){let n=hs[t];n===void 0&&(n=new Int32Array(t),hs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Cs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2fv(this.addr,t),xs(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bs(n,t))return;e.uniform3fv(this.addr,t),xs(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4fv(this.addr,t),xs(n,t)}}function Ds(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;vs.set(r),e.uniformMatrix2fv(this.addr,!1,vs),xs(n,r)}}function Os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;_s.set(r),e.uniformMatrix3fv(this.addr,!1,_s),xs(n,r)}}function ks(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;gs.set(r),e.uniformMatrix4fv(this.addr,!1,gs),xs(n,r)}}function As(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2iv(this.addr,t),xs(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bs(n,t))return;e.uniform3iv(this.addr,t),xs(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4iv(this.addr,t),xs(n,t)}}function Ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2uiv(this.addr,t),xs(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bs(n,t))return;e.uniform3uiv(this.addr,t),xs(n,t)}}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4uiv(this.addr,t),xs(n,t)}}function Rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(us.compareFunction=n.isReversedDepthBuffer()?518:515,a=us):a=ls,n.setTexture2D(t||a,i)}function zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fs,i)}function Bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ps,i)}function Vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ds,i)}function Hs(e){switch(e){case 5126:return Cs;case 35664:return ws;case 35665:return Ts;case 35666:return Es;case 35674:return Ds;case 35675:return Os;case 35676:return ks;case 5124:case 35670:return As;case 35667:case 35671:return js;case 35668:case 35672:return Ms;case 35669:case 35673:return Ns;case 5125:return Ps;case 36294:return Fs;case 36295:return Is;case 36296:return Ls;case 35678:case 36198:case 36298:case 36306:case 35682:return Rs;case 35679:case 36299:case 36307:return zs;case 35680:case 36300:case 36308:case 36293:return Bs;case 36289:case 36303:case 36311:case 36292:return Vs}}function Us(e,t){e.uniform1fv(this.addr,t)}function Ws(e,t){let n=ys(t,this.size,2);e.uniform2fv(this.addr,n)}function Gs(e,t){let n=ys(t,this.size,3);e.uniform3fv(this.addr,n)}function Ks(e,t){let n=ys(t,this.size,4);e.uniform4fv(this.addr,n)}function qs(e,t){let n=ys(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Js(e,t){let n=ys(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ys(e,t){let n=ys(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Xs(e,t){e.uniform1iv(this.addr,t)}function Zs(e,t){e.uniform2iv(this.addr,t)}function Qs(e,t){e.uniform3iv(this.addr,t)}function $s(e,t){e.uniform4iv(this.addr,t)}function ec(e,t){e.uniform1uiv(this.addr,t)}function tc(e,t){e.uniform2uiv(this.addr,t)}function nc(e,t){e.uniform3uiv(this.addr,t)}function rc(e,t){e.uniform4uiv(this.addr,t)}function ic(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?us:ls;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ac(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fs,a[e])}function oc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ps,a[e])}function sc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ds,a[e])}function cc(e){switch(e){case 5126:return Us;case 35664:return Ws;case 35665:return Gs;case 35666:return Ks;case 35674:return qs;case 35675:return Js;case 35676:return Ys;case 5124:case 35670:return Xs;case 35667:case 35671:return Zs;case 35668:case 35672:return Qs;case 35669:case 35673:return $s;case 5125:return ec;case 36294:return tc;case 36295:return nc;case 36296:return rc;case 35678:case 36198:case 36298:case 36306:case 35682:return ic;case 35679:case 36299:case 36307:return ac;case 35680:case 36300:case 36308:case 36293:return oc;case 36289:case 36303:case 36311:case 36292:return sc}}var lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hs(t.type)}},uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cc(t.type)}},dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function pc(e,t){e.seq.push(t),e.map[t.id]=t}function mc(e,t,n){let r=e.name,i=r.length;for(fc.lastIndex=0;;){let a=fc.exec(r),o=fc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){pc(n,l===void 0?new lc(s,e,t):new uc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new dc(s),pc(n,e)),n=e}}}var hc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);mc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function gc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var _c=37297,vc=0;function yc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var bc=new W;function xc(e){sn._getMatrix(bc,sn.workingColorSpace,e);let t=`mat3( ${bc.elements.map(e=>e.toFixed(4))} )`;switch(sn.getTransfer(e)){case ut:return[t,`LinearTransferOETF`];case dt:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Sc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+yc(e.getShaderSource(t),r)}return i}function Cc(e,t){let n=xc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var wc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Tc(e,t){let n=wc[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ec=new U;function Dc(){return sn.getLuminanceCoefficients(Ec),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ec.x.toFixed(4)}, ${Ec.y.toFixed(4)}, ${Ec.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Oc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(jc).join(`
`)}function kc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ac(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function jc(e){return e!==``}function Mc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(e){return e.replace(Pc,Lc)}var Ic=new Map;function Lc(e,t){let n=K[t];if(n===void 0){let e=Ic.get(t);if(e!==void 0)n=K[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Fc(n)}var Rc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(e){return e.replace(Rc,Bc)}function Bc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Vc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Hc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Uc(e){return Hc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Wc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Gc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Wc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Kc={302:`ENVMAP_MODE_REFRACTION`};function qc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Kc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Jc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Yc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Jc[e.combine]||`ENVMAP_BLENDING_NONE`}function Xc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Zc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Uc(n),l=Gc(n),u=qc(n),d=Yc(n),f=Xc(n),p=Oc(n),m=kc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(jc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(jc).join(`
`),_.length>0&&(_+=`
`)):(g=[Vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(jc).join(`
`),_=[Vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:Tc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,Cc(`linearToOutputTexel`,n.outputColorSpace),Dc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(jc).join(`
`)),o=Fc(o),o=Mc(o,n),o=Nc(o,n),s=Fc(s),s=Mc(s,n),s=Nc(s,n),o=zc(o),s=zc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=gc(i,i.VERTEX_SHADER,y),S=gc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Sc(i,x,`vertex`),n=Sc(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new hc(i,h),T=Ac(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,_c)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Qc=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new el(e),t.set(e,n)),n}},el=class{constructor(e){this.id=Qc++,this.code=e,this.usedTimes=0}};function tl(e){return e===1030||e===37490||e===36285}function nl(e,t,n,r,i,a){let o=new Pn,s=new $c,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=wo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,j=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,M=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,N=!!i.normalMap,P=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=de&&!!i.anisotropyMap,ve=fe&&!!i.clearcoatMap,ye=fe&&!!i.clearcoatNormalMap,be=fe&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,Ne=!!i.alphaHash,F=!!i.extensions,Pe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:sn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:M,bumpMap:se,normalMap:N,displacementMap:P,emissiveMap:ce,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&tl(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:_e,clearcoat:fe,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:Ne,combine:i.combine,mapUv:j&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:M&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:N&&m(i.normalMap.channel),displacementMapUv:P&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:le&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(N||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(j||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&sn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&sn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:F&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(F&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=wo[t];n=pa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Zc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function rl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function il(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function al(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ol(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||il),r.length>1&&r.sort(t||al),i.length>1&&i.sort(t||al),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function sl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ol,e.set(t,[i])):n>=r.length?(i=new ol,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function cl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new U,color:new G};break;case`SpotLight`:n={position:new U,direction:new U,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function ll(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ul=0;function dl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function fl(e){let t=new cl,n=ll(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new Cn,o=new Cn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(dl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ul++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function pl(e){let t=new fl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ml(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new pl(e),t.set(n,[a])):r>=i.length?(a=new pl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var hl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_l=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],vl=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],yl=new Cn,bl=new U,xl=new U;function Sl(e,t,n){let r=new Pi,i=new H,a=new H,o=new vn,s=new va,c=new ya,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:hl,fragmentShader:gl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ei;m.setAttribute(`position`,new Rr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Ci(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){z(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new bn(i.x,i.y,{format:ye,type:N,minFilter:ee,magFilter:ee,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ra(i.x,i.y,se),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=he,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=O,d.map.depthTexture.magFilter=O}else l.isPointLight?(d.map=new $o(i.x),d.map.depthTexture=new ia(i.x,M)):(d.map=new bn(i.x,i.y),d.map.depthTexture=new ra(i.x,i.y,M)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=he,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=ee,d.map.depthTexture.magFilter=ee):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=O,d.map.depthTexture.magFilter=O);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),bl.setFromMatrixPosition(l.matrixWorld),e.position.copy(bl),xl.copy(e.position),xl.add(_l[t]),e.up.copy(vl[t]),e.lookAt(xl),e.updateMatrixWorld(),n.makeTranslation(-bl.x,-bl.y,-bl.z),yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(yl,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new bn(i.x,i.y,{format:ye,type:N})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Cl(e,t){function n(){let t=!1,n=new vn,r=null,i=new vn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,j=e.getParameter(e.VERSION);j.indexOf(`WebGL`)===-1?j.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=re>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),M=e.getParameter(e.VIEWPORT),se=new vn().fromArray(oe),N=new vn().fromArray(M);function P(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=P(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=P(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=P(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=P(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(ne&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function we(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Te(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Le(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function R(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,se.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:R,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:Re}}function wl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new H,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):vt(`canvas`)}function g(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ut:sn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),re(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),ie(t)}function re(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&j(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function j(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function M(){return ae}function se(e){ae=e}function N(){let e=ae;return e>=i.maxTextures&&z(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function P(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(t,i){let a=r.get(t);if(t.isVideoTexture&&F(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){be(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){be(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let fe={[T]:e.REPEAT,[E]:e.CLAMP_TO_EDGE,[D]:e.MIRRORED_REPEAT},pe={[O]:e.NEAREST,[k]:e.NEAREST_MIPMAP_NEAREST,[A]:e.NEAREST_MIPMAP_LINEAR,[ee]:e.LINEAR,[te]:e.LINEAR_MIPMAP_NEAREST,[ne]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,pe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,pe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,me[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=P(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=_e(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=sn.getPrimaries(sn.workingColorSpace),r=o.colorSpace===``?null:sn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Pe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);he(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===ge,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ye(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=bo(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=bo(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Fe(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=_e(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=sn.getPrimaries(sn.workingColorSpace),r=o.colorSpace===``?null:sn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Pe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);he(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Fe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),he(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ce(i.depthTexture,0);let u=l.__webglTexture,d=Me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ne(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),he(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),he(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),he(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ke.push(l),Ae.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(i.maxSamples,e.samples)}function Ne(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function F(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(sn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=oe,this.getTextureUnits=M,this.setTextureUnits=se,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Tl(e,t){function n(n,r=``){let i,a=sn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var El=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ga({vertexShader:El,fragmentShader:Dl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ci(new sa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kl=class extends Et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Ol,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new H,C=null,w=new Ja;w.viewport=new vn;let T=new Ja;T.viewport=new vn;let E=[w,T],D=new $a,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new $n,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new $n,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new $n,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,te),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ge:he,a=_.stencil?le:M);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new bn(d.textureWidth,d.textureHeight,{format:me,type:re,depthTexture:new ra(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new bn(f.framebufferWidth,f.framebufferHeight,{format:me,type:re,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ne=new U,j=new U;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),j.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(j),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;ae(D,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),oe(e,D,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=At*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let se=null;function N(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new Ja,o.layers.enable(n),o.viewport=new vn,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new aa,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let P=new So;P.setAnimationLoop(N),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},Al=new Cn,jl=new W;jl.set(-1,0,0,0,1,0,0,0,1);function Ml(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,fa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Al.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(jl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Nl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Pl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fl=null;function Il(){return Fl===null&&(Fl=new Ei(Pl,16,16,ye,N),Fl.name=`DFG_LUT`,Fl.minFilter=ee,Fl.magFilter=ee,Fl.wrapS=E,Fl.wrapT=E,Fl.generateMipmaps=!1,Fl.needsUpdate=!0),Fl}var Ll=class{constructor(e={}){let{canvas:t=yt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=re}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([xe,be,ve]),g=new Set([re,M,ae,le,P,ce]),_=new Uint32Array(4),v=new Int32Array(4),y=new U,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=ct;let ee=0,te=0,j=null,ie=-1,oe=null,se=new vn,ue=new vn,de=null,fe=new G(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ye=null,Se=new vn(0,0,me,he),Ce=new vn(0,0,me,he),we=!1,Te=new Pi,Ee=!1,De=!1,Oe=new Cn,ke=new U,Ae=new vn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return j===null?ge:1}let F=n;function Pe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,rt,!1),t.addEventListener(`webglcontextrestored`,it,!1),t.addEventListener(`webglcontextcreationerror`,at,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw B(`WebGLRenderer: `+e.message),e}let Fe,Ie,I,Le,L,R,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et;function tt(){Fe=new ts(F),Fe.init(),Qe=new Tl(F,Fe),Ie=new jo(F,Fe,e,Qe),I=new Cl(F,Fe),Ie.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),A=F.createFramebuffer(),Le=new is(F),L=new rl,R=new wl(F,Fe,I,L,Ie,Qe,Le),Re=new es(T),ze=new Co(F),$e=new ko(F,ze),Be=new ns(F,ze,Le,$e),Ve=new os(F,Be,ze,$e,Le),Ye=new as(F,Ie,R),Ke=new Mo(L),He=new nl(T,Re,Fe,Ie,$e,Ke),Ue=new Ml(T,L),We=new sl,Ge=new ml(Fe),Je=new Oo(T,Re,I,Ve,p,s),qe=new Sl(T,Ve,Ie),et=new Nl(F,Le,Ie,I),Xe=new Ao(F,Fe,Le),Ze=new rs(F,Fe,Le),Le.programs=He.programs,T.capabilities=Ie,T.extensions=Fe,T.properties=L,T.renderLists=We,T.shadowMap=qe,T.state=I,T.info=Le}tt(),m!==1009&&(w=new cs(m,t.width,t.height,o,r,i));let nt=new kl(T,F);this.xr=nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){if(nt.isPresenting){z(`WebGLRenderer: Can't change size while VR device is presenting.`);return}me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(se.copy(Se).multiplyScalar(ge).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(ue.copy(Ce).multiplyScalar(ge).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,F.clearBufferiv(F.COLOR,0,v))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),Je.dispose(),We.dispose(),Ge.dispose(),L.dispose(),Re.dispose(),Ve.dispose(),$e.dispose(),et.dispose(),He.dispose(),nt.dispose(),nt.removeEventListener(`sessionstart`,pt),nt.removeEventListener(`sessionend`,mt),gt.stop()};function rt(e){e.preventDefault(),xt(`WebGLRenderer: Context Lost.`),E=!0}function it(){xt(`WebGLRenderer: Context Restored.`),E=!1;let e=Le.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;tt(),Le.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function at(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ot(e){let t=e.target;t.removeEventListener(`dispose`,ot),st(t)}function st(e){lt(e),L.remove(e)}function lt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;$e.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=ze.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,n),e.side=0,e.needsUpdate=!0,Tt(e,t,n),e.side=2):Tt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=Ge.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ut(a,n,e),r.add(a)}else ut(t,n,e),r.add(t)}}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){L.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){gt.stop()}function mt(){gt.start()}let gt=new So;gt.setAnimationLoop(ft),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){dt=e,nt.setAnimationLoop(e),e===null?gt.stop():gt.start()},nt.addEventListener(`sessionstart`,pt),nt.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=nt.enabled===!0&&nt.isPresenting===!0,r=w!==null&&(j===null||n)&&w.begin(T,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(t),t=nt.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,j),x=Ge.get(e,C.length),x.init(t),x.state.textureUnits=R.getTextureUnits(),C.push(x),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,ht,t.reversedDepth),De=this.localClippingEnabled,Ee=Ke.init(this.clippingPlanes,De),b=We.get(e,S.length),b.init(),S.push(b),nt.enabled===!0&&nt.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,T.sortObjects)}_t(e,t,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(_e,ye,t.reversedDepth),Me=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Me&&Je.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ke.beginShadows();let i=x.state.shadowsArray;if(qe.render(i,e,t),Ee===!0&&Ke.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}Me&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(b,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),Me&&Je.render(e),vt(b,e,t)}j!==null&&te===0&&(R.updateMultisampleRenderTarget(j),R.updateRenderTargetMipmap(j)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),$e.resetDefaultState(),ie=-1,oe=null,C.pop(),C.length>0?(x=C[C.length-1],R.setTextureUnits(x.state.textureUnits),Ee===!0&&Ke.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Te.intersectsSprite(e)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let t=Ve.update(e),i=e.material;i.visible&&b.push(e,t,i,n,Ae.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Te.intersectsObject(e))){let t=Ve.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ae.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,Ae.z,o)}}else i.visible&&b.push(e,t,i,n,Ae.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Ee===!0&&Ke.setGlobalState(T.clippingPlanes,n),r&&I.viewport(se.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new bn(1,1,{generateMipmaps:!0,type:e?N:re,minFilter:ne,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:sn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(fe),pe=T.getClearAlpha(),pe<1&&T.setClearColor(16777215,.5),T.clear(),Me&&Je.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Ee===!0&&Ke.setGlobalState(T.clippingPlanes,r),St(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(fe,pe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ot),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=He.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=hc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=je),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:sn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=x.state.lights;if(Ee===!0&&(De===!0||e!==oe)){let t=e===oe&&r.id===ie;Ke.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Tt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ie&&(ie=r.id,w=!0),v.needsLights){let e=Ot(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||oe!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(F,`projectionMatrix`,e.projectionMatrix),O.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&O.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,w=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&O.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,R),y.state.spotShadowMap.length>0&&O.setValue(F,`spotShadowMap`,y.state.spotShadowMap,R),y.state.pointShadowMap.length>0&&O.setValue(F,`pointShadowMap`,y.state.pointShadowMap,R)),i.isSkinnedMesh){O.setOptional(F,i,`bindMatrix`),O.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(O.setOptional(F,i,`batchingTexture`),O.setValue(F,`batchingTexture`,i._matricesTexture,R),O.setOptional(F,i,`batchingIdTexture`),O.setValue(F,`batchingIdTexture`,i._indirectTexture,R),O.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ye.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Il()),w){if(O.setValue(F,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&At(k,E),a&&r.fog===!0&&Ue.refreshFogUniforms(k,a),Ue.refreshMaterialUniforms(k,r,ge,he,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}hc.upload(F,Et(v),k,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(hc.upload(F,Et(v),k,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(F,`center`,i.center),O.setValue(F,`modelViewMatrix`,i.modelViewMatrix),O.setValue(F,`normalMatrix`,i.normalMatrix),O.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];et.update(n,S),et.bind(n,S)}}return S}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,ee=t,te=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,I.viewport(se),I.scissor(ue),I.setScissorTest(de),ie=-1;return}if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else se.copy(Se).multiplyScalar(ge).floor(),ue.copy(Ce).multiplyScalar(ge).floor(),de=we;if(n!==0&&(r=O),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(se),I.scissor(ue),I.setScissorTest(de),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ie=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(c)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ie.textureTypeReadable(l)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=j===null?null:L.get(j).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ie.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ie.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0);let f=j===null?null:L.get(j).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,f);let p=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await wt(F,p,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(d),F.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,k),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ee=0,te=0,j=null,I.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ht}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=sn._getDrawingBufferColorSpace(e),t.unpackColorSpace=sn._getUnpackColorSpace()}},Rl={324:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});let r=`precision highp float;\r
precision highp int;\r
\r
// Uniforms for screen size, and texture sampler\r
uniform float screenWidth;\r
uniform float screenHeight;\r
uniform sampler2D map;\r
\r
varying vec2 vUv;\r
\r
void main() {\r
	// Calculate pixel offsets\r
	float dx = 1.0 / screenWidth;\r
	float dy = 1.0 / screenHeight;\r
\r
	// Average the color of the 9 surrounding pixels\r
	vec3 color = texture2D(map, vUv + vec2(-dx, -dy)).rgb;\r
	color += texture2D(map, vUv + vec2( 0.0, -dy)).rgb;\r
	color += texture2D(map, vUv + vec2( dx, -dy)).rgb;\r
	color += texture2D(map, vUv + vec2(-dx,  0.0)).rgb;\r
	color += texture2D(map, vUv + vec2( 0.0,  0.0)).rgb;\r
	color += texture2D(map, vUv + vec2( dx,  0.0)).rgb;\r
	color += texture2D(map, vUv + vec2(-dx,  dy)).rgb;\r
	color += texture2D(map, vUv + vec2( 0.0,  dy)).rgb;\r
	color += texture2D(map, vUv + vec2( dx,  dy)).rgb;\r
\r
	// Set the output color with alpha = 1.0\r
	gl_FragColor = vec4(color / 9.0, 1.0);\r
}\r
`},652:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});let r=`// Vertex shader for blur effect.\r
precision highp float;  // Use high precision for floats.\r
precision highp int;    // Use high precision for ints.\r
\r
attribute vec3 position;    // Vertex position.\r
attribute vec2 uv;          // Texture coordinate.\r
\r
uniform mat4 modelViewMatrix;  // Model-view transformation.\r
uniform mat4 projectionMatrix; // Projection transformation.\r
\r
varying vec2 vUv;            // Pass uv coordinates to fragment shader.\r
\r
void main() {\r
	// Pass the texture coordinate.\r
	vUv = uv;\r
\r
	// Compute the vertex position.\r
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`},42:(e,t,n)=>{n.d(t,{A:()=>r});let r=`// Adapted from the EDL shader code from Christian Boucheny in Cloud Compare\r
// https://github.com/cloudcompare/trunk/tree/master/plugins/qEDL/shaders/EDL\r
\r
precision highp float;\r
precision highp int;\r
\r
// Uniforms\r
uniform float screenWidth;         // The width of the screen (or render target) in pixels.\r
uniform float screenHeight;        // The height of the screen in pixels.\r
uniform vec2 neighbours[NEIGHBOUR_COUNT]; // Predefined offsets for neighbor sampling.\r
uniform float edlStrength;         // Strength factor for the Eye Dome Lighting (EDL) effect.\r
uniform float radius;              // Radius used to determine neighbor distance.\r
uniform float opacity;             // Global opacity for shaded output.\r
uniform sampler2D colorMap;        // Texture containing both color data and depth (in its alpha channel).\r
\r
// Projection matrix used to reconstruct regular depth from log depth.\r
uniform mat4 uProj;\r
\r
// Far plane distance, used to reconstruct logarithmic depth buffer values.\r
uniform float far;\r
\r
// Wether the renderer is using a logarithmic depth buffer.\r
uniform bool useLogDepth;\r
\r
// Orthographic camera flag.\r
uniform bool useOrthographicCamera;\r
\r
// Varying variable passed from the vertex shader:\r
in vec2 vUv;                       // Texture coordinates for the current fragment.\r
\r
out vec4 fragColor;\r
\r
// Function to compute the shading response based on depth differences:\r
float response(const float depth) {\r
	// Convert the radius from pixels to texture coordinate space.\r
	vec2 uvRadius = vec2(radius / screenWidth, radius / screenHeight);\r
	float sum = 0.0;\r
	\r
	// Iterate over all neighbor offsets.\r
	for (int i = 0; i < NEIGHBOUR_COUNT; i++) {\r
		// Calculate the texture coordinate for the neighbor.\r
		vec2 uvNeighbor = vUv + uvRadius * neighbours[i];\r
		// Retrieve the neighbor's depth value from the alpha channel of the texture.\r
		float neighbourDepth = texture(colorMap, uvNeighbor).a;\r
		\r
		// Background marker: upstream Potree clears alpha to 1.0 and treats it as background.\r
		// Alpha stores log2(linearDepth), so alpha==1.0 could theoretically collide with real geometry at linearDepth==2.0.\r
		// We keep this convention for visual parity with upstream.\r
		neighbourDepth = (neighbourDepth == 1.0) ? 0.0 : neighbourDepth;\r
		\r
		// Check if the neighbor has a valid depth.\r
		if (neighbourDepth != 0.0) {\r
			// If the current depth is zero, add a high value to emphasize the effect;\r
			// otherwise, add the positive difference between current and neighbor depth.\r
			sum += (depth == 0.0) ? 100.0 : max(0.0, depth - neighbourDepth);\r
		}\r
	}\r
	\r
	// Compute the average response over all neighbors.\r
	return sum / float(NEIGHBOUR_COUNT);\r
}\r
\r
void main() {\r
	// Sample the texture at the current fragment's coordinates.\r
	vec4 color = texture(colorMap, vUv);\r
	\r
	// Use the alpha channel as the depth value.\r
	float depth = color.a;\r
	// Treat alpha==1.0 as background (see comment in response()).\r
	depth = (depth == 1.0) ? 0.0 : depth;\r
	\r
	// Compute the depth difference response using neighbor sampling.\r
	float res = response(depth);\r
	\r
	// Determine the shading factor using the EDL strength and a scaling constant.\r
	float factor = edlStrength * 300.0;\r
	// Compute the shading value with an exponential decay function.\r
	float shade = exp(-res * factor);\r
	\r
	// Discard fragments with no valid depth.\r
	// (Keeps behavior close to upstream: background is cleared and not composited.)\r
	if (depth == 0.0) {\r
		discard;\r
	}\r
	\r
	// Output the final color by combining the original color with the shading effect, and applying the set opacity.\r
	fragColor = vec4(color.rgb * shade, opacity);\r
\r
	// Reconstruct linear depth from the stored log2(lenearDepth) value.\r
	float dl = pow(2.0, depth);\r
	\r
	if(useLogDepth && !useOrthographicCamera) {\r
		// Logarithmic depth buffer: write depth in the same format as three.js\r
		// logarithmicDepthBuffer, which uses:\r
		// vFlagDepth = clipPos.w + 1.0.\r
		// logDepthBufFC = 2.0 / log(far + 1.0).\r
		// gl_FragDepth = log2(vFlagDepth) * logDepthBufFC * 0.5;\r
		// Simplifies to: log2(linearDepth + 1.0) / log2(far + 1.0)\r
		gl_FragDepth = log2(dl + 1.0) / log2(far + 1.0);\r
	} else {\r
		// Standard hyperbolic depth buffer.\r
		vec4 dp = uProj * vec4(0.0, 0.0, -dl, 1.0);\r
		float pz = dp.z / dp.w;\r
		gl_FragDepth = (pz + 1.0) / 2.0;\r
	}\r
}\r
`},370:(e,t,n)=>{n.d(t,{A:()=>r});let r=`precision highp float;\r
\r
in vec3 position;\r
in vec2 uv;\r
\r
uniform mat4 projectionMatrix;\r
uniform mat4 modelViewMatrix;\r
\r
out vec2 vUv;\r
\r
void main() {\r
	// Assign the UV coordinates from the vertex data to vUv\r
	vUv = uv;\r
\r
	// Compute the model-view position of the vertex\r
	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\r
\r
	// Project the computed position onto the screen\r
	gl_Position = projectionMatrix * mvPosition;\r
}`},650:(e,t,n)=>{n.d(t,{A:()=>r});let r=`// Set precision for floats and ints\r
precision highp float;\r
precision highp int;\r
\r
// Uniforms for camera, projection and point parameters\r
uniform mat4 viewMatrix;\r
uniform vec3 cameraPosition;\r
uniform mat4 projectionMatrix;\r
uniform float opacity;\r
uniform bool useOrthographicCamera;\r
uniform float blendHardness;\r
uniform float blendDepthSupplement;\r
uniform float fov;\r
uniform float spacing;\r
uniform float pcIndex;\r
uniform float screenWidth;\r
uniform float screenHeight;\r
uniform float far;\r
uniform sampler2D depthMap;\r
\r
out vec4 fragColor;\r
\r
#ifdef highlight_point\r
	// Color used to highlight a point\r
	uniform vec4 highlightedPointColor;\r
#endif\r
\r
#ifdef new_format\r
	in vec4 vColor;\r
#else\r
	in vec3 vColor;\r
#endif\r
\r
#if !defined(color_type_point_index)\r
	// Opacity attribute when not using point index color type\r
	in float vOpacity;\r
#endif\r
\r
#if defined(weighted_splats)\r
	// Linear depth value for weighted splats\r
	in float vLinearDepth;\r
#endif\r
\r
\r
\r
in vec3 vViewPosition;\r
#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
	// Radius for point shapes\r
	in float vRadius;\r
#endif\r
\r
#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
	// Normal for Phong shading\r
	in vec3 vNormal;\r
#endif\r
\r
#ifdef highlight_point\r
	// Highlight flag for the point\r
	in float vHighlight;\r
#endif\r
\r
const float specularStrength = 1.0;\r
\r
void main() {\r
	// Choose the proper color format\r
	#ifdef new_format\r
		vec3 actualColor = vColor.xyz;\r
	#else\r
		vec3 actualColor = vColor;\r
	#endif\r
	vec3 color = actualColor;\r
\r
	// Precompute normalized point coordinate if needed\r
	#if defined(circle_point_shape) || defined(paraboloid_point_shape) || defined(weighted_splats)\r
		vec2 pc = 2.0 * gl_PointCoord - 1.0;\r
	#endif\r
\r
	// Discard fragments outside circle for certain shapes\r
	#if defined(circle_point_shape) || defined(weighted_splats)\r
		if(dot(pc, pc) > 1.0) discard;\r
	#endif\r
\r
	// Depth comparison for weighted splats\r
	#if defined(weighted_splats)\r
		vec2 uv = gl_FragCoord.xy / vec2(screenWidth, screenHeight);\r
		if(vLinearDepth > texture(depthMap, uv).r + vRadius + blendDepthSupplement) discard;\r
	#endif\r
\r
	// Initialize fragment color and opacity\r
	#if defined(weighted_splats)\r
		float wx = 2.0 * length(pc);\r
		float w = exp(-wx * wx * 0.5);\r
		fragColor = vec4(color * w, w);\r
	#elif defined(color_type_point_index)\r
		fragColor = vec4(color, pcIndex / 255.0);\r
	#else\r
		fragColor = vec4(color, vOpacity);\r
	#endif\r
\r
	// Lighting calculations for Phong shading\r
	#if defined(color_type_phong)\r
		#if MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0\r
			vec3 normal = normalize(vNormal);\r
			normal.z = abs(normal.z);\r
			vec3 viewDir = normalize(vViewPosition);\r
		#endif\r
\r
		#if MAX_POINT_LIGHTS > 0\r
			vec3 pointDiffuse = vec3(0.0);\r
			// Loop through each point light\r
			for(int i = 0; i < MAX_POINT_LIGHTS; i++) {\r
				vec4 lPos = viewMatrix * vec4(pointLightPosition[i], 1.0);\r
				vec3 lVector = normalize(lPos.xyz + vViewPosition);\r
				float lDistance = (pointLightDistance[i] > 0.0)\r
					? 1.0 - min(length(lVector)/pointLightDistance[i], 1.0)\r
					: 1.0;\r
				float dotVal = dot(normal, lVector);\r
				#ifdef WRAP_AROUND\r
					// Use wrap around lighting if enabled\r
					float fullW = max(dotVal, 0.0);\r
					float halfW = max(0.5 * dotVal + 0.5, 0.0);\r
					float diffuseW = mix(fullW, halfW, wrapRGB);\r
				#else\r
					float diffuseW = max(dotVal, 0.0);\r
				#endif\r
				pointDiffuse += diffuse * pointLightColor[i] * diffuseW * lDistance;\r
			}\r
		#endif\r
\r
		#if MAX_DIR_LIGHTS > 0\r
			vec3 dirDiffuse = vec3(0.0);\r
			vec3 dirSpecular = vec3(0.0);\r
			// Loop through each directional light\r
			for(int i = 0; i < MAX_DIR_LIGHTS; i++) {\r
				vec4 lDir = viewMatrix * vec4(directionalLightDirection[i], 0.0);\r
				vec3 dVector = normalize(lDir.xyz);\r
				float dotVal = dot(normal, dVector);\r
				#ifdef WRAP_AROUND\r
					float fullW = max(dotVal, 0.0);\r
					float halfW = max(0.5 * dotVal + 0.5, 0.0);\r
					float diffuseW = mix(fullW, halfW, wrapRGB);\r
				#else\r
					float diffuseW = max(dotVal, 0.0);\r
				#endif\r
				dirDiffuse += diffuse * directionalLightColor[i] * diffuseW;\r
				vec3 halfVec = normalize(dVector + viewDir);\r
				float specW = specularStrength * max(pow(max(dot(normal, halfVec), 0.0), shininess), 0.0);\r
				float normFactor = (shininess + 2.0) / 8.0;\r
				vec3 schlick = specular + (vec3(1.0)-specular)*pow(max(1.0-dot(dVector, halfVec), 0.0), 5.0);\r
				dirSpecular += schlick * directionalLightColor[i] * specW * diffuseW * normFactor;\r
			}\r
		#endif\r
\r
		// Combine lighting contributions from both light types\r
		vec3 totalDiffuse = vec3(0.0);\r
		vec3 totalSpecular = vec3(0.0);\r
		#if MAX_POINT_LIGHTS > 0\r
			totalDiffuse += pointDiffuse;\r
		#endif\r
		#if MAX_DIR_LIGHTS > 0\r
			totalDiffuse += dirDiffuse;\r
			totalSpecular += dirSpecular;\r
		#endif\r
		fragColor.rgb = fragColor.rgb * (emissive + totalDiffuse + ambientLightColor * ambient) + totalSpecular;\r
	#endif\r
\r
	// Compute depth from view position\r
	vec4 pos = vec4(vViewPosition, 1.0);\r
	#if defined(paraboloid_point_shape)\r
		if(!useOrthographicCamera){\r
			// Adjust depth based on point shape\r
			pos.z += -dot(pc, pc) * vRadius;\r
		}\r
	#endif\r
\r
	float linearDepth = -pos.z;\r
	vec4 clipPos = projectionMatrix * pos;\r
	clipPos /= clipPos.w;\r
\r
	// When using an orthographic camera, paraboloid correction is not applied,\r
	// so use the GPU-compluted default depth (gl_FragCoord.z).\r
	if(useOrthographicCamera){\r
		// Orthographic camera: use the GPU-computed default depth.\r
		// When using an orthographic camera, Three.js does not use \`logarithmicDepthBuffer\` either.\r
		gl_FragDepth = gl_FragCoord.z;\r
	}else{\r
		#if defined(use_log_depth)\r
			// Logarithmic depth\r
			gl_FragDepth = log2(linearDepth + 1.0) * log(2.0) / log(far + 1.0);\r
		#else\r
			// Use the GPU-computed default depth.\r
			gl_FragDepth = gl_FragCoord.z;\r
		#endif\r
	}\r
\r
	#if defined(color_type_depth)\r
		// Render depth information into color channels\r
		fragColor.r = linearDepth;\r
		fragColor.g = clipPos.z;\r
	#endif\r
\r
	#if defined(use_edl)\r
		// For EDL, store log2(linearDepth) in alpha.\r
		// This is recomputed here (rather than in VS) so it matches per-fragment depth\r
		// adjustments such as paraboloid point shape.\r
		fragColor.a = log2(max(linearDepth, 1e-6));\r
	#endif\r
\r
	#if defined(highlight_point)\r
		// Override color for highlighted points\r
		if(vHighlight > 0.0) {\r
			fragColor = highlightedPointColor;\r
		}\r
	#endif\r
}\r
`},26:(e,t,n)=>{n.d(t,{A:()=>r});let r=`precision highp float;\r
precision highp int;\r
\r
#define max_clip_boxes 30   // Maximum number of clipping boxes\r
#define max_clip_spheres 30 // Maximum number of clipping spheres\r
#define max_clip_planes 30  // Maximum number of clipping planes\r
\r
// Input Attributes\r
in vec3 position;\r
in vec3 normal;\r
in float intensity;\r
in float classification;\r
in float returnNumber;\r
in float numberOfReturns;\r
in float pointSourceID;\r
in vec4 indices;\r
\r
\r
// Uniforms\r
uniform mat4 modelMatrix;\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 viewMatrix;\r
uniform mat3 normalMatrix;\r
\r
uniform float pcIndex;\r
\r
uniform float screenWidth;\r
uniform float screenHeight;\r
uniform float fov;\r
uniform float spacing;\r
uniform float viewScale;\r
\r
uniform bool useOrthographicCamera;\r
uniform float orthoWidth;\r
uniform float orthoHeight;\r
\r
#if defined use_clip_box\r
	uniform mat4 clipBoxes[max_clip_boxes]; // Clipping box transforms\r
#endif\r
\r
#if defined use_clip_sphere\r
	uniform vec4 clipSpheres[max_clip_spheres]; // Clipping spheres: xyz = center, w = radius\r
	uniform float clipSphereCount;\r
#endif\r
\r
#if defined use_clip_plane\r
	uniform vec4 clipPlanes[max_clip_planes]; // Clipping planes: xyz = normal, w = constant\r
	uniform float clipPlaneCount;\r
#endif\r
\r
uniform float heightMin;\r
uniform float heightMax;\r
uniform float size; // Base pixel size\r
uniform float minSize; // Minimum point size\r
uniform float maxSize; // Maximum point size\r
uniform float octreeSize;\r
uniform vec3 bbSize;\r
uniform vec3 uColor;\r
uniform float opacity;\r
uniform float clipBoxCount;\r
uniform float level;\r
uniform float vnStart;\r
uniform bool isLeafNode;\r
\r
uniform float filterByNormalThreshold;\r
uniform vec2 intensityRange;\r
uniform float opacityAttenuation;\r
uniform float intensityGamma;\r
uniform float intensityContrast;\r
uniform float intensityBrightness;\r
uniform float rgbGamma;\r
uniform float rgbContrast;\r
uniform float rgbBrightness;\r
uniform float transition;\r
uniform float wRGB;\r
uniform float wIntensity;\r
uniform float wElevation;\r
uniform float wClassification;\r
uniform float wReturnNumber;\r
uniform float wSourceID;\r
\r
uniform sampler2D visibleNodes;\r
uniform sampler2D gradient;\r
uniform sampler2D classificationLUT;\r
uniform sampler2D depthMap;\r
\r
#ifdef highlight_point\r
	uniform vec3 highlightedPointCoordinate;\r
	uniform bool enablePointHighlighting;\r
	uniform float highlightedPointScale;\r
#endif\r
\r
#ifdef new_format\r
	in vec4 rgba;\r
	out vec4 vColor;\r
#else\r
	in vec3 color;\r
	out vec3 vColor;\r
#endif\r
\r
#if !defined(color_type_point_index)\r
	out float vOpacity;\r
#endif\r
\r
#if defined(weighted_splats)\r
	out float vLinearDepth;\r
#endif\r
\r
\r
\r
out vec3 vViewPosition;\r
\r
#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
	out float vRadius;\r
#endif\r
\r
#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
	out vec3 vNormal;\r
#endif\r
\r
#ifdef highlight_point\r
	out float vHighlight;\r
#endif\r
\r
\r
// OCTREE LOD FUNCTIONS\r
#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_octree)\r
\r
// Returns count of bits set up to a given index\r
int numberOfOnes(int number, int index) {\r
	int numOnes = 0;\r
	int tmp = 128;\r
	for (int i = 7; i >= 0; i--) {\r
		if (number >= tmp) {\r
			number -= tmp;\r
			if (i <= index) { numOnes++; }\r
		}\r
		tmp /= 2;\r
	}\r
	return numOnes;\r
}\r
\r
// Checks if bit at specific index is set\r
bool isBitSet(int number, int index){\r
	return ((number >> index) & 1) != 0;\r
}\r
\r
// Computes level-of-detail based on octree visibility\r
float getLOD() {\r
	vec3 offset = vec3(0.0);\r
	int iOffset = int(vnStart);\r
	float depth = level;\r
\r
	for (float i = 0.0; i <= 30.0; i++) {\r
		float nodeSizeAtLevel = octreeSize / pow(2.0, i + level);\r
		vec3 index3d = floor((position - offset) / nodeSizeAtLevel + 0.5);\r
		int index = int(round(4.0 * index3d.x + 2.0 * index3d.y + index3d.z));\r
		\r
		vec4 value = texture(visibleNodes, vec2(float(iOffset) / 2048.0, 0.0));\r
		int mask = int(round(value.r * 255.0));\r
\r
		if (isBitSet(mask, index)) {\r
			int advanceG = int(round(value.g * 255.0)) * 256;\r
			int advanceB = int(round(value.b * 255.0));\r
			int advanceChild = numberOfOnes(mask, index - 1);\r
			int advance = advanceG + advanceB + advanceChild;\r
			iOffset += advance;\r
			depth++;\r
		} else {\r
			return depth;\r
		}\r
		offset += (vec3(1.0) * nodeSizeAtLevel * 0.5) * index3d;\r
	}\r
	return depth;\r
}\r
\r
float getPointSizeAttenuation() {\r
	return 0.5 * pow(2.0, getLOD());\r
}\r
\r
#endif\r
\r
\r
// KD-TREE LOD FUNCTIONS\r
\r
#if (defined(adaptive_point_size) || defined(color_type_lod)) && defined(tree_type_kdtree)\r
\r
float getLOD() {\r
	vec3 offset = vec3(0.0);\r
	float intOffset = 0.0;\r
	float depth = 0.0;\r
	vec3 size_ = bbSize;\r
	vec3 pos = position;\r
		\r
	for (float i = 0.0; i <= 1000.0; i++) {\r
		vec4 value = texture(visibleNodes, vec2(intOffset / 2048.0, 0.0));\r
		int children = int(value.r * 255.0);\r
		float next = value.g * 255.0;\r
		int split = int(value.b * 255.0);\r
		\r
		if (next == 0.0) { return depth; }\r
		\r
		vec3 splitv = (split == 1) ? vec3(1.0, 0.0, 0.0) :\r
					 (split == 2) ? vec3(0.0, 1.0, 0.0) :\r
					 (split == 4) ? vec3(0.0, 0.0, 1.0) : vec3(0.0);\r
		\r
		intOffset += next;\r
		\r
		float factor = length((pos * splitv) / size_);\r
		if (factor < 0.5) {\r
			if (children == 0 || children == 2) { return depth; }\r
		} else {\r
			pos -= size_ * splitv * 0.5;\r
			if (children == 0 || children == 1) { return depth; }\r
			if (children == 3) { intOffset += 1.0; }\r
		}\r
		size_ *= ((1.0 - (splitv + 1.0) / 2.0) + 0.5);\r
		depth++;\r
	}\r
	return depth;	\r
}\r
\r
float getPointSizeAttenuation() {\r
	return 0.5 * pow(1.3, getLOD());\r
}\r
\r
#endif\r
\r
\r
// COLOR/BRIGHTNESS FUNCTIONS\r
\r
float getContrastFactor(float contrast) {\r
	return 1.0158730158730156 * (contrast + 1.0) / (1.0158730158730156 - contrast);\r
}\r
\r
#ifndef new_format\r
// Adjusts RGB values with gamma, contrast and brightness factors\r
vec3 getRGB() {\r
	#if defined(use_rgb_gamma_contrast_brightness)\r
		vec3 rgb = pow(color, vec3(rgbGamma));\r
		rgb += rgbBrightness;\r
		rgb = (rgb - 0.5) * getContrastFactor(rgbContrast) + 0.5;\r
		return clamp(rgb, 0.0, 1.0);\r
	#else\r
		return color;\r
	#endif\r
}\r
#endif\r
\r
// Adjusts intensity value based on settings\r
float getIntensity() {\r
	float w = (intensity - intensityRange.x) / (intensityRange.y - intensityRange.x);\r
	w = pow(w, intensityGamma) + intensityBrightness;\r
	w = (w - 0.5) * getContrastFactor(intensityContrast) + 0.5;\r
	return clamp(w, 0.0, 1.0);\r
}\r
\r
// Maps elevation to a gradient color\r
vec3 getElevation() {\r
	vec4 world = modelMatrix * vec4(position, 1.0);\r
	float w = (world.z - heightMin) / (heightMax - heightMin);\r
	return texture(gradient, vec2(w, 1.0 - w)).rgb;\r
}\r
\r
// Gets classification color and transparency from texture LUT\r
vec4 getClassification() {\r
	vec2 uv = vec2(classification / 255.0, 0.5);\r
	return texture(classificationLUT, uv);\r
}\r
\r
// Returns color based on number of returns and return number\r
vec3 getReturnNumber() {\r
	return (numberOfReturns == 1.0) ? vec3(1.0, 1.0, 0.0) :\r
		   (returnNumber == 1.0)    ? vec3(1.0, 0.0, 0.0) :\r
		   (returnNumber == numberOfReturns) ? vec3(0.0, 0.0, 1.0) :\r
										vec3(0.0, 1.0, 0.0);\r
}\r
\r
// Gets source ID color from gradient\r
vec3 getSourceID() {\r
	float w = mod(pointSourceID, 10.0) / 10.0;\r
	return texture(gradient, vec2(w, 1.0 - w)).rgb;\r
}\r
\r
#ifndef new_format\r
// Combines multiple color sources into one composite color\r
vec3 getCompositeColor() {\r
	vec3 c = wRGB * getRGB();\r
	float w = wRGB;\r
	c += wIntensity * getIntensity() * vec3(1.0);\r
	w += wIntensity;\r
	c += wElevation * getElevation();\r
	w += wElevation;\r
	c += wReturnNumber * getReturnNumber();\r
	w += wReturnNumber;\r
	c += wSourceID * getSourceID();\r
	w += wSourceID;\r
\r
	vec4 cl = wClassification * getClassification();\r
	c += cl.a * cl.rgb;\r
	w += wClassification * cl.a;\r
\r
	c /= w;\r
	if (w == 0.0) {\r
		gl_Position = vec4(100.0, 100.0, 100.0, 0.0);\r
	}\r
	return c;\r
}\r
#endif\r
\r
#ifdef new_format\r
// sRGB conversion functions\r
vec4 fromLinear(vec4 linearRGB) {\r
	bvec4 cutoff = lessThan(linearRGB, vec4(0.0031308));\r
	return mix(linearRGB * vec4(12.92), vec4(1.055) * pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055), cutoff);\r
} \r
vec4 toLinear(vec4 sRGB) {\r
	bvec4 cutoff = lessThan(sRGB, vec4(0.04045));\r
	return mix(sRGB/vec4(12.92), pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4)), cutoff);\r
}\r
#else\r
vec3 fromLinear(vec3 linearRGB) {\r
	bvec3 cutoff = lessThan(linearRGB, vec3(0.0031308));\r
	return mix(linearRGB * vec3(12.92), vec3(1.055) * pow(linearRGB, vec3(1.0/2.4)) - vec3(0.055), cutoff);\r
}\r
vec3 toLinear(vec3 sRGB) {\r
	bvec3 cutoff = lessThan(sRGB, vec3(0.04045));\r
	return mix(sRGB/vec3(12.92), pow((sRGB + vec3(0.055))/vec3(1.055), vec3(2.4)), cutoff);\r
}\r
#endif\r
\r
void main() {\r
	// Compute model-view position and projected position\r
	vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\r
	gl_Position = projectionMatrix * mvPosition;\r
	vViewPosition = mvPosition.xyz;\r
\r
	#if defined weighted_splats\r
		vLinearDepth = gl_Position.w;\r
	#endif\r
\r
	#if defined(color_type_phong) && (MAX_POINT_LIGHTS > 0 || MAX_DIR_LIGHTS > 0)\r
		vNormal = normalize(normalMatrix * normal);\r
	#endif\r
\r
	// EDL alpha (log2(linearDepth)) is written in the fragment shader so it can\r
	// account for per-fragment depth adjustments (e.g. paraboloid point shape).\r
\r
\r
	// POINT SIZE COMPUTATION\r
	float tanHalfFOV = tan(fov * 0.5);\r
	float projFactor = -0.5 * screenHeight / (tanHalfFOV * mvPosition.z);\r
	// Scale compensation based on transformation difference \r
	float scale = length(modelViewMatrix * vec4(0, 0, 0, 1) - modelViewMatrix * vec4(spacing, 0, 0, 1)) / spacing;\r
	projFactor *= scale;\r
	\r
	float pointSize = 1.0;\r
	#if defined fixed_point_size\r
		pointSize = size;\r
	#elif defined attenuated_point_size\r
		pointSize = useOrthographicCamera ? size : size * spacing * projFactor;\r
	#elif defined adaptive_point_size\r
		float worldSpaceSize = 2.0 * size * spacing / getPointSizeAttenuation();\r
		pointSize = useOrthographicCamera ? (worldSpaceSize / orthoWidth) * screenWidth : worldSpaceSize * projFactor;\r
	#endif\r
\r
	pointSize = clamp(pointSize, minSize, maxSize);\r
	#if defined(weighted_splats) || defined(paraboloid_point_shape)\r
		vRadius = pointSize / projFactor;\r
	#endif\r
	\r
	pointSize *= viewScale;\r
	gl_PointSize = pointSize;\r
\r
\r
	// HIGHLIGHTING\r
	#ifdef highlight_point\r
		vec4 mPosition = modelMatrix * vec4(position, 1.0);\r
		if (enablePointHighlighting &&\r
			abs(mPosition.x - highlightedPointCoordinate.x) < 0.0001 &&\r
			abs(mPosition.y - highlightedPointCoordinate.y) < 0.0001 &&\r
			abs(mPosition.z - highlightedPointCoordinate.z) < 0.0001) {\r
			vHighlight = 1.0;\r
			gl_PointSize = pointSize * highlightedPointScale;\r
		} else {\r
			vHighlight = 0.0;\r
		}\r
	#endif\r
\r
\r
	// OPACITY\r
	#ifndef color_type_point_index\r
		#ifdef attenuated_opacity\r
			vOpacity = opacity * exp(-length(-mvPosition.xyz) / opacityAttenuation);\r
		#else\r
			vOpacity = opacity;\r
		#endif\r
	#endif\r
\r
\r
	// NORMAL FILTERING\r
	#ifdef use_filter_by_normal\r
		if(abs((modelViewMatrix * vec4(normal, 0.0)).z) > filterByNormalThreshold) {\r
			gl_Position = vec4(0.0, 0.0, 2.0, 1.0); // Cull point\r
		}\r
	#endif\r
\r
\r
	// POINT COLOR SELECTION\r
	#ifdef new_format\r
		vColor = rgba;\r
	#elif defined color_type_rgb\r
		vColor = getRGB();\r
	#elif defined color_type_height\r
		vColor = getElevation();\r
	#elif defined color_type_rgb_height\r
		vec3 cHeight = getElevation();\r
		vColor = mix(getRGB(), cHeight, transition);\r
	#elif defined color_type_depth\r
		float linearDepth = -mvPosition.z;\r
		float expDepth = (gl_Position.z / gl_Position.w) * 0.5 + 0.5;\r
		vColor = vec3(linearDepth, expDepth, 0.0);\r
	#elif defined color_type_intensity\r
		float w = getIntensity();\r
		vColor = vec3(w);\r
	#elif defined color_type_intensity_gradient\r
		float w = getIntensity();\r
		vColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\r
	#elif defined color_type_color\r
		vColor = uColor;\r
	#elif defined color_type_lod\r
		float w = getLOD() / 10.0;\r
		vColor = texture(gradient, vec2(w, 1.0 - w)).rgb;\r
	#elif defined color_type_point_index\r
		vColor = indices.rgb;\r
	#elif defined color_type_classification\r
		vec4 cl = getClassification();\r
		vColor = cl.rgb;\r
	#elif defined color_type_return_number\r
		vColor = getReturnNumber();\r
	#elif defined color_type_source\r
		vColor = getSourceID();\r
	#elif defined color_type_normal\r
		vColor = (modelMatrix * vec4(normal, 0.0)).xyz;\r
	#elif defined color_type_phong\r
		vColor = color;\r
	#elif defined color_type_composite\r
		vColor = getCompositeColor();\r
	#endif\r
	\r
	#if !defined color_type_composite && defined color_type_classification\r
		if (getClassification().a == 0.0) {\r
			gl_Position = vec4(100.0, 100.0, 100.0, 0.0); // Cull point if classification alpha is zero\r
			return;\r
		}\r
	#endif\r
\r
\r
	// CLIPPING\r
	#if defined use_clip_box || defined use_clip_sphere || defined use_clip_plane\r
		bool insideAny = false;\r
		bool hasVolumeClip = false;\r
\r
		#if defined use_clip_box\r
			hasVolumeClip = true;\r
			for (int i = 0; i < max_clip_boxes; i++) {\r
				if (i == int(clipBoxCount)) break;\r
				vec4 clipPosition = clipBoxes[i] * modelMatrix * vec4(position, 1.0);\r
				bool inside = abs(clipPosition.x) <= 0.5 && abs(clipPosition.y) <= 0.5 && abs(clipPosition.z) <= 0.5;\r
				insideAny = insideAny || inside;\r
			}\r
		#endif\r
\r
		#if defined use_clip_sphere\r
			hasVolumeClip = true;\r
			vec4 modelPos = modelMatrix * vec4(position, 1.0);\r
			for (int i = 0; i < max_clip_spheres; i++) {\r
				if (i == int(clipSphereCount)) break;\r
				float dist = distance(modelPos.xyz, clipSpheres[i].xyz);\r
				insideAny = insideAny || (dist <= clipSpheres[i].w);\r
			}\r
		#endif\r
\r
		// When only clip planes are used, start as inside\r
		if (!hasVolumeClip) insideAny = true;\r
\r
		#if defined use_clip_plane\r
			// Point must be on positive side of all planes\r
			vec4 clipWorldPos = modelMatrix * vec4(position, 1.0);\r
			for (int i = 0; i < max_clip_planes; i++) {\r
				if (i == int(clipPlaneCount)) break;\r
				float d = dot(clipPlanes[i].xyz, clipWorldPos.xyz) + clipPlanes[i].w;\r
				// Even if a point was accepted by a volume clip,\r
				// it is rejected when it falls on the negative side of a plane.\r
				if (d < 0.0) { insideAny = false; break; }\r
			}\r
		#endif\r
		\r
		#if defined clip_outside\r
			if (!insideAny) { gl_Position = vec4(1000.0); } // Cull if outside any clip volume\r
		#elif defined clip_inside\r
			if (insideAny) { gl_Position = vec4(1000.0); } // Cull if inside any clip volume\r
		#elif defined clip_highlight_inside && !defined(color_type_depth)\r
			if (!insideAny) { /* additional processing if needed */ }\r
		#endif\r
\r
		#if defined clip_highlight_inside\r
			if (insideAny) { vColor.r += 0.5; }\r
		#endif\r
	#endif\r
\r
\r
	// COLOR ENCODING ADJUSTMENTS\r
	#if defined(output_color_encoding_sRGB) && defined(input_color_encoding_linear) && !defined(color_type_point_index)\r
		vColor = toLinear(vColor);\r
	#endif\r
\r
	#if defined(output_color_encoding_linear) && defined(input_color_encoding_sRGB) && !defined(color_type_point_index)\r
		vColor = fromLinear(vColor);\r
	#endif\r
}\r
`},512:e=>{e.exports=function(e,t,n,r){var i=self||window;try{try{var a;try{a=new i.Blob([e])}catch{(a=new(i.BlobBuilder||i.WebKitBlobBuilder||i.MozBlobBuilder||i.MSBlobBuilder)).append(e),a=a.getBlob()}var o=i.URL||i.webkitURL,s=o.createObjectURL(a),c=new i[t](s,n);return o.revokeObjectURL(s),c}catch{return new i[t](`data:application/javascript,${encodeURIComponent(e)}`,n)}}catch{if(!r)throw Error(`Inline worker is not supported`);return new i[t](r,n)}}},290:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(512);function i(){return r('const e={DATA_TYPE_DOUBLE:{ordinal:0,name:"double",size:8},DATA_TYPE_FLOAT:{ordinal:1,name:"float",size:4},DATA_TYPE_INT8:{ordinal:2,name:"int8",size:1},DATA_TYPE_UINT8:{ordinal:3,name:"uint8",size:1},DATA_TYPE_INT16:{ordinal:4,name:"int16",size:2},DATA_TYPE_UINT16:{ordinal:5,name:"uint16",size:2},DATA_TYPE_INT32:{ordinal:6,name:"int32",size:4},DATA_TYPE_UINT32:{ordinal:7,name:"uint32",size:4},DATA_TYPE_INT64:{ordinal:8,name:"int64",size:8},DATA_TYPE_UINT64:{ordinal:9,name:"uint64",size:8}};let t=0;for(let n in e)e[t]=e[n],t++;class n{constructor(e,t,n,i=[1/0,-1/0]){this.name=e,this.type=t,this.numElements=n,this.range=i,this.byteSize=this.numElements*this.type.size,this.description=""}}new n("POSITION_CARTESIAN",e.DATA_TYPE_FLOAT,3),new n("COLOR_PACKED",e.DATA_TYPE_INT8,4),new n("COLOR_PACKED",e.DATA_TYPE_INT8,4),new n("COLOR_PACKED",e.DATA_TYPE_INT8,3),new n("NORMAL_FLOATS",e.DATA_TYPE_FLOAT,3),new n("INTENSITY",e.DATA_TYPE_UINT16,1),new n("CLASSIFICATION",e.DATA_TYPE_UINT8,1),new n("NORMAL_SPHEREMAPPED",e.DATA_TYPE_UINT8,2),new n("NORMAL_OCT16",e.DATA_TYPE_UINT8,2),new n("NORMAL",e.DATA_TYPE_FLOAT,3),new n("RETURN_NUMBER",e.DATA_TYPE_UINT8,1),new n("NUMBER_OF_RETURNS",e.DATA_TYPE_UINT8,1),new n("SOURCE_ID",e.DATA_TYPE_UINT16,1),new n("INDICES",e.DATA_TYPE_UINT32,1),new n("SPACING",e.DATA_TYPE_FLOAT,1),new n("GPS_TIME",e.DATA_TYPE_DOUBLE,1);const i=function(){var e=new Int8Array(0);function t(e){this.data=e,this.offset=0}var n=Int32Array.from([256,402,436,468,500,534,566,598,630,662,694,726,758,790,822,854,886,920,952,984,1016,1048,1080]),i=Int32Array.from([1,2,3,4,0,5,17,6,16,7,8,9,10,11,12,13,14,15]),a=Int32Array.from([0,3,2,1,0,0,0,0,0,0,3,3,3,3,3,3]),o=Int32Array.from([0,0,0,0,-1,1,-2,2,-3,3,-1,1,-2,2,-3,3]),r=Int32Array.from([131072,131076,131075,196610,131072,131076,131075,262145,131072,131076,131075,196610,131072,131076,131075,262149]),s=Int32Array.from([0,0,0,0,0,4096,9216,21504,35840,44032,53248,63488,74752,87040,93696,100864,104704,106752,108928,113536,115968,118528,119872,121280,122016]),l=Int32Array.from([0,0,0,0,10,10,11,11,10,10,10,10,10,9,9,8,7,7,8,7,7,6,6,5,5]),c=Int32Array.from([1,5,9,13,17,25,33,41,49,65,81,97,113,145,177,209,241,305,369,497,753,1265,2289,4337,8433,16625]),d=Int32Array.from([2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,7,8,9,10,11,12,13,24]),h=Int16Array.from([0,0,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,7,8,9,10,12,14,24]),f=Int16Array.from([0,0,0,0,0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,7,8,9,10,24]),u=new Int16Array(2816);function p(e){for(var t=-1,n=16;n>0;)e>>>n!=0&&(t+=n,e>>>=n),n>>=1;return t+e}function m(e,t,n){return 16+t+2*(n<<e)}function g(e,t,n){if(e<n+(2<<t))throw"maxDistance is too small";var i=4+(e-n>>t),a=p(i)-1;return((a-1<<1|i>>a&1)-1<<t)+(1<<t)+n+16}function P(e){if(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),0!=U(e,1)){var t=U(e,3);return 0==t?1:U(e,t)+(1<<t)}return 0}function $(e,t,n){var i=e[t],a=n.accumulator32>>>n.bitOffset,o=e[i+=255&a]>>16,r=65535&e[i];return o<=8?(n.bitOffset+=o,r):(i+=r,i+=(a&(1<<o)-1)>>>8,n.bitOffset+=8+(e[i]>>16),65535&e[i])}function b(e,t,n){n.bitOffset>=16&&(n.accumulator32=n.shortBuffer[n.halfOffset++]<<16|n.accumulator32>>>16,n.bitOffset-=16);var i=$(e,t,n),a=d[i];return n.bitOffset>=16&&(n.accumulator32=n.shortBuffer[n.halfOffset++]<<16|n.accumulator32>>>16,n.bitOffset-=16),c[i]+(a<=16?U(n,a):_(n,a))}function v(e,t){for(var n=e[t];t>0;t--)e[t]=e[t-1];e[0]=n}function y(e,t,n,a,o){o.halfOffset>2030&&N(o),o.bitOffset>=16&&(o.accumulator32=o.shortBuffer[o.halfOffset++]<<16|o.accumulator32>>>16,o.bitOffset-=16);var s=U(o,2);return 1==s?function(e,t,n,i,a){for(var o=new Int32Array(t),r=new Int32Array(4),s=1+p(e-1),l=U(a,2)+1,c=0;c<l;c++){a.bitOffset>=16&&(a.accumulator32=a.shortBuffer[a.halfOffset++]<<16|a.accumulator32>>>16,a.bitOffset-=16);var d=U(a,s);if(d>=t)throw"Can\'t readHuffmanCode";r[c]=d}!function(e,t){for(var n=0;n<t-1;++n)for(var i=n+1;i<t;++i)if(e[n]==e[i])throw"Duplicate simple Huffman code symbol"}(r,l);var h=l;switch(4==l&&(h+=U(a,1)),h){case 1:o[r[0]]=1;break;case 2:o[r[0]]=1,o[r[1]]=1;break;case 3:o[r[0]]=1,o[r[1]]=2,o[r[2]]=2;break;case 4:o[r[0]]=2,o[r[1]]=2,o[r[2]]=2,o[r[3]]=2;break;case 5:o[r[0]]=1,o[r[1]]=2,o[r[2]]=3,o[r[3]]=3}return L(n,i,8,o,t)}(e,t,n,a,o):function(e,t,n,a,o){for(var s=new Int32Array(e),l=new Int32Array(18),c=32,d=0,h=t;h<18&&c>0;h++){var f=i[h];o.bitOffset>=16&&(o.accumulator32=o.shortBuffer[o.halfOffset++]<<16|o.accumulator32>>>16,o.bitOffset-=16);var u=o.accumulator32>>>o.bitOffset&15;o.bitOffset+=r[u]>>16;var p=65535&r[u];l[f]=p,0!=p&&(c-=32>>p,d++)}if(0!=c&&1!=d)throw"Corrupted Huffman code histogram";return function(e,t,n,i){var a=0,o=8,r=0,s=0,l=32768,c=new Int32Array(33);for(L(c,c.length-1,5,e,18);a<t&&l>0;){i.halfOffset>2030&&N(i),i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);var d=i.accumulator32>>>i.bitOffset&31;i.bitOffset+=c[d]>>16;var h=65535&c[d];if(h<16)r=0,n[a++]=h,0!=h&&(o=h,l-=32768>>h);else{var f=h-14,u=0;16==h&&(u=o),s!=u&&(r=0,s=u);var p=r;r>0&&(r-=2,r<<=f),i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);var m=(r+=U(i,f)+3)-p;if(a+m>t)throw"symbol + repeatDelta > numSymbols";for(var g=0;g<m;g++)n[a++]=s;0!=s&&(l-=m<<15-s)}}if(0!=l)throw"Unused space";n.fill(0,a,t)}(l,e,s,o),L(n,a,8,s,e)}(t,s,n,a,o)}function X(e,t,i){i.halfOffset>2030&&N(i);var a=P(i)+1;if(1==a)return t.fill(0,0,e),a;i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);var o=0;0!=U(i,1)&&(o=U(i,4)+1);var r=a+o,s=n[r+31>>5],l=new Int32Array(s+1),c=l.length-1;y(r,r,l,c,i);for(var d=0;d<e;){i.halfOffset>2030&&N(i),i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);var h=$(l,c,i);if(0==h)t[d]=0,d++;else if(h<=o){i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16);for(var f=(1<<h)+U(i,h);0!=f;){if(d>=e)throw"Corrupted context map";t[d]=0,d++,f--}}else t[d]=h-o,d++}return i.bitOffset>=16&&(i.accumulator32=i.shortBuffer[i.halfOffset++]<<16|i.accumulator32>>>16,i.bitOffset-=16),1==U(i,1)&&function(e,t){for(var n=new Int32Array(256),i=0;i<256;i++)n[i]=i;for(i=0;i<t;i++){var a=255&e[i];e[i]=n[a],0!=a&&v(n,a)}}(t,e),a}function w(e,t,n){var i=e.rings,a=4+2*t;e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16);var o=$(e.blockTrees,2*t,e),r=b(e.blockTrees,2*t+1,e);return 1==o?o=i[a+1]+1:0==o?o=i[a]:o-=2,o>=n&&(o-=n),i[a]=i[a+1],i[a+1]=o,r}function Y(e){e.literalBlockLength=w(e,0,e.numLiteralBlockTypes);var t=e.rings[5];e.contextMapSlice=t<<6,e.literalTreeIdx=255&e.contextMap[e.contextMapSlice];var n=e.contextModes[t];e.contextLookupOffset1=n<<9,e.contextLookupOffset2=e.contextLookupOffset1+256}function Q(e){e.commandBlockLength=w(e,1,e.numCommandBlockTypes),e.commandTreeIdx=e.rings[7]}function x(e){e.distanceBlockLength=w(e,2,e.numDistanceBlockTypes),e.distContextMapSlice=e.rings[9]<<2}function k(e){if(0!=e.inputEnd)return e.nextRunningState=10,void(e.runningState=12);e.literalTreeGroup=new Int32Array(0),e.commandTreeGroup=new Int32Array(0),e.distanceTreeGroup=new Int32Array(0),e.halfOffset>2030&&N(e),function(e){if(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),e.inputEnd=U(e,1),e.metaBlockLength=0,e.isUncompressed=0,e.isMetadata=0,0==e.inputEnd||0==U(e,1)){var t=U(e,2)+4;if(7==t){if(e.isMetadata=1,0!=U(e,1))throw"Corrupted reserved bit";var n=U(e,2);if(0==n)return;for(var i=0;i<n;i++){if(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),0==(a=U(e,8))&&i+1==n&&n>1)throw"Exuberant nibble";e.metaBlockLength|=a<<8*i}}else for(i=0;i<t;i++){var a;if(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),0==(a=U(e,4))&&i+1==t&&t>4)throw"Exuberant nibble";e.metaBlockLength|=a<<4*i}e.metaBlockLength++,0==e.inputEnd&&(e.isUncompressed=U(e,1))}}(e),0==e.metaBlockLength&&0==e.isMetadata||(0!=e.isUncompressed||0!=e.isMetadata?(H(e),e.runningState=0!=e.isMetadata?5:6):e.runningState=3,0==e.isMetadata&&(e.expectedTotalSize+=e.metaBlockLength,e.expectedTotalSize>1<<30&&(e.expectedTotalSize=1<<30),e.ringBufferSize<e.maxRingBufferSize&&function(e){var t=e.maxRingBufferSize;if(t>e.expectedTotalSize){for(var n=e.expectedTotalSize;t>>1>n;)t>>=1;0==e.inputEnd&&t<16384&&e.maxRingBufferSize>=16384&&(t=16384)}if(!(t<=e.ringBufferSize)){var i=new Int8Array(t+37);0!=e.ringBuffer.length&&i.set(e.ringBuffer.subarray(0,0+e.ringBufferSize),0),e.ringBuffer=i,e.ringBufferSize=t}}(e)))}function C(e,t,n){var i=e.blockTrees[2*t];if(n<=1)return e.blockTrees[2*t+1]=i,e.blockTrees[2*t+2]=i,1<<28;var a=n+2;return i+=y(a,a,e.blockTrees,2*t,e),e.blockTrees[2*t+1]=i,i+=y(26,26,e.blockTrees,2*t+1,e),e.blockTrees[2*t+2]=i,b(e.blockTrees,2*t+1,e)}function A(e){e.numLiteralBlockTypes=P(e)+1,e.literalBlockLength=C(e,0,e.numLiteralBlockTypes),e.numCommandBlockTypes=P(e)+1,e.commandBlockLength=C(e,1,e.numCommandBlockTypes),e.numDistanceBlockTypes=P(e)+1,e.distanceBlockLength=C(e,2,e.numDistanceBlockTypes),e.halfOffset>2030&&N(e),e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),e.distancePostfixBits=U(e,2),e.numDirectDistanceCodes=U(e,4)<<e.distancePostfixBits,e.distancePostfixMask=(1<<e.distancePostfixBits)-1,e.contextModes=new Int8Array(e.numLiteralBlockTypes);for(var t=0;t<e.numLiteralBlockTypes;){for(var n=V(t+96,e.numLiteralBlockTypes);t<n;++t)e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),e.contextModes[t]=U(e,2);e.halfOffset>2030&&N(e)}e.contextMap=new Int8Array(e.numLiteralBlockTypes<<6);var i=X(e.numLiteralBlockTypes<<6,e.contextMap,e);e.trivialLiteralContext=1;for(var a=0;a<e.numLiteralBlockTypes<<6;a++)if(e.contextMap[a]!=a>>6){e.trivialLiteralContext=0;break}e.distContextMap=new Int8Array(e.numDistanceBlockTypes<<2);var o=X(e.numDistanceBlockTypes<<2,e.distContextMap,e);e.literalTreeGroup=I(256,256,i,e),e.commandTreeGroup=I(704,704,e.numCommandBlockTypes,e);var r=m(e.distancePostfixBits,e.numDirectDistanceCodes,24),s=r;1==e.isLargeWindow&&(r=m(e.distancePostfixBits,e.numDirectDistanceCodes,62),s=g(2147483644,e.distancePostfixBits,e.numDirectDistanceCodes)),e.distanceTreeGroup=I(r,s,o,e),function(e,t){for(var n=e.distExtraBits,i=e.distOffset,a=e.distancePostfixBits,o=e.numDirectDistanceCodes,r=1<<a,s=1,l=0,c=16,d=0;d<o;++d)n[c]=0,i[c]=d+1,++c;for(;c<t;){var h=o+((2+l<<s)-4<<a)+1;for(d=0;d<r;++d)n[c]=s,i[c]=h+d,++c;s+=l,l^=1}}(e,s),e.contextMapSlice=0,e.distContextMapSlice=0,e.contextLookupOffset1=512*e.contextModes[0],e.contextLookupOffset2=e.contextLookupOffset1+256,e.literalTreeIdx=0,e.commandTreeIdx=0,e.rings[4]=1,e.rings[5]=0,e.rings[6]=1,e.rings[7]=0,e.rings[8]=1,e.rings[9]=0}function T(e){var t=e.ringBuffer;if(e.metaBlockLength<=0)return F(e),void(e.runningState=2);var n=V(e.ringBufferSize-e.pos,e.metaBlockLength);if(function(e,t,n,i){if(7&e.bitOffset)throw"Unaligned copyBytes";for(;32!=e.bitOffset&&0!=i;)t[n++]=e.accumulator32>>>e.bitOffset,e.bitOffset+=8,i--;if(0!=i){var a=V(W(e),i>>1);if(a>0){var o=e.halfOffset<<1,r=a<<1;t.set(e.byteBuffer.subarray(o,o+r),n),n+=r,i-=r,e.halfOffset+=a}if(0!=i)if(W(e)>0){for(e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16);0!=i;)t[n++]=e.accumulator32>>>e.bitOffset,e.bitOffset+=8,i--;M(e,0)}else for(;i>0;){var s=Z(e.input,t,n,i);if(-1==s)throw"Unexpected end of input";n+=s,i-=s}}}(e,t,e.pos,n),e.metaBlockLength-=n,e.pos+=n,e.pos==e.ringBufferSize)return e.nextRunningState=6,void(e.runningState=12);F(e),e.runningState=2}function B(e){var t=V(e.outputLength-e.outputUsed,e.ringBufferBytesReady-e.ringBufferBytesWritten);return 0!=t&&(e.output.set(e.ringBuffer.subarray(e.ringBufferBytesWritten,e.ringBufferBytesWritten+t),e.outputOffset+e.outputUsed),e.outputUsed+=t,e.ringBufferBytesWritten+=t),e.outputUsed<e.outputLength?1:0}function I(e,t,i,a){for(var o=n[t+31>>5],r=new Int32Array(i+i*o),s=i,l=0;l<i;++l)r[l]=s,s+=y(e,t,r,l,a);return r}function O(e){var t=e.ringBufferSize;return 0!=e.isEager&&(t=V(t,e.ringBufferBytesWritten+e.outputLength-e.outputUsed)),t}function S(t){if(0==t.runningState)throw"Can\'t decompress until initialized";if(11==t.runningState)throw"Can\'t decompress after close";if(1==t.runningState){var n=function(e){var t=e.isLargeWindow;if(e.isLargeWindow=0,e.bitOffset>=16&&(e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16),0==U(e,1))return 16;var n=U(e,3);return 0!=n?17+n:0!=(n=U(e,3))?1==n?0==t?-1:(e.isLargeWindow=1,1==U(e,1)||(n=U(e,6))<10||n>30?-1:n):8+n:17}(t);if(-1==n)throw"Invalid \'windowBits\' code";t.maxRingBufferSize=1<<n,t.maxBackwardDistance=t.maxRingBufferSize-16,t.runningState=2}for(var i=O(t),r=t.ringBufferSize-1,c=t.ringBuffer;10!=t.runningState;)switch(t.runningState){case 2:if(t.metaBlockLength<0)throw"Invalid metablock length";k(t),i=O(t),r=t.ringBufferSize-1,c=t.ringBuffer;continue;case 3:A(t),t.runningState=4;case 4:if(t.metaBlockLength<=0){t.runningState=2;continue}t.halfOffset>2030&&N(t),0==t.commandBlockLength&&Q(t),t.commandBlockLength--,t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16);var d=$(t.commandTreeGroup,t.commandTreeIdx,t)<<2,h=u[d],f=u[d+1],p=u[d+2];t.distanceCode=u[d+3],t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16);var m=255&h;t.insertLength=f+(m<=16?U(t,m):_(t,m)),t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),m=h>>8,t.copyLength=p+(m<=16?U(t,m):_(t,m)),t.j=0,t.runningState=7;case 7:if(0!=t.trivialLiteralContext){for(;t.j<t.insertLength;)if(t.halfOffset>2030&&N(t),0==t.literalBlockLength&&Y(t),t.literalBlockLength--,t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),c[t.pos]=$(t.literalTreeGroup,t.literalTreeIdx,t),t.pos++,t.j++,t.pos>=i){t.nextRunningState=7,t.runningState=12;break}}else for(var g=255&c[t.pos-1&r],P=255&c[t.pos-2&r];t.j<t.insertLength;){t.halfOffset>2030&&N(t),0==t.literalBlockLength&&Y(t);var b=G[t.contextLookupOffset1+g]|G[t.contextLookupOffset2+P],v=255&t.contextMap[t.contextMapSlice+b];if(t.literalBlockLength--,P=g,t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),g=$(t.literalTreeGroup,v,t),c[t.pos]=g,t.pos++,t.j++,t.pos>=i){t.nextRunningState=7,t.runningState=12;break}}if(7!=t.runningState)continue;if(t.metaBlockLength-=t.insertLength,t.metaBlockLength<=0){t.runningState=4;continue}var y=t.distanceCode;if(y<0)t.distance=t.rings[t.distRbIdx];else{t.halfOffset>2030&&N(t),0==t.distanceBlockLength&&x(t),t.distanceBlockLength--,t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16);var X=255&t.distContextMap[t.distContextMapSlice+y];if((y=$(t.distanceTreeGroup,X,t))<16){var w=t.distRbIdx+a[y]&3;if(t.distance=t.rings[w]+o[y],t.distance<0)throw"Negative distance"}else{var C;m=t.distExtraBits[y],t.bitOffset+m<=32?C=U(t,m):(t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),C=m<=16?U(t,m):_(t,m)),t.distance=t.distOffset[y]+(C<<t.distancePostfixBits)}}if(t.maxDistance!=t.maxBackwardDistance&&t.pos<t.maxBackwardDistance?t.maxDistance=t.pos:t.maxDistance=t.maxBackwardDistance,t.distance>t.maxDistance){t.runningState=9;continue}if(y>0&&(t.distRbIdx=t.distRbIdx+1&3,t.rings[t.distRbIdx]=t.distance),t.copyLength>t.metaBlockLength)throw"Invalid backward reference";t.j=0,t.runningState=8;case 8:var I=t.pos-t.distance&r,S=t.pos,q=t.copyLength-t.j,D=I+q,z=S+q;if(D<r&&z<r){if(q<12||D>S&&z>I)for(var L=0;L<q;L+=4)c[S++]=c[I++],c[S++]=c[I++],c[S++]=c[I++],c[S++]=c[I++];else c.copyWithin(S,I,D);t.j+=q,t.metaBlockLength-=q,t.pos+=q}else for(;t.j<t.copyLength;)if(c[t.pos]=c[t.pos-t.distance&r],t.metaBlockLength--,t.pos++,t.j++,t.pos>=i){t.nextRunningState=8,t.runningState=12;break}8==t.runningState&&(t.runningState=4);continue;case 9:if(t.distance>2147483644)throw"Invalid backward reference";if(!(t.copyLength>=4&&t.copyLength<=24))throw"Invalid backward reference";var R=s[t.copyLength],F=t.distance-t.maxDistance-1,W=l[t.copyLength],J=F>>>W;if(R+=(F&(1<<W)-1)*t.copyLength,!(J<121))throw"Invalid backward reference";var K=E(c,t.pos,e,R,t.copyLength,j,J);if(t.pos+=K,t.metaBlockLength-=K,t.pos>=i){t.nextRunningState=4,t.runningState=12;continue}t.runningState=4;continue;case 5:for(;t.metaBlockLength>0;)t.halfOffset>2030&&N(t),t.bitOffset>=16&&(t.accumulator32=t.shortBuffer[t.halfOffset++]<<16|t.accumulator32>>>16,t.bitOffset-=16),U(t,8),t.metaBlockLength--;t.runningState=2;continue;case 6:T(t);continue;case 12:t.ringBufferBytesReady=V(t.pos,t.ringBufferSize),t.runningState=13;case 13:if(0==B(t))return;t.pos>=t.maxBackwardDistance&&(t.maxDistance=t.maxBackwardDistance),t.pos>=t.ringBufferSize&&(t.pos>t.ringBufferSize&&c.copyWithin(0,t.ringBufferSize,t.pos),t.pos&=r,t.ringBufferBytesWritten=0),t.runningState=t.nextRunningState;continue;default:throw"Unexpected state "+t.runningState}if(10==t.runningState){if(t.metaBlockLength<0)throw"Invalid metablock length";H(t),M(t,1)}}!function(e){var t=new Int16Array(24),n=new Int16Array(24);n[0]=2;for(var i=0;i<23;++i)t[i+1]=t[i]+(1<<h[i]),n[i+1]=n[i]+(1<<f[i]);for(var a=0;a<704;++a){var o=a>>>6,r=-4;o>=2&&(o-=2,r=0);var s=(170064>>>2*o&3)<<3|a>>>3&7,l=(156228>>>2*o&3)<<3|7&a,c=n[l],d=r+(c>4?3:c-2),u=4*a;e[u+0]=h[s]|f[l]<<8,e[u+1]=t[s],e[u+2]=n[l],e[u+3]=d}}(u);var j=new function(){this.numTransforms=0,this.triplets=new Int32Array(0),this.prefixSuffixStorage=new Int8Array(0),this.prefixSuffixHeads=new Int32Array(0),this.params=new Int16Array(0),this.numTransforms=121,this.triplets=new Int32Array(363),this.params=new Int16Array(121),this.prefixSuffixStorage=new Int8Array(167),this.prefixSuffixHeads=new Int32Array(51)}(121,167,50);function E(e,t,n,i,a,o,r){var s=t,l=o.triplets,c=o.prefixSuffixStorage,d=o.prefixSuffixHeads,h=3*r,f=l[h],u=l[h+1],p=l[h+2],m=d[f],g=d[f+1],P=d[p],$=d[p+1],b=u-11,v=u-0;for((b<1||b>9)&&(b=0),(v<1||v>9)&&(v=0);m!=g;)e[s++]=c[m++];b>a&&(b=a),i+=b,a-=b;for(var y=a-=v;y>0;)e[s++]=n[i++],y--;if(10==u||11==u){var X=s-a;for(10==u&&(a=1);a>0;)(x=255&e[X])<192?(x>=97&&x<=122&&(e[X]^=32),X+=1,a-=1):x<224?(e[X+1]^=32,X+=2,a-=2):(e[X+2]^=5,X+=3,a-=3)}else if(21==u||22==u)for(var w=s-a,Y=o.params[r],Q=16777216-(32768&Y)+(32767&Y);a>0;){var x,k=1;if((x=255&e[w])<128)Q+=x,e[w]=127&Q;else if(x<192);else if(x<224)a>=2?(Q+=63&(C=e[w+1])|(31&x)<<6,e[w]=192|Q>>6&31,e[w+1]=192&C|63&Q,k=2):k=a;else if(x<240)if(a>=3){var C=e[w+1];Q+=63&(A=e[w+2])|(63&C)<<6|(15&x)<<12,e[w]=224|Q>>12&15,e[w+1]=192&C|Q>>6&63,e[w+2]=192&A|63&Q,k=3}else k=a;else if(x<248)if(a>=4){C=e[w+1];var A=e[w+2],T=e[w+3];Q+=63&T|(63&A)<<6|(63&C)<<12|(7&x)<<18,e[w]=240|Q>>18&7,e[w+1]=192&C|Q>>12&63,e[w+2]=192&A|Q>>6&63,e[w+3]=192&T|63&Q,k=4}else k=a;w+=k,a-=k,21==u&&(a=0)}for(;P!=$;)e[s++]=c[P++];return s-t}function q(e,t){for(var n=1<<t-1;0!=(e&n);)n>>=1;return(e&n-1)+n}function D(e,t,n,i,a){do{e[t+(i-=n)]=a}while(i>0)}function z(e,t,n){for(var i=1<<t-n;t<15&&!((i-=e[t])<=0);)t++,i<<=1;return t-n}function L(e,t,n,i,a){var o,r,s=e[t],l=new Int32Array(a),c=new Int32Array(16),d=new Int32Array(16);for(r=0;r<a;r++)c[i[r]]++;d[1]=0;for(var h=1;h<15;h++)d[h+1]=d[h]+c[h];for(r=0;r<a;r++)0!=i[r]&&(l[d[i[r]]++]=r);var f=n,u=1<<f,p=u;if(1==d[15]){for(o=0;o<p;o++)e[s+o]=l[0];return p}o=0,r=0,h=1;for(var m=2;h<=n;h++,m<<=1)for(;c[h]>0;c[h]--)D(e,s+o,m,u,h<<16|l[r++]),o=q(o,h);var g=p-1,P=-1,$=s;for(h=n+1,m=2;h<=15;h++,m<<=1)for(;c[h]>0;c[h]--)(o&g)!=P&&($+=u,p+=u=1<<(f=z(c,h,n)),e[s+(P=o&g)]=f+n<<16|$-s-P),D(e,$+(o>>n),m,u,h-n<<16|l[r++]),o=q(o,h);return p}function N(e){if(0!=e.endOfStreamReached){if(W(e)>=-2)return;throw"No more input"}var t=e.halfOffset<<1,n=4096-t;for(e.byteBuffer.copyWithin(0,t,4096),e.halfOffset=0;n<4096;){var i=4096-n,a=Z(e.input,e.byteBuffer,n,i);if(a<=0){e.endOfStreamReached=1,e.tailBytes=n,n+=1;break}n+=a}!function(e,t){for(var n=e.byteBuffer,i=t>>1,a=e.shortBuffer,o=0;o<i;++o)a[o]=255&n[2*o]|(255&n[2*o+1])<<8}(e,n)}function M(e,t){if(0!=e.endOfStreamReached){var n=(e.halfOffset<<1)+(e.bitOffset+7>>3)-4;if(n>e.tailBytes)throw"Read after end";if(0!=t&&n!=e.tailBytes)throw"Unused bytes after end"}}function U(e,t){var n=e.accumulator32>>>e.bitOffset&(1<<t)-1;return e.bitOffset+=t,n}function _(e,t){var n=U(e,16);return e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16,n|U(e,t-16)<<16}function R(e){e.halfOffset>2030&&N(e),M(e,0),e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16,e.accumulator32=e.shortBuffer[e.halfOffset++]<<16|e.accumulator32>>>16,e.bitOffset-=16}function F(e){32==e.bitOffset&&R(e)}function H(e){var t=32-e.bitOffset&7;if(0!=t&&0!=U(e,t))throw"Corrupted padding bits"}function W(e){var t=2048;return 0!=e.endOfStreamReached&&(t=e.tailBytes+1>>1),t-e.halfOffset}!function(e,t,n,i){for(var a=1,o=0,r=0;r<217;++r){var s=i.charCodeAt(r);35==s?t[a++]=o:e[o++]=s}for(r=0;r<363;++r)n[r]="     !! ! ,  *!  &!  \\" !  ) *   * -  ! # !  #!*!  +  ,$ !  -  %  .  / #   0  1 .  \\"   2  3!*   4%  ! # /   5  6  7  8 0  1 &   $   9 +   :  ;  < \'  !=  >  ?! 4  @ 4  2  &   A *# (   B  C& ) %  ) !*# *-% A +! *.  D! %\'  & E *6  F  G% ! *A *%  H! D  I!+!  J!+   K +- *4! A  L!*4  M  N +6  O!*% +.! K *G  P +%(  ! G *D +D  Q +# *K!*G!+D!+# +G +A +4!+% +K!+4!*D!+K!*K".charCodeAt(r)-32}(j.prefixSuffixStorage,j.prefixSuffixHeads,j.triplets,\'# #s #, #e #.# the #.com/#Â\xA0# of # and # in # to #"#">#\\n#]# for # a # that #. # with #\\\'# from # by #. The # on # as # is #ing #\\n\\t#:#ed #(# at #ly #="# of the #. This #,# not #er #al #=\\\'#ful #ive #less #est #ize #ous #\');var G=new Int32Array(2048);function J(){this.ringBuffer=new Int8Array(0),this.contextModes=new Int8Array(0),this.contextMap=new Int8Array(0),this.distContextMap=new Int8Array(0),this.distExtraBits=new Int8Array(0),this.output=new Int8Array(0),this.byteBuffer=new Int8Array(0),this.shortBuffer=new Int16Array(0),this.intBuffer=new Int32Array(0),this.rings=new Int32Array(0),this.blockTrees=new Int32Array(0),this.literalTreeGroup=new Int32Array(0),this.commandTreeGroup=new Int32Array(0),this.distanceTreeGroup=new Int32Array(0),this.distOffset=new Int32Array(0),this.runningState=0,this.nextRunningState=0,this.accumulator32=0,this.bitOffset=0,this.halfOffset=0,this.tailBytes=0,this.endOfStreamReached=0,this.metaBlockLength=0,this.inputEnd=0,this.isUncompressed=0,this.isMetadata=0,this.literalBlockLength=0,this.numLiteralBlockTypes=0,this.commandBlockLength=0,this.numCommandBlockTypes=0,this.distanceBlockLength=0,this.numDistanceBlockTypes=0,this.pos=0,this.maxDistance=0,this.distRbIdx=0,this.trivialLiteralContext=0,this.literalTreeIdx=0,this.commandTreeIdx=0,this.j=0,this.insertLength=0,this.contextMapSlice=0,this.distContextMapSlice=0,this.contextLookupOffset1=0,this.contextLookupOffset2=0,this.distanceCode=0,this.numDirectDistanceCodes=0,this.distancePostfixMask=0,this.distancePostfixBits=0,this.distance=0,this.copyLength=0,this.maxBackwardDistance=0,this.maxRingBufferSize=0,this.ringBufferSize=0,this.expectedTotalSize=0,this.outputOffset=0,this.outputLength=0,this.outputUsed=0,this.ringBufferBytesWritten=0,this.ringBufferBytesReady=0,this.isEager=0,this.isLargeWindow=0,this.input=null,this.ringBuffer=new Int8Array(0),this.rings=new Int32Array(10),this.rings[0]=16,this.rings[1]=15,this.rings[2]=11,this.rings[3]=4}!function(e){for(var t=0;t<256;++t)e[t]=63&t,e[512+t]=t>>2,e[1792+t]=2+(t>>6);for(t=0;t<128;++t)e[1024+t]=4*("         !!  !                  \\"#$##%#$&\'##(#)#++++++++++((&*\'##,---,---,-----,-----,-----&#\'###.///.///./////./////./////&#\'# ".charCodeAt(t)-32);for(t=0;t<64;++t)e[1152+t]=1&t,e[1216+t]=2+(1&t);for(var n=1280,i=0;i<19;++i){var a=3&i,o="A/*  \':  & : $   @".charCodeAt(i)-32;for(t=0;t<o;++t)e[n++]=a}for(t=0;t<16;++t)e[1792+t]=1,e[2032+t]=6;for(e[1792]=0,e[2047]=7,t=0;t<256;++t)e[1536+t]=e[1792+t]<<3}(G);var K=new Int8Array(122784);function V(e,t){return e<=t?e:t}function Z(e,t,n,i){if(null==e)return-1;var a=V(e.offset+i,e.data.length),o=a-e.offset;return t.set(e.data.subarray(e.offset,a),n),e.offset+=o,o}return function(e,t,n,i){var a=function(e){for(var t=e.length,n=new Int8Array(t),i=0;i<t;++i)n[i]=e.charCodeAt(i);return n}(\'timedownlifeleftbackcodedatashowonlysitecityopenjustlikefreeworktextyearoverbodyloveformbookplaylivelinehelphomesidemorewordlongthemviewfindpagedaysfullheadtermeachareafromtruemarkableuponhighdatelandnewsevennextcasebothpostusedmadehandherewhatnameLinkblogsizebaseheldmakemainuser\\\') +holdendswithNewsreadweresigntakehavegameseencallpathwellplusmenufilmpartjointhislistgoodneedwayswestjobsmindalsologorichuseslastteamarmyfoodkingwilleastwardbestfirePageknowaway.pngmovethanloadgiveselfnotemuchfeedmanyrockicononcelookhidediedHomerulehostajaxinfoclublawslesshalfsomesuchzone100%onescareTimeracebluefourweekfacehopegavehardlostwhenparkkeptpassshiproomHTMLplanTypedonesavekeepflaglinksoldfivetookratetownjumpthusdarkcardfilefearstaykillthatfallautoever.comtalkshopvotedeepmoderestturnbornbandfellroseurl(skinrolecomeactsagesmeetgold.jpgitemvaryfeltthensenddropViewcopy1.0"</a>stopelseliestourpack.gifpastcss?graymean&gt;rideshotlatesaidroadvar feeljohnrickportfast\\\'UA-dead</b>poorbilltypeU.S.woodmust2px;Inforankwidewantwalllead[0];paulwavesure$(\\\'#waitmassarmsgoesgainlangpaid!-- lockunitrootwalkfirmwifexml"songtest20pxkindrowstoolfontmailsafestarmapscorerainflowbabyspansays4px;6px;artsfootrealwikiheatsteptriporg/lakeweaktoldFormcastfansbankveryrunsjulytask1px;goalgrewslowedgeid="sets5px;.js?40pxif (soonseatnonetubezerosentreedfactintogiftharm18pxcamehillboldzoomvoideasyringfillpeakinitcost3px;jacktagsbitsrolleditknewnear\\x3c!--growJSONdutyNamesaleyou lotspainjazzcoldeyesfishwww.risktabsprev10pxrise25pxBlueding300,ballfordearnwildbox.fairlackverspairjunetechif(!pickevil$("#warmlorddoespull,000ideadrawhugespotfundburnhrefcellkeystickhourlossfuel12pxsuitdealRSS"agedgreyGET"easeaimsgirlaids8px;navygridtips#999warsladycars); }php?helltallwhomzh:e*/\\r\\n 100hall.\\n\\nA7px;pushchat0px;crew*/</hash75pxflatrare && tellcampontolaidmissskiptentfinemalegetsplot400,\\r\\n\\r\\ncoolfeet.php<br>ericmostguidbelldeschairmathatom/img&#82luckcent000;tinygonehtmlselldrugFREEnodenick?id=losenullvastwindRSS wearrelybeensamedukenasacapewishgulfT23:hitsslotgatekickblurthey15px\\\'\\\'););">msiewinsbirdsortbetaseekT18:ordstreemall60pxfarmb\\0sboys[0].\\\');"POSTbearkids);}}marytend(UK)quadzh:f-siz----prop\\\');\\rliftT19:viceandydebt>RSSpoolneckblowT16:doorevalT17:letsfailoralpollnovacolsgene b\\0softrometillross<h3>pourfadepink<tr>mini)|!(minezh:hbarshear00);milk --\\x3eironfreddiskwentsoilputs/js/holyT22:ISBNT20:adamsees<h2>json\\\', \\\'contT21: RSSloopasiamoon</p>soulLINEfortcartT14:<h1>80px!--<9px;T04:mike:46ZniceinchYorkricezh:d\\\'));puremageparatonebond:37Z_of_\\\']);000,zh:gtankyardbowlbush:56ZJava30px\\n|}\\n%C3%:34ZjeffEXPIcashvisagolfsnowzh:iquer.csssickmeatmin.binddellhirepicsrent:36ZHTTP-201fotowolfEND xbox:54ZBODYdick;\\n}\\nexit:35Zvarsbeat\\\'});diet999;anne}}</[i].LangkmB2wiretoysaddssealalex;\\n\\t}echonine.org005)tonyjewssandlegsroof000) 200winegeardogsbootgarycutstyletemption.xmlcockgang$(\\\'.50pxPh.Dmiscalanloandeskmileryanunixdisc);}\\ndustclip).\\n\\n70px-200DVDs7]><tapedemoi++)wageeurophiloptsholeFAQsasin-26TlabspetsURL bulkcook;}\\r\\nHEAD[0])abbrjuan(198leshtwin</i>sonyguysfuckpipe|-\\n!002)ndow[1];[];\\nLog salt\\r\\n\\t\\tbangtrimbath){\\r\\n00px\\n});ko:lfeesad>\\rs:// [];tollplug(){\\n{\\r\\n .js\\\'200pdualboat.JPG);\\n}quot);\\n\\n\\\');\\n\\r\\n}\\r201420152016201720182019202020212022202320242025202620272028202920302031203220332034203520362037201320122011201020092008200720062005200420032002200120001999199819971996199519941993199219911990198919881987198619851984198319821981198019791978197719761975197419731972197119701969196819671966196519641963196219611960195919581957195619551954195319521951195010001024139400009999comomC!sesteestaperotodohacecadaaC1obiendC-aasC-vidacasootroforosolootracualdijosidograntipotemadebealgoquC)estonadatrespococasabajotodasinoaguapuesunosantediceluisellamayozonaamorpisoobraclicellodioshoracasiP7P0P=P0P>P<Q\\0P0Q\\0QQP0P=P5P?P>P>QP8P7P=P>P4P>QP>P6P5P>P=P8QPP0P5P5P1Q\\vP<Q\\vPQ\\vQP>P2Q\\vP2P>PP>P>P1PP>P;P8P=P8P P$PP5PQ\\vQQ\\vPP=P8P<P4P0PP0PP0PQPP1QP5PP7P5P9P=QP<P<P"Q\\vQP6YY\\nX#YYX\\\'YX9YYX#Y\\bX1X/Y\\nX\\\'YY\\tY\x07Y\\bYYYYX\\\'Y\\bYY\x07X(X3X\\\'YX%YY\x07Y\\nX#Y\\nYX/Y\x07YX+YX(Y\x07YY\\bYY\\nX(YX\\\'Y\\nX(YX4Y\\nX\\\'YX#YYX*X(Y\\nYYX-X(Y\x07YYX4Y\\bX4firstvideolightworldmediawhitecloseblackrightsmallbooksplacemusicfieldorderpointvalueleveltableboardhousegroupworksyearsstatetodaywaterstartstyledeathpowerphonenighterrorinputabouttermstitletoolseventlocaltimeslargewordsgamesshortspacefocusclearmodelblockguideradiosharewomenagainmoneyimagenamesyounglineslatercolorgreenfront&amp;watchforcepricerulesbeginaftervisitissueareasbelowindextotalhourslabelprintpressbuiltlinksspeedstudytradefoundsenseundershownformsrangeaddedstillmovedtakenaboveflashfixedoftenotherviewschecklegalriveritemsquickshapehumanexistgoingmoviethirdbasicpeacestagewidthloginideaswrotepagesusersdrivestorebreaksouthvoicesitesmonthwherebuildwhichearthforumthreesportpartyClicklowerlivesclasslayerentrystoryusagesoundcourtyour birthpopuptypesapplyImagebeinguppernoteseveryshowsmeansextramatchtrackknownearlybegansuperpapernorthlearngivennamedendedTermspartsGroupbrandusingwomanfalsereadyaudiotakeswhile.com/livedcasesdailychildgreatjudgethoseunitsneverbroadcoastcoverapplefilescyclesceneplansclickwritequeenpieceemailframeolderphotolimitcachecivilscaleenterthemetheretouchboundroyalaskedwholesincestock namefaithheartemptyofferscopeownedmightalbumthinkbloodarraymajortrustcanonunioncountvalidstoneStyleLoginhappyoccurleft:freshquitefilmsgradeneedsurbanfightbasishoverauto;route.htmlmixedfinalYour slidetopicbrownalonedrawnsplitreachRightdatesmarchquotegoodsLinksdoubtasyncthumballowchiefyouthnovel10px;serveuntilhandsCheckSpacequeryjamesequaltwice0,000Startpanelsongsroundeightshiftworthpostsleadsweeksavoidthesemilesplanesmartalphaplantmarksratesplaysclaimsalestextsstarswrong</h3>thing.org/multiheardPowerstandtokensolid(thisbringshipsstafftriedcallsfullyfactsagentThis //--\\x3eadminegyptEvent15px;Emailtrue"crossspentblogsbox">notedleavechinasizesguest</h4>robotheavytrue,sevengrandcrimesignsawaredancephase>\\x3c!--en_US&#39;200px_namelatinenjoyajax.ationsmithU.S. holdspeterindianav">chainscorecomesdoingpriorShare1990sromanlistsjapanfallstrialowneragree</h2>abusealertopera"-//WcardshillsteamsPhototruthclean.php?saintmetallouismeantproofbriefrow">genretrucklooksValueFrame.net/--\\x3e\\n<try {\\nvar makescostsplainadultquesttrainlaborhelpscausemagicmotortheir250pxleaststepsCountcouldglasssidesfundshotelawardmouthmovesparisgivesdutchtexasfruitnull,||[];top">\\n\\x3c!--POST"ocean<br/>floorspeakdepth sizebankscatchchart20px;aligndealswould50px;url="parksmouseMost ...</amongbrainbody none;basedcarrydraftreferpage_home.meterdelaydreamprovejoint</tr>drugs\\x3c!-- aprilidealallenexactforthcodeslogicView seemsblankports (200saved_linkgoalsgrantgreekhomesringsrated30px;whoseparse();" Blocklinuxjonespixel\\\');">);if(-leftdavidhorseFocusraiseboxesTrackement</em>bar">.src=toweralt="cablehenry24px;setupitalysharpminortastewantsthis.resetwheelgirls/css/100%;clubsstuffbiblevotes 1000korea});\\r\\nbandsqueue= {};80px;cking{\\r\\n\\t\\taheadclockirishlike ratiostatsForm"yahoo)[0];Aboutfinds</h1>debugtasksURL =cells})();12px;primetellsturns0x600.jpg"spainbeachtaxesmicroangel--\\x3e</giftssteve-linkbody.});\\n\\tmount (199FAQ</rogerfrankClass28px;feeds<h1><scotttests22px;drink) || lewisshall#039; for lovedwaste00px;ja:csimon<fontreplymeetsuntercheaptightBrand) != dressclipsroomsonkeymobilmain.Name platefunnytreescom/"1.jpgwmodeparamSTARTleft idden, 201);\\n}\\nform.viruschairtransworstPagesitionpatch\\x3c!--\\no-cacfirmstours,000 asiani++){adobe\\\')[0]id=10both;menu .2.mi.png"kevincoachChildbruce2.jpgURL)+.jpg|suitesliceharry120" sweettr>\\r\\nname=diegopage swiss--\\x3e\\n\\n#fff;">Log.com"treatsheet) && 14px;sleepntentfiledja:cid="cName"worseshots-box-delta\\n&lt;bears:48Z<data-rural</a> spendbakershops= "";php">ction13px;brianhellosize=o=%2F joinmaybe<img img">, fjsimg" ")[0]MTopBType"newlyDanskczechtrailknows</h5>faq">zh-cn10);\\n-1");type=bluestrulydavis.js\\\';>\\r\\n<!steel you h2>\\r\\nform jesus100% menu.\\r\\n\\t\\r\\nwalesrisksumentddingb-likteachgif" vegasdanskeestishqipsuomisobredesdeentretodospuedeaC1osestC!tienehastaotrospartedondenuevohacerformamismomejormundoaquC-dC-assC3loayudafechatodastantomenosdatosotrassitiomuchoahoralugarmayorestoshorastenerantesfotosestaspaC-snuevasaludforosmedioquienmesespoderchileserC!vecesdecirjosC)estarventagrupohechoellostengoamigocosasnivelgentemismaairesjuliotemashaciafavorjuniolibrepuntobuenoautorabrilbuenatextomarzosaberlistaluegocC3moenerojuegoperC:haberestoynuncamujervalorfueralibrogustaigualvotoscasosguC-apuedosomosavisousteddebennochebuscafaltaeurosseriedichocursoclavecasasleC3nplazolargoobrasvistaapoyojuntotratavistocrearcampohemoscincocargopisosordenhacenC!readiscopedrocercapuedapapelmenorC:tilclarojorgecalleponertardenadiemarcasigueellassiglocochemotosmadreclaserestoniC1oquedapasarbancohijosviajepabloC)stevienereinodejarfondocanalnorteletracausatomarmanoslunesautosvillavendopesartipostengamarcollevapadreunidovamoszonasambosbandamariaabusomuchasubirriojavivirgradochicaallC-jovendichaestantalessalirsuelopesosfinesllamabuscoC)stalleganegroplazahumorpagarjuntadobleislasbolsabaC1ohablaluchaCreadicenjugarnotasvalleallC!cargadolorabajoestC)gustomentemariofirmacostofichaplatahogarartesleyesaquelmuseobasespocosmitadcielochicomiedoganarsantoetapadebesplayaredessietecortecoreadudasdeseoviejodeseaaguas&quot;domaincommonstatuseventsmastersystemactionbannerremovescrollupdateglobalmediumfilternumberchangeresultpublicscreenchoosenormaltravelissuessourcetargetspringmodulemobileswitchphotosborderregionitselfsocialactivecolumnrecordfollowtitle>eitherlengthfamilyfriendlayoutauthorcreatereviewsummerserverplayedplayerexpandpolicyformatdoublepointsseriespersonlivingdesignmonthsforcesuniqueweightpeopleenergynaturesearchfigurehavingcustomoffsetletterwindowsubmitrendergroupsuploadhealthmethodvideosschoolfutureshadowdebatevaluesObjectothersrightsleaguechromesimplenoticesharedendingseasonreportonlinesquarebuttonimagesenablemovinglatestwinterFranceperiodstrongrepeatLondondetailformeddemandsecurepassedtoggleplacesdevicestaticcitiesstreamyellowattackstreetflighthiddeninfo">openedusefulvalleycausesleadersecretseconddamagesportsexceptratingsignedthingseffectfieldsstatesofficevisualeditorvolumeReportmuseummoviesparentaccessmostlymother" id="marketgroundchancesurveybeforesymbolmomentspeechmotioninsidematterCenterobjectexistsmiddleEuropegrowthlegacymannerenoughcareeransweroriginportalclientselectrandomclosedtopicscomingfatheroptionsimplyraisedescapechosenchurchdefinereasoncorneroutputmemoryiframepolicemodelsNumberduringoffersstyleskilledlistedcalledsilvermargindeletebetterbrowselimitsGlobalsinglewidgetcenterbudgetnowrapcreditclaimsenginesafetychoicespirit-stylespreadmakingneededrussiapleaseextentScriptbrokenallowschargedividefactormember-basedtheoryconfigaroundworkedhelpedChurchimpactshouldalwayslogo" bottomlist">){var prefixorangeHeader.push(couplegardenbridgelaunchReviewtakingvisionlittledatingButtonbeautythemesforgotSearchanchoralmostloadedChangereturnstringreloadMobileincomesupplySourceordersviewed&nbsp;courseAbout island<html cookiename="amazonmodernadvicein</a>: The dialoghousesBEGIN MexicostartscentreheightaddingIslandassetsEmpireSchooleffortdirectnearlymanualSelect.\\n\\nOnejoinedmenu">PhilipawardshandleimportOfficeregardskillsnationSportsdegreeweekly (e.g.behinddoctorloggedunited</b></beginsplantsassistartistissued300px|canadaagencyschemeremainBrazilsamplelogo">beyond-scaleacceptservedmarineFootercamera</h1>\\n_form"leavesstress" />\\r\\n.gif" onloadloaderOxfordsistersurvivlistenfemaleDesignsize="appealtext">levelsthankshigherforcedanimalanyoneAfricaagreedrecentPeople<br />wonderpricesturned|| {};main">inlinesundaywrap">failedcensusminutebeaconquotes150px|estateremoteemail"linkedright;signalformal1.htmlsignupprincefloat:.png" forum.AccesspaperssoundsextendHeightsliderUTF-8"&amp; Before. WithstudioownersmanageprofitjQueryannualparamsboughtfamousgooglelongeri++) {israelsayingdecidehome">headerensurebranchpiecesblock;statedtop"><racingresize--&gt;pacitysexualbureau.jpg" 10,000obtaintitlesamount, Inc.comedymenu" lyricstoday.indeedcounty_logo.FamilylookedMarketlse ifPlayerturkey);var forestgivingerrorsDomain}else{insertBlog</footerlogin.fasteragents<body 10px 0pragmafridayjuniordollarplacedcoversplugin5,000 page">boston.test(avatartested_countforumsschemaindex,filledsharesreaderalert(appearSubmitline">body">\\n* TheThoughseeingjerseyNews</verifyexpertinjurywidth=CookieSTART across_imagethreadnativepocketbox">\\nSystem DavidcancertablesprovedApril reallydriveritem">more">boardscolorscampusfirst || [];media.guitarfinishwidth:showedOther .php" assumelayerswilsonstoresreliefswedenCustomeasily your String\\n\\nWhiltaylorclear:resortfrenchthough") + "<body>buyingbrandsMembername">oppingsector5px;">vspacepostermajor coffeemartinmaturehappen</nav>kansaslink">Images=falsewhile hspace0&amp; \\n\\nIn  powerPolski-colorjordanBottomStart -count2.htmlnews">01.jpgOnline-rightmillerseniorISBN 00,000 guidesvalue)ectionrepair.xml"  rights.html-blockregExp:hoverwithinvirginphones</tr>\\rusing \\n\\tvar >\\\');\\n\\t</td>\\n</tr>\\nbahasabrasilgalegomagyarpolskisrpskiX1X/Y\\bd8-f\x07g.\\0d=g9i+d?!f/d8-e\x1B=f\\bd;,d8\\0d8*e,e8g.!gh.:e\x1Be/d;%f\\re\\n!f6i4d8*d::d:\\\'eh\x07*e71d<d8f%g\\ve7%d=hg3;f2!f\\tg=g+f\\t\\0f\\th/h.:d8-e?f\x07g+ g(f\\b7i&i!5d=h\\0f\\n\\0f/i.i"g\x1B8e3d8\\vh==fg4"d=?g(h=/d;6e(g:?d8;i"h5fh\\\'i"e\x1Be$\\rf3(e\\fg=g;f6hee.9f(h\\re8e:f6\\bf/g):i4ee8d;\\0d9\\be%=e\\vgf4;e\x1B>g\\t\x07ee1e&ff\\t\\vf:f0i;f\\0f0f9e<e\\fd:,fd>\x1Be3d:f\x1B4e$h?d8*g3;g;g%if88f\\be9?e\\ne6d;eh!(e.\\te(g,,d8\\0d<eh?\x1Bh!\\fg9e\x07;g\\t\\bfg5e-d8g\\fh.>h.!e\\rh49fh2e\\n e%f4;e\\n(d;d;,eee\\re."g0e(d8\\nf57e&d=e72g;gh(\\0h/&g;g$>e\\f:g;e=f,g+i\\0h&d;7f <f/f\\fe\x1B=ii>f%e\x1B=e.6e;:h.>f\\ve\\vih/;f3e>\\vd=\\rg=.g;f5i\\0\\tf\\v)h?f 7e=e\\t\\re\\bg1;fh!\\fe\x1B d8:d:$ff\\0ei3d9d8\\rh=i\\0h?\x07h!\\fd8g\\\'f\\n\\0e/h=h.>e$\x07e\\bd=e$\\\'e.6g$>d<g g)6d8d8e(i(i!9g\x1B.h?i\x07\\fh?f/e<\\0e\\\'\\vfe5g5hf\x07d;6eg\\t\\fe8.e\\n)f\x07e\\fh5f:e$\\\'e-&e-&d9 e0e\\0f5h\\\'\\bf\\nh5e7%g(\\vh&f1f\\0d9\\bf6e\\0e\\nh=d8;h&g\x1B.e\\t\\rh5h./ee8f9f3g5e=1f\\v\x1Bhe#0fd;;d=e%e:7f0f\\r.g>e\x1B=f1=h=&d;\\vg;\\rd=f/d:$f5gd:\\\'f\\t\\0d;%g5h/f>g$:d8\\0d:\x1Be\\rd=\\rd::ee\\bfe0e\x1B>ff88e7%e7e-&gg3;e\\bg=e\\ve8e-e/g i"if\\\'e\\b6e0e\\f:e:f,e(e\x1B=g=d8\\ni\x07\\rh&g,,d:\\fef,"h?\x1Be%e\\vfh?d:\x1Bh\\0h/eg0e9h.-d;%d8\\nf?e:f\\bd8:g/e"i&f8/e\\ff6e(1d9ei\\0d8\\0e.e<\\0ed=ef \x07e\x07f,"h?h\\\'#e3e0f9d8\\0d8\\vd;%e\\nh4#d;;f\\bh\\0e."f\\b7d;#h!(g\\\'/e\\be%3d::f0g i\\0e.e\x07:g0g&;g:?e:g(e\\bh!(d8\\re\\fg<h>g;h.!f%h/"d8\\rh&f\\te3f:fe>\\be$f-f>g;g;\x07f?g-g\x1B4f%h=e\\n\x1Bf%f:fig\\ve\\b0g-i(e3i.d8e\\f:ie88h\\v1h/-g>e:&e8\\ff\x1Bg>e%3f/h>g%h/h\\\'e.e;:h..i(i(fh\\\'g2>e=)f%f,fi+eh(\\0f9i"e:i\x07e$gfie=1g\\t\x07i6h!\\fh?f\\te\\bd:+g\\t)eg;h%f7;e\\n d8e.6h?g\\\'\\rh/i"h57f%d8e\\n!e,e\\nh.0e=g.\\0d;\\vh4(i\x07g7d::e=1e\\re<g(f\\n%e\\ni(e\\be?+i\\0e(h/"f6e0f3(fg3h/7e-&f !e:h/%ee2e*f/h?e\x1Bh4-d90e\\rg\\\'0d8:d:f\\be\\nh/4fd>\x1Be:e-)e-d8i"g(\\ve:d8\\0h\\b,fe!e*f\\te6e.d?f\\n$h\\0\\fd8d;\\ne$)g*e#e\\n(f\\0g\\n6f\\0g\\t9e\\b+h.$d8:e?i!;f\x1B4f0e0h/4f\\be\\0d=d8:e*d=e\\ff\\v,i#d9\\bd8\\0f 7e\x1B=ef/e&f 9f\\r.g5h\\\'e-&i"e7f\\th?\x07g(\\vg1d:d::f\\t\\re\x07:f%d8\\rh?\x07f-#e(fffd:\\ve3g3;f \x07i"ee\\n!h>e%d8\\0g\x1B4e:g!\\0fe-&d:h\\\'#e;:g-g;fe(gi\\0g%h.!e\\be/9d:h\\t:f/g\x1B8e\\feggge;:g+\\vg-\\tg:\\\'g1;e\\vg;i*\\fe.g0e\\b6d=f%h\x07*f \x07g->d;%d8\\vee\\b\x1Bf f3e6d8-e\\0\\vd::d8\\0e\\b\x07f\\f\x07e\\re3i-i\x1Be\x1B"g,,d8\\te3f3(e\x1B f-$g\\\'g\\t\x07f71e3ed8e9?e7f%fi+g:\\\'f\\0h?g;<e\\bh!(g$:d8h>h!\\fd8:d:$i\\0h/d;7h\\\'\\te>g2>e\\re.6e:-e.\\ff\\bfh\\\'\\te.\\th#e>e\\b0i.d;6e\\b6e:&i#eh=g6h=,h==f\\n%d;7h.0h\\0f9f!\\bh!\\ff?d::f0g(ed8h%?fe\x07:ie:g6ed;f,>g-g9d;%e\\t\\re.\\fe(ee8h.>g=.i"e/<e7%d8e\\f;i"g\\vg\\vg;e8ee\x1B e93e0eg\\\'\\re"e\\n fff0e"d9\\veh\\fd8f\\bfd;\\ne94h.:f\x07f\\be\x1B=e\\nh/\\tg\\t\\bd8;d?.f9ed8f\\te\\r0e?+d9f:f"0h\\\'g9e-e(g2>g%h7e>e\\b)g(g;\\\'g;-d= d;,h?d9\\bf(!e<h/-h(\\0h=e$i\x1Bhf\\rd=i#f <d8\\0h57g\\\'e-&d=h2g-d?!f!d;6f2;gh?e\\n(d:\\\'d8d<h..e/<h\\b*e\\bghg\x1Be/f/ei!\\fg;fd=g(h0f%h3\x07fh\x07*e\\n(h4h4#ed8h.?i.e.f=f%eh.(h.:i#d8*e\\ri&\\be\\n e<:e%3f\\0\\\'h\\fe\x1B4f\\re\\vd<i2d;\\nf%e."f\\rh\\\'\\0g\\vee\\n gh/d8\\0g9d?h/e\x1B>d9&f\\tf\\bf5\\vh/g\\\';e\\n(f\\t\\rh=e3e.h!g%(d8\\rf-i\\0f1d8\\re>e\\nf3d9\\vi4i\x07\x07g(h%i\\0f\\nh/\\tg\x1B.f \x07g\\b1ffe=1f\\td:\x1Bh$\x07h#=f\x07e-&f:d<f0e-h#d?.h4-g\\t)efe(i"g2>ee6e.d:\\vff04e93fg$:d8\\ne8h0"h0"f.i\\0fe8\\bd8\\nd< g1;e\\b+f-\\ff\x1B2f\\v%f\\te\\b\x1Bf0i\\rd;6e*h&f6d;#h3\x07h(\\nh>>e\\b0d::gh."ih\\0e8\\be1g$:e?gh44e-g62g+d8;i!\\fh\x07*g6g:\\\'e\\b+g.\\0e\\rf9i)i#d:\x1Bf%h/4f\\te<\\0d;#g e\\b i$h/e\\b8h\\ng\x1B.i\x07\\rg9f,!f8e$e0h\\\'e\\bh5i\x07f\\t>e\\b0d;%ee$\\\'e(d8;i!5f\\0d=3e\x1Bg-e$)d8\\vd?ig0d;#f#\\0f%f\\ng%(e0f6f2f\\tf-#e88gh\x073d;#gg\x1B.e=e,e<\\0e$\\re\\b6i\x07h\\re98g&g\\t\\bf,e="f\\be\x07e$\x07h!\\ffe\x1Be\\b0f\\0f3f\\0f 7e\\rh..h.$h/f\\0e%=d:\\\'gf\\f\\tg\\\'f\\rh#e9?d8e\\n(f<+i\x07\x07h4-f0f\\t\\vg;e\x1B>i"f?eh\\0f?f2;e.9fe$)e0e\\n*e\\n\x1Bd::d;,e\\r\x07g:\\\'i\\0e:&d::g\\t)h0f4f5h!\\fi\\0 f\\bf\x07e-i)e\x1B=h48fe<\\0e1g\x1B8ih!(g0e=1h\\\'e&f-$g>e.9e$\\\'e0f\\n%if!f,>e?fh.8e$f3h\\\'e.6e1d9&e:h?f%g+\\ve\\r3d8>f\\n%f\\n\\0e7\\\'e%%h?g;e%d;%f%gh.:d:\\vd;6h\x07*g1d8-e\\re\\ne,e&\\be&\\bgf-#d8\\rie(f\x07e\\be\\fd;7e\\0<e\\b+d::g\x1Bg#e7d=d8g:*e\x1B"ie\\b\x1Bd8f\\t?f\\ve"i?f\\td::d?f\\fee.6g;4d?.e0f9>e7&e3h!d;=g-f!\\be.ig5d?!g;gge=e.#d< d;;e\\n!f-#e<g\\t9h\\t2d8\\vf%e\\rd<e*h=e=g6i\x07\\rf0e\\\'e.9f\\f\x07e/<h?h!\\ff%e?h3#e.6h6h?\x07ee0f5f1f/d;f(e\x07:g+i?f-e7f\\t\\\'h!\\fe\\b6i\\0 d9\\vd8\\0f(e9?g0e:fh?0ee\\fd< g;f-\\ff\\t\\vd?i)h/>g(\\ve\\f;gg;h?\x07h?\x07e;d9\\ve\\t\\rf6e%e94e:&fe?g>d8=f\\0i+g;if*f%e\\n e7%e\\rh4#fg(\\vg\\t\\beh:+d=i\x07\\re:e\x07:e.f\\bf,e="e<eh1e\x07:e9d8f9i.g.1e\\rd:,f1h\\fee>h\\fd=\\rg\x1B8d?!i!5i"e\\big=i!5g!.e.e\x1B>d>\\vg=e\\0g\\\'/fih//g\x1B.ge.h4f:e3i#i)f\\bfgf/e. g\\t)i$d:h)h+g>ge\\nf6f1h4-g+g9e?g+%f/e$)d8-e$.h.$h/f/d8*e$)f4%e-d=e0g#g;4f\\n$f,i!5d8*f\\0\\\'e.f9e88h\\\'g\x1B8f:f\\bg%e:e=e>\\ve8\\bf9d>?f !e\x1B-h!e8f\\b?e1\\vf g\x1B.ee7%e/<h\x074g*g6ie7f,g=g;e\\bf!#f!\\be\\n3e\\n(e&e$g>ee<h57f9eg,,e\x1B\x1Bd<h.!h**fig\\\'e.e.h\\\'h\\ff6\\bh49e1e\\fe?h.0d=g3;e8&f%e\\re-g<h!(e<\\0f>e\\n g\x1Bee\\b0d:\\ff\\t\\ve$\\\'i\x07f\\bd::f0i\x07e1d:+e\\f:ee%3e-)ee\\bf\\t\\0e(g;fi\\0d?!h6g:\\\'i\\rg=.e=f6d<g\\\'\\0f\\0\\\'ff\\b?d:\\\'i\\nf\\b2e\x07:e#fd:$e01d8d?e%g(\\ve:&ef0d:\\vd8f4d8*e11d8ffg\\t9f.\\ne\\bi!fe0\\ve1d:i(f\\b7h4"e\\n!e#0i3e\\ne6h4"g;ef\\fe92i(f\\bg+\\ve\\b)g\x1B\\nh\\0hf\\bi=e\\fh#g(f\\b6f/h5\x1Bf\x07ff\\v\x1Bee.\\ff4gf/g<g\x1Bd<d<4e(f\x1Bi"ee\\r+gd<f h+e#\x07e,e1h\\t/e%=ee\\bg,&e\\bid;6g\\t9g9d8\\re/h\\v1f\x07h5d:\\\'f 9f,ff>e/g"<e,d<f0ff\x1B4e\\n d:+ee\\fe-&e/e\\n(i\\0e\\bef%i.g-f,f\x07g>i#g;?h\\t2g(3e.g;\\bd:gg\\t)d>\x1Bf1fg\\ve\\n\x1Bi\x07d8%i\x07\\rf08h?egf\\tig+d:\\te/9h1!h49g(d8\\re%=g;e/9e\\re\\bd?h?\x1Bg9h/e=1i3d<e\\n?d8\\re0f,#h5e96d8f\\tg9f9ee(f0d?!g(h.>f=e="h1!h5f <g*g 4ig\\0i\x07\\re$\\\'d:f/f/d8f:h=e\\fe7%e.\\fg>eeg;d8\\0e\x07:g\\t\\bf\\ti\\0 g"ef&e5g(d:d?ge\x1B g4 d8-e\\ve-e(h44e\x1B>f\\0f\x1Bi?fe#d;7gh4"e:e0e.\\tff-&f1\\ti\x07\\fi"e\\b\x1Be;:e$)g):i&e\\be.\\fei)1e\\n(d8\\vi"d8\\re\\rh/d?!fd9\\ti3e\\th\\v1e\x1B=f<d:.e\x1Bd:\\vg)e.6g>$d<ef0e\\r3e/e\\rg(1e.6e7e\\n(g;f3e\\b0f3(fe0e-&f\\0\\\'h=h\\0g g!,d;6h\\\'g\\vf8f%fg,i&i i;i\x07i\\0g(f1h\\vge.d8;g.!i6f.5h(;e\\ng?;h/fe\\b)ee%=d<<d9i\\0h./f=e7%g\\v\\0f\\vd9h.8g/d?e9e;f&e?5e$\\\'e\\vf:g%(gh\\\'#e\\f?e\\rcuandoenviarmadridbuscariniciotiempoporquecuentaestadopuedenjuegoscontraestC!nnombretienenperfilmaneraamigosciudadcentroaunquepuedesdentroprimerpreciosegC:nbuenosvolverpuntossemanahabC-aagostonuevosunidoscarlosequiponiC1osmuchosalgunacorreoimagenpartirarribamarC-ahombreempleoverdadcambiomuchasfueronpasadolC-neaparecenuevascursosestabaquierolibroscuantoaccesomiguelvarioscuatrotienesgruposserC!neuropamediosfrenteacercademC!sofertacochesmodeloitalialetrasalgC:ncompracualesexistecuerposiendoprensallegarviajesdineromurciapodrC!puestodiariopuebloquieremanuelpropiocrisisciertoseguromuertefuentecerrargrandeefectopartesmedidapropiaofrecetierrae-mailvariasformasfuturoobjetoseguirriesgonormasmismosC:nicocaminositiosrazC3ndebidopruebatoledotenC-ajesC:sesperococinaorigentiendacientocC!dizhablarserC-alatinafuerzaestiloguerraentrarC)xitolC3pezagendavC-deoevitarpaginametrosjavierpadresfC!cilcabezaC!reassalidaenvC-ojapC3nabusosbienestextosllevarpuedanfuertecomC:nclaseshumanotenidobilbaounidadestC!seditarcreadoP4P;QQ\x07QP>P:P0P:P8P;P8Q\\rQP>P2QP5P5P3P>P?Q\\0P8QP0P:P5Q\\tP5QP6P5PP0P:P1P5P7P1Q\\vP;P>P=P8PQP5P?P>P4P-QP>QP>P<Q\x07P5P<P=P5QP;P5QQ\\0P0P7P>P=P0P3P4P5P<P=P5PP;QPQ\\0P8P=P0QP=P8QQP5P<P:QP>P3P>P4P2P>QQP0P<P!P(PP<P0QP\\\'QP>P2P0QP2P0P<P5P<QP"P0P:P4P2P0P=P0P<Q\\rQP8Q\\rQQPP0P<QP5QP?Q\\0P>QQQP=P0P4P4P=QPP>QQQ\\0P8P=P5P9PP0QP=P8P<QP0P<QP>QQ\\0QP1PP=P8P<P8Q\\0P=P5P5PPPP;P8QQ\\rQP0PP=P0P=P5P<P4P>P<P<P>P9P4P2P5P>P=P>QQP4`$`%\x07`$9`%\\b`$`%\\0`$8`%\x07`$`$>`$`%\\v`$`$0`$*`$0`$(`%\x07`$`$`$`$?`$-`%\\0`$\x07`$8`$`$0`$$`%\\v`$9`%\\v`$`$*`$9`%\\0`$/`$9`$/`$>`$$`$`$%`$>jagran`$`$`$`%\\v`$`$,`$&`%\\v`$`$\\b`$`$>`$`$`$9`$.`$\x07`$(`$5`$9`$/`%\x07`$%`%\x07`$%`%\\0`$`$0`$`$,`$&`%\\0`$`$\\b`$`%\\0`$5`%\x07`$(`$\\b`$(`$`$9`$0`$\\t`$8`$.`%\x07`$`$.`$5`%\\v`$2`%\x07`$8`$,`$.`$\\b`$&`%\x07`$`$0`$`$.`$,`$8`$-`$0`$,`$(`$`$2`$.`$(`$`$`$8`%\\0`$2`%\\0X9YY\\tX%YY\\tY\x07X0X\\\'X"X.X1X9X/X/X\\\'YY\\tY\x07X0Y\x07X5Y\\bX1X:Y\\nX1YX\\\'YY\\bYX\\\'X(Y\\nYX9X1X6X0YYY\x07YX\\\'Y\\nY\\bYYX\\\'YX9YY\\nX\\\'YX\\\'YYYX-X*Y\\tYX(YY\\bX-X)X\\\'X.X1YYX7X9X(X/X1YYX%X0X\\\'YYX\\\'X\\\'X-X/X%YX\\\'YY\\nY\x07X(X9X6YY\\nYX(X-X+Y\\bYYY\\bY\x07Y\\bX#YX\\\'X,X/X\\\'YY\x07X\\\'X3YYX9YX/YY\\nX3X9X(X1X5YY\\tYYX0X(Y\x07X\\\'X#YY\x07YX+YYYX*X\\\'YX\\\'X-Y\\nX+YX5X1X4X1X-X-Y\\bYY\\bYY\\nX\\\'X0X\\\'YYYYX1X)X\\\'YX*X\\\'YYX#X(Y\\bX.X\\\'X5X#YX*X\\\'YY\x07X\\\'YY\\nX9X6Y\\bY\\bYX/X\\\'X(YX.Y\\nX1X(YX*YYYX4X\\\'X!Y\\bY\x07Y\\nX\\\'X(Y\\bYX5X5Y\\bYX\\\'X1YYX#X-X/YX-YX9X/YX1X#Y\\nX\\\'X-X)YX*X(X/Y\\bYY\\nX,X(YYY\x07X*X-X*X,Y\x07X)X3YX)Y\\nX*YYX1X)X:X2X)YYX3X(Y\\nX*YYY\x07YYX\\\'X*YYYYX(YYX\\\'X9YY\x07X#Y\\bYX4Y\\nX!YY\\bX1X#YX\\\'YY\\nYX(YYX0X\\\'X*X1X*X(X(X#YY\x07YX3X\\\'YYX(Y\\nX9YYX/X-X3YYY\x07YX4X9X1X#Y\x07YX4Y\x07X1YX7X1X7YX(profileservicedefaulthimselfdetailscontentsupportstartedmessagesuccessfashion<title>countryaccountcreatedstoriesresultsrunningprocesswritingobjectsvisiblewelcomearticleunknownnetworkcompanydynamicbrowserprivacyproblemServicerespectdisplayrequestreservewebsitehistoryfriendsoptionsworkingversionmillionchannelwindow.addressvisitedweathercorrectproductedirectforwardyou canremovedsubjectcontrolarchivecurrentreadinglibrarylimitedmanagerfurthersummarymachineminutesprivatecontextprogramsocietynumberswrittenenabledtriggersourcesloadingelementpartnerfinallyperfectmeaningsystemskeepingculture&quot;,journalprojectsurfaces&quot;expiresreviewsbalanceEnglishContentthroughPlease opinioncontactaverageprimaryvillageSpanishgallerydeclinemeetingmissionpopularqualitymeasuregeneralspeciessessionsectionwriterscounterinitialreportsfiguresmembersholdingdisputeearlierexpressdigitalpictureAnothermarriedtrafficleadingchangedcentralvictoryimages/reasonsstudiesfeaturelistingmust beschoolsVersionusuallyepisodeplayinggrowingobviousoverlaypresentactions</ul>\\r\\nwrapperalreadycertainrealitystorageanotherdesktopofferedpatternunusualDigitalcapitalWebsitefailureconnectreducedAndroiddecadesregular &amp; animalsreleaseAutomatgettingmethodsnothingPopularcaptionletterscapturesciencelicensechangesEngland=1&amp;History = new CentralupdatedSpecialNetworkrequirecommentwarningCollegetoolbarremainsbecauseelectedDeutschfinanceworkersquicklybetweenexactlysettingdiseaseSocietyweaponsexhibit&lt;!--Controlclassescoveredoutlineattacksdevices(windowpurposetitle="Mobile killingshowingItaliandroppedheavilyeffects-1\\\']);\\nconfirmCurrentadvancesharingopeningdrawingbillionorderedGermanyrelated</form>includewhetherdefinedSciencecatalogArticlebuttonslargestuniformjourneysidebarChicagoholidayGeneralpassage,&quot;animatefeelingarrivedpassingnaturalroughly.\\n\\nThe but notdensityBritainChineselack oftributeIreland" data-factorsreceivethat isLibraryhusbandin factaffairsCharlesradicalbroughtfindinglanding:lang="return leadersplannedpremiumpackageAmericaEdition]&quot;Messageneed tovalue="complexlookingstationbelievesmaller-mobilerecordswant tokind ofFirefoxyou aresimilarstudiedmaximumheadingrapidlyclimatekingdomemergedamountsfoundedpioneerformuladynastyhow to SupportrevenueeconomyResultsbrothersoldierlargelycalling.&quot;AccountEdward segmentRobert effortsPacificlearnedup withheight:we haveAngelesnations_searchappliedacquiremassivegranted: falsetreatedbiggestbenefitdrivingStudiesminimumperhapsmorningsellingis usedreversevariant role="missingachievepromotestudentsomeoneextremerestorebottom:evolvedall thesitemapenglishway to  AugustsymbolsCompanymattersmusicalagainstserving})();\\r\\npaymenttroubleconceptcompareparentsplayersregionsmonitor \\\'\\\'The winningexploreadaptedGalleryproduceabilityenhancecareers). The collectSearch ancientexistedfooter handlerprintedconsoleEasternexportswindowsChannelillegalneutralsuggest_headersigning.html">settledwesterncausing-webkitclaimedJusticechaptervictimsThomas mozillapromisepartieseditionoutside:false,hundredOlympic_buttonauthorsreachedchronicdemandssecondsprotectadoptedprepareneithergreatlygreateroverallimprovecommandspecialsearch.worshipfundingthoughthighestinsteadutilityquarterCulturetestingclearlyexposedBrowserliberal} catchProjectexamplehide();FloridaanswersallowedEmperordefenseseriousfreedomSeveral-buttonFurtherout of != nulltrainedDenmarkvoid(0)/all.jspreventRequestStephen\\n\\nWhen observe</h2>\\r\\nModern provide" alt="borders.\\n\\nFor \\n\\nMany artistspoweredperformfictiontype ofmedicalticketsopposedCouncilwitnessjusticeGeorge Belgium...</a>twitternotablywaitingwarfare Other rankingphrasesmentionsurvivescholar</p>\\r\\n Countryignoredloss ofjust asGeorgiastrange<head><stopped1\\\']);\\r\\nislandsnotableborder:list ofcarried100,000</h3>\\n severalbecomesselect wedding00.htmlmonarchoff theteacherhighly biologylife ofor evenrise of&raquo;plusonehunting(thoughDouglasjoiningcirclesFor theAncientVietnamvehiclesuch ascrystalvalue =Windowsenjoyeda smallassumed<a id="foreign All rihow theDisplayretiredhoweverhidden;battlesseekingcabinetwas notlook atconductget theJanuaryhappensturninga:hoverOnline French lackingtypicalextractenemieseven ifgeneratdecidedare not/searchbeliefs-image:locatedstatic.login">convertviolententeredfirst">circuitFinlandchemistshe was10px;">as suchdivided</span>will beline ofa greatmystery/index.fallingdue to railwaycollegemonsterdescentit withnuclearJewish protestBritishflowerspredictreformsbutton who waslectureinstantsuicidegenericperiodsmarketsSocial fishingcombinegraphicwinners<br /><by the NaturalPrivacycookiesoutcomeresolveSwedishbrieflyPersianso muchCenturydepictscolumnshousingscriptsnext tobearingmappingrevisedjQuery(-width:title">tooltipSectiondesignsTurkishyounger.match(})();\\n\\nburningoperatedegreessource=Richardcloselyplasticentries</tr>\\r\\ncolor:#ul id="possessrollingphysicsfailingexecutecontestlink toDefault<br />\\n: true,chartertourismclassicproceedexplain</h1>\\r\\nonline.?xml vehelpingdiamonduse theairlineend --\\x3e).attr(readershosting#ffffffrealizeVincentsignals src="/ProductdespitediversetellingPublic held inJoseph theatreaffects<style>a largedoesn\\\'tlater, ElementfaviconcreatorHungaryAirportsee theso thatMichaelSystemsPrograms, and  width=e&quot;tradingleft">\\npersonsGolden Affairsgrammarformingdestroyidea ofcase ofoldest this is.src = cartoonregistrCommonsMuslimsWhat isin manymarkingrevealsIndeed,equally/show_aoutdoorescape(Austriageneticsystem,In the sittingHe alsoIslandsAcademy\\n\\t\\t\\x3c!--Daniel bindingblock">imposedutilizeAbraham(except{width:putting).html(|| [];\\nDATA[ *kitchenmountedactual dialectmainly _blank\\\'installexpertsif(typeIt also&copy; ">Termsborn inOptionseasterntalkingconcerngained ongoingjustifycriticsfactoryits ownassaultinvitedlastinghis ownhref="/" rel="developconcertdiagramdollarsclusterphp?id=alcohol);})();using a><span>vesselsrevivalAddressamateurandroidallegedillnesswalkingcentersqualifymatchesunifiedextinctDefensedied in\\n\\t\\x3c!-- customslinkingLittle Book ofeveningmin.js?are thekontakttoday\\\'s.html" target=wearingAll Rig;\\n})();raising Also, crucialabout">declare--\\x3e\\n<scfirefoxas muchappliesindex, s, but type = \\n\\r\\n\\x3c!--towardsRecordsPrivateForeignPremierchoicesVirtualreturnsCommentPoweredinline;povertychamberLiving volumesAnthonylogin" RelatedEconomyreachescuttinggravitylife inChapter-shadowNotable</td>\\r\\n returnstadiumwidgetsvaryingtravelsheld bywho arework infacultyangularwho hadairporttown of\\n\\nSome \\\'click\\\'chargeskeywordit willcity of(this);Andrew unique checkedor more300px; return;rsion="pluginswithin herselfStationFederalventurepublishsent totensionactresscome tofingersDuke ofpeople,exploitwhat isharmonya major":"httpin his menu">\\nmonthlyofficercouncilgainingeven inSummarydate ofloyaltyfitnessand wasemperorsupremeSecond hearingRussianlongestAlbertalateralset of small">.appenddo withfederalbank ofbeneathDespiteCapitalgrounds), and percentit fromclosingcontainInsteadfifteenas well.yahoo.respondfighterobscurereflectorganic= Math.editingonline paddinga wholeonerroryear ofend of barrierwhen itheader home ofresumedrenamedstrong>heatingretainscloudfrway of March 1knowingin partBetweenlessonsclosestvirtuallinks">crossedEND --\\x3efamous awardedLicenseHealth fairly wealthyminimalAfricancompetelabel">singingfarmersBrasil)discussreplaceGregoryfont copursuedappearsmake uproundedboth ofblockedsaw theofficescoloursif(docuwhen heenforcepush(fuAugust UTF-8">Fantasyin mostinjuredUsuallyfarmingclosureobject defenceuse of Medical<body>\\nevidentbe usedkeyCodesixteenIslamic#000000entire widely active (typeofone cancolor =speakerextendsPhysicsterrain<tbody>funeralviewingmiddle cricketprophetshifteddoctorsRussell targetcompactalgebrasocial-bulk ofman and</td>\\n he left).val()false);logicalbankinghome tonaming Arizonacredits);\\n});\\nfounderin turnCollinsbefore But thechargedTitle">CaptainspelledgoddessTag --\\x3eAdding:but wasRecent patientback in=false&Lincolnwe knowCounterJudaismscript altered\\\']);\\n  has theunclearEvent\\\',both innot all\\n\\n\\x3c!-- placinghard to centersort ofclientsstreetsBernardassertstend tofantasydown inharbourFreedomjewelry/about..searchlegendsis mademodern only ononly toimage" linear painterand notrarely acronymdelivershorter00&amp;as manywidth="/* <![Ctitle =of the lowest picked escapeduses ofpeoples PublicMatthewtacticsdamagedway forlaws ofeasy to windowstrong  simple}catch(seventhinfoboxwent topaintedcitizenI don\\\'tretreat. Some ww.");\\nbombingmailto:made in. Many carries||{};wiwork ofsynonymdefeatsfavoredopticalpageTraunless sendingleft"><comScorAll thejQuery.touristClassicfalse" Wilhelmsuburbsgenuinebishops.split(global followsbody ofnominalContactsecularleft tochiefly-hidden-banner</li>\\n\\n. When in bothdismissExplorealways via thespaC1olwelfareruling arrangecaptainhis sonrule ofhe tookitself,=0&amp;(calledsamplesto makecom/pagMartin Kennedyacceptsfull ofhandledBesides//--\\x3e</able totargetsessencehim to its by common.mineralto takeways tos.org/ladvisedpenaltysimple:if theyLettersa shortHerbertstrikes groups.lengthflightsoverlapslowly lesser social </p>\\n\\t\\tit intoranked rate oful>\\r\\n  attemptpair ofmake itKontaktAntoniohaving ratings activestreamstrapped").css(hostilelead tolittle groups,Picture--\\x3e\\r\\n\\r\\n rows=" objectinverse<footerCustomV><\\\\/scrsolvingChamberslaverywoundedwhereas!= \\\'undfor allpartly -right:Arabianbacked centuryunit ofmobile-Europe,is homerisk ofdesiredClintoncost ofage of become none ofp&quot;Middle ead\\\')[0Criticsstudios>&copy;group">assemblmaking pressedwidget.ps:" ? rebuiltby someFormer editorsdelayedCanonichad thepushingclass="but arepartialBabylonbottom carrierCommandits useAs withcoursesa thirddenotesalso inHouston20px;">accuseddouble goal ofFamous ).bind(priests Onlinein Julyst + "gconsultdecimalhelpfulrevivedis veryr\\\'+\\\'iptlosing femalesis alsostringsdays ofarrivalfuture <objectforcingString(" />\\n\\t\\there isencoded.  The balloondone by/commonbgcolorlaw of Indianaavoidedbut the2px 3pxjquery.after apolicy.men andfooter-= true;for usescreen.Indian image =family,http:// &nbsp;driverseternalsame asnoticedviewers})();\\n is moreseasonsformer the newis justconsent Searchwas thewhy theshippedbr><br>width: height=made ofcuisineis thata very Admiral fixed;normal MissionPress, ontariocharsettry to invaded="true"spacingis mosta more totallyfall of});\\r\\n  immensetime inset outsatisfyto finddown tolot of Playersin Junequantumnot thetime todistantFinnishsrc = (single help ofGerman law andlabeledforestscookingspace">header-well asStanleybridges/globalCroatia About [0];\\n  it, andgroupedbeing a){throwhe madelighterethicalFFFFFF"bottom"like a employslive inas seenprintermost ofub-linkrejectsand useimage">succeedfeedingNuclearinformato helpWomen\\\'sNeitherMexicanprotein<table by manyhealthylawsuitdevised.push({sellerssimply Through.cookie Image(older">us.js"> Since universlarger open to!-- endlies in\\\']);\\r\\n  marketwho is ("DOMComanagedone fortypeof Kingdomprofitsproposeto showcenter;made itdressedwere inmixtureprecisearisingsrc = \\\'make a securedBaptistvoting \\n\\t\\tvar March 2grew upClimate.removeskilledway the</head>face ofacting right">to workreduceshas haderectedshow();action=book ofan area== "htt<header\\n<html>conformfacing cookie.rely onhosted .customhe wentbut forspread Family a meansout theforums.footage">MobilClements" id="as highintense--\\x3e\\x3c!--female is seenimpliedset thea stateand hisfastestbesidesbutton_bounded"><img Infoboxevents,a youngand areNative cheaperTimeoutand hasengineswon the(mostlyright: find a -bottomPrince area ofmore ofsearch_nature,legallyperiod,land ofor withinducedprovingmissilelocallyAgainstthe wayk&quot;px;">\\r\\npushed abandonnumeralCertainIn thismore inor somename isand, incrownedISBN 0-createsOctobermay notcenter late inDefenceenactedwish tobroadlycoolingonload=it. TherecoverMembersheight assumes<html>\\npeople.in one =windowfooter_a good reklamaothers,to this_cookiepanel">London,definescrushedbaptismcoastalstatus title" move tolost inbetter impliesrivalryservers SystemPerhapses and contendflowinglasted rise inGenesisview ofrising seem tobut in backinghe willgiven agiving cities.flow of Later all butHighwayonly bysign ofhe doesdiffersbattery&amp;lasinglesthreatsintegertake onrefusedcalled =US&ampSee thenativesby thissystem.head of:hover,lesbiansurnameand allcommon/header__paramsHarvard/pixel.removalso longrole ofjointlyskyscraUnicodebr />\\r\\nAtlantanucleusCounty,purely count">easily build aonclicka givenpointerh&quot;events else {\\nditionsnow the, with man whoorg/Webone andcavalryHe diedseattle00,000 {windowhave toif(windand itssolely m&quot;renewedDetroitamongsteither them inSenatorUs</a><King ofFrancis-produche usedart andhim andused byscoringat hometo haverelatesibilityfactionBuffalolink"><what hefree toCity ofcome insectorscountedone daynervoussquare };if(goin whatimg" alis onlysearch/tuesdaylooselySolomonsexual - <a hrmedium"DO NOT France,with a war andsecond take a >\\r\\n\\r\\n\\r\\nmarket.highwaydone inctivity"last">obligedrise to"undefimade to Early praisedin its for hisathleteJupiterYahoo! termed so manyreally s. The a woman?value=direct right" bicycleacing="day andstatingRather,higher Office are nowtimes, when a pay foron this-link">;borderaround annual the Newput the.com" takin toa brief(in thegroups.; widthenzymessimple in late{returntherapya pointbanninginks">\\n();" rea place\\\\u003Caabout atr>\\r\\n\\t\\tccount gives a<SCRIPTRailwaythemes/toolboxById("xhumans,watchesin some if (wicoming formats Under but hashanded made bythan infear ofdenoted/iframeleft involtagein eacha&quot;base ofIn manyundergoregimesaction </p>\\r\\n<ustomVa;&gt;</importsor thatmostly &amp;re size="</a></ha classpassiveHost = WhetherfertileVarious=[];(fucameras/></td>acts asIn some>\\r\\n\\r\\n<!organis <br />BeijingcatalC deutscheuropeueuskaragaeilgesvenskaespaC1amensajeusuariotrabajomC)xicopC!ginasiempresistemaoctubreduranteaC1adirempresamomentonuestroprimeratravC)sgraciasnuestraprocesoestadoscalidadpersonanC:meroacuerdomC:sicamiembroofertasalgunospaC-sesejemploderechoademC!sprivadoagregarenlacesposiblehotelessevillaprimeroC:ltimoeventosarchivoculturamujeresentradaanuncioembargomercadograndesestudiomejoresfebrerodiseC1oturismocC3digoportadaespaciofamiliaantoniopermiteguardaralgunaspreciosalguiensentidovisitastC-tuloconocersegundoconsejofranciaminutossegundatenemosefectosmC!lagasesiC3nrevistagranadacompraringresogarcC-aacciC3necuadorquienesinclusodeberC!materiahombresmuestrapodrC-amaC1anaC:ltimaestamosoficialtambienningC:nsaludospodemosmejorarpositionbusinesshomepagesecuritylanguagestandardcampaignfeaturescategoryexternalchildrenreservedresearchexchangefavoritetemplatemilitaryindustryservicesmaterialproductsz-index:commentssoftwarecompletecalendarplatformarticlesrequiredmovementquestionbuildingpoliticspossiblereligionphysicalfeedbackregisterpicturesdisabledprotocolaudiencesettingsactivityelementslearninganythingabstractprogressoverviewmagazineeconomictrainingpressurevarious <strong>propertyshoppingtogetheradvancedbehaviordownloadfeaturedfootballselectedLanguagedistanceremembertrackingpasswordmodifiedstudentsdirectlyfightingnortherndatabasefestivalbreakinglocationinternetdropdownpracticeevidencefunctionmarriageresponseproblemsnegativeprogramsanalysisreleasedbanner">purchasepoliciesregionalcreativeargumentbookmarkreferrerchemicaldivisioncallbackseparateprojectsconflicthardwareinterestdeliverymountainobtained= false;for(var acceptedcapacitycomputeridentityaircraftemployedproposeddomesticincludesprovidedhospitalverticalcollapseapproachpartnerslogo"><adaughterauthor" culturalfamilies/images/assemblypowerfulteachingfinisheddistrictcriticalcgi-bin/purposesrequireselectionbecomingprovidesacademicexerciseactuallymedicineconstantaccidentMagazinedocumentstartingbottom">observed: &quot;extendedpreviousSoftwarecustomerdecisionstrengthdetailedslightlyplanningtextareacurrencyeveryonestraighttransferpositiveproducedheritageshippingabsolutereceivedrelevantbutton" violenceanywherebenefitslaunchedrecentlyalliancefollowedmultiplebulletinincludedoccurredinternal$(this).republic><tr><tdcongressrecordedultimatesolution<ul id="discoverHome</a>websitesnetworksalthoughentirelymemorialmessagescontinueactive">somewhatvictoriaWestern  title="LocationcontractvisitorsDownloadwithout right">\\nmeasureswidth = variableinvolvedvirginianormallyhappenedaccountsstandingnationalRegisterpreparedcontrolsaccuratebirthdaystrategyofficialgraphicscriminalpossiblyconsumerPersonalspeakingvalidateachieved.jpg" />machines</h2>\\n  keywordsfriendlybrotherscombinedoriginalcomposedexpectedadequatepakistanfollow" valuable</label>relativebringingincreasegovernorplugins/List of Header">" name=" (&quot;graduate</head>\\ncommercemalaysiadirectormaintain;height:schedulechangingback to catholicpatternscolor: #greatestsuppliesreliable</ul>\\n\\t\\t<select citizensclothingwatching<li id="specificcarryingsentence<center>contrastthinkingcatch(e)southernMichael merchantcarouselpadding:interior.split("lizationOctober ){returnimproved--&gt;\\n\\ncoveragechairman.png" />subjectsRichard whateverprobablyrecoverybaseballjudgmentconnect..css" /> websitereporteddefault"/></a>\\r\\nelectricscotlandcreationquantity. ISBN 0did not instance-search-" lang="speakersComputercontainsarchivesministerreactiondiscountItalianocriteriastrongly: \\\'http:\\\'script\\\'coveringofferingappearedBritish identifyFacebooknumerousvehiclesconcernsAmericanhandlingdiv id="William provider_contentaccuracysection andersonflexibleCategorylawrence<script>layout="approved maximumheader"></table>Serviceshamiltoncurrent canadianchannels/themes//articleoptionalportugalvalue=""intervalwirelessentitledagenciesSearch" measuredthousandspending&hellip;new Date" size="pageNamemiddle" " /></a>hidden">sequencepersonaloverflowopinionsillinoislinks">\\n\\t<title>versionssaturdayterminalitempropengineersectionsdesignerproposal="false"EspaC1olreleasessubmit" er&quot;additionsymptomsorientedresourceright"><pleasurestationshistory.leaving  border=contentscenter">.\\n\\nSome directedsuitablebulgaria.show();designedGeneral conceptsExampleswilliamsOriginal"><span>search">operatorrequestsa &quot;allowingDocumentrevision. \\n\\nThe yourselfContact michiganEnglish columbiapriorityprintingdrinkingfacilityreturnedContent officersRussian generate-8859-1"indicatefamiliar qualitymargin:0 contentviewportcontacts-title">portable.length eligibleinvolvesatlanticonload="default.suppliedpaymentsglossary\\n\\nAfter guidance</td><tdencodingmiddle">came to displaysscottishjonathanmajoritywidgets.clinicalthailandteachers<head>\\n\\taffectedsupportspointer;toString</small>oklahomawill be investor0" alt="holidaysResourcelicensed (which . After considervisitingexplorerprimary search" android"quickly meetingsestimate;return ;color:# height=approval, &quot; checked.min.js"magnetic></a></hforecast. While thursdaydvertise&eacute;hasClassevaluateorderingexistingpatients Online coloradoOptions"campbell\\x3c!-- end</span><<br />\\r\\n_popups|sciences,&quot; quality Windows assignedheight: <b classle&quot; value=" Companyexamples<iframe believespresentsmarshallpart of properly).\\n\\nThe taxonomymuch of </span>\\n" data-srtuguC*sscrollTo project<head>\\r\\nattorneyemphasissponsorsfancyboxworld\\\'s wildlifechecked=sessionsprogrammpx;font- Projectjournalsbelievedvacationthompsonlightingand the special border=0checking</tbody><button Completeclearfix\\n<head>\\narticle <sectionfindingsrole in popular  Octoberwebsite exposureused to  changesoperatedclickingenteringcommandsinformed numbers  </div>creatingonSubmitmarylandcollegesanalyticlistingscontact.loggedInadvisorysiblingscontent"s&quot;)s. This packagescheckboxsuggestspregnanttomorrowspacing=icon.pngjapanesecodebasebutton">gamblingsuch as , while </span> missourisportingtop:1px .</span>tensionswidth="2lazyloadnovemberused in height="cript">\\n&nbsp;</<tr><td height:2/productcountry include footer" &lt;!-- title"></jquery.</form>\\n(g.\\0d=)(g9i+)hrvatskiitalianoromC"nDtC<rkC\\\'eX\\\'X1X/Y\\btambiC)nnoticiasmensajespersonasderechosnacionalserviciocontactousuariosprogramagobiernoempresasanunciosvalenciacolombiadespuC)sdeportesproyectoproductopC:bliconosotroshistoriapresentemillonesmediantepreguntaanteriorrecursosproblemasantiagonuestrosopiniC3nimprimirmientrasamC)ricavendedorsociedadrespectorealizarregistropalabrasinterC)sentoncesespecialmiembrosrealidadcC3rdobazaragozapC!ginassocialesbloqueargestiC3nalquilersistemascienciascompletoversiC3ncompletaestudiospC:blicaobjetivoalicantebuscadorcantidadentradasaccionesarchivossuperiormayorC-aalemaniafunciC3nC:ltimoshaciendoaquellosediciC3nfernandoambientefacebooknuestrasclientesprocesosbastantepresentareportarcongresopublicarcomerciocontratojC3venesdistritotC)cnicaconjuntoenergC-atrabajarasturiasrecienteutilizarboletC-nsalvadorcorrectatrabajosprimerosnegocioslibertaddetallespantallaprC3ximoalmerC-aanimalesquiC)nescorazC3nsecciC3nbuscandoopcionesexteriorconceptotodavC-agalerC-aescribirmedicinalicenciaconsultaaspectoscrC-ticadC3laresjusticiadeberC!nperC-odonecesitamantenerpequeC1orecibidatribunaltenerifecanciC3ncanariasdescargadiversosmallorcarequieretC)cnicodeberC-aviviendafinanzasadelantefuncionaconsejosdifC-cilciudadesantiguasavanzadatC)rminounidadessC!nchezcampaC1asoftonicrevistascontienesectoresmomentosfacultadcrC)ditodiversassupuestofactoressegundospequeC1aP3P>P4P0P5QP;P8P5QQQ\\fP1Q\\vP;P>P1Q\\vQQ\\fQ\\rQP>P<PQP;P8QP>P3P>P<P5P=QP2QP5QQ\\rQP>P9P4P0P6P5P1Q\\vP;P8P3P>P4QP4P5P=Q\\fQ\\rQP>QP1Q\\vP;P0QP5P1QP>P4P8P=QP5P1P5P=P0P4P>QP0P9QQP>QP>P=P5P3P>QP2P>P8QP2P>P9P8P3Q\\0Q\\vQP>P6P5P2QP5P<QP2P>QP;P8Q\\bQ\\fQ\\rQP8QP?P>P:P0P4P=P5P9P4P>P<P0P<P8Q\\0P0P;P8P1P>QP5P<QQP>QQP4P2QQQP5QP8P;QP4P8P4P5P;P>P<P8Q\\0P5QP5P1QQP2P>P5P2P8P4P5Q\x07P5P3P>Q\\rQP8P<QQ\x07P5QQP5P<Q\\vQP5P=Q\\vQQP0P;P2P5P4Q\\fQP5P<P5P2P>P4Q\\vQP5P1P5P2Q\\vQ\\bP5P=P0P<P8QP8P?P0QP>P<QP?Q\\0P0P2P;P8QP0P>P4P=P0P3P>P4Q\\vP7P=P0QP<P>P3QP4Q\\0QP3P2QP5P9P8P4P5QP:P8P=P>P>P4P=P>P4P5P;P0P4P5P;P5QQ\\0P>P:P8QP=QP2P5QQ\\fPQQQ\\fQ\\0P0P7P0P=P0Q\\bP8X\\\'YYY\x07X\\\'YX*Y\\nX,YY\\nX9X.X\\\'X5X)X\\\'YX0Y\\nX9YY\\nY\x07X,X/Y\\nX/X\\\'YX"YX\\\'YX1X/X*X-YYX5YX-X)YX\\\'YX*X\\\'YYY\\nY\\nYY\\bYX4X(YX)YY\\nY\x07X\\\'X(YX\\\'X*X-Y\\bX\\\'X!X#YX+X1X.YX\\\'YX\\\'YX-X(X/YY\\nYX/X1Y\\bX3X\\\'X6X:X7X*YY\\bYY\x07YX\\\'YX3X\\\'X-X)YX\\\'X/Y\\nX\\\'YX7X(X9YY\\nYX4YX1X\\\'Y\\nYYYYYY\x07X\\\'X4X1YX)X1X&Y\\nX3YX4Y\\nX7YX\\\'X0X\\\'X\\\'YYYX4X(X\\\'X(X*X9X(X1X1X-YX)YX\\\'YX)Y\\nYY\\bYYX1YX2YYYX)X#X-YX/YYX(Y\\nY\\nX9YY\\nX5Y\\bX1X)X7X1Y\\nYX4X\\\'X1YX,Y\\bX\\\'YX#X.X1Y\\tYX9YX\\\'X\\\'X(X-X+X9X1Y\\bX6X(X4YYYX3X,YX(YX\\\'YX.X\\\'YX/YX*X\\\'X(YYY\\nX)X(X/Y\\bYX#Y\\nX6X\\\'Y\\nY\\bX,X/YX1Y\\nYYX*X(X*X#YX6YYX7X(X.X\\\'YX+X1X(X\\\'X1YX\\\'YX6YX\\\'X-YY\\tYYX3Y\x07X#Y\\nX\\\'YX1X/Y\\bX/X#YY\x07X\\\'X/Y\\nYX\\\'X\\\'YX\\\'YYX9X1X6X*X9YYX/X\\\'X.YYYYY\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\x07\x07\\0\\b\\t\\n\\v\\f\\r\\r\\f\\v\\n\\t\\b\x1B\x1B\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\b\\0\\b\\0\\b\\0\\b\\0\\0\\0\\0\\0\\0\\0\\0\\0\x07resourcescountriesquestionsequipmentcommunityavailablehighlightDTD/xhtmlmarketingknowledgesomethingcontainerdirectionsubscribeadvertisecharacter" value="</select>Australia" class="situationauthorityfollowingprimarilyoperationchallengedevelopedanonymousfunction functionscompaniesstructureagreement" title="potentialeducationargumentssecondarycopyrightlanguagesexclusivecondition</form>\\r\\nstatementattentionBiography} else {\\nsolutionswhen the Analyticstemplatesdangeroussatellitedocumentspublisherimportantprototypeinfluence&raquo;</effectivegenerallytransformbeautifultransportorganizedpublishedprominentuntil thethumbnailNational .focus();over the migrationannouncedfooter">\\nexceptionless thanexpensiveformationframeworkterritoryndicationcurrentlyclassNamecriticismtraditionelsewhereAlexanderappointedmaterialsbroadcastmentionedaffiliate</option>treatmentdifferent/default.Presidentonclick="biographyotherwisepermanentFranC\\\'aisHollywoodexpansionstandards</style>\\nreductionDecember preferredCambridgeopponentsBusiness confusion>\\n<title>presentedexplaineddoes not worldwideinterfacepositionsnewspaper</table>\\nmountainslike the essentialfinancialselectionaction="/abandonedEducationparseInt(stabilityunable to</title>\\nrelationsNote thatefficientperformedtwo yearsSince thethereforewrapper">alternateincreasedBattle ofperceivedtrying tonecessaryportrayedelectionsElizabeth</iframe>discoveryinsurances.length;legendaryGeographycandidatecorporatesometimesservices.inherited</strong>CommunityreligiouslocationsCommitteebuildingsthe worldno longerbeginningreferencecannot befrequencytypicallyinto the relative;recordingpresidentinitiallytechniquethe otherit can beexistenceunderlinethis timetelephoneitemscopepracticesadvantage);return For otherprovidingdemocracyboth the extensivesufferingsupportedcomputers functionpracticalsaid thatit may beEnglish</from the scheduleddownloads</label>\\nsuspectedmargin: 0spiritual</head>\\n\\nmicrosoftgraduallydiscussedhe becameexecutivejquery.jshouseholdconfirmedpurchasedliterallydestroyedup to thevariationremainingit is notcenturiesJapanese among thecompletedalgorithminterestsrebellionundefinedencourageresizableinvolvingsensitiveuniversalprovision(althoughfeaturingconducted), which continued-header">February numerous overflow:componentfragmentsexcellentcolspan="technicalnear the Advanced source ofexpressedHong Kong Facebookmultiple mechanismelevationoffensive</form>\\n\\tsponsoreddocument.or &quot;there arethose whomovementsprocessesdifficultsubmittedrecommendconvincedpromoting" width=".replace(classicalcoalitionhis firstdecisionsassistantindicatedevolution-wrapper"enough toalong thedelivered--\\x3e\\r\\n\\x3c!--American protectedNovember </style><furnitureInternet  onblur="suspendedrecipientbased on Moreover,abolishedcollectedwere madeemotionalemergencynarrativeadvocatespx;bordercommitteddir="ltr"employeesresearch. selectedsuccessorcustomersdisplayedSeptemberaddClass(Facebook suggestedand lateroperatingelaborateSometimesInstitutecertainlyinstalledfollowersJerusalemthey havecomputinggeneratedprovincesguaranteearbitraryrecognizewanted topx;width:theory ofbehaviourWhile theestimatedbegan to it becamemagnitudemust havemore thanDirectoryextensionsecretarynaturallyoccurringvariablesgiven theplatform.</label><failed tocompoundskinds of societiesalongside --&gt;\\n\\nsouthwestthe rightradiationmay have unescape(spoken in" href="/programmeonly the come fromdirectoryburied ina similarthey were</font></Norwegianspecifiedproducingpassenger(new DatetemporaryfictionalAfter theequationsdownload.regularlydeveloperabove thelinked tophenomenaperiod oftooltip">substanceautomaticaspect ofAmong theconnectedestimatesAir Forcesystem ofobjectiveimmediatemaking itpaintingsconqueredare stillproceduregrowth ofheaded byEuropean divisionsmoleculesfranchiseintentionattractedchildhoodalso useddedicatedsingaporedegree offather ofconflicts</a></p>\\ncame fromwere usednote thatreceivingExecutiveeven moreaccess tocommanderPoliticalmusiciansdeliciousprisonersadvent ofUTF-8" /><![CDATA[">ContactSouthern bgcolor="series of. It was in Europepermittedvalidate.appearingofficialsseriously-languageinitiatedextendinglong-terminflationsuch thatgetCookiemarked by</button>implementbut it isincreasesdown the requiringdependent--\\x3e\\n\\x3c!-- interviewWith the copies ofconsensuswas builtVenezuela(formerlythe statepersonnelstrategicfavour ofinventionWikipediacontinentvirtuallywhich wasprincipleComplete identicalshow thatprimitiveaway frommolecularpreciselydissolvedUnder theversion=">&nbsp;</It is the This is will haveorganismssome timeFriedrichwas firstthe only fact thatform id="precedingTechnicalphysicistoccurs innavigatorsection">span id="sought tobelow thesurviving}</style>his deathas in thecaused bypartiallyexisting using thewas givena list oflevels ofnotion ofOfficial dismissedscientistresemblesduplicateexplosiverecoveredall othergalleries{padding:people ofregion ofaddressesassociateimg alt="in modernshould bemethod ofreportingtimestampneeded tothe Greatregardingseemed toviewed asimpact onidea thatthe Worldheight ofexpandingThese arecurrent">carefullymaintainscharge ofClassicaladdressedpredictedownership<div id="right">\\r\\nresidenceleave thecontent">are often  })();\\r\\nprobably Professor-button" respondedsays thathad to beplaced inHungarianstatus ofserves asUniversalexecutionaggregatefor whichinfectionagreed tohowever, popular">placed onconstructelectoralsymbol ofincludingreturn toarchitectChristianprevious living ineasier toprofessor\\n&lt;!-- effect ofanalyticswas takenwhere thetook overbelief inAfrikaansas far aspreventedwork witha special<fieldsetChristmasRetrieved\\n\\nIn the back intonortheastmagazines><strong>committeegoverninggroups ofstored inestablisha generalits firsttheir ownpopulatedan objectCaribbeanallow thedistrictswisconsinlocation.; width: inhabitedSocialistJanuary 1</footer>similarlychoice ofthe same specific business The first.length; desire todeal withsince theuserAgentconceivedindex.phpas &quot;engage inrecently,few yearswere also\\n<head>\\n<edited byare knowncities inaccesskeycondemnedalso haveservices,family ofSchool ofconvertednature of languageministers</object>there is a popularsequencesadvocatedThey wereany otherlocation=enter themuch morereflectedwas namedoriginal a typicalwhen theyengineerscould notresidentswednesdaythe third productsJanuary 2what theya certainreactionsprocessorafter histhe last contained"></div>\\n</a></td>depend onsearch">\\npieces ofcompetingReferencetennesseewhich has version=</span> <</header>gives thehistorianvalue="">padding:0view thattogether,the most was foundsubset ofattack onchildren,points ofpersonal position:allegedlyClevelandwas laterand afterare givenwas stillscrollingdesign ofmakes themuch lessAmericans.\\n\\nAfter , but theMuseum oflouisiana(from theminnesotaparticlesa processDominicanvolume ofreturningdefensive00px|righmade frommouseover" style="states of(which iscontinuesFranciscobuilding without awith somewho woulda form ofa part ofbefore itknown as  Serviceslocation and oftenmeasuringand it ispaperbackvalues of\\r\\n<title>= window.determineer&quot; played byand early</center>from thisthe threepower andof &quot;innerHTML<a href="y:inline;Church ofthe eventvery highofficial -height: content="/cgi-bin/to createafrikaansesperantofranC\\\'aislatvieE!ulietuviE3D\\feE!tinaD\\reE!tina`9`8`8"f%f,h*g.\\0d=e-g9i+e-mj5-l4d8:d;\\0d9\\bh.!g.f:g,h.0f,h(h+e\\r\\0f\\re\\n!e(d:hg=f\\b?e0d:\\\'d?1d9i(e\x07:g\\t\\bg$>fh!\\ff&i(h=f <h?\x1Bd8\\0f-%f/d;e.i*\\fh/g e\\\'ed<f0f\\r.e:f6\\bh49h\\0e\\ne,e.$h.(h.:e\\f:f71e3e8f-f>e(e\\fd:,e8e$\\\'e-&gh6\\nf%h6\\ng.!ged?!f/g=serviciosartC-culoargentinabarcelonacualquierpublicadoproductospolC-ticarespuestawikipediasiguientebC:squedacomunidadseguridadprincipalpreguntascontenidorespondervenezuelaproblemasdiciembrerelaciC3nnoviembresimilaresproyectosprogramasinstitutoactividadencuentraeconomC-aimC!genescontactardescargarnecesarioatenciC3ntelC)fonocomisiC3ncancionescapacidadencontraranC!lisisfavoritostC)rminosprovinciaetiquetaselementosfuncionesresultadocarC!cterpropiedadprincipionecesidadmunicipalcreaciC3ndescargaspresenciacomercialopinionesejercicioeditorialsalamancagonzC!lezdocumentopelC-cularecientesgeneralestarragonaprC!cticanovedadespropuestapacientestC)cnicasobjetivoscontactos`$.`%\x07`$`$2`$?`$`$9`%\\b`$`$`$/`$>`$8`$>`$%`$`$5`$`$0`$9`%\x07`$`%\\v`$\\b`$`%`$\x1B`$0`$9`$>`$,`$>`$&`$`$9`$>`$8`$-`%\\0`$9`%`$`$0`$9`%\\0`$.`%\\b`$`$&`$?`$(`$,`$>`$$diplodocs`$8`$.`$/`$0`%`$*`$(`$>`$.`$*`$$`$>`$+`$?`$0`$`$8`$$`$$`$0`$9`$2`%\\v`$`$9`%`$`$,`$>`$0`$&`%\x07`$6`$9`%`$\\b`$`%\x07`$2`$/`$&`$?`$`$>`$.`$5`%\x07`$,`$$`%\\0`$(`$,`%\\0`$`$.`%\\f`$$`$8`$>`$2`$2`%\x07`$`$`%\\t`$,`$.`$&`$&`$$`$%`$>`$(`$9`%\\0`$6`$9`$0`$`$2`$`$`$-`%\\0`$(`$`$0`$*`$>`$8`$0`$>`$$`$`$?`$`$\\t`$8`%\x07`$`$/`%\\0`$9`%`$`$`$`%\x07`$`%\\0`$.`$`%\\v`$`$`$>`$0`$`$-`%\\0`$`$/`%\x07`$$`%`$.`$5`%\\v`$`$&`%\x07`$`$`$`$0`$`$8`%\x07`$.`%\x07`$2`$2`$`$>`$9`$>`$2`$\\n`$*`$0`$`$>`$0`$`$8`$>`$&`%\x07`$0`$`$?`$8`$&`$?`$2`$,`$`$&`$,`$(`$>`$9`%`$`$2`$>`$`$`%\\0`$$`$,`$`$(`$.`$?`$2`$\x07`$8`%\x07`$`$(`%\x07`$(`$/`$>`$`%`$2`$2`%\\t`$`$-`$>`$`$0`%\x07`$2`$`$`$9`$0`$>`$.`$2`$`%\x07`$*`%\x07`$`$9`$>`$%`$\x07`$8`%\\0`$8`$9`%\\0`$`$2`$>`$ `%\\0`$`$9`$>`$`$&`%`$0`$$`$9`$$`$8`$>`$$`$/`$>`$&`$`$/`$>`$*`$>`$`$`%\\f`$(`$6`$>`$.`$&`%\x07`$`$/`$9`%\\0`$0`$>`$/`$`%`$&`$2`$`%\\0categoriesexperience</title>\\r\\nCopyright javascriptconditionseverything<p class="technologybackground<a class="management&copy; 201javaScriptcharactersbreadcrumbthemselveshorizontalgovernmentCaliforniaactivitiesdiscoveredNavigationtransitionconnectionnavigationappearance</title><mcheckbox" techniquesprotectionapparentlyas well asunt\\\', \\\'UA-resolutionoperationstelevisiontranslatedWashingtonnavigator. = window.impression&lt;br&gt;literaturepopulationbgcolor="#especially content="productionnewsletterpropertiesdefinitionleadershipTechnologyParliamentcomparisonul class=".indexOf("conclusiondiscussioncomponentsbiologicalRevolution_containerunderstoodnoscript><permissioneach otheratmosphere onfocus="<form id="processingthis.valuegenerationConferencesubsequentwell-knownvariationsreputationphenomenondisciplinelogo.png" (document,boundariesexpressionsettlementBackgroundout of theenterprise("https:" unescape("password" democratic<a href="/wrapper">\\nmembershiplinguisticpx;paddingphilosophyassistanceuniversityfacilitiesrecognizedpreferenceif (typeofmaintainedvocabularyhypothesis.submit();&amp;nbsp;annotationbehind theFoundationpublisher"assumptionintroducedcorruptionscientistsexplicitlyinstead ofdimensions onClick="considereddepartmentoccupationsoon afterinvestmentpronouncedidentifiedexperimentManagementgeographic" height="link rel=".replace(/depressionconferencepunishmenteliminatedresistanceadaptationoppositionwell knownsupplementdeterminedh1 class="0px;marginmechanicalstatisticscelebratedGovernment\\n\\nDuring tdevelopersartificialequivalentoriginatedCommissionattachment<span id="there wereNederlandsbeyond theregisteredjournalistfrequentlyall of thelang="en" </style>\\r\\nabsolute; supportingextremely mainstream</strong> popularityemployment</table>\\r\\n colspan="</form>\\n  conversionabout the </p></div>integrated" lang="enPortuguesesubstituteindividualimpossiblemultimediaalmost allpx solid #apart fromsubject toin Englishcriticizedexcept forguidelinesoriginallyremarkablethe secondh2 class="<a title="(includingparametersprohibited= "http://dictionaryperceptionrevolutionfoundationpx;height:successfulsupportersmillenniumhis fatherthe &quot;no-repeat;commercialindustrialencouragedamount of unofficialefficiencyReferencescoordinatedisclaimerexpeditiondevelopingcalculatedsimplifiedlegitimatesubstring(0" class="completelyillustratefive yearsinstrumentPublishing1" class="psychologyconfidencenumber of absence offocused onjoined thestructurespreviously></iframe>once againbut ratherimmigrantsof course,a group ofLiteratureUnlike the</a>&nbsp;\\nfunction it was theConventionautomobileProtestantaggressiveafter the Similarly," /></div>collection\\r\\nfunctionvisibilitythe use ofvolunteersattractionunder the threatened*<![CDATA[importancein generalthe latter</form>\\n</.indexOf(\\\'i = 0; i <differencedevoted totraditionssearch forultimatelytournamentattributesso-called }\\n</style>evaluationemphasizedaccessible</section>successionalong withMeanwhile,industries</a><br />has becomeaspects ofTelevisionsufficientbasketballboth sidescontinuingan article<img alt="adventureshis mothermanchesterprinciplesparticularcommentaryeffects ofdecided to"><strong>publishersJournal ofdifficultyfacilitateacceptablestyle.css"\\tfunction innovation>Copyrightsituationswould havebusinessesDictionarystatementsoften usedpersistentin Januarycomprising</title>\\n\\tdiplomaticcontainingperformingextensionsmay not beconcept of onclick="It is alsofinancial making theLuxembourgadditionalare calledengaged in"script");but it waselectroniconsubmit="\\n\\x3c!-- End electricalofficiallysuggestiontop of theunlike theAustralianOriginallyreferences\\n</head>\\r\\nrecognisedinitializelimited toAlexandriaretirementAdventuresfour years\\n\\n&lt;!-- increasingdecorationh3 class="origins ofobligationregulationclassified(function(advantagesbeing the historians<base hrefrepeatedlywilling tocomparabledesignatednominationfunctionalinside therevelationend of thes for the authorizedrefused totake placeautonomouscompromisepolitical restauranttwo of theFebruary 2quality ofswfobject.understandnearly allwritten byinterviews" width="1withdrawalfloat:leftis usuallycandidatesnewspapersmysteriousDepartmentbest knownparliamentsuppressedconvenientremembereddifferent systematichas led topropagandacontrolledinfluencesceremonialproclaimedProtectionli class="Scientificclass="no-trademarksmore than widespreadLiberationtook placeday of theas long asimprisonedAdditional\\n<head>\\n<mLaboratoryNovember 2exceptionsIndustrialvariety offloat: lefDuring theassessmenthave been deals withStatisticsoccurrence/ul></div>clearfix">the publicmany yearswhich wereover time,synonymouscontent">\\npresumablyhis familyuserAgent.unexpectedincluding challengeda minorityundefined"belongs totaken fromin Octoberposition: said to bereligious Federation rowspan="only a fewmeant thatled to the--\\x3e\\r\\n<div <fieldset>Archbishop class="nobeing usedapproachesprivilegesnoscript>\\nresults inmay be theEaster eggmechanismsreasonablePopulationCollectionselected">noscript>\\r/index.phparrival of-jssdk\\\'));managed toincompletecasualtiescompletionChristiansSeptember arithmeticproceduresmight haveProductionit appearsPhilosophyfriendshipleading togiving thetoward theguaranteeddocumentedcolor:#000video gamecommissionreflectingchange theassociatedsans-serifonkeypress; padding:He was theunderlyingtypically , and the srcElementsuccessivesince the should be networkingaccountinguse of thelower thanshows that</span>\\n\\t\\tcomplaintscontinuousquantitiesastronomerhe did notdue to itsapplied toan averageefforts tothe futureattempt toTherefore,capabilityRepublicanwas formedElectronickilometerschallengespublishingthe formerindigenousdirectionssubsidiaryconspiracydetails ofand in theaffordablesubstancesreason forconventionitemtype="absolutelysupposedlyremained aattractivetravellingseparatelyfocuses onelementaryapplicablefound thatstylesheetmanuscriptstands for no-repeat(sometimesCommercialin Americaundertakenquarter ofan examplepersonallyindex.php?</button>\\npercentagebest-knowncreating a" dir="ltrLieutenant\\n<div id="they wouldability ofmade up ofnoted thatclear thatargue thatto anotherchildren\\\'spurpose offormulatedbased uponthe regionsubject ofpassengerspossession.\\n\\nIn the Before theafterwardscurrently across thescientificcommunity.capitalismin Germanyright-wingthe systemSociety ofpoliticiandirection:went on toremoval of New York apartmentsindicationduring theunless thehistoricalhad been adefinitiveingredientattendanceCenter forprominencereadyStatestrategiesbut in theas part ofconstituteclaim thatlaboratorycompatiblefailure of, such as began withusing the to providefeature offrom which/" class="geologicalseveral ofdeliberateimportant holds thating&quot; valign=topthe Germanoutside ofnegotiatedhis careerseparationid="searchwas calledthe fourthrecreationother thanpreventionwhile the education,connectingaccuratelywere builtwas killedagreementsmuch more Due to thewidth: 100some otherKingdom ofthe entirefamous forto connectobjectivesthe Frenchpeople andfeatured">is said tostructuralreferendummost oftena separate->\\n<div id Official worldwide.aria-labelthe planetand it wasd" value="looking atbeneficialare in themonitoringreportedlythe modernworking onallowed towhere the innovative</a></div>soundtracksearchFormtend to beinput id="opening ofrestrictedadopted byaddressingtheologianmethods ofvariant ofChristian very largeautomotiveby far therange frompursuit offollow thebrought toin Englandagree thataccused ofcomes frompreventingdiv style=his or hertremendousfreedom ofconcerning0 1em 1em;Basketball/style.cssan earliereven after/" title=".com/indextaking thepittsburghcontent">\\r<script>(fturned outhaving the</span>\\r\\n occasionalbecause itstarted tophysically></div>\\n  created byCurrently, bgcolor="tabindex="disastrousAnalytics also has a><div id="</style>\\n<called forsinger and.src = "//violationsthis pointconstantlyis locatedrecordingsd from thenederlandsportuguC*sW"WW(WW*YX\\\'X1X3[\\fdesarrollocomentarioeducaciC3nseptiembreregistradodirecciC3nubicaciC3npublicidadrespuestasresultadosimportantereservadosartC-culosdiferentessiguientesrepC:blicasituaciC3nministerioprivacidaddirectorioformaciC3npoblaciC3npresidentecontenidosaccesoriostechnoratipersonalescategorC-aespecialesdisponibleactualidadreferenciavalladolidbibliotecarelacionescalendariopolC-ticasanterioresdocumentosnaturalezamaterialesdiferenciaeconC3micatransporterodrC-guezparticiparencuentrandiscusiC3nestructurafundaciC3nfrecuentespermanentetotalmenteP<P>P6P=P>P1QP4P5QP<P>P6P5QP2Q\\0P5P<QQP0P:P6P5Q\x07QP>P1Q\\vP1P>P;P5P5P>Q\x07P5P=Q\\fQ\\rQP>P3P>P:P>P3P4P0P?P>QP;P5P2QP5P3P>QP0P9QP5Q\x07P5Q\\0P5P7P<P>P3QQQP0P9QP0P6P8P7P=P8P<P5P6P4QP1QP4QQPP>P8QP:P7P4P5QQ\\fP2P8P4P5P>QP2QP7P8P=QP6P=P>QP2P>P5P9P;QP4P5P9P?P>Q\\0P=P>P<P=P>P3P>P4P5QP5P9QP2P>P8QP?Q\\0P0P2P0QP0P:P>P9P<P5QQP>P8P<P5P5QP6P8P7P=Q\\fP>P4P=P>P9P;QQ\x07Q\\bP5P?P5Q\\0P5P4Q\x07P0QQP8Q\x07P0QQQ\\fQ\\0P0P1P>QP=P>P2Q\\vQP?Q\\0P0P2P>QP>P1P>P9P?P>QP>P<P<P5P=P5P5Q\x07P8QP;P5P=P>P2Q\\vP5QQP;QP3P>P:P>P;P>P=P0P7P0P4QP0P:P>P5QP>P3P4P0P?P>Q\x07QP8PP>QP;P5QP0P:P8P5P=P>P2Q\\vP9QQP>P8QQP0P:P8QQQ\\0P0P7QP!P0P=P:QQP>Q\\0QP<PP>P3P4P0P:P=P8P3P8QP;P>P2P0P=P0Q\\bP5P9P=P0P9QP8QP2P>P8P<QP2QP7Q\\fP;QP1P>P9Q\x07P0QQP>QQ\\0P5P4P8PQ\\0P>P<P5P$P>Q\\0QP<Q\\0Q\\vP=P:P5QQP0P;P8P?P>P8QP:QQ\\vQQQ\x07P<P5QQQQP5P=QQ\\0QQ\\0QP4P0QP0P<Q\\vQQ\\0Q\\vP=P:P0PP>P2Q\\vP9Q\x07P0QP>P2P<P5QQP0QP8P;Q\\fP<P<P0Q\\0QP0QQQ\\0P0P=P<P5QQP5QP5P:QQP=P0Q\\bP8QP<P8P=QQP8P<P5P=P8P8P<P5QQP=P>P<P5Q\\0P3P>Q\\0P>P4QP0P<P>P<Q\\rQP>P<QP:P>P=QP5QP2P>P5P<P:P0P:P>P9PQ\\0QP8P2YYX*X/Y\\tX%X1X3X\\\'YX1X3X\\\'YX)X\\\'YX9X\\\'YYX*X(Y\x07X\\\'X(X1X\\\'YX,X\\\'YY\\nY\\bYX\\\'YX5Y\\bX1X,X/Y\\nX/X)X\\\'YX9X6Y\\bX%X6X\\\'YX)X\\\'YYX3YX\\\'YX9X\\\'X(X*X-YY\\nYYYYX\\\'X*YYX*YY\\tX*X9X/Y\\nYX\\\'YX4X9X1X#X.X(X\\\'X1X*X7Y\\bY\\nX1X9YY\\nYYX%X1YX\\\'YX7YX(X\\\'X*X\\\'YYX:X)X*X1X*Y\\nX(X\\\'YYX\\\'X3X\\\'YX4Y\\nX.YYX*X/Y\\nX\\\'YX9X1X(X\\\'YYX5X5X\\\'YYX\\\'YX9YY\\nY\x07X\\\'X*X-X/Y\\nX+X\\\'YYY\x07YX\\\'YX9YYYYX*X(X)Y\\nYYYYX\\\'YX7YYYY\\nX/Y\\nY\\bX%X/X\\\'X1X)X*X\\\'X1Y\\nX.X\\\'YX5X-X)X*X3X,Y\\nYX\\\'YY\\bYX*X9YX/YX\\\'YX/Y\\nYX)X*X5YY\\nYX#X1X4Y\\nYX\\\'YX0Y\\nYX9X1X(Y\\nX)X(Y\\bX\\\'X(X)X#YX9X\\\'X(X\\\'YX3YX1YX4X\\\'YYX*X9X\\\'YY\\tX\\\'YX#Y\\bYX\\\'YX3YX)X,X\\\'YX9X)X\\\'YX5X-YX\\\'YX/Y\\nYYYYX\\\'X*X\\\'YX.X\\\'X5X\\\'YYYYX#X9X6X\\\'X!YX*X\\\'X(X)X\\\'YX.Y\\nX1X1X3X\\\'X&YX\\\'YYYX(X\\\'YX#X/X(YYX\\\'X7X9YX1X\\\'X3YYYX7YX)X\\\'YYX*X(X\\\'YX1X,YX\\\'X4X*X1YX\\\'YYX/YY\\nX9X7Y\\nYsByTagName(.jpg" alt="1px solid #.gif" alt="transparentinformationapplication" onclick="establishedadvertising.png" alt="environmentperformanceappropriate&amp;mdash;immediately</strong></rather thantemperaturedevelopmentcompetitionplaceholdervisibility:copyright">0" height="even thoughreplacementdestinationCorporation<ul class="AssociationindividualsperspectivesetTimeout(url(http://mathematicsmargin-top:eventually description) no-repeatcollections.JPG|thumb|participate/head><bodyfloat:left;<li class="hundreds of\\n\\nHowever, compositionclear:both;cooperationwithin the label for="border-top:New Zealandrecommendedphotographyinteresting&lt;sup&gt;controversyNetherlandsalternativemaxlength="switzerlandDevelopmentessentially\\n\\nAlthough </textarea>thunderbirdrepresented&amp;ndash;speculationcommunitieslegislationelectronics\\n\\t<div id="illustratedengineeringterritoriesauthoritiesdistributed6" height="sans-serif;capable of disappearedinteractivelooking forit would beAfghanistanwas createdMath.floor(surroundingcan also beobservationmaintenanceencountered<h2 class="more recentit has beeninvasion of).getTime()fundamentalDespite the"><div id="inspirationexaminationpreparationexplanation<input id="</a></span>versions ofinstrumentsbefore the  = \\\'http://Descriptionrelatively .substring(each of theexperimentsinfluentialintegrationmany peopledue to the combinationdo not haveMiddle East<noscript><copyright" perhaps theinstitutionin Decemberarrangementmost famouspersonalitycreation oflimitationsexclusivelysovereignty-content">\\n<td class="undergroundparallel todoctrine ofoccupied byterminologyRenaissancea number ofsupport forexplorationrecognitionpredecessor<img src="/<h1 class="publicationmay also bespecialized</fieldset>progressivemillions ofstates thatenforcementaround the one another.parentNodeagricultureAlternativeresearcherstowards theMost of themany other (especially<td width=";width:100%independent<h3 class=" onchange=").addClass(interactionOne of the daughter ofaccessoriesbranches of\\r\\n<div id="the largestdeclarationregulationsInformationtranslationdocumentaryin order to">\\n<head>\\n<" height="1across the orientation);<\\/script>implementedcan be seenthere was ademonstratecontainer">connectionsthe Britishwas written!important;px; margin-followed byability to complicatedduring the immigrationalso called<h4 class="distinctionreplaced bygovernmentslocation ofin Novemberwhether the</p>\\n</div>acquisitioncalled the persecutiondesignation{font-size:appeared ininvestigateexperiencedmost likelywidely useddiscussionspresence of (document.extensivelyIt has beenit does notcontrary toinhabitantsimprovementscholarshipconsumptioninstructionfor exampleone or morepx; paddingthe currenta series ofare usuallyrole in thepreviously derivativesevidence ofexperiencescolorschemestated thatcertificate</a></div>\\n selected="high schoolresponse tocomfortableadoption ofthree yearsthe countryin Februaryso that thepeople who provided by<param nameaffected byin terms ofappointmentISO-8859-1"was born inhistorical regarded asmeasurementis based on and other : function(significantcelebrationtransmitted/js/jquery.is known astheoretical tabindex="it could be<noscript>\\nhaving been\\r\\n<head>\\r\\n< &quot;The compilationhe had beenproduced byphilosopherconstructedintended toamong othercompared toto say thatEngineeringa differentreferred todifferencesbelief thatphotographsidentifyingHistory of Republic ofnecessarilyprobabilitytechnicallyleaving thespectacularfraction ofelectricityhead of therestaurantspartnershipemphasis onmost recentshare with saying thatfilled withdesigned toit is often"></iframe>as follows:merged withthrough thecommercial pointed outopportunityview of therequirementdivision ofprogramminghe receivedsetInterval"></span></in New Yorkadditional compression\\n\\n<div id="incorporate;<\\/script><attachEventbecame the " target="_carried outSome of thescience andthe time ofContainer">maintainingChristopherMuch of thewritings of" height="2size of theversion of mixture of between theExamples ofeducationalcompetitive onsubmit="director ofdistinctive/DTD XHTML relating totendency toprovince ofwhich woulddespite thescientific legislature.innerHTML allegationsAgriculturewas used inapproach tointelligentyears later,sans-serifdeterminingPerformanceappearances, which is foundationsabbreviatedhigher thans from the individual composed ofsupposed toclaims thatattributionfont-size:1elements ofHistorical his brotherat the timeanniversarygoverned byrelated to ultimately innovationsit is stillcan only bedefinitionstoGMTStringA number ofimg class="Eventually,was changedoccurred inneighboringdistinguishwhen he wasintroducingterrestrialMany of theargues thatan Americanconquest ofwidespread were killedscreen and In order toexpected todescendantsare locatedlegislativegenerations backgroundmost peopleyears afterthere is nothe highestfrequently they do notargued thatshowed thatpredominanttheologicalby the timeconsideringshort-lived</span></a>can be usedvery littleone of the had alreadyinterpretedcommunicatefeatures ofgovernment,</noscript>entered the" height="3Independentpopulationslarge-scale. Although used in thedestructionpossibilitystarting intwo or moreexpressionssubordinatelarger thanhistory and</option>\\r\\nContinentaleliminatingwill not bepractice ofin front ofsite of theensure thatto create amississippipotentiallyoutstandingbetter thanwhat is nowsituated inmeta name="TraditionalsuggestionsTranslationthe form ofatmosphericideologicalenterprisescalculatingeast of theremnants ofpluginspage/index.php?remained intransformedHe was alsowas alreadystatisticalin favor ofMinistry ofmovement offormulationis required<link rel="This is the <a href="/popularizedinvolved inare used toand severalmade by theseems to belikely thatPalestiniannamed afterit had beenmost commonto refer tobut this isconsecutivetemporarilyIn general,conventionstakes placesubdivisionterritorialoperationalpermanentlywas largelyoutbreak ofin the pastfollowing a xmlns:og="><a class="class="textConversion may be usedmanufactureafter beingclearfix">\\nquestion ofwas electedto become abecause of some peopleinspired bysuccessful a time whenmore commonamongst thean officialwidth:100%;technology,was adoptedto keep thesettlementslive birthsindex.html"Connecticutassigned to&amp;times;account foralign=rightthe companyalways beenreturned toinvolvementBecause thethis period" name="q" confined toa result ofvalue="" />is actuallyEnvironment\\r\\n</head>\\r\\nConversely,>\\n<div id="0" width="1is probablyhave becomecontrollingthe problemcitizens ofpoliticiansreached theas early as:none; over<table cellvalidity ofdirectly toonmousedownwhere it iswhen it wasmembers of relation toaccommodatealong with In the latethe Englishdelicious">this is notthe presentif they areand finallya matter of\\r\\n\\t</div>\\r\\n\\r\\n<\\/script>faster thanmajority ofafter whichcomparativeto maintainimprove theawarded theer" class="frameborderrestorationin the sameanalysis oftheir firstDuring the continentalsequence offunction(){font-size: work on the<\\/script>\\n<begins withjavascript:constituentwas foundedequilibriumassume thatis given byneeds to becoordinatesthe variousare part ofonly in thesections ofis a commontheories ofdiscoveriesassociationedge of thestrength ofposition inpresent-dayuniversallyto form thebut insteadcorporationattached tois commonlyreasons for &quot;the can be madewas able towhich meansbut did notonMouseOveras possibleoperated bycoming fromthe primaryaddition offor severaltransferreda period ofare able tohowever, itshould havemuch larger\\n\\t<\\/script>adopted theproperty ofdirected byeffectivelywas broughtchildren ofProgramminglonger thanmanuscriptswar againstby means ofand most ofsimilar to proprietaryoriginatingprestigiousgrammaticalexperience.to make theIt was alsois found incompetitorsin the U.S.replace thebrought thecalculationfall of thethe generalpracticallyin honor ofreleased inresidentialand some ofking of thereaction to1st Earl ofculture andprincipally</title>\\n  they can beback to thesome of hisexposure toare similarform of theaddFavoritecitizenshippart in thepeople within practiceto continue&amp;minus;approved by the first allowed theand for thefunctioningplaying thesolution toheight="0" in his bookmore than afollows thecreated thepresence in&nbsp;</td>nationalistthe idea ofa characterwere forced class="btndays of thefeatured inshowing theinterest inin place ofturn of thethe head ofLord of thepoliticallyhas its ownEducationalapproval ofsome of theeach other,behavior ofand becauseand anotherappeared onrecorded inblack&quot;may includethe world\\\'scan lead torefers to aborder="0" government winning theresulted in while the Washington,the subjectcity in the></div>\\r\\n\\t\\treflect theto completebecame moreradioactiverejected bywithout anyhis father,which couldcopy of theto indicatea politicalaccounts ofconstitutesworked wither</a></li>of his lifeaccompaniedclientWidthprevent theLegislativedifferentlytogether inhas severalfor anothertext of thefounded thee with the is used forchanged theusually theplace wherewhereas the> <a href=""><a href="themselves,although hethat can betraditionalrole of theas a resultremoveChilddesigned bywest of theSome peopleproduction,side of thenewslettersused by thedown to theaccepted bylive in theattempts tooutside thefrequenciesHowever, inprogrammersat least inapproximatealthough itwas part ofand variousGovernor ofthe articleturned into><a href="/the economyis the mostmost widelywould laterand perhapsrise to theoccurs whenunder whichconditions.the westerntheory thatis producedthe city ofin which heseen in thethe centralbuilding ofmany of hisarea of theis the onlymost of themany of thethe WesternThere is noextended toStatisticalcolspan=2 |short storypossible totopologicalcritical ofreported toa Christiandecision tois equal toproblems ofThis can bemerchandisefor most ofno evidenceeditions ofelements in&quot;. Thecom/images/which makesthe processremains theliterature,is a memberthe popularthe ancientproblems intime of thedefeated bybody of thea few yearsmuch of thethe work ofCalifornia,served as agovernment.concepts ofmovement in\\t\\t<div id="it" value="language ofas they areproduced inis that theexplain thediv></div>\\nHowever thelead to the\\t<a href="/was grantedpeople havecontinuallywas seen asand relatedthe role ofproposed byof the besteach other.Constantinepeople fromdialects ofto revisionwas renameda source ofthe initiallaunched inprovide theto the westwhere thereand similarbetween twois also theEnglish andconditions,that it wasentitled tothemselves.quantity ofransparencythe same asto join thecountry andthis is theThis led toa statementcontrast tolastIndexOfthrough hisis designedthe term isis providedprotect theng</a></li>The currentthe site ofsubstantialexperience,in the Westthey shouldslovenD\\rinacomentariosuniversidadcondicionesactividadesexperienciatecnologC-aproducciC3npuntuaciC3naplicaciC3ncontraseC1acategorC-asregistrarseprofesionaltratamientoregC-stratesecretarC-aprincipalesprotecciC3nimportantesimportanciaposibilidadinteresantecrecimientonecesidadessuscribirseasociaciC3ndisponiblesevaluaciC3nestudiantesresponsableresoluciC3nguadalajararegistradosoportunidadcomercialesfotografC-aautoridadesingenierC-atelevisiC3ncompetenciaoperacionesestablecidosimplementeactualmentenavegaciC3nconformidadline-height:font-family:" : "http://applicationslink" href="specifically//<![CDATA[\\nOrganizationdistribution0px; height:relationshipdevice-width<div class="<label for="registration</noscript>\\n/index.html"window.open( !important;application/independence//www.googleorganizationautocompleterequirementsconservative<form name="intellectualmargin-left:18th centuryan importantinstitutionsabbreviation<img class="organisationcivilization19th centuryarchitectureincorporated20th century-container">most notably/></a></div>notification\\\'undefined\\\')Furthermore,believe thatinnerHTML = prior to thedramaticallyreferring tonegotiationsheadquartersSouth AfricaunsuccessfulPennsylvaniaAs a result,<html lang="&lt;/sup&gt;dealing withphiladelphiahistorically);<\\/script>\\npadding-top:experimentalgetAttributeinstructionstechnologiespart of the =function(){subscriptionl.dtd">\\r\\n<htgeographicalConstitution\\\', function(supported byagriculturalconstructionpublicationsfont-size: 1a variety of<div style="Encyclopediaiframe src="demonstratedaccomplisheduniversitiesDemographics);<\\/script><dedicated toknowledge ofsatisfactionparticularly</div></div>English (US)appendChild(transmissions. However, intelligence" tabindex="float:right;Commonwealthranging fromin which theat least onereproductionencyclopedia;font-size:1jurisdictionat that time"><a class="In addition,description+conversationcontact withis generallyr" content="representing&lt;math&gt;presentationoccasionally<img width="navigation">compensationchampionshipmedia="all" violation ofreference toreturn true;Strict//EN" transactionsinterventionverificationInformation difficultiesChampionshipcapabilities<![endif]--\\x3e}\\n<\\/script>\\nChristianityfor example,Professionalrestrictionssuggest thatwas released(such as theremoveClass(unemploymentthe Americanstructure of/index.html published inspan class=""><a href="/introductionbelonging toclaimed thatconsequences<meta name="Guide to theoverwhelmingagainst the concentrated,\\n.nontouch observations</a>\\n</div>\\nf (document.border: 1px {font-size:1treatment of0" height="1modificationIndependencedivided intogreater thanachievementsestablishingJavaScript" neverthelesssignificanceBroadcasting>&nbsp;</td>container">\\nsuch as the influence ofa particularsrc=\\\'http://navigation" half of the substantial &nbsp;</div>advantage ofdiscovery offundamental metropolitanthe opposite" xml:lang="deliberatelyalign=centerevolution ofpreservationimprovementsbeginning inJesus ChristPublicationsdisagreementtext-align:r, function()similaritiesbody></html>is currentlyalphabeticalis sometimestype="image/many of the flow:hidden;available indescribe theexistence ofall over thethe Internet\\t<ul class="installationneighborhoodarmed forcesreducing thecontinues toNonetheless,temperatures\\n\\t\\t<a href="close to theexamples of is about the(see below)." id="searchprofessionalis availablethe official\\t\\t<\\/script>\\n\\n\\t\\t<div id="accelerationthrough the Hall of Famedescriptionstranslationsinterference type=\\\'text/recent yearsin the worldvery popular{background:traditional some of the connected toexploitationemergence ofconstitutionA History ofsignificant manufacturedexpectations><noscript><can be foundbecause the has not beenneighbouringwithout the added to the\\t<li class="instrumentalSoviet Unionacknowledgedwhich can bename for theattention toattempts to developmentsIn fact, the<li class="aimplicationssuitable formuch of the colonizationpresidentialcancelBubble Informationmost of the is describedrest of the more or lessin SeptemberIntelligencesrc="http://px; height: available tomanufacturerhuman rightslink href="/availabilityproportionaloutside the astronomicalhuman beingsname of the are found inare based onsmaller thana person whoexpansion ofarguing thatnow known asIn the earlyintermediatederived fromScandinavian</a></div>\\r\\nconsider thean estimatedthe National<div id="pagresulting incommissionedanalogous toare required/ul>\\n</div>\\nwas based onand became a&nbsp;&nbsp;t" value="" was capturedno more thanrespectivelycontinue to >\\r\\n<head>\\r\\n<were createdmore generalinformation used for theindependent the Imperialcomponent ofto the northinclude the Constructionside of the would not befor instanceinvention ofmore complexcollectivelybackground: text-align: its originalinto accountthis processan extensivehowever, thethey are notrejected thecriticism ofduring whichprobably thethis article(function(){It should bean agreementaccidentallydiffers fromArchitecturebetter knownarrangementsinfluence onattended theidentical tosouth of thepass throughxml" title="weight:bold;creating thedisplay:nonereplaced the<img src="/ihttps://www.World War IItestimonialsfound in therequired to and that thebetween the was designedconsists of considerablypublished bythe languageConservationconsisted ofrefer to theback to the css" media="People from available onproved to besuggestions"was known asvarieties oflikely to becomprised ofsupport the hands of thecoupled withconnect and border:none;performancesbefore beinglater becamecalculationsoften calledresidents ofmeaning that><li class="evidence forexplanationsenvironments"></a></div>which allowsIntroductiondeveloped bya wide rangeon behalf ofvalign="top"principle ofat the time,</noscript>\\rsaid to havein the firstwhile othershypotheticalphilosopherspower of thecontained inperformed byinability towere writtenspan style="input name="the questionintended forrejection ofimplies thatinvented thethe standardwas probablylink betweenprofessor ofinteractionschanging theIndian Ocean class="lastworking with\\\'http://www.years beforeThis was therecreationalentering themeasurementsan extremelyvalue of thestart of the\\n<\\/script>\\n\\nan effort toincrease theto the southspacing="0">sufficientlythe Europeanconverted toclearTimeoutdid not haveconsequentlyfor the nextextension ofeconomic andalthough theare producedand with theinsufficientgiven by thestating thatexpenditures</span></a>\\nthought thaton the basiscellpadding=image of thereturning toinformation,separated byassassinateds" content="authority ofnorthwestern</div>\\n<div "></div>\\r\\n  consultationcommunity ofthe nationalit should beparticipants align="leftthe greatestselection ofsupernaturaldependent onis mentionedallowing thewas inventedaccompanyinghis personalavailable atstudy of theon the otherexecution ofHuman Rightsterms of theassociationsresearch andsucceeded bydefeated theand from thebut they arecommander ofstate of theyears of agethe study of<ul class="splace in thewhere he was<li class="fthere are nowhich becamehe publishedexpressed into which thecommissionerfont-weight:territory ofextensions">Roman Empireequal to theIn contrast,however, andis typicallyand his wife(also called><ul class="effectively evolved intoseem to havewhich is thethere was noan excellentall of thesedescribed byIn practice,broadcastingcharged withreflected insubjected tomilitary andto the pointeconomicallysetTargetingare actuallyvictory over();<\\/script>continuouslyrequired forevolutionaryan effectivenorth of the, which was front of theor otherwisesome form ofhad not beengenerated byinformation.permitted toincludes thedevelopment,entered intothe previousconsistentlyare known asthe field ofthis type ofgiven to thethe title ofcontains theinstances ofin the northdue to theirare designedcorporationswas that theone of thesemore popularsucceeded insupport fromin differentdominated bydesigned forownership ofand possiblystandardizedresponseTextwas intendedreceived theassumed thatareas of theprimarily inthe basis ofin the senseaccounts fordestroyed byat least twowas declaredcould not beSecretary ofappear to bemargin-top:1/^\\\\s+|\\\\s+$/ge){throw e};the start oftwo separatelanguage andwho had beenoperation ofdeath of thereal numbers\\t<link rel="provided thethe story ofcompetitionsenglish (UK)english (US)PP>P=P3P>P;P!Q\\0P?QP:P8QQ\\0P?QP:P8QQ\\0P?QP:P>YX9X1X(Y\\nX)f-#i+d8-f\x07g.\\0d=d8-f\x07g9d=d8-f\x07f\\tie,e8d::f0f?e:i?i\x07\\fe74e74g$>d<d8;d9\\tf\\rd=g3;g;f?g-f3h\\\'informaciC3nherramientaselectrC3nicodescripciC3nclasificadosconocimientopublicaciC3nrelacionadasinformC!ticarelacionadosdepartamentotrabajadoresdirectamenteayuntamientomercadoLibrecontC!ctenoshabitacionescumplimientorestaurantesdisposiciC3nconsecuenciaelectrC3nicaaplicacionesdesconectadoinstalaciC3nrealizaciC3nutilizaciC3nenciclopediaenfermedadesinstrumentosexperienciasinstituciC3nparticularessubcategoriaQP>P;Q\\fP:P>P P>QQP8P8Q\\0P0P1P>QQ\\vP1P>P;Q\\fQ\\bP5P?Q\\0P>QQP>P<P>P6P5QP5P4Q\\0QP3P8QQP;QQ\x07P0P5QP5P9Q\x07P0QP2QP5P3P4P0P P>QQP8QPP>QP:P2P5P4Q\\0QP3P8P5P3P>Q\\0P>P4P0P2P>P?Q\\0P>QP4P0P=P=Q\\vQP4P>P;P6P=Q\\vP8P<P5P=P=P>PP>QP:P2Q\\vQ\\0QP1P;P5P9PP>QP:P2P0QQQ\\0P0P=Q\\vP=P8Q\x07P5P3P>Q\\0P0P1P>QP5P4P>P;P6P5P=QQP;QP3P8QP5P?P5Q\\0Q\\fPP4P=P0P:P>P?P>QP>P<QQ\\0P0P1P>QQP0P?Q\\0P5P;QP2P>P>P1Q\\tP5P>P4P=P>P3P>QP2P>P5P3P>QQP0QQ\\fP8P4Q\\0QP3P>P9QP>Q\\0QP<P5QP>Q\\0P>Q\\bP>P?Q\\0P>QP8P2QQQ\\vP;P:P0P:P0P6P4Q\\vP9P2P;P0QQP8P3Q\\0QP?P?Q\\vP2P<P5QQP5Q\\0P0P1P>QP0QP:P0P7P0P;P?P5Q\\0P2Q\\vP9P4P5P;P0QQ\\fP4P5P=Q\\fP3P8P?P5Q\\0P8P>P4P1P8P7P=P5QP>QP=P>P2P5P<P>P<P5P=QP:QP?P8QQ\\fP4P>P;P6P=P0Q\\0P0P<P:P0QP=P0Q\x07P0P;P>P P0P1P>QP0P"P>P;Q\\fP:P>QP>P2QP5P<P2QP>Q\\0P>P9P=P0Q\x07P0P;P0QP?P8QP>P:QP;QP6P1Q\\vQP8QQP5P<P?P5Q\x07P0QP8P=P>P2P>P3P>P?P>P<P>Q\\tP8QP0P9QP>P2P?P>Q\x07P5P<QP?P>P<P>Q\\tQ\\fP4P>P;P6P=P>QQQ\\vP;P:P8P1Q\\vQQQ\\0P>P4P0P=P=Q\\vP5P<P=P>P3P8P5P?Q\\0P>P5P:QP!P5P9Q\x07P0QP<P>P4P5P;P8QP0P:P>P3P>P>P=P;P0P9P=P3P>Q\\0P>P4P5P2P5Q\\0QP8QQQQ\\0P0P=P5QP8P;Q\\fP<Q\\vQQ\\0P>P2P=QQ\\0P0P7P=Q\\vQP8QP:P0QQ\\fP=P5P4P5P;QQP=P2P0Q\\0QP<P5P=Q\\fQ\\bP5P<P=P>P3P8QP4P0P=P=P>P9P7P=P0Q\x07P8QP=P5P;Q\\fP7QQP>Q\\0QP<P0P"P5P?P5Q\\0Q\\fP<P5QQQP0P7P0Q\\tP8QQ\\vP\x1BQQ\x07Q\\bP8P5`$(`$9`%\\0`$`$`$0`$(`%\x07`$`$*`$(`%\x07`$`$?`$/`$>`$`$0`%\x07`$`$`$(`%\\r`$/`$`%\\r`$/`$>`$`$>`$\x07`$!`$,`$>`$0`%\x07`$`$?`$8`%\\0`$&`$?`$/`$>`$*`$9`$2`%\x07`$8`$?`$`$9`$-`$>`$0`$$`$`$*`$(`%\\0`$5`$>`$2`%\x07`$8`%\x07`$5`$>`$`$0`$$`%\x07`$.`%\x07`$0`%\x07`$9`%\\v`$(`%\x07`$8`$`$$`%\x07`$,`$9`%`$$`$8`$>`$\x07`$`$9`%\\v`$`$>`$`$>`$(`%\x07`$.`$?`$(`$`$`$0`$$`$>`$`$0`$(`$>`$\\t`$(`$`%\x07`$/`$9`$>`$`$8`$,`$8`%\x07`$-`$>`$7`$>`$`$*`$`%\x07`$2`$?`$/`%\x07`$6`%`$0`%`$\x07`$8`$`%\x07`$`$`$`%\x07`$.`%\x07`$0`%\\0`$8`$`$$`$>`$.`%\x07`$0`$>`$2`%\x07`$`$0`$`$\\\'`$?`$`$`$*`$(`$>`$8`$.`$>`$`$.`%`$`%\x07`$`$>`$0`$#`$9`%\\v`$$`$>`$`$!`$<`%\\0`$/`$9`$>`$`$9`%\\v`$`$2`$6`$,`%\\r`$&`$2`$?`$/`$>`$`%\\0`$5`$(`$`$>`$$`$>`$`%\\b`$8`%\x07`$`$*`$`$>`$5`$>`$2`%\\0`$&`%\x07`$(`%\x07`$*`%`$0`%\\0`$*`$>`$(`%\\0`$\\t`$8`$`%\x07`$9`%\\v`$`%\\0`$,`%\\b`$ `$`$`$*`$`%\\0`$5`$0`%\\r`$7`$`$>`$`$5`$`$*`$`%\\v`$`$?`$2`$>`$`$>`$(`$>`$8`$9`$.`$$`$9`$.`%\x07`$`$\\t`$(`$`%\\0`$/`$>`$9`%`$&`$0`%\\r`$`$8`%`$`%\\0`$*`$8`$`$&`$8`$5`$>`$2`$9`%\\v`$(`$>`$9`%\\v`$$`%\\0`$`%\\b`$8`%\x07`$5`$>`$*`$8`$`$(`$$`$>`$(`%\x07`$$`$>`$`$>`$0`%\\0`$`$>`$/`$2`$`$?`$2`%\x07`$(`%\\0`$`%\x07`$`$>`$`$`$*`$$`%\\r`$0`$`%`$`$2`$`$>`$$`%\x07`$,`$>`$9`$0`$`$*`$(`%\x07`$5`$>`$9`$(`$\x07`$8`$`$>`$8`%`$,`$9`$0`$9`$(`%\x07`$\x07`$8`$8`%\x07`$8`$9`$?`$$`$,`$!`$<`%\x07`$`$`$(`$>`$$`$2`$>`$6`$*`$>`$`$`$6`%\\r`$0`%\\0`$,`$!`$<`%\\0`$9`%\\v`$$`%\x07`$8`$>`$\\b`$`$6`$>`$/`$&`$8`$`$$`%\\0`$`$>`$$`%\\0`$5`$>`$2`$>`$9`$`$>`$0`$*`$`$(`$>`$0`$`$(`%\x07`$8`$!`$<`$`$.`$?`$2`$>`$\\t`$8`$`%\\0`$`%\x07`$5`$2`$2`$`$$`$>`$`$>`$(`$>`$`$0`%\\r`$%`$`$9`$>`$`$&`%\x07`$`$>`$*`$9`$2`%\\0`$(`$?`$/`$.`$,`$?`$(`$>`$,`%\\b`$`$`$`$9`%\\0`$`$`$9`$(`$>`$&`%\x07`$$`$>`$9`$.`$2`%\x07`$`$>`$+`%\\0`$`$,`$`$?`$$`%`$0`$$`$.`$>`$`$`$5`$9`%\\0`$`$0`%\\v`$`$<`$.`$?`$2`%\\0`$`$0`%\\v`$*`$8`%\x07`$(`$>`$/`$>`$&`$5`$2`%\x07`$(`%\x07`$`$>`$$`$>`$`$0`%\\0`$,`$\\t`$(`$`$>`$`$5`$>`$,`$*`%`$0`$>`$,`$!`$<`$>`$8`%\\f`$&`$>`$6`%\x07`$/`$0`$`$?`$/`%\x07`$`$9`$>`$`$`$`$8`$0`$,`$(`$>`$`$5`$9`$>`$`$8`%\\r`$%`$2`$.`$?`$2`%\x07`$2`%\x07`$`$`$5`$?`$7`$/`$`%\\r`$0`$`$8`$.`%`$9`$%`$>`$(`$>X*X3X*X7Y\\nX9YX4X\\\'X1YX)X(Y\\bX\\\'X3X7X)X\\\'YX5YX-X)YY\\bX\\\'X6Y\\nX9X\\\'YX.X\\\'X5X)X\\\'YYX2Y\\nX/X\\\'YX9X\\\'YX)X\\\'YYX\\\'X*X(X\\\'YX1X/Y\\bX/X(X1YX\\\'YX,X\\\'YX/Y\\bYX)X\\\'YX9X\\\'YYX\\\'YYY\\bYX9X\\\'YX9X1X(Y\\nX\\\'YX3X1Y\\nX9X\\\'YX,Y\\bX\\\'YX\\\'YX0Y\x07X\\\'X(X\\\'YX-Y\\nX\\\'X)X\\\'YX-YY\\bYX\\\'YYX1Y\\nYX\\\'YX9X1X\\\'YYX-YY\\bX8X)X\\\'YX+X\\\'YY\\nYX4X\\\'Y\x07X/X)X\\\'YYX1X#X)X\\\'YYX1X"YX\\\'YX4X(X\\\'X(X\\\'YX-Y\\bX\\\'X1X\\\'YX,X/Y\\nX/X\\\'YX#X3X1X)X\\\'YX9YY\\bYYX,YY\\bX9X)X\\\'YX1X-YYX\\\'YYYX\\\'X7YYX3X7Y\\nYX\\\'YYY\\bY\\nX*X\\\'YX/YY\\nX\\\'X(X1YX\\\'X*Y\x07X\\\'YX1Y\\nX\\\'X6X*X-Y\\nX\\\'X*Y\\nX(X*Y\\bYY\\nX*X\\\'YX#Y\\bYY\\tX\\\'YX(X1Y\\nX/X\\\'YYYX\\\'YX\\\'YX1X\\\'X(X7X\\\'YX4X.X5Y\\nX3Y\\nX\\\'X1X\\\'X*X\\\'YX+X\\\'YX+X\\\'YX5YX\\\'X)X\\\'YX-X/Y\\nX+X\\\'YX2Y\\bX\\\'X1X\\\'YX.YY\\nX,X\\\'YX,YY\\nX9X\\\'YX9X\\\'YY\x07X\\\'YX,YX\\\'YX\\\'YX3X\\\'X9X)YX4X\\\'Y\x07X/Y\x07X\\\'YX1X&Y\\nX3X\\\'YX/X.Y\\bYX\\\'YYYY\\nX)X\\\'YYX*X\\\'X(X\\\'YX/Y\\bX1Y\\nX\\\'YX/X1Y\\bX3X\\\'X3X*X:X1YX*X5X\\\'YY\\nYX\\\'YX(YX\\\'X*X\\\'YX9X8Y\\nYentertainmentunderstanding = function().jpg" width="configuration.png" width="<body class="Math.random()contemporary United Statescircumstances.appendChild(organizations<span class=""><img src="/distinguishedthousands of communicationclear"></div>investigationfavicon.ico" margin-right:based on the Massachusettstable border=internationalalso known aspronunciationbackground:#fpadding-left:For example, miscellaneous&lt;/math&gt;psychologicalin particularearch" type="form method="as opposed toSupreme Courtoccasionally Additionally,North Americapx;backgroundopportunitiesEntertainment.toLowerCase(manufacturingprofessional combined withFor instance,consisting of" maxlength="return false;consciousnessMediterraneanextraordinaryassassinationsubsequently button type="the number ofthe original comprehensiverefers to the</ul>\\n</div>\\nphilosophicallocation.hrefwas publishedSan Francisco(function(){\\n<div id="mainsophisticatedmathematical /head>\\r\\n<bodysuggests thatdocumentationconcentrationrelationshipsmay have been(for example,This article in some casesparts of the definition ofGreat Britain cellpadding=equivalent toplaceholder="; font-size: justificationbelieved thatsuffered fromattempted to leader of thecript" src="/(function() {are available\\n\\t<link rel=" src=\\\'http://interested inconventional " alt="" /></are generallyhas also beenmost popular correspondingcredited withtyle="border:</a></span></.gif" width="<iframe src="table class="inline-block;according to together withapproximatelyparliamentarymore and moredisplay:none;traditionallypredominantly&nbsp;|&nbsp;&nbsp;</span> cellspacing=<input name="or" content="controversialproperty="og:/x-shockwave-demonstrationsurrounded byNevertheless,was the firstconsiderable Although the collaborationshould not beproportion of<span style="known as the shortly afterfor instance,described as /head>\\n<body starting withincreasingly the fact thatdiscussion ofmiddle of thean individualdifficult to point of viewhomosexualityacceptance of</span></div>manufacturersorigin of thecommonly usedimportance ofdenominationsbackground: #length of thedeterminationa significant" border="0">revolutionaryprinciples ofis consideredwas developedIndo-Europeanvulnerable toproponents ofare sometimescloser to theNew York City name="searchattributed tocourse of themathematicianby the end ofat the end of" border="0" technological.removeClass(branch of theevidence that![endif]--\\x3e\\r\\nInstitute of into a singlerespectively.and thereforeproperties ofis located insome of whichThere is alsocontinued to appearance of &amp;ndash; describes theconsiderationauthor of theindependentlyequipped withdoes not have</a><a href="confused with<link href="/at the age ofappear in theThese includeregardless ofcould be used style=&quot;several timesrepresent thebody>\\n</html>thought to bepopulation ofpossibilitiespercentage ofaccess to thean attempt toproduction ofjquery/jquerytwo differentbelong to theestablishmentreplacing thedescription" determine theavailable forAccording to wide range of\\t<div class="more commonlyorganisationsfunctionalitywas completed &amp;mdash; participationthe characteran additionalappears to befact that thean example ofsignificantlyonmouseover="because they async = true;problems withseems to havethe result of src="http://familiar withpossession offunction () {took place inand sometimessubstantially<span></span>is often usedin an attemptgreat deal ofEnvironmentalsuccessfully virtually all20th century,professionalsnecessary to determined bycompatibilitybecause it isDictionary ofmodificationsThe followingmay refer to:Consequently,Internationalalthough somethat would beworld\\\'s firstclassified asbottom of the(particularlyalign="left" most commonlybasis for thefoundation ofcontributionspopularity ofcenter of theto reduce thejurisdictionsapproximation onmouseout="New Testamentcollection of</span></a></in the Unitedfilm director-strict.dtd">has been usedreturn to thealthough thischange in theseveral otherbut there areunprecedentedis similar toespecially inweight: bold;is called thecomputationalindicate thatrestricted to\\t<meta name="are typicallyconflict withHowever, the An example ofcompared withquantities ofrather than aconstellationnecessary forreported thatspecificationpolitical and&nbsp;&nbsp;<references tothe same yearGovernment ofgeneration ofhave not beenseveral yearscommitment to\\t\\t<ul class="visualization19th century,practitionersthat he wouldand continuedoccupation ofis defined ascentre of thethe amount of><div style="equivalent ofdifferentiatebrought aboutmargin-left: automaticallythought of asSome of these\\n<div class="input class="replaced withis one of theeducation andinfluenced byreputation as\\n<meta name="accommodation</div>\\n</div>large part ofInstitute forthe so-called against the In this case,was appointedclaimed to beHowever, thisDepartment ofthe remainingeffect on theparticularly deal with the\\n<div style="almost alwaysare currentlyexpression ofphilosophy offor more thancivilizationson the islandselectedIndexcan result in" value="" />the structure /></a></div>Many of thesecaused by theof the Unitedspan class="mcan be tracedis related tobecame one ofis frequentlyliving in thetheoreticallyFollowing theRevolutionarygovernment inis determinedthe politicalintroduced insufficient todescription">short storiesseparation ofas to whetherknown for itswas initiallydisplay:blockis an examplethe principalconsists of arecognized as/body></html>a substantialreconstructedhead of stateresistance toundergraduateThere are twogravitationalare describedintentionallyserved as theclass="headeropposition tofundamentallydominated theand the otheralliance withwas forced torespectively,and politicalin support ofpeople in the20th century.and publishedloadChartbeatto understandmember statesenvironmentalfirst half ofcountries andarchitecturalbe consideredcharacterizedclearIntervalauthoritativeFederation ofwas succeededand there area consequencethe Presidentalso includedfree softwaresuccession ofdeveloped thewas destroyedaway from the;\\n<\\/script>\\n<although theyfollowed by amore powerfulresulted in aUniversity ofHowever, manythe presidentHowever, someis thought tountil the endwas announcedare importantalso includes><input type=the center of DO NOT ALTERused to referthemes/?sort=that had beenthe basis forhas developedin the summercomparativelydescribed thesuch as thosethe resultingis impossiblevarious otherSouth Africanhave the sameeffectivenessin which case; text-align:structure and; background:regarding thesupported theis also knownstyle="marginincluding thebahasa Melayunorsk bokmC%lnorsk nynorskslovenE!D\\rinainternacionalcalificaciC3ncomunicaciC3nconstrucciC3n"><div class="disambiguationDomainName\\\', \\\'administrationsimultaneouslytransportationInternational margin-bottom:responsibility<![endif]--\\x3e\\n</><meta name="implementationinfrastructurerepresentationborder-bottom:</head>\\n<body>=http%3A%2F%2F<form method="method="post" /favicon.ico" });\\n<\\/script>\\n.setAttribute(Administration= new Array();<![endif]--\\x3e\\r\\ndisplay:block;Unfortunately,">&nbsp;</div>/favicon.ico">=\\\'stylesheet\\\' identification, for example,<li><a href="/an alternativeas a result ofpt"><\\/script>\\ntype="submit" \\n(function() {recommendationform action="/transformationreconstruction.style.display According to hidden" name="along with thedocument.body.approximately Communicationspost" action="meaning &quot;--<![endif]--\\x3ePrime Ministercharacteristic</a> <a class=the history of onmouseover="the governmenthref="https://was originallywas introducedclassificationrepresentativeare considered<![endif]--\\x3e\\n\\ndepends on theUniversity of in contrast to placeholder="in the case ofinternational constitutionalstyle="border-: function() {Because of the-strict.dtd">\\n<table class="accompanied byaccount of the<script src="/nature of the the people in in addition tos); js.id = id" width="100%"regarding the Roman Catholican independentfollowing the .gif" width="1the following discriminationarchaeologicalprime minister.js"><\\/script>combination of marginwidth="createElement(w.attachEvent(</a></td></tr>src="https://aIn particular, align="left" Czech RepublicUnited Kingdomcorrespondenceconcluded that.html" title="(function () {comes from theapplication of<span class="sbelieved to beement(\\\'script\\\'</a>\\n</li>\\n<livery different><span class="option value="(also known as\\t<li><a href="><input name="separated fromreferred to as valign="top">founder of theattempting to carbon dioxide\\n\\n<div class="class="search-/body>\\n</html>opportunity tocommunications</head>\\r\\n<body style="width:Tia:?ng Via;\x07tchanges in theborder-color:#0" border="0" </span></div><was discovered" type="text" );\\n<\\/script>\\n\\nDepartment of ecclesiasticalthere has beenresulting from</body></html>has never beenthe first timein response toautomatically </div>\\n\\n<div iwas consideredpercent of the" /></a></div>collection of descended fromsection of theaccept-charsetto be confusedmember of the padding-right:translation ofinterpretation href=\\\'http://whether or notThere are alsothere are manya small numberother parts ofimpossible to  class="buttonlocated in the. However, theand eventuallyAt the end of because of itsrepresents the<form action=" method="post"it is possiblemore likely toan increase inhave also beencorresponds toannounced thatalign="right">many countriesfor many yearsearliest knownbecause it waspt"><\\/script>\\r valign="top" inhabitants offollowing year\\r\\n<div class="million peoplecontroversial concerning theargue that thegovernment anda reference totransferred todescribing the style="color:although therebest known forsubmit" name="multiplicationmore than one recognition ofCouncil of theedition of the  <meta name="Entertainment away from the ;margin-right:at the time ofinvestigationsconnected withand many otheralthough it isbeginning with <span class="descendants of<span class="i align="right"</head>\\n<body aspects of thehas since beenEuropean Unionreminiscent ofmore difficultVice Presidentcomposition ofpassed throughmore importantfont-size:11pxexplanation ofthe concept ofwritten in the\\t<span class="is one of the resemblance toon the groundswhich containsincluding the defined by thepublication ofmeans that theoutside of thesupport of the<input class="<span class="t(Math.random()most prominentdescription ofConstantinoplewere published<div class="seappears in the1" height="1" most importantwhich includeswhich had beendestruction ofthe population\\n\\t<div class="possibility ofsometimes usedappear to havesuccess of theintended to bepresent in thestyle="clear:b\\r\\n<\\/script>\\r\\n<was founded ininterview with_id" content="capital of the\\r\\n<link rel="srelease of thepoint out thatxMLHttpRequestand subsequentsecond largestvery importantspecificationssurface of theapplied to theforeign policy_setDomainNameestablished inis believed toIn addition tomeaning of theis named afterto protect theis representedDeclaration ofmore efficientClassificationother forms ofhe returned to<span class="cperformance of(function() {\\rif and only ifregions of theleading to therelations withUnited Nationsstyle="height:other than theype" content="Association of\\n</head>\\n<bodylocated on theis referred to(including theconcentrationsthe individualamong the mostthan any other/>\\n<link rel=" return false;the purpose ofthe ability to;color:#fff}\\n.\\n<span class="the subject ofdefinitions of>\\r\\n<link rel="claim that thehave developed<table width="celebration ofFollowing the to distinguish<span class="btakes place inunder the namenoted that the><![endif]--\\x3e\\nstyle="margin-instead of theintroduced thethe process ofincreasing thedifferences inestimated thatespecially the/div><div id="was eventuallythroughout histhe differencesomething thatspan></span></significantly ><\\/script>\\r\\n\\r\\nenvironmental to prevent thehave been usedespecially forunderstand theis essentiallywere the firstis the largesthave been made" src="http://interpreted assecond half ofcrolling="no" is composed ofII, Holy Romanis expected tohave their owndefined as thetraditionally have differentare often usedto ensure thatagreement withcontaining theare frequentlyinformation onexample is theresulting in a</a></li></ul> class="footerand especiallytype="button" </span></span>which included>\\n<meta name="considered thecarried out byHowever, it isbecame part ofin relation topopular in thethe capital ofwas officiallywhich has beenthe History ofalternative todifferent fromto support thesuggested thatin the process  <div class="the foundationbecause of hisconcerned withthe universityopposed to thethe context of<span class="ptext" name="q"\\t\\t<div class="the scientificrepresented bymathematicianselected by thethat have been><div class="cdiv id="headerin particular,converted into);\\n<\\/script>\\n<philosophical srpskohrvatskitia:?ng Via;\x07tP QQQP:P8P9Q\\0QQQP:P8P9investigaciC3nparticipaciC3nP:P>QP>Q\\0Q\\vP5P>P1P;P0QQP8P:P>QP>Q\\0Q\\vP9Q\x07P5P;P>P2P5P:QP8QQP5P<Q\\vPP>P2P>QQP8P:P>QP>Q\\0Q\\vQP>P1P;P0QQQ\\fP2Q\\0P5P<P5P=P8P:P>QP>Q\\0P0QQP5P3P>P4P=QQP:P0Q\x07P0QQ\\fP=P>P2P>QQP8P#P:Q\\0P0P8P=Q\\vP2P>P?Q\\0P>QQ\\vP:P>QP>Q\\0P>P9QP4P5P;P0QQ\\fP?P>P<P>Q\\tQ\\fQQQ\\0P5P4QQP2P>P1Q\\0P0P7P>P<QQP>Q\\0P>P=Q\\vQQ\x07P0QQP8P5QP5Q\x07P5P=P8P5PP;P0P2P=P0QP8QQP>Q\\0P8P8QP8QQP5P<P0Q\\0P5Q\\bP5P=P8QP!P:P0Q\x07P0QQ\\fP?P>Q\\rQP>P<QQP;P5P4QP5QQP:P0P7P0QQ\\fQP>P2P0Q\\0P>P2P:P>P=P5Q\x07P=P>Q\\0P5Q\\bP5P=P8P5P:P>QP>Q\\0P>P5P>Q\\0P3P0P=P>P2P:P>QP>Q\\0P>P<P P5P:P;P0P<P0X\\\'YYYX*X/Y\\tYYX*X/Y\\nX\\\'X*X\\\'YYY\\bX6Y\\bX9X\\\'YX(X1X\\\'YX,X\\\'YYY\\bX\\\'YX9X\\\'YX1X3X\\\'X&YYX4X\\\'X1YX\\\'X*X\\\'YX#X9X6X\\\'X!X\\\'YX1Y\\nX\\\'X6X)X\\\'YX*X5YY\\nYX\\\'YX\\\'X9X6X\\\'X!X\\\'YYX*X\\\'X&X,X\\\'YX#YX9X\\\'X(X\\\'YX*X3X,Y\\nYX\\\'YX#YX3X\\\'YX\\\'YX6X:X7X\\\'X*X\\\'YYY\\nX/Y\\nY\\bX\\\'YX*X1X-Y\\nX(X\\\'YX,X/Y\\nX/X)X\\\'YX*X9YY\\nYX\\\'YX#X.X(X\\\'X1X\\\'YX\\\'YYX\\\'YX\\\'YX#YYX\\\'YX\\\'YX*X\\\'X1Y\\nX.X\\\'YX*YYY\\nX)X\\\'YX\\\'YX9X\\\'X(X\\\'YX.Y\\bX\\\'X7X1X\\\'YYX,X*YX9X\\\'YX/Y\\nYY\\bX1X\\\'YX3Y\\nX\\\'X-X)X9X(X/X\\\'YYY\x07X\\\'YX*X1X(Y\\nX)X\\\'YX1Y\\bX\\\'X(X7X\\\'YX#X/X(Y\\nX)X\\\'YX\\\'X.X(X\\\'X1X\\\'YYX*X-X/X)X\\\'YX\\\'X:X\\\'YY\\ncursor:pointer;</title>\\n<meta " href="http://"><span class="members of the window.locationvertical-align:/a> | <a href="<!doctype html>media="screen" <option value="favicon.ico" />\\n\\t\\t<div class="characteristics" method="get" /body>\\n</html>\\nshortcut icon" document.write(padding-bottom:representativessubmit" value="align="center" throughout the science fiction\\n  <div class="submit" class="one of the most valign="top"><was established);\\r\\n<\\/script>\\r\\nreturn false;">).style.displaybecause of the document.cookie<form action="/}body{margin:0;Encyclopedia ofversion of the .createElement(name" content="</div>\\n</div>\\n\\nadministrative </body>\\n</html>history of the "><input type="portion of the as part of the &nbsp;<a href="other countries">\\n<div class="</span></span><In other words,display: block;control of the introduction of/>\\n<meta name="as well as the in recent years\\r\\n\\t<div class="</div>\\n\\t</div>\\ninspired by thethe end of the compatible withbecame known as style="margin:.js"><\\/script>< International there have beenGerman language style="color:#Communist Partyconsistent withborder="0" cell marginheight="the majority of" align="centerrelated to the many different Orthodox Churchsimilar to the />\\n<link rel="swas one of the until his death})();\\n<\\/script>other languagescompared to theportions of thethe Netherlandsthe most commonbackground:url(argued that thescrolling="no" included in theNorth American the name of theinterpretationsthe traditionaldevelopment of frequently useda collection ofvery similar tosurrounding theexample of thisalign="center">would have beenimage_caption =attached to thesuggesting thatin the form of involved in theis derived fromnamed after theIntroduction torestrictions on style="width: can be used to the creation ofmost important information andresulted in thecollapse of theThis means thatelements of thewas replaced byanalysis of theinspiration forregarded as themost successfulknown as &quot;a comprehensiveHistory of the were consideredreturned to theare referred toUnsourced image>\\n\\t<div class="consists of thestopPropagationinterest in theavailability ofappears to haveelectromagneticenableServices(function of theIt is important<\\/script></div>function(){var relative to theas a result of the position ofFor example, in method="post" was followed by&amp;mdash; thethe applicationjs"><\\/script>\\r\\nul></div></div>after the deathwith respect tostyle="padding:is particularlydisplay:inline; type="submit" is divided intod8-f\x07 (g.\\0d=)responsabilidadadministraciC3ninternacionalescorrespondiente`$\\t`$*`$/`%\\v`$`$*`%`$0`%\\r`$5`$9`$.`$>`$0`%\x07`$2`%\\v`$`%\\v`$`$`%`$(`$>`$5`$2`%\x07`$`$?`$(`$8`$0`$`$>`$0`$*`%`$2`$?`$8`$`%\\v`$`%\x07`$`$`$>`$9`$?`$`$-`%\x07`$`%\x07`$`$6`$>`$.`$?`$2`$9`$.`$>`$0`%\\0`$`$>`$`$0`$#`$,`$(`$>`$(`%\x07`$`%`$.`$>`$0`$,`%\\r`$2`%\\t`$`$.`$>`$2`$?`$`$.`$9`$?`$2`$>`$*`%`$7`%\\r`$ `$,`$"`$<`$$`%\x07`$-`$>`$`$*`$>`$`%\\r`$2`$?`$`$`%\\r`$0`%\x07`$(`$`$?`$2`$>`$+`$&`%\\f`$0`$>`$(`$.`$>`$.`$2`%\x07`$.`$$`$&`$>`$(`$,`$>`$`$>`$0`$5`$?`$`$>`$8`$`%\\r`$/`%\\v`$`$`$>`$9`$$`%\x07`$*`$9`%`$`$`$,`$$`$>`$/`$>`$8`$`$5`$>`$&`$&`%\x07`$`$(`%\x07`$*`$?`$\x1B`$2`%\x07`$5`$?`$6`%\x07`$7`$0`$>`$`%\\r`$/`$\\t`$$`%\\r`$$`$0`$.`%`$`$,`$\\b`$&`%\\v`$(`%\\v`$`$\\t`$*`$`$0`$#`$*`$"`$<`%\x07`$`$8`%\\r`$%`$?`$$`$+`$?`$2`%\\r`$.`$.`%`$`%\\r`$/`$`$`%\\r`$\x1B`$>`$\x1B`%`$`$$`%\\0`$8`$`$`%\\0`$$`$`$>`$`$`$>`$5`$?`$-`$>`$`$`$#`%\\r`$`%\x07`$&`%`$8`$0`%\x07`$&`$?`$(`%\\v`$`$9`$$`%\\r`$/`$>`$8`%\x07`$`%\\r`$8`$`$>`$`$\\\'`%\\0`$5`$?`$6`%\\r`$5`$0`$>`$$`%\x07`$`$&`%\\b`$`%\\r`$8`$(`$`%\\r`$6`$>`$8`$>`$.`$(`%\x07`$`$&`$>`$2`$$`$,`$?`$`$2`%\\0`$*`%`$0`%`$7`$9`$?`$`$&`%\\0`$.`$?`$$`%\\r`$0`$`$5`$?`$$`$>`$0`%`$*`$/`%\x07`$8`%\\r`$%`$>`$(`$`$0`%\\v`$!`$<`$.`%`$`%\\r`$$`$/`%\\v`$`$(`$>`$`%`$*`$/`$>`$*`%\\v`$8`%\\r`$`$`$0`%\x07`$2`%`$`$>`$0`%\\r`$/`$5`$?`$`$>`$0`$8`%`$`$(`$>`$.`%`$2`%\\r`$/`$&`%\x07`$`%\x07`$`$9`$.`%\x07`$6`$>`$8`%\\r`$`%`$2`$.`%\\b`$`$(`%\x07`$$`%\\b`$/`$>`$0`$`$?`$8`$`%\x07rss+xml" title="-type" content="title" content="at the same time.js"><\\/script>\\n<" method="post" </span></a></li>vertical-align:t/jquery.min.js">.click(function( style="padding-})();\\n<\\/script>\\n</span><a href="<a href="http://); return false;text-decoration: scrolling="no" border-collapse:associated with Bahasa IndonesiaEnglish language<text xml:space=.gif" border="0"</body>\\n</html>\\noverflow:hidden;img src="http://addEventListenerresponsible for s.js"><\\/script>\\n/favicon.ico" />operating system" style="width:1target="_blank">State Universitytext-align:left;\\ndocument.write(, including the around the world);\\r\\n<\\/script>\\r\\n<" style="height:;overflow:hiddenmore informationan internationala member of the one of the firstcan be found in </div>\\n\\t\\t</div>\\ndisplay: none;">" />\\n<link rel="\\n  (function() {the 15th century.preventDefault(large number of Byzantine Empire.jpg|thumb|left|vast majority ofmajority of the  align="center">University Pressdominated by theSecond World Wardistribution of style="position:the rest of the characterized by rel="nofollow">derives from therather than the a combination ofstyle="width:100English-speakingcomputer scienceborder="0" alt="the existence ofDemocratic Party" style="margin-For this reason,.js"><\\/script>\\n\\tsByTagName(s)[0]js"><\\/script>\\r\\n<.js"><\\/script>\\r\\nlink rel="icon" \\\' alt=\\\'\\\' class=\\\'formation of theversions of the </a></div></div>/page>\\n  <page>\\n<div class="contbecame the firstbahasa Indonesiaenglish (simple)NN;N;N7N=N9N:N,QQ\\0P2P0QQP:P8P:P>P<P?P0P=P8P8QP2P;QP5QQQPP>P1P0P2P8QQ\\fQ\x07P5P;P>P2P5P:P0Q\\0P0P7P2P8QP8QPP=QP5Q\\0P=P5QPQP2P5QP8QQ\\fP=P0P?Q\\0P8P<P5Q\\0P8P=QP5Q\\0P=P5QP:P>QP>Q\\0P>P3P>QQQ\\0P0P=P8QQ\\vP:P0Q\x07P5QQP2P5QQP;P>P2P8QQP?Q\\0P>P1P;P5P<Q\\vP?P>P;QQ\x07P8QQ\\fQP2P;QQQQQP=P0P8P1P>P;P5P5P:P>P<P?P0P=P8QP2P=P8P<P0P=P8P5QQ\\0P5P4QQP2P0X\\\'YYY\\bX\\\'X6Y\\nX9X\\\'YX1X&Y\\nX3Y\\nX)X\\\'YX\\\'YX*YX\\\'YYX4X\\\'X1YX\\\'X*YX\\\'YX3Y\\nX\\\'X1X\\\'X*X\\\'YYYX*Y\\bX(X)X\\\'YX3X9Y\\bX/Y\\nX)X\\\'X-X5X\\\'X&Y\\nX\\\'X*X\\\'YX9X\\\'YYY\\nX)X\\\'YX5Y\\bX*Y\\nX\\\'X*X\\\'YX\\\'YX*X1YX*X\\\'YX*X5X\\\'YY\\nYX\\\'YX%X3YX\\\'YY\\nX\\\'YYX4X\\\'X1YX)X\\\'YYX1X&Y\\nX\\\'X*robots" content="<div id="footer">the United States<img src="http://.jpg|right|thumb|.js"><\\/script>\\r\\n<location.protocolframeborder="0" s" />\\n<meta name="</a></div></div><font-weight:bold;&quot; and &quot;depending on the margin:0;padding:" rel="nofollow" President of the twentieth centuryevision>\\n  </pageInternet Explorera.async = true;\\r\\ninformation about<div id="header">" action="http://<a href="https://<div id="content"</div>\\r\\n</div>\\r\\n<derived from the <img src=\\\'http://according to the \\n</body>\\n</html>\\nstyle="font-size:script language="Arial, Helvetica,</a><span class="<\\/script><script political partiestd></tr></table><href="http://www.interpretation ofrel="stylesheet" document.write(\\\'<charset="utf-8">\\nbeginning of the revealed that thetelevision series" rel="nofollow"> target="_blank">claiming that thehttp%3A%2F%2Fwww.manifestations ofPrime Minister ofinfluenced by theclass="clearfix">/div>\\r\\n</div>\\r\\n\\r\\nthree-dimensionalChurch of Englandof North Carolinasquare kilometres.addEventListenerdistinct from thecommonly known asPhonetic Alphabetdeclared that thecontrolled by theBenjamin Franklinrole-playing gamethe University ofin Western Europepersonal computerProject Gutenbergregardless of thehas been proposedtogether with the></li><li class="in some countriesmin.js"><\\/script>of the populationofficial language<img src="images/identified by thenatural resourcesclassification ofcan be consideredquantum mechanicsNevertheless, themillion years ago</body>\\r\\n</html>\\rNN;N;N7N=N9N:N,\\ntake advantage ofand, according toattributed to theMicrosoft Windowsthe first centuryunder the controldiv class="headershortly after thenotable exceptiontens of thousandsseveral differentaround the world.reaching militaryisolated from theopposition to thethe Old TestamentAfrican Americansinserted into theseparate from themetropolitan areamakes it possibleacknowledged thatarguably the mosttype="text/css">\\nthe InternationalAccording to the pe="text/css" />\\ncoincide with thetwo-thirds of theDuring this time,during the periodannounced that hethe internationaland more recentlybelieved that theconsciousness andformerly known assurrounded by thefirst appeared inoccasionally usedposition:absolute;" target="_blank" position:relative;text-align:center;jax/libs/jquery/1.background-color:#type="application/anguage" content="<meta http-equiv="Privacy Policy</a>e("%3Cscript src=\\\'" target="_blank">On the other hand,.jpg|thumb|right|2</div><div class="<div style="float:nineteenth century</body>\\r\\n</html>\\r\\n<img src="http://s;text-align:centerfont-weight: bold; According to the difference between" frameborder="0" " style="position:link href="http://html4/loose.dtd">\\nduring this period</td></tr></table>closely related tofor the first time;font-weight:bold;input type="text" <span style="font-onreadystatechange\\t<div class="cleardocument.location. For example, the a wide variety of <!DOCTYPE html>\\r\\n<&nbsp;&nbsp;&nbsp;"><a href="http://style="float:left;concerned with the=http%3A%2F%2Fwww.in popular culturetype="text/css" />it is possible to Harvard Universitytylesheet" href="/the main characterOxford University  name="keywords" cstyle="text-align:the United Kingdomfederal government<div style="margin depending on the description of the<div class="header.min.js"><\\/script>destruction of theslightly differentin accordance withtelecommunicationsindicates that theshortly thereafterespecially in the European countriesHowever, there aresrc="http://staticsuggested that the" src="http://www.a large number of Telecommunications" rel="nofollow" tHoly Roman Emperoralmost exclusively" border="0" alt="Secretary of Stateculminating in theCIA World Factbookthe most importantanniversary of thestyle="background-<li><em><a href="/the Atlantic Oceanstrictly speaking,shortly before thedifferent types ofthe Ottoman Empire><img src="http://An Introduction toconsequence of thedeparture from theConfederate Statesindigenous peoplesProceedings of theinformation on thetheories have beeninvolvement in thedivided into threeadjacent countriesis responsible fordissolution of thecollaboration withwidely regarded ashis contemporariesfounding member ofDominican Republicgenerally acceptedthe possibility ofare also availableunder constructionrestoration of thethe general publicis almost entirelypasses through thehas been suggestedcomputer and videoGermanic languages according to the different from theshortly afterwardshref="https://www.recent developmentBoard of Directors<div class="search| <a href="http://In particular, theMultiple footnotesor other substancethousands of yearstranslation of the</div>\\r\\n</div>\\r\\n\\r\\n<a href="index.phpwas established inmin.js"><\\/script>\\nparticipate in thea strong influencestyle="margin-top:represented by thegraduated from theTraditionally, theElement("script");However, since the/div>\\n</div>\\n<div left; margin-left:protection against0; vertical-align:Unfortunately, thetype="image/x-icon/div>\\n<div class=" class="clearfix"><div class="footer\\t\\t</div>\\n\\t\\t</div>\\nthe motion picturePQ\\nP;P3P0Q\\0QP:P8P1Q\\nP;P3P0Q\\0QP:P8P$P5P4P5Q\\0P0QP8P8P=P5QP:P>P;Q\\fP:P>QP>P>P1Q\\tP5P=P8P5QP>P>P1Q\\tP5P=P8QP?Q\\0P>P3Q\\0P0P<P<Q\\vPQP?Q\\0P0P2P8QQ\\fP1P5QP?P;P0QP=P>P<P0QP5Q\\0P8P0P;Q\\vP?P>P7P2P>P;QP5QP?P>QP;P5P4P=P8P5Q\\0P0P7P;P8Q\x07P=Q\\vQP?Q\\0P>P4QP:QP8P8P?Q\\0P>P3Q\\0P0P<P<P0P?P>P;P=P>QQQ\\fQP=P0QP>P4P8QQQP8P7P1Q\\0P0P=P=P>P5P=P0QP5P;P5P=P8QP8P7P<P5P=P5P=P8QP:P0QP5P3P>Q\\0P8P8PP;P5P:QP0P=P4Q\\0`$&`%\\r`$5`$>`$0`$>`$.`%\\b`$(`%`$`$2`$*`%\\r`$0`$&`$>`$(`$-`$>`$0`$$`%\\0`$/`$`$(`%`$&`%\x07`$6`$9`$?`$(`%\\r`$&`%\\0`$\x07`$`$!`$?`$/`$>`$&`$?`$2`%\\r`$2`%\\0`$`$\\\'`$?`$`$>`$0`$5`%\\0`$!`$?`$/`%\\v`$`$?`$`%\\r`$ `%\x07`$8`$.`$>`$`$>`$0`$`$`$`%\\r`$6`$(`$&`%`$(`$?`$/`$>`$*`%\\r`$0`$/`%\\v`$`$`$(`%`$8`$>`$0`$`$(`$2`$>`$\x07`$(`$*`$>`$0`%\\r`$`%\\0`$6`$0`%\\r`$$`%\\v`$`$2`%\\v`$`$8`$-`$>`$+`$<`%\\r`$2`%\\b`$6`$6`$0`%\\r`$$`%\x07`$`$*`%\\r`$0`$&`%\x07`$6`$*`%\\r`$2`%\x07`$/`$0`$`%\x07`$`$&`%\\r`$0`$8`%\\r`$%`$?`$$`$?`$\\t`$$`%\\r`$*`$>`$&`$\\t`$(`%\\r`$9`%\x07`$`$`$?`$`%\\r`$ `$>`$/`$>`$$`%\\r`$0`$>`$`%\\r`$/`$>`$&`$>`$*`%`$0`$>`$(`%\x07`$`%\\v`$!`$<`%\x07`$`$`$(`%`$5`$>`$&`$6`%\\r`$0`%\x07`$#`%\\0`$6`$?`$`%\\r`$7`$>`$8`$0`$`$>`$0`%\\0`$8`$`$`%\\r`$0`$9`$*`$0`$?`$#`$>`$.`$,`%\\r`$0`$>`$`$!`$,`$`%\\r`$`%\\v`$`$\\t`$*`$2`$,`%\\r`$\\\'`$.`$`$$`%\\r`$0`%\\0`$8`$`$*`$0`%\\r`$`$\\t`$.`%\\r`$.`%\\0`$&`$.`$>`$\\\'`%\\r`$/`$.`$8`$9`$>`$/`$$`$>`$6`$,`%\\r`$&`%\\v`$`$.`%\\0`$!`$?`$/`$>`$`$\\b`$*`%\\0`$`$2`$.`%\\v`$,`$>`$\x07`$2`$8`$`$`%\\r`$/`$>`$`$*`$0`%\x07`$6`$(`$`$(`%`$,`$`$\\\'`$,`$>`$`$<`$>`$0`$(`$5`%\\0`$(`$$`$.`$*`%\\r`$0`$.`%`$`$*`%\\r`$0`$6`%\\r`$(`$*`$0`$?`$5`$>`$0`$(`%`$`$8`$>`$(`$8`$.`$0`%\\r`$%`$(`$`$/`%\\v`$`$?`$$`$8`%\\v`$.`$5`$>`$0X\\\'YYX4X\\\'X1YX\\\'X*X\\\'YYYX*X/Y\\nX\\\'X*X\\\'YYYX(Y\\nY\\bX*X1X\\\'YYX4X\\\'Y\x07X/X\\\'X*X9X/X/X\\\'YX2Y\\bX\\\'X1X9X/X/X\\\'YX1X/Y\\bX/X\\\'YX%X3YX\\\'YY\\nX)X\\\'YYY\\bX*Y\\bX4Y\\bX(X\\\'YYX3X\\\'X(YX\\\'X*X\\\'YYX9YY\\bYX\\\'X*X\\\'YYX3YX3YX\\\'X*X\\\'YX,X1X\\\'YY\\nYX3X\\\'YX\\\'X3YX\\\'YY\\nX)X\\\'YX\\\'X*X5X\\\'YX\\\'X*keywords" content="w3.org/1999/xhtml"><a target="_blank" text/html; charset=" target="_blank"><table cellpadding="autocomplete="off" text-align: center;to last version by background-color: #" href="http://www./div></div><div id=<a href="#" class=""><img src="http://cript" src="http://\\n<script language="//EN" "http://www.wencodeURIComponent(" href="javascript:<div class="contentdocument.write(\\\'<scposition: absolute;script src="http:// style="margin-top:.min.js"><\\/script>\\n</div>\\n<div class="w3.org/1999/xhtml" \\n\\r\\n</body>\\r\\n</html>distinction between/" target="_blank"><link href="http://encoding="utf-8"?>\\nw.addEventListener?action="http://www.icon" href="http:// style="background:type="text/css" />\\nmeta property="og:t<input type="text"  style="text-align:the development of tylesheet" type="tehtml; charset=utf-8is considered to betable width="100%" In addition to the contributed to the differences betweendevelopment of the It is important to <\\/script>\\n\\n<script  style="font-size:1></span><span id=gbLibrary of Congress<img src="http://imEnglish translationAcademy of Sciencesdiv style="display:construction of the.getElementById(id)in conjunction withElement(\\\'script\\\'); <meta property="og:PQ\\nP;P3P0Q\\0QP:P8\\n type="text" name=">Privacy Policy</a>administered by theenableSingleRequeststyle=&quot;margin:</div></div></div><><img src="http://i style=&quot;float:referred to as the total population ofin Washington, D.C. style="background-among other things,organization of theparticipated in thethe introduction ofidentified with thefictional character Oxford University misunderstanding ofThere are, however,stylesheet" href="/Columbia Universityexpanded to includeusually referred toindicating that thehave suggested thataffiliated with thecorrelation betweennumber of different></td></tr></table>Republic of Ireland\\n<\\/script>\\n<script under the influencecontribution to theOfficial website ofheadquarters of thecentered around theimplications of thehave been developedFederal Republic ofbecame increasinglycontinuation of theNote, however, thatsimilar to that of capabilities of theaccordance with theparticipants in thefurther developmentunder the directionis often consideredhis younger brother</td></tr></table><a http-equiv="X-UA-physical propertiesof British Columbiahas been criticized(with the exceptionquestions about thepassing through the0" cellpadding="0" thousands of peopleredirects here. Forhave children under%3E%3C/script%3E"));<a href="http://www.<li><a href="http://site_name" content="text-decoration:nonestyle="display: none<meta http-equiv="X-new Date().getTime() type="image/x-icon"</span><span class="language="javascriptwindow.location.href<a href="javascript:--\\x3e\\r\\n<script type="t<a href=\\\'http://www.hortcut icon" href="</div>\\r\\n<div class="<script src="http://" rel="stylesheet" t</div>\\n<script type=/a> <a href="http:// allowTransparency="X-UA-Compatible" conrelationship between\\n<\\/script>\\r\\n<script </a></li></ul></div>associated with the programming language</a><a href="http://</a></li><li class="form action="http://<div style="display:type="text" name="q"<table width="100%" background-position:" border="0" width="rel="shortcut icon" h6><ul><li><a href="  <meta http-equiv="css" media="screen" responsible for the " type="application/" style="background-html; charset=utf-8" allowtransparency="stylesheet" type="te\\r\\n<meta http-equiv="></span><span class="0" cellspacing="0">;\\n<\\/script>\\n<script sometimes called thedoes not necessarilyFor more informationat the beginning of <!DOCTYPE html><htmlparticularly in the type="hidden" name="javascript:void(0);"effectiveness of the autocomplete="off" generally considered><input type="text" "><\\/script>\\r\\n<scriptthroughout the worldcommon misconceptionassociation with the</div>\\n</div>\\n<div cduring his lifetime,corresponding to thetype="image/x-icon" an increasing numberdiplomatic relationsare often consideredmeta charset="utf-8" <input type="text" examples include the"><img src="http://iparticipation in thethe establishment of\\n</div>\\n<div class="&amp;nbsp;&amp;nbsp;to determine whetherquite different frommarked the beginningdistance between thecontributions to theconflict between thewidely considered towas one of the firstwith varying degreeshave speculated that(document.getElementparticipating in theoriginally developedeta charset="utf-8"> type="text/css" />\\ninterchangeably withmore closely relatedsocial and politicalthat would otherwiseperpendicular to thestyle type="text/csstype="submit" name="families residing indeveloping countriescomputer programmingeconomic developmentdetermination of thefor more informationon several occasionsportuguC*s (Europeu)P#P:Q\\0P0QP=QQ\\fP:P0QP:Q\\0P0QP=QQ\\fP:P0P P>QQP8P9QP:P>P9P<P0QP5Q\\0P8P0P;P>P2P8P=QP>Q\\0P<P0QP8P8QP?Q\\0P0P2P;P5P=P8QP=P5P>P1QP>P4P8P<P>P8P=QP>Q\\0P<P0QP8QPP=QP>Q\\0P<P0QP8QP P5QP?QP1P;P8P:P8P:P>P;P8Q\x07P5QQP2P>P8P=QP>Q\\0P<P0QP8QQP5Q\\0Q\\0P8QP>Q\\0P8P8P4P>QQP0QP>Q\x07P=P>X\\\'YYX*Y\\bX\\\'X,X/Y\\bYX\\\'YX\\\'X4X*X1X\\\'YX\\\'X*X\\\'YX\\\'YX*X1X\\\'X-X\\\'X*html; charset=UTF-8" setTimeout(function()display:inline-block;<input type="submit" type = \\\'text/javascri<img src="http://www." "http://www.w3.org/shortcut icon" href="" autocomplete="off" </a></div><div class=</a></li>\\n<li class="css" type="text/css" <form action="http://xt/css" href="http://link rel="alternate" \\r\\n<script type="text/ onclick="javascript:(new Date).getTime()}height="1" width="1" People\\\'s Republic of  <a href="http://www.text-decoration:underthe beginning of the </div>\\n</div>\\n</div>\\nestablishment of the </div></div></div></d#viewport{min-height:\\n<script src="http://option><option value=often referred to as /option>\\n<option valu<!DOCTYPE html>\\n\\x3c!--[International Airport>\\n<a href="http://www</a><a href="http://w`8 `82`8)`82`9`8`8"a%aa aa#aaf-#i+d8-f\x07 (g9i+)`$(`$?`$0`%\\r`$&`%\x07`$6`$!`$>`$\\t`$(`$2`%\\v`$!`$`%\\r`$7`%\x07`$$`%\\r`$0`$`$>`$(`$`$>`$0`%\\0`$8`$`$,`$`$\\\'`$?`$$`$8`%\\r`$%`$>`$*`$(`$>`$8`%\\r`$5`%\\0`$`$>`$0`$8`$`$8`%\\r`$`$0`$#`$8`$>`$.`$`%\\r`$0`%\\0`$`$?`$`%\\r`$ `%\\v`$`$5`$?`$`%\\r`$`$>`$(`$`$.`%\x07`$0`$?`$`$>`$5`$?`$-`$?`$(`%\\r`$(`$`$>`$!`$?`$/`$>`$`$`%\\r`$/`%\\v`$`$`$?`$8`%`$0`$`%\\r`$7`$>`$*`$9`%`$`$`$$`%\\0`$*`%\\r`$0`$,`$`$\\\'`$(`$`$?`$*`%\\r`$*`$#`%\\0`$`%\\r`$0`$?`$`%\x07`$`$*`%\\r`$0`$>`$0`$`$-`$*`%\\r`$0`$>`$*`%\\r`$$`$.`$>`$2`$?`$`%\\v`$`$0`$+`$<`%\\r`$$`$>`$0`$(`$?`$0`%\\r`$.`$>`$#`$2`$?`$.`$?`$`%\x07`$!description" content="document.location.prot.getElementsByTagName(<!DOCTYPE html>\\n<html <meta charset="utf-8">:url" content="http://.css" rel="stylesheet"style type="text/css">type="text/css" href="w3.org/1999/xhtml" xmltype="text/javascript" method="get" action="link rel="stylesheet"  = document.getElementtype="image/x-icon" />cellpadding="0" cellsp.css" type="text/css" </a></li><li><a href="" width="1" height="1""><a href="http://www.style="display:none;">alternate" type="appli-//W3C//DTD XHTML 1.0 ellspacing="0" cellpad type="hidden" value="/a>&nbsp;<span role="s\\n<input type="hidden" language="JavaScript"  document.getElementsBg="0" cellspacing="0" ype="text/css" media="type=\\\'text/javascript\\\'with the exception of ype="text/css" rel="st height="1" width="1" =\\\'+encodeURIComponent(<link rel="alternate" \\nbody, tr, input, textmeta name="robots" conmethod="post" action=">\\n<a href="http://www.css" rel="stylesheet" </div></div><div classlanguage="javascript">aria-hidden="true">B7<ript" type="text/javasl=0;})();\\n(function(){background-image: url(/a></li><li><a href="h\\t\\t<li><a href="http://ator" aria-hidden="tru> <a href="http://www.language="javascript" /option>\\n<option value/div></div><div class=rator" aria-hidden="tre=(new Date).getTime()portuguC*s (do Brasil)P>Q\\0P3P0P=P8P7P0QP8P8P2P>P7P<P>P6P=P>QQQ\\fP>P1Q\\0P0P7P>P2P0P=P8QQ\\0P5P3P8QQQ\\0P0QP8P8P2P>P7P<P>P6P=P>QQP8P>P1QP7P0QP5P;Q\\fP=P0<!DOCTYPE html PUBLIC "nt-Type" content="text/<meta http-equiv="Conteransitional//EN" "http:<html xmlns="http://www-//W3C//DTD XHTML 1.0 TDTD/xhtml1-transitional//www.w3.org/TR/xhtml1/pe = \\\'text/javascript\\\';<meta name="descriptionparentNode.insertBefore<input type="hidden" najs" type="text/javascri(document).ready(functiscript type="text/javasimage" content="http://UA-Compatible" content=tml; charset=utf-8" />\\nlink rel="shortcut icon<link rel="stylesheet" <\\/script>\\n<script type== document.createElemen<a target="_blank" href= document.getElementsBinput type="text" name=a.type = \\\'text/javascrinput type="hidden" namehtml; charset=utf-8" />dtd">\\n<html xmlns="http-//W3C//DTD HTML 4.01 TentsByTagName(\\\'script\\\')input type="hidden" nam<script type="text/javas" style="display:none;">document.getElementById(=document.createElement(\\\' type=\\\'text/javascript\\\'input type="text" name="d.getElementsByTagName(snical" href="http://www.C//DTD HTML 4.01 Transit<style type="text/css">\\n\\n<style type="text/css">ional.dtd">\\n<html xmlns=http-equiv="Content-Typeding="0" cellspacing="0"html; charset=utf-8" />\\n style="display:none;"><<li><a href="http://www. type=\\\'text/javascript\\\'>P4P5QQP5P;Q\\fP=P>QQP8QP>P>QP2P5QQQP2P8P8P?Q\\0P>P8P7P2P>P4QQP2P0P1P5P7P>P?P0QP=P>QQP8`$*`%`$8`%\\r`$$`$?`$`$>`$`$>`$`$`%\\r`$0`%\x07`$8`$\\t`$(`%\\r`$9`%\\v`$`$(`%\x07`$5`$?`$\\\'`$>`$(`$8`$-`$>`$+`$?`$`%\\r`$8`$?`$`$`$8`%`$0`$`%\\r`$7`$?`$$`$`%\\t`$*`%\\0`$0`$>`$\x07`$`$5`$?`$`%\\r`$`$>`$*`$(`$`$>`$0`%\\r`$0`$5`$>`$\\b`$8`$`%\\r`$0`$?`$/`$$`$>\');if(a.length!=e.length)throw"Corrupted brotli dictionary";for(var o=0,r=0;r<502;r+=2){var s=i.charCodeAt(r)-36,l=i.charCodeAt(r+1)-36;o+=s;for(var c=0;c<l;++c)a[o]|=128,o++}e.set(a)}(K,0,0,"۷%ƌ\'T%\'W%×%O%g%¦&Ɠ%ǥ&>&*&\'&^&Ÿా&ƭ&ƒ&)&^&%&\'&&P&1&±&3&]&m&u&E&t&C&Ï&V&V&/&>&6&ྲྀ᝼o&p&@&E&M&P&x&@&F&e&Ì&7&:&(&D&0&C&)&.&F&-&1&(&L&F&1ɞ*Ϫ⇳&፲&K&;&)&E&H&P&0&?&9&V&&-&v&a&,&E&)&?&=&\'&\'&B&മ&ԃ&̖*&*8&%&%&&&%,)&&>&&7&]&F&2&>&J&6&n&2&%&?&&2&6&J&g&-&0&,&*&J&*&O&)&6&(&<&B&N&.&P&@&2&.&W&M&%Լ(,(<&,&Ϛ&ᣇ&-&,(%&(&%&(Ļ0&X&D&&j&\'&J&(&.&B&3&Z&R&h&3&E&E&<Æ-͠ỳ&%8?&@&,&Z&@&0&J&,&^&x&_&6&C&6&Cܬ⨥&f&-&-&-&-&,&J&2&8&z&8&C&Y&8&-&d&ṸÌ-&7&1&F&7&t&W&7&I&.&.&^&=ྜ᧓&8(>&/&/&ݻ\')\'ၥ\')\'%@/&0&%оী*&*@&CԽהɴ׫4෗ܚӑ6඄&/Ÿ̃Z&*%ɆϿ&Ĵ&1¨ҴŴ"),e=K,function(e){var n=new J;!function(e,t){if(0!=e.runningState)throw"State MUST be uninitialized";e.blockTrees=new Int32Array(3091),e.blockTrees[0]=7,e.distRbIdx=3;var n=g(2147483644,3,120);e.distExtraBits=new Int8Array(n),e.distOffset=new Int32Array(n),e.input=t,function(e){e.byteBuffer=new Int8Array(4160),e.accumulator32=0,e.shortBuffer=new Int16Array(2080),e.bitOffset=32,e.halfOffset=2048,e.endOfStreamReached=0,R(e)}(e),e.runningState=1}(n,new t(e));for(var i=0,a=[];;){var o=new Int8Array(16384);if(a.push(o),n.output=o,n.outputOffset=0,n.outputLength=16384,n.outputUsed=0,S(n),i+=n.outputUsed,n.outputUsed<16384)break}!function(e){if(0==e.runningState)throw"State MUST be initialized";11!=e.runningState&&(e.runningState=11,null!=e.input&&(e.input,e.input=null))}(n);for(var r=new Int8Array(i),s=0,l=0;l<a.length;++l){o=a[l];var c=V(i,s+16384)-s;c<16384?r.set(o.subarray(0,c),s):r.set(o,s),s+=c}return r}}(),a={int8:Int8Array,int16:Int16Array,int32:Int32Array,int64:Float64Array,uint8:Uint8Array,uint16:Uint16Array,uint32:Uint32Array,uint64:Float64Array,float:Float32Array,double:Float64Array};function o(e){let t=e;return t=(2130440&t)>>2|266305&t,t=(786624&t)>>4|12291&t,t=(61440&t)>>8|15&t,t=(0&t)>>16|255&t,t}new Uint8Array([0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3]),onmessage=function(t){const{pointAttributes:r,scale:s,name:l,min:c,max:d,size:h,offset:f,numPoints:u}=t.data;performance.now();let p;if(0==u)p={buffer:new ArrayBuffer(0)};else try{p=i(new Int8Array(t.data.buffer))}catch(e){p={buffer:new ArrayBuffer(u*(r.byteSize+12))},console.error(`problem with node ${l}: `,e)}const m=new DataView(p.buffer),g={};let P=0;for(const e of r.attributes)P+=e.byteSize;const $=32,b=new Uint32Array(32768),v=(e,t,n)=>{const i=$*e/h.x,a=$*t/h.y,o=$*n/h.z,r=Math.min(parseInt(i),31),s=Math.min(parseInt(a),31),l=Math.min(parseInt(o),31);return r+s*$+l*$*$};let y=0,X=0;for(const e of r.attributes)if(["POSITION_CARTESIAN","position"].includes(e.name)){const t=new ArrayBuffer(4*u*3),n=new Float32Array(t);for(let e=0;e<u;e++){const t=m.getUint32(X+4,!0),i=m.getUint32(X+0,!0),a=m.getUint32(X+12,!0),r=m.getUint32(X+8,!0);X+=16;let l=o((16777215&r)>>>0)|o((r>>>24|a<<8)>>>0)<<8,d=o((16777215&r)>>>1)|o((r>>>24|a<<8)>>>1)<<8,h=o((16777215&r)>>>2)|o((r>>>24|a<<8)>>>2)<<8;0==i&&0==a||(l=l|o((16777215&i)>>>0)<<16|o((i>>>24|t<<8)>>>0)<<24,d=d|o((16777215&i)>>>1)<<16|o((i>>>24|t<<8)>>>1)<<24,h=h|o((16777215&i)>>>2)<<16|o((i>>>24|t<<8)>>>2)<<24);const u=parseInt(l)*s[0]+f[0]-c.x,p=parseInt(d)*s[1]+f[1]-c.y,g=parseInt(h)*s[2]+f[2]-c.z;0===b[v(u,p,g)]++&&y++,n[3*e+0]=u,n[3*e+1]=p,n[3*e+2]=g}g[e.name]={buffer:t,attribute:e}}else if(["RGBA","rgba"].includes(e.name)){const t=new ArrayBuffer(4*u),n=new Uint8Array(t);for(let e=0;e<u;e++){const t=m.getUint32(X+4,!0),i=m.getUint32(X+0,!0);X+=8;const a=o((16777215&i)>>>0)|o((i>>>24|t<<8)>>>0)<<8,r=o((16777215&i)>>>1)|o((i>>>24|t<<8)>>>1)<<8,s=o((16777215&i)>>>2)|o((i>>>24|t<<8)>>>2)<<8;n[4*e+0]=a>255?a/256:a,n[4*e+1]=r>255?r/256:r,n[4*e+2]=s>255?s/256:s}g[e.name]={buffer:t,attribute:e}}else{const t=new ArrayBuffer(4*u),n=new Float32Array(t),i=new(0,a[e.type.name])(u);let[o,r]=[0,1];const s={int8:m.getInt8,int16:m.getInt16,int32:m.getInt32,uint8:m.getUint8,uint16:m.getUint16,uint32:m.getUint32,float:m.getFloat32,double:m.getFloat64}[e.type.name].bind(m);if(e.type.size>4){const[t,n]=e.range;o=t,r=1/(n-t)}for(let t=0;t<u;t++){const a=s(X,!0);X+=e.byteSize,n[t]=(a-o)*r,i[t]=a}g[e.name]={buffer:t,preciseBuffer:i,attribute:e,offset:o,scale:r}}const w=parseInt(u/y);{const e=new ArrayBuffer(4*u),t=new Uint32Array(e);for(let e=0;e<u;e++)t[e]=e;g.INDICES={buffer:e,attribute:n.INDICES}}{const t=r.vectors;for(const i of t){const{name:t,attributes:a}=i,o=a.length,r=new ArrayBuffer(o*u*4),s=new Float32Array(r);let l=0;for(const e of a){const t=g[e],{offset:n,scale:i}=t,a=new DataView(t.buffer),r=a.getFloat32.bind(a);for(let e=0;e<u;e++){const t=r(4*e,!0);s[e*o+l]=t/i+n}l++}const c=new n(t,e.DATA_TYPE_FLOAT,3);g[t]={buffer:r,attribute:c}}}performance.now();const Y={buffer:p,attributeBuffers:g,density:w},Q=[];for(const e in Y.attributeBuffers)Q.push(Y.attributeBuffers[e].buffer);postMessage(Y,Q)};',`Worker`,void 0,void 0)}},761:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(512);function i(){return r(`const t={DATA_TYPE_DOUBLE:{ordinal:0,name:"double",size:8},DATA_TYPE_FLOAT:{ordinal:1,name:"float",size:4},DATA_TYPE_INT8:{ordinal:2,name:"int8",size:1},DATA_TYPE_UINT8:{ordinal:3,name:"uint8",size:1},DATA_TYPE_INT16:{ordinal:4,name:"int16",size:2},DATA_TYPE_UINT16:{ordinal:5,name:"uint16",size:2},DATA_TYPE_INT32:{ordinal:6,name:"int32",size:4},DATA_TYPE_UINT32:{ordinal:7,name:"uint32",size:4},DATA_TYPE_INT64:{ordinal:8,name:"int64",size:8},DATA_TYPE_UINT64:{ordinal:9,name:"uint64",size:8}};let e=0;for(let n in t)t[e]=t[n],e++;class n{constructor(t,e,n,r=[1/0,-1/0]){this.name=t,this.type=e,this.numElements=n,this.range=r,this.byteSize=this.numElements*this.type.size,this.description=""}}new n("POSITION_CARTESIAN",t.DATA_TYPE_FLOAT,3),new n("COLOR_PACKED",t.DATA_TYPE_INT8,4),new n("COLOR_PACKED",t.DATA_TYPE_INT8,4),new n("COLOR_PACKED",t.DATA_TYPE_INT8,3),new n("NORMAL_FLOATS",t.DATA_TYPE_FLOAT,3),new n("INTENSITY",t.DATA_TYPE_UINT16,1),new n("CLASSIFICATION",t.DATA_TYPE_UINT8,1),new n("NORMAL_SPHEREMAPPED",t.DATA_TYPE_UINT8,2),new n("NORMAL_OCT16",t.DATA_TYPE_UINT8,2),new n("NORMAL",t.DATA_TYPE_FLOAT,3),new n("RETURN_NUMBER",t.DATA_TYPE_UINT8,1),new n("NUMBER_OF_RETURNS",t.DATA_TYPE_UINT8,1),new n("SOURCE_ID",t.DATA_TYPE_UINT16,1),new n("INDICES",t.DATA_TYPE_UINT32,1),new n("SPACING",t.DATA_TYPE_FLOAT,1),new n("GPS_TIME",t.DATA_TYPE_DOUBLE,1);const r={int8:Int8Array,int16:Int16Array,int32:Int32Array,int64:Float64Array,uint8:Uint8Array,uint16:Uint16Array,uint32:Uint32Array,uint64:Float64Array,float:Float32Array,double:Float64Array};onmessage=function(e){const{buffer:i,pointAttributes:a,scale:A,name:T,min:s,max:o,size:_,offset:f,numPoints:u}=e.data,I=(performance.now(),new DataView(i)),E={};let l=0,c=0;for(const t of a.attributes)c+=t.byteSize;const D=32,N=new Uint32Array(32768),P=(t,e,n)=>{const r=D*t/_.x,i=D*e/_.y,a=D*n/_.z,A=Math.min(parseInt(r),31),T=Math.min(parseInt(i),31),s=Math.min(parseInt(a),31);return A+T*D+s*D*D};let w=0;for(const t of a.attributes){if(["POSITION_CARTESIAN","position"].includes(t.name)){const e=new ArrayBuffer(4*u*3),n=new Float32Array(e);for(let t=0;t<u;t++){const e=t*c,r=I.getInt32(e+l+0,!0)*A[0]+f[0]-s.x,i=I.getInt32(e+l+4,!0)*A[1]+f[1]-s.y,a=I.getInt32(e+l+8,!0)*A[2]+f[2]-s.z;0===N[P(r,i,a)]++&&w++,n[3*t+0]=r,n[3*t+1]=i,n[3*t+2]=a}E[t.name]={buffer:e,attribute:t}}else if(["RGBA","rgba"].includes(t.name)){const e=new ArrayBuffer(4*u),n=new Uint8Array(e);for(let t=0;t<u;t++){const e=t*c,r=I.getUint16(e+l+0,!0),i=I.getUint16(e+l+2,!0),a=I.getUint16(e+l+4,!0);n[4*t+0]=r>255?r/256:r,n[4*t+1]=i>255?i/256:i,n[4*t+2]=a>255?a/256:a}E[t.name]={buffer:e,attribute:t}}else{const e=new ArrayBuffer(4*u),n=new Float32Array(e),i=new(0,r[t.type.name])(u);let[a,A]=[0,1];const T={int8:I.getInt8,int16:I.getInt16,int32:I.getInt32,uint8:I.getUint8,uint16:I.getUint16,uint32:I.getUint32,float:I.getFloat32,double:I.getFloat64}[t.type.name].bind(I);if(t.type.size>4){const[e,n]=t.range;a=e,A=1/(n-e)}for(let t=0;t<u;t++){const e=T(t*c+l,!0);n[t]=(e-a)*A,i[t]=e}E[t.name]={buffer:e,preciseBuffer:i,attribute:t,offset:a,scale:A}}l+=t.byteSize}const m=parseInt(u/w);{const t=new ArrayBuffer(4*u),e=new Uint32Array(t);for(let t=0;t<u;t++)e[t]=t;E.INDICES={buffer:t,attribute:n.INDICES}}{const e=a.vectors;for(const r of e){const{name:e,attributes:i}=r,a=i.length,A=new ArrayBuffer(a*u*4),T=new Float32Array(A);let s=0;for(const t of i){const e=E[t],{offset:n,scale:r}=e,i=new DataView(e.buffer),A=i.getFloat32.bind(i);for(let t=0;t<u;t++){const e=A(4*t,!0);T[t*a+s]=e/r+n}s++}const o=new n(e,t.DATA_TYPE_FLOAT,3);E[e]={buffer:A,attribute:o}}}const y={buffer:i,attributeBuffers:E,density:m},U=[];for(const t in y.attributeBuffers)U.push(y.attributeBuffers[t].buffer);U.push(i),postMessage(y,U)};`,`Worker`,void 0,void 0)}},318:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(512);function i(){return r(`var t;!function(t){t[t.POSITION_CARTESIAN=0]="POSITION_CARTESIAN",t[t.COLOR_PACKED=1]="COLOR_PACKED",t[t.COLOR_FLOATS_1=2]="COLOR_FLOATS_1",t[t.COLOR_FLOATS_255=3]="COLOR_FLOATS_255",t[t.NORMAL_FLOATS=4]="NORMAL_FLOATS",t[t.FILLER=5]="FILLER",t[t.INTENSITY=6]="INTENSITY",t[t.CLASSIFICATION=7]="CLASSIFICATION",t[t.NORMAL_SPHEREMAPPED=8]="NORMAL_SPHEREMAPPED",t[t.NORMAL_OCT16=9]="NORMAL_OCT16",t[t.NORMAL=10]="NORMAL"}(t||(t={}));const e={ordinal:1,size:4},n={ordinal:2,size:1},r={ordinal:3,size:1};function i(t,e,n){return{name:t,type:e,numElements:n,byteSize:n*e.size}}const s=i(t.COLOR_PACKED,n,4),a={POSITION_CARTESIAN:i(t.POSITION_CARTESIAN,e,3),RGBA_PACKED:s,COLOR_PACKED:s,RGB_PACKED:i(t.COLOR_PACKED,n,3),NORMAL_FLOATS:i(t.NORMAL_FLOATS,e,3),FILLER_1B:i(t.FILLER,r,1),INTENSITY:i(t.INTENSITY,{ordinal:5,size:2},1),CLASSIFICATION:i(t.CLASSIFICATION,r,1),NORMAL_SPHEREMAPPED:i(t.NORMAL_SPHEREMAPPED,r,2),NORMAL_OCT16:i(t.NORMAL_OCT16,r,2),NORMAL:i(t.NORMAL,e,3)};class o{constructor(t){this.versionMinor=0,this.version=t;const e=-1===t.indexOf(".")?t.length:t.indexOf(".");this.versionMajor=parseInt(t.substr(0,e),10),this.versionMinor=parseInt(t.substr(e+1),10),isNaN(this.versionMinor)&&(this.versionMinor=0)}newerThan(t){const e=new o(t);return this.versionMajor>e.versionMajor||this.versionMajor===e.versionMajor&&this.versionMinor>e.versionMinor}equalOrHigher(t){const e=new o(t);return this.versionMajor>e.versionMajor||this.versionMajor===e.versionMajor&&this.versionMinor>=e.versionMinor}upTo(t){return!this.newerThan(t)}}class u{constructor(t){this.tmp=new ArrayBuffer(4),this.tmpf=new Float32Array(this.tmp),this.tmpu8=new Uint8Array(this.tmp),this.u8=new Uint8Array(t)}getUint32(t){return this.u8[t+3]<<24|this.u8[t+2]<<16|this.u8[t+1]<<8|this.u8[t]}getUint16(t){return this.u8[t+1]<<8|this.u8[t]}getFloat32(t){const e=this.tmpu8,n=this.u8,r=this.tmpf;return e[0]=n[t+0],e[1]=n[t+1],e[2]=n[t+2],e[3]=n[t+3],r[0]}getUint8(t){return this.u8[t]}}const f=Math.sign||function(t){return 0==(t=Number(t))||t!=t?t:t<0?-1:1};function A(e,n){const r=function(e,n){switch(e.name){case t.POSITION_CARTESIAN:return function(t,e){const n=new ArrayBuffer(4*e.numPoints*3),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++){let n,i,s;e.version.newerThan("1.3")?(n=e.data.getUint32(e.currentOffset+t*e.pointAttributes.byteSize+0)*e.scale,i=e.data.getUint32(e.currentOffset+t*e.pointAttributes.byteSize+4)*e.scale,s=e.data.getUint32(e.currentOffset+t*e.pointAttributes.byteSize+8)*e.scale):(n=e.data.getFloat32(t*e.pointAttributes.byteSize+0)+e.nodeOffset[0],i=e.data.getFloat32(t*e.pointAttributes.byteSize+4)+e.nodeOffset[1],s=e.data.getFloat32(t*e.pointAttributes.byteSize+8)+e.nodeOffset[2]),r[3*t+0]=n,r[3*t+1]=i,r[3*t+2]=s,e.mean[0]+=n/e.numPoints,e.mean[1]+=i/e.numPoints,e.mean[2]+=s/e.numPoints,e.tightBoxMin[0]=Math.min(e.tightBoxMin[0],n),e.tightBoxMin[1]=Math.min(e.tightBoxMin[1],i),e.tightBoxMin[2]=Math.min(e.tightBoxMin[2],s),e.tightBoxMax[0]=Math.max(e.tightBoxMax[0],n),e.tightBoxMax[1]=Math.max(e.tightBoxMax[1],i),e.tightBoxMax[2]=Math.max(e.tightBoxMax[2],s)}return{buffer:n,attribute:t}}(e,n);case t.COLOR_PACKED:return function(t,e){const n=new ArrayBuffer(3*e.numPoints),r=new Uint8Array(n);for(let t=0;t<e.numPoints;t++)r[3*t+0]=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+0),r[3*t+1]=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+1),r[3*t+2]=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+2);return{buffer:n,attribute:t}}(e,n);case t.INTENSITY:return function(t,e){const n=new ArrayBuffer(4*e.numPoints),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++)r[t]=e.data.getUint16(e.currentOffset+t*e.pointAttributes.byteSize);return{buffer:n,attribute:t}}(e,n);case t.CLASSIFICATION:return function(t,e){const n=new ArrayBuffer(e.numPoints),r=new Uint8Array(n);for(let t=0;t<e.numPoints;t++)r[t]=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize);return{buffer:n,attribute:t}}(e,n);case t.NORMAL_SPHEREMAPPED:return function(t,e){const n=new ArrayBuffer(4*e.numPoints*3),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++){let n=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+0)/255*2-1,i=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+1)/255*2-1,s=1;const a=n*-n+i*-i+1*s;s=a,n*=Math.sqrt(a),i*=Math.sqrt(a),n*=2,i*=2,s=2*s-1,r[3*t+0]=n,r[3*t+1]=i,r[3*t+2]=s}return{buffer:n,attribute:t}}(e,n);case t.NORMAL_OCT16:return function(t,e){const n=new ArrayBuffer(4*e.numPoints*3),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++){const n=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+0)/255*2-1,i=e.data.getUint8(e.currentOffset+t*e.pointAttributes.byteSize+1)/255*2-1;let s=1-Math.abs(n)-Math.abs(i),a=0,o=0;s>=0?(a=n,o=i):(a=-(i/f(i)-1)/f(n),o=-(n/f(n)-1)/f(i));const u=Math.sqrt(a*a+o*o+s*s);a/=u,o/=u,s/=u,r[3*t+0]=a,r[3*t+1]=o,r[3*t+2]=s}return{buffer:n,attribute:t}}(e,n);case t.NORMAL:return function(t,e){const n=new ArrayBuffer(4*e.numPoints*3),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++){const n=e.data.getFloat32(e.currentOffset+t*e.pointAttributes.byteSize+0),i=e.data.getFloat32(e.currentOffset+t*e.pointAttributes.byteSize+4),s=e.data.getFloat32(e.currentOffset+t*e.pointAttributes.byteSize+8);r[3*t+0]=n,r[3*t+1]=i,r[3*t+2]=s}return{buffer:n,attribute:t}}(e,n);default:return}}(e,n);void 0!==r&&(n.attributeBuffers[r.attribute.name]=r,n.transferables.push(r.buffer))}onmessage=function(e){const n=e.data.buffer,r=e.data.pointAttributes,i={attributeBuffers:{},currentOffset:0,data:new u(n),mean:[0,0,0],nodeOffset:e.data.offset,numPoints:e.data.buffer.byteLength/r.byteSize,pointAttributes:r,scale:e.data.scale,tightBoxMax:[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],tightBoxMin:[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],transferables:[],version:new o(e.data.version)};for(const t of i.pointAttributes.attributes)A(t,i),i.currentOffset+=t.byteSize;const s=new ArrayBuffer(4*i.numPoints),f=new Uint32Array(s);for(let t=0;t<i.numPoints;t++)f[t]=t;i.attributeBuffers[t.CLASSIFICATION]||function(e){const n=new ArrayBuffer(4*e.numPoints),r=new Float32Array(n);for(let t=0;t<e.numPoints;t++)r[t]=0;e.attributeBuffers[t.CLASSIFICATION]={buffer:n,attribute:a.CLASSIFICATION}}(i);const O={buffer:n,mean:i.mean,attributeBuffers:i.attributeBuffers,tightBoundingBox:{min:i.tightBoxMin,max:i.tightBoxMax},indices:s};postMessage(O,i.transferables)};`,`Worker`,void 0,void 0)}}},zl={};function Bl(e){var t=zl[e];if(t!==void 0)return t.exports;var n=zl[e]={exports:{}};return Rl[e](n,n.exports,Bl),n.exports}Bl.d=(e,t)=>{for(var n in t)Bl.o(t,n)&&!Bl.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},Bl.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Bl.r=e=>{typeof Symbol<`u`&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}),Object.defineProperty(e,"__esModule",{value:!0})};var J={};Bl.d(J,{BS:()=>Yl,u8:()=>Ul,f5:()=>Dd,uY:()=>eu,C2:()=>su,QB:()=>cu,bA:()=>lu,Fn:()=>Pu,qG:()=>ju,mo:()=>Au,SA:()=>Fu,zs:()=>Z,IR:()=>qu,QN:()=>Vu,sP:()=>Bu,mA:()=>Hu,uT:()=>Wu,Ay:()=>Ku,E5:()=>Jl,UG:()=>ql,uZ:()=>Gl,uo:()=>Wl,aC:()=>Td,Ty:()=>Od,xT:()=>wd,PR:()=>uu,zd:()=>du,Pf:()=>Kl,V9:()=>fu,Rx:()=>md,Zk:()=>pu,QZ:()=>Zl,Us:()=>Xl,Nk:()=>gu,xC:()=>mu,J0:()=>hu});var Y=(Vl={AdditiveBlending:()=>2,Box3:()=>br,BufferAttribute:()=>Rr,BufferGeometry:()=>ei,CanvasTexture:()=>na,Color:()=>G,DataTexture:()=>Ei,EventDispatcher:()=>Et,FloatType:()=>se,Frustum:()=>Pi,GLSL3:()=>mt,HalfFloatType:()=>N,LessEqualDepth:()=>3,LineBasicMaterial:()=>Fi,LineSegments:()=>qi,LinearFilter:()=>ee,Matrix4:()=>Cn,Mesh:()=>Ci,NearestFilter:()=>O,NoBlending:()=>0,Object3D:()=>Xn,OrthographicCamera:()=>Ya,Points:()=>$i,RGBAFormat:()=>me,RawShaderMaterial:()=>_a,Scene:()=>ar,ShaderMaterial:()=>ga,Sphere:()=>Kr,Texture:()=>_n,Uint8BufferAttribute:()=>zr,UnsignedByteType:()=>re,Vector2:()=>H,Vector3:()=>U,Vector4:()=>vn,WebGLRenderTarget:()=>bn},Hl={},Bl.d(Hl,Vl),Hl),Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl=class extends Y.ShaderMaterial{constructor(){super(...arguments),this.vertexShader=Bl(652),this.fragmentShader=Bl(324),this.uniforms={screenWidth:{type:`f`,value:0},screenHeight:{type:`f`,value:0},map:{type:`t`,value:null}}}};function Xl(e=new Y.Vector3(0,0,0),t){return{center:e.clone(),radius:t}}function Zl(e,t=new Y.Vector3(0,0,0)){let n=new Y.Box3(new Y.Vector3(-.5,-.5,-.5),new Y.Vector3(.5,.5,.5)),r=new Y.Matrix4().makeScale(e.x,e.y,e.z),i=new Y.Matrix4().makeTranslation(t.x,t.y,t.z),a=new Y.Matrix4().multiplyMatrices(i,r);return{box:n,matrix:a,inverse:a.clone().invert(),position:t.clone()}}(function(e){e[e.DISABLED=0]=`DISABLED`,e[e.CLIP_OUTSIDE=1]=`CLIP_OUTSIDE`,e[e.CLIP_INSIDE=2]=`CLIP_INSIDE`,e[e.HIGHLIGHT_INSIDE=3]=`HIGHLIGHT_INSIDE`})(Ul||={}),function(e){e[e.FIXED=0]=`FIXED`,e[e.ATTENUATED=1]=`ATTENUATED`,e[e.ADAPTIVE=2]=`ADAPTIVE`}(Wl||={}),function(e){e[e.SQUARE=0]=`SQUARE`,e[e.CIRCLE=1]=`CIRCLE`,e[e.PARABOLOID=2]=`PARABOLOID`}(Gl||={}),function(e){e[e.OCTREE=0]=`OCTREE`,e[e.KDTREE=1]=`KDTREE`}(Kl||={}),function(e){e[e.FIXED=0]=`FIXED`,e[e.ATTENUATED=1]=`ATTENUATED`}(ql||={}),function(e){e[e.RGB=0]=`RGB`,e[e.COLOR=1]=`COLOR`,e[e.DEPTH=2]=`DEPTH`,e[e.HEIGHT=3]=`HEIGHT`,e[e.ELEVATION=3]=`ELEVATION`,e[e.INTENSITY=4]=`INTENSITY`,e[e.INTENSITY_GRADIENT=5]=`INTENSITY_GRADIENT`,e[e.LOD=6]=`LOD`,e[e.LEVEL_OF_DETAIL=6]=`LEVEL_OF_DETAIL`,e[e.POINT_INDEX=7]=`POINT_INDEX`,e[e.CLASSIFICATION=8]=`CLASSIFICATION`,e[e.RETURN_NUMBER=9]=`RETURN_NUMBER`,e[e.SOURCE=10]=`SOURCE`,e[e.NORMAL=11]=`NORMAL`,e[e.PHONG=12]=`PHONG`,e[e.RGB_HEIGHT=13]=`RGB_HEIGHT`,e[e.COMPOSITE=50]=`COMPOSITE`}(Jl||={});var Ql=Bl(370).A,$l=Bl(42).A,eu=class extends Y.RawShaderMaterial{constructor(){super(),this._neighbourCount=8,this.neighboursArray=new Float32Array(16),this.uniforms={screenWidth:{type:`f`,value:1},screenHeight:{type:`f`,value:1},edlStrength:{type:`f`,value:1},radius:{type:`f`,value:1.4},opacity:{type:`f`,value:1},neighbours:{type:`2fv`,value:this.neighboursArray},uProj:{type:`Matrix4fv`,value:new Float32Array(16)},colorMap:{type:`t`,value:null},far:{type:`f`,value:1e3},useLogDepth:{type:`b`,value:!1},useOrthographicCamera:{type:`b`,value:!1}},this.glslVersion=Y.GLSL3,this.depthTest=!0,this.depthWrite=!0,this.transparent=!0,this.initializeNeighboursArray(this._neighbourCount),this.updateShaderSource()}get neighbourCount(){return this._neighbourCount}set neighbourCount(e){let t=Math.max(1,Math.floor(e));this._neighbourCount!==t&&(this._neighbourCount=t,this.initializeNeighboursArray(this._neighbourCount),this.updateShaderSource())}initializeNeighboursArray(e){this.neighboursArray=new Float32Array(2*e);for(let t=0;t<e;t++)this.neighboursArray[2*t+0]=Math.cos(2*t*Math.PI/e),this.neighboursArray[2*t+1]=Math.sin(2*t*Math.PI/e);this.uniforms.neighbours.value=this.neighboursArray}getDefines(){return`#define NEIGHBOUR_COUNT ${this._neighbourCount}\n`}updateShaderSource(){let e=this.getDefines();this.vertexShader=e+Ql,this.fragmentShader=e+$l,this.needsUpdate=!0}setProjectionMatrix(e){let t=new Float32Array(16);t.set(e.elements),this.uniforms.uProj.value=t}},tu=`PerspectiveCamera`,nu=new Y.Color(0,0,0),ru=new Y.Vector4(1,0,0,1);function iu(e){return parseInt(e.charAt(e.length-1),10)}function au(e,t){let n=e.name,r=t.name;return n.length===r.length?n<r?-1:+(n>r):n.length-r.length}var ou={0:new Y.Vector4(.5,.5,.5,1),1:new Y.Vector4(.5,.5,.5,1),2:new Y.Vector4(.63,.32,.18,1),3:new Y.Vector4(0,1,0,1),4:new Y.Vector4(0,.8,0,1),5:new Y.Vector4(0,.6,0,1),6:new Y.Vector4(1,.66,0,1),7:new Y.Vector4(1,0,1,1),8:new Y.Vector4(1,0,0,1),9:new Y.Vector4(0,0,1,1),12:new Y.Vector4(1,1,0,1),DEFAULT:new Y.Vector4(.3,.6,.6,.5)},su=[[0,new Y.Color(0,0,0)],[1,new Y.Color(1,1,1)]],cu=[[0,new Y.Color(.077,.042,.206)],[.1,new Y.Color(.225,.036,.388)],[.2,new Y.Color(.373,.074,.432)],[.3,new Y.Color(.522,.128,.42)],[.4,new Y.Color(.665,.182,.37)],[.5,new Y.Color(.797,.255,.287)],[.6,new Y.Color(.902,.364,.184)],[.7,new Y.Color(.969,.516,.063)],[.8,new Y.Color(.988,.683,.072)],[.9,new Y.Color(.961,.859,.298)],[1,new Y.Color(.988,.998,.645)]],lu=[[0,new Y.Color(.241,.015,.61)],[.1,new Y.Color(.387,.001,.654)],[.2,new Y.Color(.524,.025,.653)],[.3,new Y.Color(.651,.125,.596)],[.4,new Y.Color(.752,.227,.513)],[.5,new Y.Color(.837,.329,.431)],[.6,new Y.Color(.907,.435,.353)],[.7,new Y.Color(.963,.554,.272)],[.8,new Y.Color(.992,.681,.195)],[.9,new Y.Color(.987,.822,.144)],[1,new Y.Color(.94,.975,.131)]],uu=[[0,new Y.Color(.278,0,.714)],[1/6,new Y.Color(0,0,1)],[2/6,new Y.Color(0,1,1)],[.5,new Y.Color(0,1,0)],[4/6,new Y.Color(1,1,0)],[5/6,new Y.Color(1,.64,0)],[1,new Y.Color(1,0,0)]],du=[[0,new Y.Color(.3686,.3098,.6353)],[.1,new Y.Color(.1961,.5333,.7412)],[.2,new Y.Color(.4,.7608,.6471)],[.3,new Y.Color(.6706,.8667,.6431)],[.4,new Y.Color(.902,.9608,.5961)],[.5,new Y.Color(1,1,.749)],[.6,new Y.Color(.9961,.8784,.5451)],[.7,new Y.Color(.9922,.6824,.3804)],[.8,new Y.Color(.9569,.4275,.2627)],[.9,new Y.Color(.8353,.2431,.3098)],[1,new Y.Color(.6196,.0039,.2588)]],fu=[[0,new Y.Color(.267,.005,.329)],[.1,new Y.Color(.283,.141,.458)],[.2,new Y.Color(.254,.265,.53)],[.3,new Y.Color(.207,.372,.553)],[.4,new Y.Color(.164,.471,.558)],[.5,new Y.Color(.128,.567,.551)],[.6,new Y.Color(.135,.659,.518)],[.7,new Y.Color(.267,.749,.441)],[.8,new Y.Color(.478,.821,.318)],[.9,new Y.Color(.741,.873,.15)],[1,new Y.Color(.993,.906,.144)]],pu=[[0,new Y.Color(.1647,.2824,.3451)],[.1,new Y.Color(.1338,.3555,.4227)],[.2,new Y.Color(.061,.4319,.4864)],[.3,new Y.Color(0,.5099,.5319)],[.4,new Y.Color(0,.5881,.5569)],[.5,new Y.Color(.137,.665,.5614)],[.6,new Y.Color(.2906,.7395,.5477)],[.7,new Y.Color(.4453,.8099,.5201)],[.8,new Y.Color(.6102,.8748,.485)],[.9,new Y.Color(.7883,.9323,.4514)],[1,new Y.Color(.9804,.9804,.4314)]];function mu(e,t,n){let r=e*t,i=new Uint8Array(4*r),a=Math.floor(255*n.r),o=Math.floor(255*n.g),s=Math.floor(255*n.b);for(let e=0;e<r;e++)i[3*e]=a,i[3*e+1]=o,i[3*e+2]=s;let c=new Y.DataTexture(i,e,t,Y.RGBAFormat);return c.needsUpdate=!0,c.magFilter=Y.NearestFilter,c}function hu(e){if(typeof window>`u`||typeof document>`u`)return new Y.Texture;let t=document.createElement(`canvas`);t.width=64,t.height=64;let n=t.getContext(`2d`);n.rect(0,0,64,64);let r=n.createLinearGradient(0,0,64,64);for(let t=0;t<e.length;t++){let n=e[t];r.addColorStop(n[0],`#${n[1].getHexString()}`)}n.fillStyle=r,n.fill();let i=new Y.CanvasTexture(t);return i.needsUpdate=!0,i.minFilter=Y.LinearFilter,i}function gu(e){let t=new Uint8Array(262144);for(let n=0;n<256;n++)for(let r=0;r<256;r++){let i=n+256*r,a;a=e[n]?e[n]:e[n%32]?e[n%32]:e.DEFAULT,t[4*i+0]=255*a.x,t[4*i+1]=255*a.y,t[4*i+2]=255*a.z,t[4*i+3]=255*a.w}let n=new Y.DataTexture(t,256,256,Y.RGBAFormat);return n.magFilter=Y.NearestFilter,n.needsUpdate=!0,n}var _u;(function(e){e[e.LINEAR=0]=`LINEAR`,e[e.SRGB=1]=`SRGB`})(_u||={});var X=function(e,t,n,r){var i,a=arguments.length,o=a<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)o=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,n,o):i(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},vu=Bl(26).A,yu=Bl(650).A,bu={[Kl.OCTREE]:`tree_type_octree`,[Kl.KDTREE]:`tree_type_kdtree`},xu={[Wl.FIXED]:`fixed_point_size`,[Wl.ATTENUATED]:`attenuated_point_size`,[Wl.ADAPTIVE]:`adaptive_point_size`},Su={[ql.ATTENUATED]:`attenuated_opacity`,[ql.FIXED]:`fixed_opacity`},Cu={[Gl.SQUARE]:`square_point_shape`,[Gl.CIRCLE]:`circle_point_shape`,[Gl.PARABOLOID]:`paraboloid_point_shape`},wu={[Jl.RGB]:`color_type_rgb`,[Jl.COLOR]:`color_type_color`,[Jl.DEPTH]:`color_type_depth`,[Jl.HEIGHT]:`color_type_height`,[Jl.INTENSITY]:`color_type_intensity`,[Jl.INTENSITY_GRADIENT]:`color_type_intensity_gradient`,[Jl.LOD]:`color_type_lod`,[Jl.POINT_INDEX]:`color_type_point_index`,[Jl.CLASSIFICATION]:`color_type_classification`,[Jl.RETURN_NUMBER]:`color_type_return_number`,[Jl.SOURCE]:`color_type_source`,[Jl.NORMAL]:`color_type_normal`,[Jl.PHONG]:`color_type_phong`,[Jl.RGB_HEIGHT]:`color_type_rgb_height`,[Jl.COMPOSITE]:`color_type_composite`},Tu={[Ul.DISABLED]:`clip_disabled`,[Ul.CLIP_OUTSIDE]:`clip_outside`,[Ul.CLIP_INSIDE]:`clip_inside`,[Ul.HIGHLIGHT_INSIDE]:`clip_highlight_inside`},Eu={[_u.LINEAR]:`input_color_encoding_linear`,[_u.SRGB]:`input_color_encoding_sRGB`},Du={[_u.LINEAR]:`output_color_encoding_linear`,[_u.SRGB]:`output_color_encoding_sRGB`},Z=class e extends Y.RawShaderMaterial{constructor(e={}){super(),this.lights=!1,this.fog=!1,this.numClipBoxes=0,this.clipBoxes=[],this.numClipSpheres=0,this.clipSpheres=[],this.numClipPlanes=0,this.visibleNodeTextureOffsets=new Map,this._gradient=du,this.gradientTexture=hu(this._gradient),this._classification=ou,this.classificationTexture=gu(this._classification),this.uniforms={bbSize:Q(`fv`,[0,0,0]),blendDepthSupplement:Q(`f`,0),blendHardness:Q(`f`,2),classificationLUT:Q(`t`,this.classificationTexture||new Y.Texture),clipBoxCount:Q(`f`,0),clipBoxes:Q(`Matrix4fv`,[]),clipSphereCount:Q(`f`,0),clipSpheres:Q(`fv`,[]),clipPlaneCount:Q(`f`,0),clipPlanes:Q(`fv`,[]),depthMap:Q(`t`,null),diffuse:Q(`fv`,[1,1,1]),fov:Q(`f`,1),gradient:Q(`t`,this.gradientTexture||new Y.Texture),heightMax:Q(`f`,1),heightMin:Q(`f`,0),intensityBrightness:Q(`f`,0),intensityContrast:Q(`f`,0),intensityGamma:Q(`f`,1),intensityRange:Q(`fv`,[0,65e3]),isLeafNode:Q(`b`,0),level:Q(`f`,0),maxSize:Q(`f`,50),minSize:Q(`f`,2),octreeSize:Q(`f`,0),opacity:Q(`f`,1),pcIndex:Q(`f`,0),rgbBrightness:Q(`f`,0),rgbContrast:Q(`f`,0),rgbGamma:Q(`f`,1),screenHeight:Q(`f`,1),screenWidth:Q(`f`,1),useOrthographicCamera:Q(`b`,!1),orthoHeight:Q(`f`,1),orthoWidth:Q(`f`,1),far:Q(`f`,1e3),size:Q(`f`,1),spacing:Q(`f`,1),toModel:Q(`Matrix4f`,[]),transition:Q(`f`,.5),uColor:Q(`c`,new Y.Color(16777215)),visibleNodes:Q(`t`,this.visibleNodesTexture||new Y.Texture),vnStart:Q(`f`,0),wClassification:Q(`f`,0),wElevation:Q(`f`,0),wIntensity:Q(`f`,0),wReturnNumber:Q(`f`,0),wRGB:Q(`f`,1),wSourceID:Q(`f`,0),opacityAttenuation:Q(`f`,1),filterByNormalThreshold:Q(`f`,0),highlightedPointCoordinate:Q(`fv`,new Y.Vector3),highlightedPointColor:Q(`fv`,ru.clone()),enablePointHighlighting:Q(`b`,!0),highlightedPointScale:Q(`f`,2),viewScale:Q(`f`,1)},this.useClipBox=!1,this.useClipSphere=!1,this.weighted=!1,this.pointColorType=Jl.RGB,this.pointSizeType=Wl.ADAPTIVE,this.clipMode=Ul.DISABLED,this.useEDL=!1,this.shape=Gl.SQUARE,this.treeType=Kl.OCTREE,this.pointOpacityType=ql.FIXED,this.useFilterByNormal=!1,this.highlightPoint=!1,this.inputColorEncoding=_u.SRGB,this.outputColorEncoding=_u.LINEAR,this.useLogDepth=!1,this.attributes={position:{type:`fv`,value:[]},color:{type:`fv`,value:[]},normal:{type:`fv`,value:[]},intensity:{type:`f`,value:[]},classification:{type:`f`,value:[]},returnNumber:{type:`f`,value:[]},numberOfReturns:{type:`f`,value:[]},pointSourceID:{type:`f`,value:[]},indices:{type:`fv`,value:[]}};let t=this.visibleNodesTexture=mu(2048,1,new Y.Color(16777215));t.minFilter=Y.NearestFilter,t.magFilter=Y.NearestFilter,this.setUniform(`visibleNodes`,t),this.treeType=Ou(e.treeType,Kl.OCTREE),this.size=Ou(e.size,1),this.minSize=Ou(e.minSize,2),this.maxSize=Ou(e.maxSize,50),this.newFormat=!!e.newFormat,this.classification=ou,this.defaultAttributeValues.normal=[0,0,0],this.defaultAttributeValues.classification=[0,0,0],this.defaultAttributeValues.indices=[0,0,0,0],this.vertexColors=!0,this.updateShaderSource()}dispose(){super.dispose(),this.gradientTexture&&=(this.gradientTexture.dispose(),void 0),this.visibleNodesTexture&&=(this.visibleNodesTexture.dispose(),void 0),this.clearVisibleNodeTextureOffsets(),this.classificationTexture&&=(this.classificationTexture.dispose(),void 0),this.depthMap&&=(this.depthMap.dispose(),void 0)}clearVisibleNodeTextureOffsets(){this.visibleNodeTextureOffsets.clear()}updateShaderSource(){this.glslVersion=Y.GLSL3,this.vertexShader=this.applyDefines(vu),this.fragmentShader=this.applyDefines(yu),this.opacity===1?(this.blending=Y.NoBlending,this.transparent=!1,this.depthTest=!0,this.depthWrite=!0,this.depthFunc=Y.LessEqualDepth):this.opacity<1&&!this.useEDL&&(this.blending=Y.AdditiveBlending,this.transparent=!0,this.depthTest=!1,this.depthWrite=!0),this.weighted&&(this.blending=Y.AdditiveBlending,this.transparent=!0,this.depthTest=!0,this.depthWrite=!1,this.depthFunc=Y.LessEqualDepth),this.needsUpdate=!0}applyDefines(e){let t=[];function n(e){e&&t.push(`#define ${e}`)}n(bu[this.treeType]),n(xu[this.pointSizeType]),n(Cu[this.shape]),n(wu[this.pointColorType]),n(Tu[this.clipMode]),n(Su[this.pointOpacityType]),n(Du[this.outputColorEncoding]),n(Eu[this.inputColorEncoding]),this.rgbGamma===1&&this.rgbBrightness===0&&this.rgbContrast===0||n(`use_rgb_gamma_contrast_brightness`),this.useFilterByNormal&&n(`use_filter_by_normal`),this.useEDL&&n(`use_edl`),this.useLogDepth&&n(`use_log_depth`),this.weighted&&n(`weighted_splats`),this.numClipBoxes>0&&n(`use_clip_box`),this.numClipSpheres>0&&n(`use_clip_sphere`),this.numClipPlanes>0&&n(`use_clip_plane`),this.highlightPoint&&n(`highlight_point`),n(`MAX_POINT_LIGHTS 0`),n(`MAX_DIR_LIGHTS 0`),this.newFormat&&n(`new_format`);let r=e.match(/^\s*#version\s+300\s+es\s*\n/);return r&&(t.unshift(r[0]),e=e.replace(r[0],``)),t.push(e),t.join(`
`)}setClipBoxes(e){if(!e)return;this.clipBoxes=e;let t=this.numClipBoxes!==e.length&&(e.length===0||this.numClipBoxes===0);this.numClipBoxes=e.length,this.setUniform(`clipBoxCount`,this.numClipBoxes),t&&this.updateShaderSource();let n=16*this.numClipBoxes,r=new Float32Array(n);for(let t=0;t<this.numClipBoxes;t++)r.set(e[t].inverse.elements,16*t);for(let e=0;e<n;e++)isNaN(r[e])&&(r[e]=1/0);this.setUniform(`clipBoxes`,r)}setClipSpheres(e){if(!e)return;this.clipSpheres=e;let t=this.numClipSpheres===0!=(e.length===0);this.numClipSpheres=e.length,this.setUniform(`clipSphereCount`,this.numClipSpheres),t&&this.updateShaderSource();let n=4*this.numClipSpheres,r=new Float32Array(n);for(let t=0;t<this.numClipSpheres;t++)r[4*t+0]=e[t].center.x,r[4*t+1]=e[t].center.y,r[4*t+2]=e[t].center.z,r[4*t+3]=e[t].radius;this.setUniform(`clipSpheres`,r)}syncClippingPlanes(){let e=this.clippingPlanes,t=e&&e.length?e.length:0;if(this.numClipPlanes===0!=(t===0)&&this.updateShaderSource(),this.numClipPlanes=t,this.setUniform(`clipPlaneCount`,t),t>0&&e){let n=new Float32Array(4*t);for(let r=0;r<t;r++)n[4*r+0]=e[r].normal.x,n[4*r+1]=e[r].normal.y,n[4*r+2]=e[r].normal.z,n[4*r+3]=e[r].constant;this.setUniform(`clipPlanes`,n)}}get gradient(){return this._gradient}set gradient(e){this._gradient!==e&&(this._gradient=e,this.gradientTexture=hu(this._gradient),this.setUniform(`gradient`,this.gradientTexture))}get classification(){return this._classification}set classification(e){let t={};for(let n of Object.keys(e))t[n]=e[n].clone();let n=!1;if(this._classification===void 0)n=!1;else{n=Object.keys(t).length===Object.keys(this._classification).length;for(let e of Object.keys(t))n&&=this._classification[e]!==void 0,n&&=t[e].equals(this._classification[e])}n||(this._classification=t,this.recomputeClassification())}recomputeClassification(){this.classificationTexture=gu(this._classification),this.setUniform(`classificationLUT`,this.classificationTexture)}get elevationRange(){return[this.heightMin,this.heightMax]}set elevationRange(e){this.heightMin=e[0],this.heightMax=e[1]}getUniform(e){return this.uniforms===void 0?void 0:this.uniforms[e].value}setUniform(e,t){if(this.uniforms===void 0)return;let n=this.uniforms[e];n.type===`c`?n.value.copy(t):t!==n.value&&(n.value=t)}updateMaterial(t,n,r,i){let a=i.getPixelRatio();if(this.syncClippingPlanes(),this.useLogDepth=i.capabilities.logarithmicDepthBuffer,r.type===tu)this.useOrthographicCamera=!1,this.fov=r.fov*(Math.PI/180),this.far=r.far;else{let e=r;this.useOrthographicCamera=!0,this.orthoWidth=(e.right-e.left)/e.zoom,this.orthoHeight=(e.top-e.bottom)/e.zoom,this.fov=Math.PI/2,this.far=r.far}let o=i.getRenderTarget();o!==null&&o instanceof Y.WebGLRenderTarget?(this.screenWidth=o.width,this.screenHeight=o.height):(this.screenWidth=i.domElement.clientWidth*a,this.screenHeight=i.domElement.clientHeight*a);let s=Math.max(t.scale.x,t.scale.y,t.scale.z);this.spacing=t.pcoGeometry.spacing*s,this.octreeSize=t.pcoGeometry.boundingBox.getSize(e.helperVec3).x;let c=r.view;this.viewScale=c?.enabled?c.fullWidth/c.width:1,this.pointSizeType!==Wl.ADAPTIVE&&this.pointColorType!==Jl.LOD||this.updateVisibilityTextureData(n)}updateVisibilityTextureData(e){e.sort(au);let t=new Uint8Array(4*e.length),n=Array(e.length).fill(1/0);this.visibleNodeTextureOffsets.clear();for(let r=0;r<e.length;r++){let i=e[r];if(this.visibleNodeTextureOffsets.set(i.name,r),r>0){let e=i.name.slice(0,-1),a=this.visibleNodeTextureOffsets.get(e),o=r-a;n[a]=Math.min(n[a],o);let s=4*a;t[s]=t[s]|1<<i.index,t[s+1]=n[a]>>8,t[s+2]=n[a]%256}t[4*r+3]=i.name.length}let r=this.visibleNodesTexture;r&&(r.image.data.set(t),r.needsUpdate=!0)}static makeOnBeforeRender(t,n,r){return(i,a,o,s,c)=>{if(c instanceof e){let e=c.uniforms;e.level.value=n.level,e.isLeafNode.value=n.isLeafNode;let i=c.visibleNodeTextureOffsets.get(n.name);i!==void 0&&(e.vnStart.value=i),e.pcIndex.value=r===void 0?t.visibleNodes.indexOf(n):r,c.uniformsNeedUpdate=!0}}}};function Q(e,t){return{type:e,value:t}}function Ou(e,t){return e===void 0?t:e}function $(e,t=!1){return(n,r)=>{Object.defineProperty(n,r,{get:function(){return this.getUniform(e)},set:function(n){n!==this.getUniform(e)&&(this.setUniform(e,n),t&&this.updateShaderSource())}})}}function ku(){return(e,t)=>{let n=`_${t.toString()}`;Object.defineProperty(e,t,{get:function(){return this[n]},set:function(e){e!==this[n]&&(this[n]=e,this.updateShaderSource())}})}}var Au;Z.helperVec3=new Y.Vector3,X([$(`bbSize`)],Z.prototype,`bbSize`,void 0),X([$(`depthMap`)],Z.prototype,`depthMap`,void 0),X([$(`fov`)],Z.prototype,`fov`,void 0),X([$(`heightMax`)],Z.prototype,`heightMax`,void 0),X([$(`heightMin`)],Z.prototype,`heightMin`,void 0),X([$(`intensityBrightness`)],Z.prototype,`intensityBrightness`,void 0),X([$(`intensityContrast`)],Z.prototype,`intensityContrast`,void 0),X([$(`intensityGamma`)],Z.prototype,`intensityGamma`,void 0),X([$(`intensityRange`)],Z.prototype,`intensityRange`,void 0),X([$(`maxSize`)],Z.prototype,`maxSize`,void 0),X([$(`minSize`)],Z.prototype,`minSize`,void 0),X([$(`octreeSize`)],Z.prototype,`octreeSize`,void 0),X([$(`opacity`,!0)],Z.prototype,`opacity`,void 0),X([$(`rgbBrightness`,!0)],Z.prototype,`rgbBrightness`,void 0),X([$(`rgbContrast`,!0)],Z.prototype,`rgbContrast`,void 0),X([$(`rgbGamma`,!0)],Z.prototype,`rgbGamma`,void 0),X([$(`screenHeight`)],Z.prototype,`screenHeight`,void 0),X([$(`screenWidth`)],Z.prototype,`screenWidth`,void 0),X([$(`orthoWidth`)],Z.prototype,`orthoWidth`,void 0),X([$(`orthoHeight`)],Z.prototype,`orthoHeight`,void 0),X([$(`useOrthographicCamera`)],Z.prototype,`useOrthographicCamera`,void 0),X([$(`far`)],Z.prototype,`far`,void 0),X([$(`size`)],Z.prototype,`size`,void 0),X([$(`spacing`)],Z.prototype,`spacing`,void 0),X([$(`transition`)],Z.prototype,`transition`,void 0),X([$(`uColor`)],Z.prototype,`color`,void 0),X([$(`wClassification`)],Z.prototype,`weightClassification`,void 0),X([$(`wElevation`)],Z.prototype,`weightElevation`,void 0),X([$(`wIntensity`)],Z.prototype,`weightIntensity`,void 0),X([$(`wReturnNumber`)],Z.prototype,`weightReturnNumber`,void 0),X([$(`wRGB`)],Z.prototype,`weightRGB`,void 0),X([$(`wSourceID`)],Z.prototype,`weightSourceID`,void 0),X([$(`opacityAttenuation`)],Z.prototype,`opacityAttenuation`,void 0),X([$(`filterByNormalThreshold`)],Z.prototype,`filterByNormalThreshold`,void 0),X([$(`highlightedPointCoordinate`)],Z.prototype,`highlightedPointCoordinate`,void 0),X([$(`highlightedPointColor`)],Z.prototype,`highlightedPointColor`,void 0),X([$(`enablePointHighlighting`)],Z.prototype,`enablePointHighlighting`,void 0),X([$(`highlightedPointScale`)],Z.prototype,`highlightedPointScale`,void 0),X([$(`viewScale`)],Z.prototype,`viewScale`,void 0),X([ku()],Z.prototype,`useClipBox`,void 0),X([ku()],Z.prototype,`useClipSphere`,void 0),X([ku()],Z.prototype,`weighted`,void 0),X([ku()],Z.prototype,`pointColorType`,void 0),X([ku()],Z.prototype,`pointSizeType`,void 0),X([ku()],Z.prototype,`clipMode`,void 0),X([ku()],Z.prototype,`useEDL`,void 0),X([ku()],Z.prototype,`shape`,void 0),X([ku()],Z.prototype,`treeType`,void 0),X([ku()],Z.prototype,`pointOpacityType`,void 0),X([ku()],Z.prototype,`useFilterByNormal`,void 0),X([ku()],Z.prototype,`highlightPoint`,void 0),X([ku()],Z.prototype,`inputColorEncoding`,void 0),X([ku()],Z.prototype,`outputColorEncoding`,void 0),X([ku()],Z.prototype,`useLogDepth`,void 0),function(e){e[e.POSITION_CARTESIAN=0]=`POSITION_CARTESIAN`,e[e.COLOR_PACKED=1]=`COLOR_PACKED`,e[e.COLOR_FLOATS_1=2]=`COLOR_FLOATS_1`,e[e.COLOR_FLOATS_255=3]=`COLOR_FLOATS_255`,e[e.NORMAL_FLOATS=4]=`NORMAL_FLOATS`,e[e.FILLER=5]=`FILLER`,e[e.INTENSITY=6]=`INTENSITY`,e[e.CLASSIFICATION=7]=`CLASSIFICATION`,e[e.NORMAL_SPHEREMAPPED=8]=`NORMAL_SPHEREMAPPED`,e[e.NORMAL_OCT16=9]=`NORMAL_OCT16`,e[e.NORMAL=10]=`NORMAL`}(Au||={});var ju={DATA_TYPE_DOUBLE:{ordinal:0,size:8},DATA_TYPE_FLOAT:{ordinal:1,size:4},DATA_TYPE_INT8:{ordinal:2,size:1},DATA_TYPE_UINT8:{ordinal:3,size:1},DATA_TYPE_INT16:{ordinal:4,size:2},DATA_TYPE_UINT16:{ordinal:5,size:2},DATA_TYPE_INT32:{ordinal:6,size:4},DATA_TYPE_UINT32:{ordinal:7,size:4},DATA_TYPE_INT64:{ordinal:8,size:8},DATA_TYPE_UINT64:{ordinal:9,size:8}};function Mu(e,t,n){return{name:e,type:t,numElements:n,byteSize:n*t.size}}var Nu=Mu(Au.COLOR_PACKED,ju.DATA_TYPE_INT8,4),Pu={POSITION_CARTESIAN:Mu(Au.POSITION_CARTESIAN,ju.DATA_TYPE_FLOAT,3),RGBA_PACKED:Nu,COLOR_PACKED:Nu,RGB_PACKED:Mu(Au.COLOR_PACKED,ju.DATA_TYPE_INT8,3),NORMAL_FLOATS:Mu(Au.NORMAL_FLOATS,ju.DATA_TYPE_FLOAT,3),FILLER_1B:Mu(Au.FILLER,ju.DATA_TYPE_UINT8,1),INTENSITY:Mu(Au.INTENSITY,ju.DATA_TYPE_UINT16,1),CLASSIFICATION:Mu(Au.CLASSIFICATION,ju.DATA_TYPE_UINT8,1),NORMAL_SPHEREMAPPED:Mu(Au.NORMAL_SPHEREMAPPED,ju.DATA_TYPE_UINT8,2),NORMAL_OCT16:Mu(Au.NORMAL_OCT16,ju.DATA_TYPE_UINT8,2),NORMAL:Mu(Au.NORMAL,ju.DATA_TYPE_FLOAT,3)},Fu=class{constructor(e=[]){this.attributes=[],this.byteSize=0,this.size=0;for(let t=0;t<e.length;t++){let n=Pu[e[t]];try{this.attributes.push(n),this.byteSize+=n.byteSize,this.size++}catch{}}}add(e){this.attributes.push(e),this.byteSize+=e.byteSize,this.size++}hasColors(){return this.attributes.find(Iu)!==void 0}hasNormals(){return this.attributes.find(Lu)!==void 0}};function Iu({name:e}){return e===Au.COLOR_PACKED}function Lu({name:e}){return e===Au.NORMAL_SPHEREMAPPED||e===Au.NORMAL_FLOATS||e===Au.NORMAL||e===Au.NORMAL_OCT16}function Ru(e,t){return new Y.Box3().setFromPoints([new Y.Vector3(e.min.x,e.min.y,e.min.z).applyMatrix4(t),new Y.Vector3(e.min.x,e.min.y,e.min.z).applyMatrix4(t),new Y.Vector3(e.max.x,e.min.y,e.min.z).applyMatrix4(t),new Y.Vector3(e.min.x,e.max.y,e.min.z).applyMatrix4(t),new Y.Vector3(e.min.x,e.min.y,e.max.z).applyMatrix4(t),new Y.Vector3(e.min.x,e.max.y,e.max.z).applyMatrix4(t),new Y.Vector3(e.max.x,e.max.y,e.min.z).applyMatrix4(t),new Y.Vector3(e.max.x,e.min.y,e.max.z).applyMatrix4(t),new Y.Vector3(e.max.x,e.max.y,e.max.z).applyMatrix4(t)])}function zu(e,t){let n=e.min.clone(),r=e.max.clone(),i=new Y.Vector3().subVectors(r,n);return(1&t)>0?n.z+=i.z/2:r.z-=i.z/2,(2&t)>0?n.y+=i.y/2:r.y-=i.y/2,(4&t)>0?n.x+=i.x/2:r.x-=i.x/2,new Y.Box3(n,r)}var Bu=class e extends Y.EventDispatcher{constructor(t,n,r){super(),this.id=e.idCount++,this.level=0,this.spacing=0,this.hasChildren=!1,this.children=[null,null,null,null,null,null,null,null],this.mean=new Y.Vector3,this.numPoints=0,this.loaded=!1,this.loading=!1,this.failed=!1,this.parent=null,this.oneTimeDisposeHandlers=[],this.isLeafNode=!0,this.isTreeNode=!1,this.isGeometryNode=!0,this.name=t,this.index=iu(t),this.pcoGeometry=n,this.boundingBox=r,this.tightBoundingBox=r.clone(),this.boundingSphere=r.getBoundingSphere(new Y.Sphere)}dispose(){this.geometry&&this.parent&&(this.geometry.dispose(),this.geometry=void 0,this.loaded=!1,this.oneTimeDisposeHandlers.forEach(e=>e()),this.oneTimeDisposeHandlers=[])}getUrl(){let e=this.pcoGeometry,t=e.loader.version,n=[e.octreeDir];return e.loader&&t.equalOrHigher(`1.5`)?(n.push(this.getHierarchyBaseUrl()),n.push(this.name)):(t.equalOrHigher(`1.4`)||t.upTo(`1.3`))&&n.push(this.name),n.join(`/`)}getHierarchyUrl(){return`${this.pcoGeometry.octreeDir}/${this.getHierarchyBaseUrl()}/${this.name}.hrc`}addChild(e){this.children[e.index]=e,this.isLeafNode=!1,e.parent=this}traverse(e,t=!0){let n=t?[this]:[],r;for(;(r=n.pop())!==void 0;){e(r);for(let e of r.children)e!==null&&n.push(e)}}load(){if(!this.canLoad())return Promise.resolve();let e;return this.loading=!0,this.pcoGeometry.numNodesLoading++,this.pcoGeometry.needsUpdate=!0,e=this.pcoGeometry.loader.version.equalOrHigher(`1.5`)&&this.level%this.pcoGeometry.hierarchyStepSize===0&&this.hasChildren?this.loadHierachyThenPoints():this.loadPoints(),e.catch(e=>{throw this.loading=!1,this.failed=!0,this.pcoGeometry.numNodesLoading--,e})}canLoad(){return!this.loading&&!this.loaded&&!this.pcoGeometry.disposed&&!this.pcoGeometry.loader.disposed&&this.pcoGeometry.numNodesLoading<this.pcoGeometry.maxNumNodesLoading}loadPoints(){return this.pcoGeometry.needsUpdate=!0,this.pcoGeometry.loader.load(this)}loadHierachyThenPoints(){return this.level%this.pcoGeometry.hierarchyStepSize===0?Promise.resolve(this.pcoGeometry.loader.getUrl(this.getHierarchyUrl())).then(e=>this.pcoGeometry.xhrRequest(e,{mode:`cors`})).then(e=>e.arrayBuffer()).then(e=>this.loadHierarchy(this,e)):Promise.resolve()}getHierarchyBaseUrl(){let e=this.pcoGeometry.hierarchyStepSize,t=this.name.substr(1),n=Math.floor(t.length/e),r=`r/`;for(let i=0;i<n;i++)r+=`${t.substr(i*e,e)}/`;return r.slice(0,-1)}loadHierarchy(e,t){let n=new DataView(t),r=this.getNodeData(e.name,0,n);e.numPoints=r.numPoints;let i=[r],a=[],o=5;for(;i.length>0;){let e=i.shift(),r=1;for(let s=0;s<8&&o+1<t.byteLength;s++){if((e.children&r)!==0){let t=this.getNodeData(e.name+s,o,n);a.push(t),i.push(t),o+=5}r*=2}}e.pcoGeometry.needsUpdate=!0;let s=new Map;s.set(e.name,e),a.forEach(t=>this.addNode(t,e.pcoGeometry,s)),e.loadPoints()}getNodeData(e,t,n){return{children:n.getUint8(t),numPoints:n.getUint32(t+1,!0),name:e}}addNode({name:t,numPoints:n,children:r},i,a){let o=iu(t),s=t.substring(0,t.length-1),c=a.get(s),l=t.length-1,u=zu(c.boundingBox,o),d=new e(t,i,u);d.level=l,d.numPoints=n,d.hasChildren=r>0,d.spacing=i.spacing/2**l,c.addChild(d),a.set(t,d)}};Bu.idCount=0;var Vu=class{constructor(e,t,n,r,i){this.loader=e,this.boundingBox=t,this.tightBoundingBox=n,this.offset=r,this.xhrRequest=i,this.disposed=!1,this.needsUpdate=!0,this.octreeDir=``,this.hierarchyStepSize=-1,this.nodes={},this.numNodesLoading=0,this.maxNumNodesLoading=3,this.spacing=0,this.pointAttributes=new Fu([]),this.projection=null,this.url=null}dispose(){this.loader.dispose(),this.root.traverse(e=>e.dispose()),this.disposed=!0}addNodeLoadedCallback(e){this.loader.callbacks.push(e)}clearNodeLoadedCallbacks(){this.loader.callbacks=[]}},Hu=class extends Y.EventDispatcher{constructor(e,t){super(),this.pcIndex=void 0,this.boundingBoxNode=null,this.loaded=!0,this.isTreeNode=!0,this.isGeometryNode=!1,this.geometryNode=e,this.sceneNode=t,this.children=e.children.slice()}dispose(){this.geometryNode.dispose()}disposeSceneNode(){let e=this.sceneNode;if(e.geometry instanceof Y.BufferGeometry){let t=e.geometry.attributes;for(let e in t)e===`position`&&delete t[e].array,delete t[e];e.geometry.dispose(),e.geometry=void 0}}traverse(e,t){this.geometryNode.traverse(e,t)}get id(){return this.geometryNode.id}get name(){return this.geometryNode.name}get level(){return this.geometryNode.level}get isLeafNode(){return this.geometryNode.isLeafNode}get numPoints(){return this.geometryNode.numPoints}get index(){return this.geometryNode.index}get boundingSphere(){return this.geometryNode.boundingSphere}get boundingBox(){return this.geometryNode.boundingBox}get spacing(){return this.geometryNode.spacing}};function Uu(e,t,n){return Math.min(Math.max(t,e),n)}var Wu=class e{dispose(){this.pickState&&(this.pickState.material.dispose(),this.pickState.renderTarget.dispose())}pick(t,n,r,i,a={}){if(i.length===0)return null;let o=this.pickState?this.pickState:this.pickState=e.getPickState(),s=o.material,c=t.getPixelRatio(),l=Math.ceil(t.domElement.clientWidth*c),u=Math.ceil(t.domElement.clientHeight*c);e.updatePickRenderTarget(this.pickState,l,u);let d=e.helperVec3;a.pixelPosition?d.copy(a.pixelPosition):(d.addVectors(n.position,r.direction).project(n),d.x=(d.x+1)*l*.5,d.y=(d.y+1)*u*.5);let f=Math.floor((a.pickWindowSize||15)*c),p=(f-1)/2,m=Math.floor(Uu(d.x-p,0,l)),h=Math.floor(Uu(d.y-p,0,u)),g=t.getRenderTarget();e.prepareRender(t,m,h,f,s,o);let _=e.render(t,n,s,i,r,o,a);s.clearVisibleNodeTextureOffsets();let v=e.readPixels(t,m,h,f);t.setRenderTarget(g);let y=e.findHit(v,f);return e.getPickPoint(y,_)}static prepareRender(e,t,n,r,i,a){e.setRenderTarget(a.renderTarget);let o=e.getPixelRatio();e.setScissor(t/o,n/o,r/o,r/o),e.setScissorTest(!0),e.state.buffers.depth.setTest(i.depthTest),e.state.buffers.depth.setMask(i.depthWrite),e.state.setBlending(Y.NoBlending),e.getClearColor(this.clearColor);let s=e.getClearAlpha();e.setClearColor(nu,0),e.clear(!0,!0,!0),e.setClearColor(this.clearColor,s)}static render(t,n,r,i,a,o,s){let c=[];for(let l of i){let i=e.nodesOnRay(l,a);i.length&&(e.updatePickMaterial(r,l.material,s),r.updateMaterial(l,i,n,t),s.onBeforePickRender&&s.onBeforePickRender(r,o.renderTarget),o.scene.children=e.createTempNodes(l,i,r,c.length),t.render(o.scene,n),i.forEach(e=>c.push({node:e,octree:l})))}return c}static nodesOnRay(t,n){let r=[],i=n.clone();for(let n of t.visibleNodes){let a=e.helperSphere.copy(n.boundingSphere).applyMatrix4(t.matrixWorld);i.intersectsSphere(a)&&r.push(n)}return r}static readPixels(e,t,n,r){let i=new Uint8Array(4*r*r);return e.readRenderTargetPixels(e.getRenderTarget(),t,n,r,r,i),e.setScissorTest(!1),e.setRenderTarget(null),i}static createTempNodes(e,t,n,r){let i=[];for(let a=0;a<t.length;a++){let o=t[a],s=o.sceneNode,c=new Y.Points(s.geometry,n);c.matrix=s.matrixWorld,c.matrixWorld=s.matrixWorld,c.matrixAutoUpdate=!1,c.frustumCulled=!1,c.layers.enableAll();let l=r+a+1;if(l>255)throw Error(`More than 255 nodes for pick are not supported.`);c.onBeforeRender=Z.makeOnBeforeRender(e,o,l),i.push(c)}return i}static updatePickMaterial(e,t,n){e.pointSizeType=t.pointSizeType,e.shape=t.shape,e.size=t.size,e.minSize=t.minSize,e.maxSize=t.maxSize,e.classification=t.classification,e.useFilterByNormal=t.useFilterByNormal,e.filterByNormalThreshold=t.filterByNormalThreshold,n.pickOutsideClipRegion?e.clipMode=Ul.DISABLED:(e.clipMode=t.clipMode,e.setClipBoxes(t.clipMode===Ul.CLIP_OUTSIDE?t.clipBoxes:[]))}static updatePickRenderTarget(t,n,r){t.renderTarget.width===n&&t.renderTarget.height===r||(t.renderTarget.dispose(),t.renderTarget=e.makePickRenderTarget(),t.renderTarget.setSize(n,r))}static makePickRenderTarget(){return new Y.WebGLRenderTarget(1,1,{minFilter:Y.LinearFilter,magFilter:Y.NearestFilter,format:Y.RGBAFormat})}static findHit(e,t){let n=new Uint32Array(e.buffer),r=Number.MAX_VALUE,i=null;for(let a=0;a<t;a++)for(let o=0;o<t;o++){let s=a+o*t,c=(a-(t-1)/2)**2+(o-(t-1)/2)**2,l=e[4*s+3];e[4*s+3]=0;let u=n[s];l>0&&c<r&&(i={pIndex:u,pcIndex:l-1},r=c)}return i}static getPickPoint(t,n){if(!t)return null;let r={},i=n[t.pcIndex]&&n[t.pcIndex].node.sceneNode;if(!i)return null;r.pointCloud=n[t.pcIndex].octree;let a=i.geometry.attributes;for(let n in a){if(!a.hasOwnProperty(n))continue;let o=a[n];if(n===`position`)e.addPositionToPickPoint(r,t,o,i);else if(n===`normal`)e.addNormalToPickPoint(r,t,o,i);else if(n!==`indices`){if(o.itemSize===1)r[n]=o.array[t.pIndex];else{let e=[];for(let n=0;n<o.itemSize;n++)e.push(o.array[o.itemSize*t.pIndex+n]);r[n]=e}}}return r}static addPositionToPickPoint(e,t,n,r){e.position=new Y.Vector3().fromBufferAttribute(n,t.pIndex).applyMatrix4(r.matrixWorld)}static addNormalToPickPoint(e,t,n,r){let i=new Y.Vector3().fromBufferAttribute(n,t.pIndex),a=new Y.Vector4(i.x,i.y,i.z,0).applyMatrix4(r.matrixWorld);i.set(a.x,a.y,a.z),e.normal=i}static getPickState(){let t=new Y.Scene;t.autoUpdate=!1;let n=new Z;return n.pointColorType=Jl.POINT_INDEX,{renderTarget:e.makePickRenderTarget(),material:n,scene:t}}};Wu.helperVec3=new Y.Vector3,Wu.helperSphere=new Y.Sphere,Wu.clearColor=new Y.Color;var Gu=class{constructor(e,t){this.loader=e,this.boundingBox=t,this.url=null,this.pointAttributes=null,this.spacing=0,this.numNodesLoading=0,this.maxNumNodesLoading=3,this.disposed=!1,this.tightBoundingBox=this.boundingBox.clone(),this.boundingSphere=this.boundingBox.getBoundingSphere(new Y.Sphere),this.tightBoundingSphere=this.boundingBox.getBoundingSphere(new Y.Sphere)}dispose(){this.root.traverse(e=>e.dispose()),this.disposed=!0}},Ku=class extends Y.Object3D{constructor(){super(...arguments),this.root=null}initialized(){return this.root!==null}},qu=class extends Ku{constructor(e,t,n){super(),this.disposed=!1,this.level=0,this.maxLevel=1/0,this.minNodePixelSize=50,this.root=null,this.boundingBoxNodes=[],this.visibleNodes=[],this.visibleGeometry=[],this.numVisiblePoints=0,this.showBoundingBox=!1,this._material=null,this.visibleBounds=new Y.Box3,this.name=``,this.potree=e,this.root=t.root,this.pcoGeometry=t,this.boundingBox=t.boundingBox,this.boundingSphere=this.boundingBox.getBoundingSphere(new Y.Sphere),this.position.copy(t.offset),this.updateMatrix(),this.material=n||(t instanceof Gu?new Z({newFormat:!0}):new Z)}dispose(){this.root&&this.root.dispose(),this.pcoGeometry.root.traverse(e=>this.potree.lru.remove(e)),this.pcoGeometry.dispose(),this.material.dispose(),this.visibleNodes=[],this.visibleGeometry=[],this.picker&&=(this.picker.dispose(),void 0),this.disposed=!0}get material(){return this._material}set material(e){this._material=e,this.updateMatrixWorld(!0);let{min:t,max:n}=Ru(this.pcoGeometry.tightBoundingBox||this.getBoundingBoxWorld(),this.matrixWorld),r=n.z-t.z;this.material.heightMin=t.z-.2*r,this.material.heightMax=n.z+.2*r}get pointSizeType(){return this.material.pointSizeType}set pointSizeType(e){this.material.pointSizeType=e}toTreeNode(e,t){let n=new Y.Points(e.geometry,this.material),r=new Hu(e,n);return n.name=e.name,n.position.copy(e.boundingBox.min),n.frustumCulled=!1,n.onBeforeRender=Z.makeOnBeforeRender(this,r),t?(t.sceneNode.add(n),t.children[e.index]=r,e.oneTimeDisposeHandlers.push(()=>{r.disposeSceneNode(),t.sceneNode.remove(r.sceneNode),t.children[e.index]=e})):(this.root=r,this.add(n)),r}updateVisibleBounds(){let e=this.visibleBounds;e.min.set(1/0,1/0,1/0),e.max.set(-1/0,-1/0,-1/0);for(let t of this.visibleNodes)t.isLeafNode&&(e.expandByPoint(t.boundingBox.min),e.expandByPoint(t.boundingBox.max))}updateBoundingBoxes(){if(!this.showBoundingBox||!this.parent)return;let e=this.parent.getObjectByName(`bbroot`);e||(e=new Y.Object3D,e.name=`bbroot`,this.parent.add(e));let t=[];for(let e of this.visibleNodes)e.boundingBoxNode!==void 0&&e.isLeafNode&&t.push(e.boundingBoxNode);e.children=t}updateMatrixWorld(e){!0===this.matrixAutoUpdate&&this.updateMatrix(),!0!==this.matrixWorldNeedsUpdate&&!0!==e||(this.parent?this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0)}hideDescendants(e){let t=[];for(n(e);t.length>0;){let e=t.shift();e.visible=!1,n(e)}function n(e){for(let n of e.children)n.visible&&t.push(n)}}moveToOrigin(){this.position.set(0,0,0),this.position.set(0,0,0).sub(this.getBoundingBoxWorld().getCenter(new Y.Vector3))}moveToGroundPlane(){this.position.y+=-this.getBoundingBoxWorld().min.y}getBoundingBoxWorld(){return this.updateMatrixWorld(!0),Ru(this.boundingBox,this.matrixWorld)}getVisibleExtent(){return this.visibleBounds.applyMatrix4(this.matrixWorld)}pick(e,t,n,r={}){return this.picker=this.picker||new Wu,this.picker.pick(e,t,n,[this],r)}raycast(e,t){for(let n of this.visibleNodes){let r=n.sceneNode;r&&!r.layers.test(e.layers)&&r.raycast(e,t)}}get progress(){return this.visibleGeometry.length===0?0:this.visibleNodes.length/this.visibleGeometry.length}},Ju={DATA_TYPE_DOUBLE:{ordinal:0,name:`double`,size:8},DATA_TYPE_FLOAT:{ordinal:1,name:`float`,size:4},DATA_TYPE_INT8:{ordinal:2,name:`int8`,size:1},DATA_TYPE_UINT8:{ordinal:3,name:`uint8`,size:1},DATA_TYPE_INT16:{ordinal:4,name:`int16`,size:2},DATA_TYPE_UINT16:{ordinal:5,name:`uint16`,size:2},DATA_TYPE_INT32:{ordinal:6,name:`int32`,size:4},DATA_TYPE_UINT32:{ordinal:7,name:`uint32`,size:4},DATA_TYPE_INT64:{ordinal:8,name:`int64`,size:8},DATA_TYPE_UINT64:{ordinal:9,name:`uint64`,size:8}},Yu=0;for(let e in Ju)Ju[Yu]=Ju[e],Yu++;var Xu=class{constructor(e,t,n,r=[1/0,-1/0]){this.name=e,this.type=t,this.numElements=n,this.range=r,this.byteSize=this.numElements*this.type.size,this.description=``}},Zu={POSITION_CARTESIAN:new Xu(`POSITION_CARTESIAN`,Ju.DATA_TYPE_FLOAT,3),RGBA_PACKED:new Xu(`COLOR_PACKED`,Ju.DATA_TYPE_INT8,4),COLOR_PACKED:new Xu(`COLOR_PACKED`,Ju.DATA_TYPE_INT8,4),RGB_PACKED:new Xu(`COLOR_PACKED`,Ju.DATA_TYPE_INT8,3),NORMAL_FLOATS:new Xu(`NORMAL_FLOATS`,Ju.DATA_TYPE_FLOAT,3),INTENSITY:new Xu(`INTENSITY`,Ju.DATA_TYPE_UINT16,1),CLASSIFICATION:new Xu(`CLASSIFICATION`,Ju.DATA_TYPE_UINT8,1),NORMAL_SPHEREMAPPED:new Xu(`NORMAL_SPHEREMAPPED`,Ju.DATA_TYPE_UINT8,2),NORMAL_OCT16:new Xu(`NORMAL_OCT16`,Ju.DATA_TYPE_UINT8,2),NORMAL:new Xu(`NORMAL`,Ju.DATA_TYPE_FLOAT,3),RETURN_NUMBER:new Xu(`RETURN_NUMBER`,Ju.DATA_TYPE_UINT8,1),NUMBER_OF_RETURNS:new Xu(`NUMBER_OF_RETURNS`,Ju.DATA_TYPE_UINT8,1),SOURCE_ID:new Xu(`SOURCE_ID`,Ju.DATA_TYPE_UINT16,1),INDICES:new Xu(`INDICES`,Ju.DATA_TYPE_UINT32,1),SPACING:new Xu(`SPACING`,Ju.DATA_TYPE_FLOAT,1),GPS_TIME:new Xu(`GPS_TIME`,Ju.DATA_TYPE_DOUBLE,1)},Qu=class{constructor(e,t=[],n=0,r=0,i=[]){if(this.attributes=t,this.byteSize=n,this.size=r,this.vectors=i,e!=null)for(let t=0;t<e.length;t++){let n=Zu[e[t]];this.attributes.push(n),this.byteSize+=n.byteSize,this.size++}}add(e){this.attributes.push(e),this.byteSize+=e.byteSize,this.size++}addVector(e){this.vectors.push(e)}hasNormals(){for(let e in this.attributes){let t=this.attributes[e];if(t===Zu.NORMAL_SPHEREMAPPED||t===Zu.NORMAL_FLOATS||t===Zu.NORMAL||t===Zu.NORMAL_OCT16)return!0}return!1}},$u=Bl(290).A,ed=Bl(761).A,td;(function(e){e.DECODER_WORKER_BROTLI=`DECODER_WORKER_BROTLI`,e.DECODER_WORKER=`DECODER_WORKER`})(td||={});var nd=class{constructor(){this.workers={DECODER_WORKER:[],DECODER_WORKER_BROTLI:[]}}getWorker(e){if(this.workers[e]===void 0)throw Error(`Unknown worker type`);if(this.workers[e].length===0){let t=function(e){switch(e){case td.DECODER_WORKER_BROTLI:return new $u;case td.DECODER_WORKER:return new ed;default:throw Error(`Unknown worker type`)}}(e);this.workers[e].push(t)}let t=this.workers[e].pop();if(t===void 0)throw Error(`No workers available`);return t}returnWorker(e,t){this.workers[e].push(t)}},rd=class e{constructor(t,n,r){this.name=t,this.octreeGeometry=n,this.boundingBox=r,this.loaded=!1,this.loading=!1,this.parent=null,this.geometry=null,this.hasChildren=!1,this.isLeafNode=!0,this.isTreeNode=!1,this.isGeometryNode=!0,this.children=[null,null,null,null,null,null,null,null],this.id=e.IDCount++,this.index=parseInt(t.charAt(t.length-1)),this.boundingSphere=r.getBoundingSphere(new Y.Sphere),this.numPoints=0,this.oneTimeDisposeHandlers=[]}getLevel(){return this.level}isLoaded(){return this.loaded}getBoundingSphere(){return this.boundingSphere}getBoundingBox(){return this.boundingBox}load(){this.octreeGeometry.numNodesLoading>=this.octreeGeometry.maxNumNodesLoading||this.octreeGeometry.loader&&this.octreeGeometry.loader.load(this)}getNumPoints(){return this.numPoints}dispose(){if(this.geometry&&this.parent!=null){this.geometry.dispose(),this.geometry=null,this.loaded=!1;for(let e=0;e<this.oneTimeDisposeHandlers.length;e++)(0,this.oneTimeDisposeHandlers[e])();this.oneTimeDisposeHandlers=[]}}traverse(e,t=!0){let n=t?[this]:[],r;for(;(r=n.pop())!==void 0;){e(r);for(let e of r.children)e!==null&&n.push(e)}}};rd.IDCount=0,rd.IDCount=0;var id=class{constructor(e,t,n,r){this.url=e,this.workerPool=t,this.metadata=n,this.requestManager=r}async load(e){if(!e.loaded&&!e.loading){e.loading=!0,e.octreeGeometry.numNodesLoading++;try{e.nodeType===2&&await this.loadHierarchy(e);let{byteOffset:t,byteSize:n}=e;if(t===void 0||n===void 0)throw Error(`byteOffset and byteSize are required`);let r,i=(await this.requestManager.getUrl(this.url)).replace(`/metadata.json`,`/octree.bin`),a=t,o=t+n-BigInt(1);n===BigInt(0)?(r=new ArrayBuffer(0),console.warn(`loaded node with 0 bytes: ${e.name}`)):r=await(await this.requestManager.fetch(i,{headers:{"content-type":`multipart/byteranges`,Range:`bytes=${a}-${o}`}})).arrayBuffer();let s=this.metadata.encoding===`BROTLI`?td.DECODER_WORKER_BROTLI:td.DECODER_WORKER,c=this.workerPool.getWorker(s);c.onmessage=t=>{let n=t.data,r=n.attributeBuffers;this.workerPool.returnWorker(s,c);let i=new Y.BufferGeometry;for(let e in r){let t=r[e].buffer;if(e===`position`)i.setAttribute(`position`,new Y.BufferAttribute(new Float32Array(t),3));else if(e===`rgba`)i.setAttribute(`rgba`,new Y.BufferAttribute(new Uint8Array(t),4,!0));else if(e===`NORMAL`)i.setAttribute(`normal`,new Y.BufferAttribute(new Float32Array(t),3));else if(e===`INDICES`){let e=new Y.BufferAttribute(new Uint8Array(t),4);e.normalized=!0,i.setAttribute(`indices`,e)}else{let n=new Y.BufferAttribute(new Float32Array(t),1),a=r[e].attribute;n.potree={offset:r[e].offset,scale:r[e].scale,preciseBuffer:r[e].preciseBuffer,range:a.range},i.setAttribute(e,n)}}e.density=n.density,e.geometry=i,e.loaded=!0,e.loading=!1,e.octreeGeometry.numNodesLoading--};let l=e.octreeGeometry.pointAttributes,u=e.octreeGeometry.scale,d=e.boundingBox,f=e.octreeGeometry.offset.clone().add(d.min),p=d.max.clone().sub(d.min),m=f.clone().add(p),h=e.numPoints,g=e.octreeGeometry.loader.offset,_={name:e.name,buffer:r,pointAttributes:l,scale:u,min:f,max:m,size:p,offset:g,numPoints:h};c.postMessage(_,[_.buffer])}catch{e.loaded=!1,e.loading=!1,e.octreeGeometry.numNodesLoading--}}}parseHierarchy(e,t){let n=new DataView(t),r=t.byteLength/22,i=e.octreeGeometry,a=Array(r);a[0]=e;let o=1;for(let e=0;e<r;e++){let t=a[e],r=n.getUint8(e*22+0),s=n.getUint8(e*22+1),c=n.getUint32(e*22+2,!0),l=n.getBigInt64(e*22+6,!0),u=n.getBigInt64(e*22+14,!0);if(t.nodeType===2?(t.byteOffset=l,t.byteSize=u,t.numPoints=c):r===2?(t.hierarchyByteOffset=l,t.hierarchyByteSize=u,t.numPoints=c):(t.byteOffset=l,t.byteSize=u,t.numPoints=c),t.nodeType=r,t.nodeType!==2)for(let e=0;e<8;e++){if(!(1<<e&s))continue;let n=t.name+e,r=new rd(n,i,od(t.boundingBox,e));r.name=n,r.spacing=t.spacing/2,r.level=t.level+1,t.children[e]=r,r.parent=t,a[o]=r,o++}}}async loadHierarchy(e){let{hierarchyByteOffset:t,hierarchyByteSize:n}=e;if(t===void 0||n===void 0)throw Error(`hierarchyByteOffset and hierarchyByteSize are undefined for node ${e.name}`);let r=(await this.requestManager.getUrl(this.url)).replace(`/metadata.json`,`/hierarchy.bin`),i=t,a=i+n-BigInt(1),o=await(await this.requestManager.fetch(r,{headers:{"content-type":`multipart/byteranges`,Range:`bytes=${i}-${a}`}})).arrayBuffer();this.parseHierarchy(e,o)}},ad=new Y.Vector3;function od(e,t){let n=e.min.clone(),r=e.max.clone(),i=ad.subVectors(r,n);return(1&t)>0?n.z+=i.z/2:r.z-=i.z/2,(2&t)>0?n.y+=i.y/2:r.y-=i.y/2,(4&t)>0?n.x+=i.x/2:r.x-=i.x/2,new Y.Box3(n,r)}var sd={double:Ju.DATA_TYPE_DOUBLE,float:Ju.DATA_TYPE_FLOAT,int8:Ju.DATA_TYPE_INT8,uint8:Ju.DATA_TYPE_UINT8,int16:Ju.DATA_TYPE_INT16,uint16:Ju.DATA_TYPE_UINT16,int32:Ju.DATA_TYPE_INT32,uint32:Ju.DATA_TYPE_UINT32,int64:Ju.DATA_TYPE_INT64,uint64:Ju.DATA_TYPE_UINT64},cd=class e{constructor(){this.workerPool=new nd}static parseAttributes(e){let t=new Qu,n={rgb:`rgba`};for(let r of e){let{name:e,numElements:i,min:a,max:o}=r,s=sd[r.type],c=new Xu(n[e]?n[e]:e,s,i);c.range=i===1?[a[0],o[0]]:[a,o],e===`gps-time`&&typeof c.range[0]==`number`&&c.range[0]===c.range[1]&&(c.range[1]+=1),c.initialRange=c.range,t.add(c)}return t.attributes.find(e=>e.name===`NormalX`)!==void 0&&t.attributes.find(e=>e.name===`NormalY`)!==void 0&&t.attributes.find(e=>e.name===`NormalZ`)!==void 0&&t.addVector({name:`NORMAL`,attributes:[`NormalX`,`NormalY`,`NormalZ`]}),t}async load(t,n){let r=await(await n.fetch(await n.getUrl(t))).json(),i=e.parseAttributes(r.attributes),a=new id(t,this.workerPool,r,n);a.attributes=i,a.scale=r.scale,a.offset=r.offset;let o=new Gu(a,new Y.Box3(new Y.Vector3(...r.boundingBox.min),new Y.Vector3(...r.boundingBox.max)));o.url=await n.getUrl(t),o.spacing=r.spacing,o.scale=r.scale;let s=new Y.Vector3(...r.boundingBox.min),c=new Y.Vector3(...r.boundingBox.max),l=new Y.Box3(s,c),u=s.clone();l.min.sub(u),l.max.sub(u),o.projection=r.projection,o.boundingBox=l,o.tightBoundingBox=l.clone(),o.boundingSphere=l.getBoundingSphere(new Y.Sphere),o.tightBoundingSphere=l.getBoundingSphere(new Y.Sphere),o.offset=u,o.pointAttributes=e.parseAttributes(r.attributes);let d=new rd(`r`,o,l);return d.level=0,d.nodeType=2,d.hierarchyByteOffset=BigInt(0),d.hierarchyByteSize=BigInt(r.hierarchy.firstChunkSize),d.spacing=o.spacing,d.byteOffset=BigInt(0),o.root=d,a.load(d),{geometry:o}}},ld=null;function ud(){return ld||(typeof document>`u`?null:(ld=document.createElement(`canvas`).getContext(`webgl`),ld))}function dd(e){let t=ud();return t!==null&&!!t.getExtension(e)}function fd(e){let t=ud();return t!==null&&t.getParameter(t.MAX_VARYING_VECTORS)>=e}function pd(){let e=ud();if(e===null)return``;let t=e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT),n=e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT),r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT),i=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),a=t&&r&&t.precision>0&&r.precision>0,o=n&&i&&n.precision>0&&i.precision>0;return a?`highp`:o?`mediump`:`lowp`}var md=class e{constructor(e){this.versionMinor=0,this.version=e;let t=e.indexOf(`.`)===-1?e.length:e.indexOf(`.`);this.versionMajor=parseInt(e.substr(0,t),10),this.versionMinor=parseInt(e.substr(t+1),10),isNaN(this.versionMinor)&&(this.versionMinor=0)}newerThan(t){let n=new e(t);return this.versionMajor>n.versionMajor||this.versionMajor===n.versionMajor&&this.versionMinor>n.versionMinor}equalOrHigher(t){let n=new e(t);return this.versionMajor>n.versionMajor||this.versionMajor===n.versionMajor&&this.versionMinor>=n.versionMinor}upTo(e){return!this.newerThan(e)}},hd=Bl(318).A,gd=class{constructor({getUrl:e=e=>Promise.resolve(e),version:t,boundingBox:n,scale:r,xhrRequest:i}){this.disposed=!1,this.workers=[],this.version=typeof t==`string`?new md(t):t,this.xhrRequest=i,this.getUrl=e,this.boundingBox=n,this.scale=r,this.callbacks=[]}dispose(){this.workers.forEach(e=>e.terminate()),this.workers=[],this.disposed=!0}load(e){return e.loaded||this.disposed?Promise.resolve():Promise.resolve(this.getUrl(this.getNodeUrl(e))).then(e=>this.xhrRequest(e,{mode:`cors`})).then(e=>e.arrayBuffer()).then(t=>new Promise(n=>this.parse(e,t,n)))}getNodeUrl(e){let t=e.getUrl();return this.version.equalOrHigher(`1.4`)&&(t+=`.bin`),t}parse(e,t,n){if(this.disposed)return void n();let r=this.getWorker(),i=e.pcoGeometry.pointAttributes,a=t.byteLength/i.byteSize;this.version.upTo(`1.5`)&&(e.numPoints=a),r.onmessage=t=>{if(this.disposed)return void n();let i=t.data,o=e.geometry=e.geometry||new Y.BufferGeometry;o.boundingBox=e.boundingBox,this.addBufferAttributes(o,i.attributeBuffers),this.addIndices(o,i.indices),this.addNormalAttribute(o,a),e.mean=new Y.Vector3().fromArray(i.mean),e.tightBoundingBox=this.getTightBoundingBox(i.tightBoundingBox),e.loaded=!0,e.loading=!1,e.failed=!1,e.pcoGeometry.numNodesLoading--,e.pcoGeometry.needsUpdate=!0,this.releaseWorker(r),this.callbacks.forEach(t=>t(e)),n()};let o={buffer:t,pointAttributes:i,version:this.version.version,min:e.boundingBox.min.toArray(),offset:e.pcoGeometry.offset.toArray(),scale:this.scale,spacing:e.spacing,hasChildren:e.hasChildren};r.postMessage(o,[o.buffer])}getWorker(){return this.workers.pop()||new hd}releaseWorker(e){this.workers.push(e)}getTightBoundingBox({min:e,max:t}){let n=new Y.Box3(new Y.Vector3().fromArray(e),new Y.Vector3().fromArray(t));return n.max.sub(n.min),n.min.set(0,0,0),n}addBufferAttributes(e,t){Object.keys(t).forEach(n=>{let r=t[n].buffer;this.isAttribute(n,Au.POSITION_CARTESIAN)?e.setAttribute(`position`,new Y.BufferAttribute(new Float32Array(r),3)):this.isAttribute(n,Au.COLOR_PACKED)?e.setAttribute(`color`,new Y.BufferAttribute(new Uint8Array(r),3,!0)):this.isAttribute(n,Au.INTENSITY)?e.setAttribute(`intensity`,new Y.BufferAttribute(new Float32Array(r),1)):this.isAttribute(n,Au.CLASSIFICATION)?e.setAttribute(`classification`,new Y.BufferAttribute(new Uint8Array(r),1)):(this.isAttribute(n,Au.NORMAL_SPHEREMAPPED)||this.isAttribute(n,Au.NORMAL_OCT16)||this.isAttribute(n,Au.NORMAL))&&e.setAttribute(`normal`,new Y.BufferAttribute(new Float32Array(r),3))})}addIndices(e,t){let n=new Y.Uint8BufferAttribute(t,4);n.normalized=!0,e.setAttribute(`indices`,n)}addNormalAttribute(e,t){if(!e.getAttribute(`normal`)){let n=new Float32Array(3*t);e.setAttribute(`normal`,new Y.BufferAttribute(new Float32Array(n),3))}}isAttribute(e,t){return parseInt(e,10)===t}};function _d(e){return{index:iu(e),parentName:e.substring(0,e.length-1),level:e.length-1}}function vd(e){return e!=null&&e.isGeometryNode}function yd(e){return e!=null&&e.isTreeNode}function bd(e){this.content=[],this.scoreFunction=e}bd.prototype={push:function(e){this.content.push(e),this.bubbleUp(this.content.length-1)},pop:function(){var e=this.content[0],t=this.content.pop();return this.content.length>0&&(this.content[0]=t,this.sinkDown(0)),e},remove:function(e){for(var t=this.content.length,n=0;n<t;n++)if(this.content[n]===e){var r=this.content.pop();if(n===t-1)break;this.content[n]=r,this.bubbleUp(n),this.sinkDown(n);break}},size:function(){return this.content.length},bubbleUp:function(e){for(var t=this.content[e],n=this.scoreFunction(t);e>0;){var r=Math.floor((e+1)/2)-1,i=this.content[r];if(n>=this.scoreFunction(i))break;this.content[r]=t,this.content[e]=i,e=r}},sinkDown:function(e){for(var t=this.content.length,n=this.content[e],r=this.scoreFunction(n);;){var i=2*(e+1),a=i-1,o=null;if(a<t){var s=this.content[a],c=this.scoreFunction(s);c<r&&(o=a)}if(i<t){var l=this.content[i];this.scoreFunction(l)<(o==null?r:c)&&(o=i)}if(o==null)break;this.content[e]=this.content[o],this.content[o]=n,e=o}}};var xd=class extends Y.LineSegments{constructor(e,t=new Y.Color(16776960)){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array([e.min.x,e.min.y,e.min.z,e.max.x,e.min.y,e.min.z,e.max.x,e.min.y,e.max.z,e.min.x,e.min.y,e.max.z,e.min.x,e.max.y,e.min.z,e.max.x,e.max.y,e.min.z,e.max.x,e.max.y,e.max.z,e.min.x,e.max.y,e.max.z]),i=new Y.BufferGeometry;i.setIndex(new Y.BufferAttribute(n,1)),i.setAttribute(`position`,new Y.BufferAttribute(r,3)),super(i,new Y.LineBasicMaterial({color:t}))}},Sd=class{constructor(e){this.node=e,this.next=null,this.previous=null}},Cd=class{constructor(e=1e6){this.pointBudget=e,this.first=null,this.last=null,this.numPoints=0,this.items=new Map}get size(){return this.items.size}has(e){return this.items.has(e.id)}touch(e){if(!e.loaded)return;let t=this.items.get(e.id);t?this.touchExisting(t):this.addNew(e)}addNew(e){let t=new Sd(e);t.previous=this.last,this.last=t,t.previous&&(t.previous.next=t),this.first||=t,this.items.set(e.id,t),this.numPoints+=e.numPoints}touchExisting(e){e.previous?e.next&&(e.previous.next=e.next,e.next.previous=e.previous,e.previous=this.last,e.next=null,this.last=e,e.previous&&(e.previous.next=e)):e.next&&(this.first=e.next,this.first.previous=null,e.previous=this.last,e.next=null,this.last=e,e.previous&&(e.previous.next=e))}remove(e){let t=this.items.get(e.id);t&&(this.items.size===1?(this.first=null,this.last=null):(t.previous||(this.first=t.next,this.first.previous=null),t.next||(this.last=t.previous,this.last.next=null),t.previous&&t.next&&(t.previous.next=t.next,t.next.previous=t.previous)),this.items.delete(e.id),this.numPoints-=e.numPoints)}getLRUItem(){return this.first?this.first.node:void 0}freeMemory(){if(!(this.items.size<=1))for(;this.numPoints>2*this.pointBudget;){let e=this.getLRUItem();e&&this.disposeSubtree(e)}}disposeSubtree(e){let t=[e];e.traverse(e=>{e.loaded&&t.push(e)});for(let e of t)e.dispose(),this.remove(e)}},wd=class{constructor(e,t,n,r){this.pointCloudIndex=e,this.weight=t,this.node=n,this.parent=r}},Td=class e{constructor(){this._pointBudget=1e6,this._rendererSize=new Y.Vector2,this.maxNumNodesLoading=4,this.lru=new Cd(this._pointBudget),this.updateVisibilityStructures=(()=>{let e=new Y.Matrix4,t=new Y.Matrix4,n=new Y.Matrix4;return(r,i)=>{let a=[],o=[],s=new bd(e=>1/e.weight);for(let c=0;c<r.length;c++){let l=r[c];if(!l.initialized())continue;l.numVisiblePoints=0,l.visibleNodes=[],l.visibleGeometry=[],i.updateMatrixWorld(!1);let u=i.matrixWorldInverse,d=l.matrixWorld;if(e.identity().multiply(i.projectionMatrix).multiply(u).multiply(d),a.push(new Y.Frustum().setFromProjectionMatrix(e)),t.copy(d).invert(),n.identity().multiply(t).multiply(i.matrixWorld),o.push(new Y.Vector3().setFromMatrixPosition(n)),l.visible&&l.root!==null){let e=Number.MAX_VALUE;s.push(new wd(c,e,l.root))}l.hideDescendants(l);for(let e of l.boundingBoxNodes)e.visible=!1}return{frustums:a,cameraPositions:o,priorityQueue:s}}})()}get features(){return{SHADER_INTERPOLATION:dd(`EXT_frag_depth`)&&fd(8),SHADER_SPLATS:dd(`EXT_frag_depth`)&&dd(`OES_texture_float`)&&fd(8),SHADER_EDL:dd(`OES_texture_float`)&&fd(8),precision:pd()}}async loadPointCloud(e,t,n){if(typeof t==`string`){let n=t;return this.loadPointCloud(e,{getUrl:async e=>`${n}${e}`,fetch:async(e,t)=>fetch(e,t)})}{let r=t;if(e.endsWith(`cloud.js`))return await function(e,t,n){return Promise.resolve(t(e)).then(e=>n(e,{mode:`cors`}).then(e=>e.json()).then(function(e,t,n){return r=>{let{offset:i,boundingBox:a,tightBoundingBox:o}=function(e){let t=new Y.Vector3(e.boundingBox.lx,e.boundingBox.ly,e.boundingBox.lz),n=new Y.Vector3(e.boundingBox.ux,e.boundingBox.uy,e.boundingBox.uz),r=new Y.Box3(t,n),i=r.clone(),a=t.clone();if(e.tightBoundingBox){let{lx:t,ly:n,lz:r,ux:a,uy:o,uz:s}=e.tightBoundingBox;i.min.set(t,n,r),i.max.set(a,o,s)}return r.min.sub(a),r.max.sub(a),i.min.sub(a),i.max.sub(a),{offset:a,boundingBox:r,tightBoundingBox:i}}(r),s=new Vu(new gd({getUrl:t,version:r.version,boundingBox:a,scale:r.scale,xhrRequest:n}),a,o,i,n);s.url=e,s.octreeDir=r.octreeDir,s.needsUpdate=!0,s.spacing=r.spacing,s.hierarchyStepSize=r.hierarchyStepSize,s.projection=r.projection,s.offset=i,s.pointAttributes=new Fu(r.pointAttributes);let c={},l=new md(r.version);return function(e,t,n,r){let i=new Bu(`r`,e,e.boundingBox);return i.hasChildren=!0,i.spacing=e.spacing,i.numPoints=r.upTo(`1.5`)?t.hierarchy[0][1]:0,e.root=i,n.r=i,e.root.load()}(s,r,c,l).then(()=>(l.upTo(`1.4`)&&function(e,t,n){for(let r=1;r<t.hierarchy.length;r++){let[i,a]=t.hierarchy[r],{index:o,parentName:s,level:c}=_d(i),l=n[s],u=new Bu(i,e,zu(l.boundingBox,o));u.level=c,u.numPoints=a,u.spacing=e.spacing/2**u.level,n[i]=u,l.addChild(u)}}(s,r,c),s.nodes=c,s))}}(e,t,n)))}(e,r.getUrl,r.fetch).then(e=>new qu(this,e,n));if(e.endsWith(`metadata.json`))return await async function(e,t){let{geometry:n}=await new cd().load(e,t);return n}(e,r).then(e=>new qu(this,e,n));throw Error(`Unsupported file type`)}}updatePointClouds(e,t,n){let r=this.updateVisibility(e,t,n);for(let r=0;r<e.length;r++){let i=e[r];i.disposed||(i.material.updateMaterial(i,i.visibleNodes,t,n),i.updateVisibleBounds(),i.updateBoundingBoxes())}return this.lru.freeMemory(),r}static pick(t,n,r,i,a={}){return e.picker=e.picker||new Wu,e.picker.pick(n,r,i,t,a)}get pointBudget(){return this._pointBudget}set pointBudget(e){e!==this._pointBudget&&(this._pointBudget=e,this.lru.pointBudget=e,this.lru.freeMemory())}updateVisibility(e,t,n){let r=0,i=[],a=[],{frustums:o,cameraPositions:s,priorityQueue:c}=this.updateVisibilityStructures(e,t),l,u=0,d=!1,f=!1;for(;(l=c.pop())!==void 0;){let p=l.node;if(r+p.numPoints>this.pointBudget)break;let m=l.pointCloudIndex,h=e[m],g=h.maxLevel===void 0?1/0:h.maxLevel;if(p.level>g||!o[m].intersectsBox(p.boundingBox)||this.shouldClip(h,p.boundingBox))continue;r+=p.numPoints,h.numVisiblePoints+=p.numPoints;let _=l.parent;if(vd(p)&&(!_||yd(_))){if(p.loaded&&u<2)p=h.toTreeNode(p,_),u++;else{if(p.failed){f=!0;continue}p.loaded&&u>=2&&(d=!0),a.push(p),h.visibleGeometry.push(p)}}yd(p)&&(this.updateTreeNodeVisibility(h,p,i),h.visibleGeometry.push(p.geometryNode));let v=.5*n.getSize(this._rendererSize).height*n.getPixelRatio();this.updateChildVisibility(l,c,h,p,s[m],t,v)}let p=Math.min(this.maxNumNodesLoading,a.length),m=[];for(let e=0;e<p;e++)m.push(a[e].load());return{visibleNodes:i,numVisiblePoints:r,exceededMaxLoadsToGPU:d,nodeLoadFailed:f,nodeLoadPromises:m}}updateTreeNodeVisibility(e,t,n){this.lru.touch(t.geometryNode);let r=t.sceneNode;r.visible=!0,r.material=e.material,r.updateMatrix(),r.matrixWorld.multiplyMatrices(e.matrixWorld,r.matrix),n.push(t),e.visibleNodes.push(t),this.updateBoundingBoxVisibility(e,t)}updateChildVisibility(e,t,n,r,i,a,o){let s=r.children;for(let c=0;c<s.length;c++){let l=s[c];if(l===null)continue;let u=l.boundingSphere,d=u.center.distanceTo(i),f=u.radius,p,m,h=0;if(a.type===tu){let e=a.fov*Math.PI/180;h=o/(Math.tan(e/2)*d),m=f*h,p=d<f?Number.MAX_VALUE:m+1/d}else{let e=a;h=2*o/(e.top-e.bottom)*e.zoom,m=f*h,p=m}m<n.minNodePixelSize||t.push(new wd(e.pointCloudIndex,p,l,r))}}updateBoundingBoxVisibility(e,t){if(e.showBoundingBox&&!t.boundingBoxNode){let n=new xd(t.boundingBox);n.matrixAutoUpdate=!1,e.boundingBoxNodes.push(n),t.boundingBoxNode=n,t.boundingBoxNode.matrix.copy(e.matrixWorld)}else e.showBoundingBox&&t.boundingBoxNode?(t.boundingBoxNode.visible=!0,t.boundingBoxNode.matrix.copy(e.matrixWorld)):!e.showBoundingBox&&t.boundingBoxNode&&(t.boundingBoxNode.visible=!1)}shouldClip(e,t){let n=e.material;if(n.numClipBoxes===0||n.clipMode!==Ul.CLIP_OUTSIDE)return!1;let r=t.clone();e.updateMatrixWorld(!0),r.applyMatrix4(e.matrixWorld);let i=n.clipBoxes;for(let e=0;e<i.length;e++){let t=i[e].matrix,n=new Y.Box3(new Y.Vector3(-.5,-.5,-.5),new Y.Vector3(.5,.5,.5)).applyMatrix4(t);if(r.intersectsBox(n))return!1}return!0}},Ed=class{constructor(){this.scene=new Y.Scene,this.camera=new Y.OrthographicCamera(-1,1,1,-1,0,1),this.geometry=new Y.BufferGeometry;let e=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),t=new Float32Array([0,0,1,0,1,1,0,1]),n=new Uint16Array([0,1,2,0,2,3]);this.geometry.setIndex(new Y.BufferAttribute(n,1)),this.geometry.setAttribute(`position`,new Y.BufferAttribute(e,3)),this.geometry.setAttribute(`uv`,new Y.BufferAttribute(t,2)),this.placeholderMaterial=new Y.RawShaderMaterial,this.quad=new Y.Mesh(this.geometry,this.placeholderMaterial),this.scene.add(this.quad)}dispose(){this.geometry.dispose(),this.placeholderMaterial.dispose()}render(e,t,n=null){let r=e.getRenderTarget();this.quad.material=t,e.setRenderTarget(n),e.render(this.scene,this.camera),e.setRenderTarget(r)}},Dd=class{constructor(){this.edlStrength=.4,this.radius=1.4,this.opacity=1,this.neighbourCount=8,this.rtTypeChecked=!1,this.size=new Y.Vector2,this.edlMaterial=new eu,this.screenPass=new Ed,this.rtEDL=new Y.WebGLRenderTarget(1,1,{minFilter:Y.NearestFilter,magFilter:Y.NearestFilter,format:Y.RGBAFormat,type:Y.HalfFloatType,depthBuffer:!0}),this.rtEDL.texture.generateMipmaps=!1}ensureRenderTargetType(e){if(this.rtTypeChecked)return;this.rtTypeChecked=!0;let t=e.getContext(),n=!0===e.capabilities.isWebGL2,r=!!(t.getExtension(`EXT_color_buffer_float`)||t.getExtension(`WEBGL_color_buffer_float`)),i=!!t.getExtension(`EXT_color_buffer_half_float`),a=Y.UnsignedByteType;if(n&&r?a=Y.FloatType:n||!i&&!r||(a=Y.HalfFloatType),this.rtEDL.texture.type!==a){let e=this.rtEDL.width,t=this.rtEDL.height;this.rtEDL.dispose(),this.rtEDL=new Y.WebGLRenderTarget(e,t,{minFilter:Y.NearestFilter,magFilter:Y.NearestFilter,format:Y.RGBAFormat,type:a,depthBuffer:!0}),this.rtEDL.texture.generateMipmaps=!1}}dispose(){this.rtEDL.dispose(),this.edlMaterial.dispose(),this.screenPass.dispose()}resizeToRenderer(e){e.getSize(this.size);let t=e.getPixelRatio(),n=Math.max(1,Math.floor(this.size.x*t)),r=Math.max(1,Math.floor(this.size.y*t));this.rtEDL.width===n&&this.rtEDL.height===r||this.rtEDL.setSize(n,r)}render(e){let{renderer:t,scene:n,camera:r}=e,i=e.pointCloudLayer??1;this.ensureRenderTargetType(t),this.resizeToRenderer(t),this.edlMaterial.neighbourCount!==this.neighbourCount&&(this.edlMaterial.neighbourCount=this.neighbourCount);let a=t.autoClear;t.autoClear=!1;let o=t.getRenderTarget(),s=r.layers.mask;t.setRenderTarget(null),t.clear(!0,!0,!0),r.layers.mask=s&~(1<<i),t.render(n,r);let c=new Y.Color;t.getClearColor(c);let l=t.getClearAlpha();if(t.setClearColor(0,1),t.setRenderTarget(this.rtEDL),t.clear(!0,!0,!0),t.setClearColor(c,l),r.layers.mask=1<<i,t.render(n,r),this.edlMaterial.uniforms.screenWidth.value=this.rtEDL.width,this.edlMaterial.uniforms.screenHeight.value=this.rtEDL.height,this.edlMaterial.uniforms.edlStrength.value=this.edlStrength,this.edlMaterial.uniforms.radius.value=this.radius,this.edlMaterial.uniforms.opacity.value=this.opacity,this.edlMaterial.uniforms.colorMap.value=this.rtEDL.texture,!function(e){return!0===e.isPerspectiveCamera||!0===e.isOrthographicCamera}(r))throw Error(`EDLPass.render: camera must be PerspectiveCamera or OrthographicCamera`);this.edlMaterial.setProjectionMatrix(r.projectionMatrix),this.edlMaterial.uniforms.far.value=r.far,this.edlMaterial.uniforms.useLogDepth.value=t.capabilities.logarithmicDepthBuffer,this.edlMaterial.uniforms.useOrthographicCamera.value=r.type===`OrthographicCamera`,this.screenPass.render(t,this.edlMaterial,null),r.layers.mask=s,t.setRenderTarget(o),t.autoClear=a}},Od=class{constructor(e={}){this.edlPass=null,this.edlOptions={enabled:!1,pointCloudLayer:1},this.lastPointClouds=null,this.overriddenMaterials=new WeakMap,this.overriddenLayerMasks=new WeakMap,e.edl&&this.setEDL(e.edl)}dispose(){this.edlPass?.dispose(),this.edlPass=null}setEDL(e){let t=!!this.edlOptions.enabled;this.edlOptions={enabled:e.enabled,pointCloudLayer:e.pointCloudLayer??this.edlOptions.pointCloudLayer??1,strength:e.strength??this.edlOptions.strength,radius:e.radius??this.edlOptions.radius,opacity:e.opacity??this.edlOptions.opacity,neighbourCount:e.neighbourCount??this.edlOptions.neighbourCount},this.edlOptions.enabled&&!this.edlPass&&(this.edlPass=new Dd),this.edlPass&&(this.edlOptions.strength!==void 0&&(this.edlPass.edlStrength=this.edlOptions.strength),this.edlOptions.radius!==void 0&&(this.edlPass.radius=this.edlOptions.radius),this.edlOptions.opacity!==void 0&&(this.edlPass.opacity=this.edlOptions.opacity),this.edlOptions.neighbourCount!==void 0&&(this.edlPass.neighbourCount=this.edlOptions.neighbourCount));let n=!!this.edlOptions.enabled;t!==n&&this.lastPointClouds&&this.applyEDLState(this.lastPointClouds,n)}setLayerMaskRecursive(e,t){e.traverse(n=>{n!==e&&n.layers.mask!==t&&(n.layers.mask=t)})}syncPointCloudLayers(e,t){let n=1<<t;for(let t of e)this.setLayerMaskRecursive(t,n)}applyEDLState(e,t){let n=1<<(this.edlOptions.pointCloudLayer??1);for(let r of e){let e=r.material;if(t)this.overriddenMaterials.has(e)||this.overriddenMaterials.set(e,{useEDL:e.useEDL,weighted:e.weighted}),!0!==e.useEDL&&(e.useEDL=!0),!1!==e.weighted&&(e.weighted=!1),this.overriddenLayerMasks.has(r)||this.overriddenLayerMasks.set(r,r.layers.mask),this.setLayerMaskRecursive(r,n);else{let t=this.overriddenMaterials.get(e);t&&(e.useEDL!==t.useEDL&&(e.useEDL=t.useEDL),e.weighted!==t.weighted&&(e.weighted=t.weighted));let n=this.overriddenLayerMasks.get(r);n!==void 0&&this.setLayerMaskRecursive(r,n)}}}render(e){let{renderer:t,scene:n,camera:r,pointClouds:i}=e,a=!!this.edlOptions.enabled,o=this.edlOptions.pointCloudLayer??1;if(i&&(this.lastPointClouds=i,this.applyEDLState(i,a)),a)return this.edlPass||(this.edlPass=new Dd,this.setEDL(this.edlOptions)),void this.edlPass.render({renderer:t,scene:n,camera:r,pointClouds:i,pointCloudLayer:o});t.render(n,r)}updateAndRender(e,t,n,r,i){let a=e.updatePointClouds(t,n,r);return this.render({renderer:r,scene:i,camera:n,pointClouds:t}),a}};J.BS,J.u8,J.f5,J.uY,J.C2,J.QB,J.bA,J.Fn,J.qG,J.mo,J.SA,J.zs,J.IR,J.QN,J.sP,J.mA,J.uT,J.Ay;var kd=J.E5;J.UG;var Ad=J.uZ,jd=J.uo,Md=J.aC,Nd=J.Ty;J.xT,J.PR,J.zd,J.Pf,J.V9,J.Rx,J.Zk,J.QZ,J.Us,J.Nk,J.xC,J.J0;var Pd={type:`change`},Fd={type:`start`},Id={type:`end`},Ld=new ui,Rd=new Ai,zd=Math.cos(70*Qt.DEG2RAD),Bd=new U,Vd=2*Math.PI,Hd={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ud=1e-6,Wd=class extends yo{constructor(e,t=null){super(e,t),this.state=Hd.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:C.ROTATE,MIDDLE:C.DOLLY,RIGHT:C.PAN},this.touches={ONE:w.ROTATE,TWO:w.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new $t,this._lastTargetPosition=new U,this._quat=new $t().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _o,this._sphericalDelta=new _o,this._scale=1,this._panOffset=new U,this._rotateStart=new H,this._rotateEnd=new H,this._rotateDelta=new H,this._panStart=new H,this._panEnd=new H,this._panDelta=new H,this._dollyStart=new H,this._dollyEnd=new H,this._dollyDelta=new H,this._dollyDirection=new U,this._mouse=new H,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kd.bind(this),this._onPointerDown=Gd.bind(this),this._onPointerUp=qd.bind(this),this._onContextMenu=ef.bind(this),this._onMouseWheel=Xd.bind(this),this._onKeyDown=Zd.bind(this),this._onTouchStart=Qd.bind(this),this._onTouchMove=$d.bind(this),this._onMouseDown=Jd.bind(this),this._onMouseMove=Yd.bind(this),this._interceptControlDown=tf.bind(this),this._interceptControlUp=nf.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pd),this.update(),this.state=Hd.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Bd.copy(t).sub(this.target),Bd.applyQuaternion(this._quat),this._spherical.setFromVector3(Bd),this.autoRotate&&this.state===Hd.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Vd:n>Math.PI&&(n-=Vd),r<-Math.PI?r+=Vd:r>Math.PI&&(r-=Vd),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Bd.setFromSpherical(this._spherical),Bd.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bd),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Bd.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new U(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new U(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Bd.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Ld.origin.copy(this.object.position),Ld.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ld.direction))<zd?this.object.lookAt(this.target):(Rd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ld.intersectPlane(Rd,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ud||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ud||this._lastTargetPosition.distanceToSquared(this.target)>Ud?(this.dispatchEvent(Pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Vd/60/60*this.autoRotateSpeed:Vd/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bd.setFromMatrixColumn(t,0),Bd.multiplyScalar(-e),this._panOffset.add(Bd)}_panUp(e,t){this.screenSpacePanning===!0?Bd.setFromMatrixColumn(t,1):(Bd.setFromMatrixColumn(t,0),Bd.crossVectors(this.object.up,Bd)),Bd.multiplyScalar(e),this._panOffset.add(Bd)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Bd.copy(r).sub(this.target);let i=Bd.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vd*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vd*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new H,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Gd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Kd(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function qd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Id),this.state=Hd.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Jd(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case C.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Hd.DOLLY;break;case C.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Hd.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Hd.ROTATE}break;case C.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Hd.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Hd.PAN}break;default:this.state=Hd.NONE}this.state!==Hd.NONE&&this.dispatchEvent(Fd)}function Yd(e){switch(this.state){case Hd.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Hd.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Hd.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Xd(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Hd.NONE&&(e.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Id))}function Zd(e){this.enabled!==!1&&this._handleKeyDown(e)}function Qd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case w.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Hd.TOUCH_ROTATE;break;case w.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Hd.TOUCH_PAN;break;default:this.state=Hd.NONE}break;case 2:switch(this.touches.TWO){case w.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Hd.TOUCH_DOLLY_PAN;break;case w.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Hd.TOUCH_DOLLY_ROTATE;break;default:this.state=Hd.NONE}break;default:this.state=Hd.NONE}this.state!==Hd.NONE&&this.dispatchEvent(Fd)}function $d(e){switch(this._trackPointer(e),this.state){case Hd.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Hd.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Hd.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Hd.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Hd.NONE}}function ef(e){this.enabled!==!1&&e.preventDefault()}function tf(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function nf(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function rf(e,t,n,r){let i=t.map(u),a=n.filter(e=>g([e.x,e.y],i)),o=e=>a.reduce((t,n)=>{let r=n[e];return r!==void 0&&(t[String(r)]=(t[String(r)]??0)+1),t},{}),s=o(`classification`),c=f(t);return{layerId:e.id,title:e.title,kind:e.kind,projectId:e.projectId,days:e.days,status:a.length?`complete`:`empty`,message:`Statistics use all currently loaded points in intersecting visible Potree nodes.`,metrics:{intersectingNodeCount:r,pointCount:a.length,densityPointsM2:c?a.length/c:0,elevation:m(a.map(e=>e.z)),intensity:m(a.flatMap(e=>e.intensity===void 0?[]:[e.intensity])),classifications:Object.fromEntries(Object.entries(s).map(([e,t])=>[e,{count:t,percent:a.length?t/a.length*100:0}])),returnNumbers:o(`returnNumber`)}}}function af(e,t,n,r=5){return n===0&&Math.hypot(t[0]-e[0],t[1]-e[1])<=r}function of(e,t){if(e.potree?.preciseBuffer)return Number(e.potree.preciseBuffer[t]);let n=e.getX(t),{scale:r=1,offset:i=0}=e.potree??{};return r?n/r+i:i}function sf(e,t){return Object.fromEntries(Object.entries(e.attributes).filter(([e])=>e!==`position`&&e!==`indices`).map(([e,n])=>[e,n.itemSize===1?of(n,t):Array.from({length:n.itemSize},(e,r)=>n.array[t*n.itemSize+r])]))}function cf(e,t,n){if(!e)throw Error(`No coordinate-restoration manifest; cloud withheld from the scene.`);if(e.method!==`source-coordinate-restoration-gcg2016`||[...e.origin,...e.processedOffset,...e.heightRange].some(e=>!Number.isFinite(e))||t.some((t,n)=>Math.abs(t-e.processedOffset[n])>.001))throw Error(`Coordinate-restoration manifest does not match this point-cloud product.`);return{position:e.origin.map((e,t)=>e-n[t]),heightRange:e.heightRange.map(e=>e-n[2])}}function lf(e,t,n,r){if(t.pointCloudAttribute===`elevation`)return e.getAttribute(`position`).getZ(n)+r;let i=t.pointCloudAttribute===`intensity`?e.userData.akCOriginalIntensity??e.getAttribute(`intensity`):e.getAttribute(t.pointCloudAttribute);return i?of(i,n):void 0}function uf(e,n,r){let a=JSON.stringify([n.pointCloudAttribute,n.style?.filterMin,n.style?.filterMax,r]);if(e.userData.akCFilterSignature===a||(e.userData.akCFilterSignature=a,!i(n.style)&&!e.userData.akCFilterIndex))return;let o=e.getAttribute(`position`).count,s=e.userData.akCFilterIndex??=new Rr(new Uint32Array(o),1),c=0;for(let i=0;i<o;i++)t(lf(e,n,i,r),n.style)&&s.setX(c++,i);e.index!==s&&e.setIndex(s),s.needsUpdate=!0,e.setDrawRange(0,c)}function df(e,t){let n=t.pointCloudAttribute,r=n===`intensity`?e.userData.akCOriginalIntensity??e.getAttribute(n):e.getAttribute(n);if(!r)return;let i=c(t),a=JSON.stringify([n,i]);if(e.userData.akCColorSignature!==a){let t=e.userData.akCColorBuffer??=new Rr(new Float32Array(r.count),1);for(let e=0;e<r.count;e++)t.setX(e,(of(r,e)-i[0])/(i[1]-i[0]));t.needsUpdate=!0,e.userData.akCColorSignature=a}return e.userData.akCColorBuffer}function ff(e,t,n){let r=Math.max(5,e.position.distanceTo(t)*Math.tan(e.fov*Math.PI/360)),i=new Ya(-r*n,r*n,r,-r,.1,1e4);return i.up.set(0,1,0),i.position.copy(t).add(new U(0,0,2e3)),i.lookAt(t),i.updateMatrixWorld(!0),i}var pf=l(),mf={x:416064,y:5327625,z:250},hf=216;function gf(e,t=hf){let[n,r]=u(e);return new U(n-mf.x,r-mf.y,t-mf.z)}function _f(e){return s(`EPSG:32632`,`EPSG:4326`,[e.x+mf.x,e.y+mf.y])}function vf(e){e.traverse(e=>{(e instanceof Ci||e instanceof $i||e instanceof Ui)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{`map`in e&&e.map?.dispose(),e.dispose()}))})}function yf(i){let s=(0,S.useRef)(null),l=(0,S.useRef)(null),f=(0,S.useRef)(null),m=(0,S.useRef)(null),[y,C]=(0,S.useState)(()=>({terrain:`dtm`,budget:Math.min(3e6,i.maxPointBudget??1/0),size:2,pixels:!0})),w=(0,S.useRef)({...i,settings:y});w.current={...i,settings:y};let[T,E]=(0,S.useState)(`Loading local layers…`),[D,k]=(0,S.useState)(``),[A,te]=(0,S.useState)(!1);return(0,S.useEffect)(()=>{let i=s.current;if(!i)return;let y=!1,S=new AbortController,C=0,T,D,A=``,re=``,j=0,ie=0,ae=new ar;ae.background=new G(w.current.immersive?`#0e1621`:`#e7ebee`);let oe=new Ja(50,1,.1,1e4),M=oe,se=!1;M.up.set(0,0,1);let N=new Ll({antialias:!0});N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.domElement.tabIndex=0,N.domElement.setAttribute(`aria-label`,`3D canvas: drag to orbit, right-drag to pan, scroll to zoom, F to focus, R to reset, T for top view`),i.appendChild(N.domElement);let P=new Wd(M,N.domElement);P.enableDamping=!0,P.dampingFactor=.12,P.screenSpacePanning=!0,P.zoomToCursor=!0,P.minDistance=1,P.maxDistance=3e3,P.maxPolarAngle=Math.PI/2-.015,P.rotateSpeed=.7,P.panSpeed=.8;let ce=gf(w.current.campaign.center),le;P.autoRotateSpeed=.35;let ue=()=>{P.target.copy(ce),M.position.copy(ce).add(new U(190,-245,240)),P.update()};ue();let de=new vo(800,40,`#aebbc3`,`#d0d8de`);de.rotateX(Math.PI/2),de.position.z=hf-mf.z-.1,de.visible=!w.current.immersive,ae.add(de);let fe=new Zn;ae.add(fe);let pe=new $i(new ei().setAttribute(`position`,new Hr([0,0,0],3)),new Ji({color:`#dc2626`,size:12,sizeAttenuation:!1,depthTest:!1}));pe.renderOrder=2e3,pe.visible=!1,ae.add(pe);let me=new Md,he=new Nd({edl:{enabled:!!w.current.immersive,strength:.8,radius:1.4,opacity:1}}),ge=new Map,_e=new Map,ve=new Set,ye=new Set,be=new Map,xe=new Set,Se=new Ba,Ce=e=>w.current.layers.find(t=>t.id===e),we=()=>w.current.referenceLayers.find(e=>e.elevationModel===w.current.settings.terrain),Te=(e,t)=>{let n=t?.elevationModel?t:we(),r=n&&be.get(n.id);return n&&r?o(n,r,e)??hf:hf},Ee=(e,t,n)=>{let r=e.geometry.getAttribute(`position`),i=e.geometry.getAttribute(`uv`);for(let e=0;e<r.count;e++){let a=d(t,i.getX(e),1-i.getY(e)),o=gf(a,Te(a,t));r.setXYZ(e,o.x,o.y,o.z+n*.012)}r.needsUpdate=!0,e.geometry.computeBoundingSphere(),e.geometry.computeBoundingBox(),e.userData.geometryVersion=ie,e.userData.stack=n},De=e=>{be.has(e.id)||xe.has(e.id)||(xe.add(e.id),a(e).then(t=>{y||(be.set(e.id,t),ie++,Fe())}).catch(t=>{y||k(`Elevation unavailable: ${t instanceof Error?t.message:e.title}. Flat fallback is shown.`)}))},Oe=e=>{for(let t of e.visibleNodes){let e=t.sceneNode.geometry,n=e.userData.akCOriginalIntensity;n&&e.setAttribute(`intensity`,n)}},ke=(e,t)=>{let n=t.pointCloudAttribute,r=JSON.stringify([n,t.style,t.opacity,w.current.settings.size]);if(e.userData.style!==r){Oe(e),e.material.newFormat=!1,e.material.inputColorEncoding=e.material.outputColorEncoding;let i=t.style?.palette??`viridis`,a=b[i===`original`?`viridis`:i];e.material.gradient=a.map((e,t)=>[t/(a.length-1),new G(e)]),e.material.color.set(t.style?.color??t.color),e.material.pointColorType=n===`layer-color`?kd.COLOR:n===`elevation`?kd.HEIGHT:kd.INTENSITY_GRADIENT,e.material.intensityRange=[0,1],e.material.pointSizeType=jd.FIXED,e.material.shape=Ad.CIRCLE,e.material.size=w.current.settings.size,e.material.opacity=t.opacity;let o=c(t,t.pointCloudAlignment?.heightRange??[210,250]);e.material.heightMin=o[0]-mf.z,e.material.heightMax=o[1]-mf.z,e.userData.style=r}for(let r of e.visibleNodes){let e=r.sceneNode;e.updateMatrixWorld(!0);let i=e.geometry;if(i.userData.akCOriginalIntensity??=i.getAttribute(`intensity`),uf(i,t,e.matrixWorld.elements[14]+mf.z),n!==`layer-color`&&n!==`elevation`){let e=df(i,t);e&&i.getAttribute(`intensity`)!==e&&i.setAttribute(`intensity`,e)}}},Ae=t=>{if(!t.pointCloudUrl)return;let n=t.pointCloudBaseUrl??t.pointCloudUrl.slice(0,t.pointCloudUrl.lastIndexOf(`/`)+1);ve.add(t.id),me.loadPointCloud(t.pointCloudUrl.slice(t.pointCloudUrl.lastIndexOf(`/`)+1),{getUrl:async e=>`${n}${e}`,fetch:async(t,n)=>{let r=String(t).endsWith(`.bin`)?`${t}${e}`:t,i=new Headers(n?.headers);i.delete(`content-type`);let a=await fetch(r,{...n,headers:i,signal:S.signal});if(!a.ok)throw Error(`Point-cloud request failed: HTTP ${a.status}`);return a}}).then(e=>{if(ve.delete(t.id),y){e.dispose();return}try{let n=cf(t.pointCloudAlignment,e.position.toArray(),[mf.x,mf.y,mf.z]);e.scale.set(1,1,1),e.position.set(...n.position),e.material.heightMin=n.heightRange[0],e.material.heightMax=n.heightRange[1],e.updateMatrixWorld(!0)}catch(t){throw e.dispose(),t}ae.add(e),ge.set(t.id,e),_e.set(t.id,e),Fe()}).catch(e=>{ve.delete(t.id),ye.add(t.id),y||k(`${t.title}: ${e instanceof Error?e.message:`could not load`}`)})},je=e=>{if(!e.bounds||!e.dataUrl)return;let t=new Ci(new sa(1,1,128,128),new di({color:`#ffffff`,transparent:!0,depthWrite:!1,side:2,alphaTest:.01,polygonOffset:!0,polygonOffsetFactor:-1,toneMapped:!1}));t.userData.layerId=e.id,t.userData.styleVersion=JSON.stringify(e.style),ge.set(e.id,t),ae.add(t),Se.load(e.dataUrl,e=>{if(y){e.dispose();return}e.colorSpace=ct,e.anisotropy=Math.min(16,N.capabilities.getMaxAnisotropy()),t.userData.originalTexture=e,t.material.map||(t.material.map=e),t.material.needsUpdate=!0,t.userData.styleVersion=void 0,Fe()},void 0,()=>{y||k(`Raster could not load: ${e.title}`)})},Me=(e,t)=>{let n=JSON.stringify(t.style??{});if(e.userData.styleVersion===n)return;e.userData.styleVersion=n;let i=t=>{if(y||e.userData.styleVersion!==n){t!==e.userData.originalTexture&&t?.dispose();return}e.material.map!==e.userData.originalTexture&&e.material.map?.dispose(),e.material.map=t,e.material.needsUpdate=!0};if(!r(t)){e.userData.originalTexture&&i(e.userData.originalTexture);return}p(t).then(e=>{let t=new na(e);t.colorSpace=ct,t.anisotropy=Math.min(16,N.capabilities.getMaxAnisotropy()),i(t)}).catch(()=>{y||k(`Raster style unavailable: ${t.title}`)})},Ne=e=>{e.dataUrl&&(ve.add(e.id),fetch(e.dataUrl).then(e=>{if(!e.ok)throw Error(`HTTP ${e.status}`);return e.json()}).then(t=>{if(ve.delete(e.id),y)return;let n=new Zn;for(let r of t.features){let t=new ei;if(r.geometry.type===`Point`){let[i,a]=r.geometry.coordinates;t.setAttribute(`position`,new Hr(gf([i,a],e.elevation).toArray(),3));let o=new $i(t,new Ji({color:e.color,size:9,sizeAttenuation:!1,transparent:!0,depthTest:!1}));o.userData.properties=r.properties,o.renderOrder=1e3,n.add(o)}else if(r.geometry.type===`LineString`){t.setAttribute(`position`,new Hr(r.geometry.coordinates.flatMap(([t,n,r])=>gf([t,n],r??e.elevation).toArray()),3));let i=new Ui(t,new Fi({color:e.color,transparent:!0}));i.userData.properties=r.properties,n.add(i)}else t.dispose()}ae.add(n),ge.set(e.id,n),Fe()}).catch(()=>{ve.delete(e.id),ye.add(e.id),y||k(`Vector layer unavailable: ${e.title}`)}))};function F(){let e=w.current;if(e.drawing||e.polygon.length<3)return;let n=e.polygon,r=n.map(u),i=new U;for(let[a,o]of _e){let s=Ce(a);if(!s)continue;let c=[],l=0;Oe(o);for(let e of o.visibleNodes){let n=e.sceneNode,a=n.geometry.getAttribute(`position`);n.updateMatrixWorld(!0),n.geometry.boundingBox||n.geometry.computeBoundingBox();let o=n.geometry.boundingBox.clone().applyMatrix4(n.matrixWorld),u=r.map(([e])=>e-mf.x),d=r.map(([,e])=>e-mf.y);if(o.max.x<Math.min(...u)||o.min.x>Math.max(...u)||o.max.y<Math.min(...d)||o.min.y>Math.max(...d))continue;let f=!1,p=(e,t)=>{for(let r of e){let e=n.geometry.getAttribute(r);if(e)return of(e,t)}};for(let e=0;e<a.count;e++){i.fromBufferAttribute(a,e).applyMatrix4(n.matrixWorld);let o=i.x+mf.x,l=i.y+mf.y;g([o,l],r)&&t(lf(n.geometry,s,e,n.matrixWorld.elements[14]+mf.z),s.style)&&(f=!0,c.push({x:o,y:l,z:i.z+mf.z,intensity:p([`intensity`,`Intensity`],e),classification:p([`classification`,`Classification`],e),returnNumber:p([`returnNumber`,`return number`],e)}))}f&&l++}ke(o,s);let u=rf(s,n,c,l);x(s)&&(u.metrics.valueFilter=x(s)),e.onPointCloudAnalysis(u)}}let Pe=w.current.settings.terrain;function Fe(){if(y)return;let e=w.current;se!==e.drawing&&(se=e.drawing,M=e.drawing?ff(oe,P.target,Math.max(i.clientWidth,1)/Math.max(i.clientHeight,1)):oe),Pe!==e.settings.terrain&&(Pe=e.settings.terrain,ie++);let t=we();t&&De(t),de.visible=!e.immersive&&(!t||!be.has(t.id)),me.pointBudget=Math.min(e.settings.budget,e.maxPointBudget??1/0),P.enabled=!e.drawing,N.domElement.style.cursor=e.drawing?`crosshair`:`grab`,ge.forEach((e,t)=>{e.visible=!!Ce(t)}),e.layers.forEach((t,i)=>{(t.elevationModel||t.kind===`raster`&&r(t))&&De(t),!ge.has(t.id)&&!ve.has(t.id)&&!ye.has(t.id)&&(t.kind===`raster`?je(t):t.kind===`point-cloud`?Ae(t):Ne(t));let a=ge.get(t.id);if(!a)return;a.visible=!0;let o=e.layers.length-i;if(a instanceof Ci){let n=a;if((n.userData.geometryVersion!==ie||n.userData.stack!==o)&&Ee(n,t,o),n.renderOrder=o,n.material.opacity=t.opacity,Me(n,t),n.material.map){let r=e.settings.pixels&&!!t.analysisUrl&&!t.elevationModel,i=r?O:ee,a=r?O:ne;(n.material.map.magFilter!==i||n.material.map.minFilter!==a)&&(n.material.map.magFilter=i,n.material.map.minFilter=a,n.material.map.needsUpdate=!0)}}else _e.has(t.id)?ke(_e.get(t.id),t):a.traverse(e=>{(e instanceof $i||e instanceof Ui)&&(e.visible=v(t,e.userData.properties),e.material.opacity=t.opacity,e.material.color.set(n(t,e.userData.properties)))})});let a=JSON.stringify([e.polygon,e.drawing,ie]);if(A!==a){A=a,vf(fe),fe.clear();let t=(e.polygon.length>=3&&!e.drawing?[...e.polygon,e.polygon[0]]:e.polygon).flatMap(e=>gf(e,Te(e)+.25).toArray());if(t.length){let e=new Ui(new ei().setAttribute(`position`,new Hr(t,3)),new Fi({color:`#b45309`,depthTest:!1}));e.renderOrder=1500,fe.add(e)}}e.inspectionCoordinate||(pe.visible=!1,te(!1));let o=JSON.stringify([e.drawing,e.polygon,e.layers.map(e=>[e.id,e.style,e.pointCloudAttribute]),[..._e.keys()]]);o!==re&&(re=o,clearTimeout(D),!e.drawing&&e.polygon.length>=3&&(D=setTimeout(F,1800)))}let Ie=new mo,I=new H,Le=new Ai(new U(0,0,1),mf.z-hf),L=e=>{let t=N.domElement.getBoundingClientRect();I.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),M.updateMatrixWorld(),Ie.setFromCamera(I,M)},R=()=>{let e=[...ge.values()].filter(e=>e.visible&&e instanceof Ci);ae.updateMatrixWorld(!0);let n=Ie.intersectObjects(e,!1);for(let e of n){let n=Ce(e.object.userData.layerId),r=n&&be.get(n.id);if(!(n&&r&&o(n,r,_f(e.point))===void 0)){if(n&&r){let[i,a]=_(n,_f(e.point),r.width,r.height).map(Math.floor);if(!t(h(n,r,a*r.width+i),n.style))continue}return e.point}}return Ie.ray.intersectPlane(Le,new U)},Re=e=>{if(L(e),w.current.drawing){let e=R();e&&w.current.onAddVertex(_f(e));return}let n=[];for(let[e,r]of _e){let i=Ce(e);if(!(!i||i.opacity<=0)){Oe(r);try{let a=r.pick(N,M,Ie.ray,{pickWindowSize:17});if(!a?.position)continue;let o=a.position.clone(),s=_f(o),c={},l=!1;for(let e of r.visibleNodes){let n=e.sceneNode,r=o.clone().applyMatrix4(n.matrixWorld.clone().invert()),a=n.geometry.getAttribute(`position`);if(n.geometry.boundingBox||n.geometry.computeBoundingBox(),n.geometry.boundingBox.clone().expandByScalar(1e-4).containsPoint(r)){for(let e=0;e<a.count;e++)if(!(Math.abs(a.getX(e)-r.x)>1e-4||Math.abs(a.getY(e)-r.y)>1e-4||Math.abs(a.getZ(e)-r.z)>1e-4)&&t(lf(n.geometry,i,e,n.matrixWorld.elements[14]+mf.z),i.style)){c=sf(n.geometry,e),l=!0;break}if(l)break}}l||(c={attributeStatus:`Original point buffer could not be resolved; normalized GPU attributes omitted.`}),n.push({distance:M.position.distanceTo(o),point:o,detail:{layerId:e,title:i.title,day:i.days[0],longitude:s[0],latitude:s[1],elevation:o.z+mf.z,attributes:{...c,coordinateCaveat:i.pointCloudAlignment?.coordinateCaveat,heightReference:`DHHN2016 / NHN (inferred source datum)`,geoidCorrectionM:i.pointCloudAlignment?.geoidCorrectionM,dtmValidation:i.pointCloudAlignment?.validation,valueFilter:x(i),sampling:`Nearest rendered point in a 17-pixel pick window`}}})}catch{k(`Point picking failed for ${i.title}. Try again after the cloud loads.`)}finally{ke(r,i)}}}n.sort((e,t)=>e.distance-t.distance);let r=n[0]?.point??R();if(!r){E(`No surface under cursor. Try Top view or Reset view.`);return}pe.position.copy(r),pe.visible=!0,te(!0),w.current.onInspectLocation(_f(r),n.map(e=>e.detail))},ze,Be=!1,Ve=e=>{le=void 0,P.autoRotate=!1,ze={x:e.clientX,y:e.clientY,button:e.button},Be=!1},He=e=>{ze&&!af([ze.x,ze.y],[e.clientX,e.clientY],ze.button)&&(Be=!0)},Ue=e=>{let t=ze&&!Be&&af([ze.x,ze.y],[e.clientX,e.clientY],ze.button);ze=void 0,t&&(clearTimeout(T),T=setTimeout(()=>Re(e),220))},We=()=>{ze=void 0},Ge=e=>{if(!w.current.drawing&&(e===`reset`&&ue(),e===`site-top`&&(P.target.copy(ce),M.position.copy(ce).add(new U(0,-.01,330)),P.update()),e===`top`&&(M.position.copy(P.target).add(new U(0,-.01,Math.max(M.position.distanceTo(P.target),80))),P.update()),e===`focus`&&pe.visible)){let e=M.position.clone().sub(P.target).setLength(35);P.target.copy(pe.position),M.position.copy(pe.position).add(e),P.update()}},Ke=(e,t=!1)=>{if(w.current.drawing)return;let[n,r,i]=e.target??[0,0,0],a=ce.clone().add(new U(n,r,i)),o=e.azimuth*Math.PI/180,s=e.elevation*Math.PI/180,c=a.clone().add(new U(Math.sin(o)*Math.cos(s),Math.cos(o)*Math.cos(s),Math.sin(s)).multiplyScalar(e.distance));P.autoRotate=!1,le={start:performance.now(),duration:1800,fromPosition:M.position.clone(),toPosition:c,fromTarget:P.target.clone(),toTarget:a,autoRotate:t}},qe=e=>{if(clearTimeout(T),e.preventDefault(),w.current.drawing)w.current.onFinish();else{L(e);let t=R();t&&(pe.position.copy(t),pe.visible=!0,te(!0),Ge(`focus`))}},Je=e=>{e.key.toLowerCase()===`r`&&Ge(`reset`),e.key.toLowerCase()===`t`&&Ge(`top`),e.key.toLowerCase()===`f`&&Ge(`focus`)};N.domElement.addEventListener(`pointerdown`,Ve),N.domElement.addEventListener(`pointermove`,He),N.domElement.addEventListener(`pointerup`,Ue),N.domElement.addEventListener(`pointercancel`,We),N.domElement.addEventListener(`dblclick`,qe),N.domElement.addEventListener(`keydown`,Je);let Ye=()=>{let e=Math.max(i.clientWidth,1),t=Math.max(i.clientHeight,1);N.setSize(e,t,!1),oe.aspect=e/t,oe.updateProjectionMatrix(),M instanceof Ya&&(M.left=-M.top*e/t,M.right=-M.left,M.updateProjectionMatrix())},Xe=new ResizeObserver(Ye);Xe.observe(i),Ye(),l.current={sync:Fe,view:Ge,fly:Ke},Fe();let Ze=e=>{if(le){let t=Math.min((e-le.start)/le.duration,1),n=t<.5?4*t*t*t:1-(-2*t+2)**3/2;M.position.lerpVectors(le.fromPosition,le.toPosition,n),P.target.lerpVectors(le.fromTarget,le.toTarget,n),t>=1&&(P.autoRotate=le.autoRotate,le=void 0)}w.current.drawing||P.update();let t=P.target.clone().project(M);f.current&&(f.current.style.left=`${(t.x+1)*50}%`,f.current.style.top=`${(1-t.y)*50}%`);let n=new U(0,1,0).transformDirection(M.matrixWorldInverse);m.current&&(m.current.style.transform=`rotate(${Math.atan2(n.x,n.y)}rad)`);let r=[..._e.entries()].filter(([e])=>!!Ce(e)).map(([,e])=>e);if(r.length){me.updatePointClouds(r,M,N);for(let[e,t]of _e){let n=Ce(e);n&&ke(t,n)}}if(he.render({renderer:N,scene:ae,camera:M,pointClouds:r}),e-j>1e3){let t=r.reduce((e,t)=>e+t.visibleNodes.reduce((e,t)=>e+Math.min(t.sceneNode.geometry.getAttribute(`position`).count,t.sceneNode.geometry.drawRange.count),0),0);E(`${(t/1e6).toFixed(2)} M rendered points · ${r.length} clouds${ve.size?` · loading…`:``}`),j=e}C=requestAnimationFrame(Ze)};return C=requestAnimationFrame(Ze),()=>{y=!0,S.abort(),l.current=null,cancelAnimationFrame(C),clearTimeout(T),clearTimeout(D),Xe.disconnect(),P.dispose(),_e.forEach(e=>e.dispose()),ge.forEach((e,t)=>{_e.has(t)||(e instanceof Ci&&e.userData.originalTexture!==e.material.map&&e.userData.originalTexture?.dispose(),vf(e))}),vf(fe),vf(pe),vf(de),N.domElement.removeEventListener(`pointerdown`,Ve),N.domElement.removeEventListener(`pointermove`,He),N.domElement.removeEventListener(`pointerup`,Ue),N.domElement.removeEventListener(`pointercancel`,We),N.domElement.removeEventListener(`dblclick`,qe),N.domElement.removeEventListener(`keydown`,Je),he.dispose(),N.dispose(),N.domElement.remove()}},[i.campaign.id]),(0,S.useEffect)(()=>{let e=i.cameraRequest;e&&(e.pose?l.current?.fly(e.pose,e.autoRotate):e.preset&&l.current?.view(e.preset))},[i.cameraRequest?.nonce]),(0,S.useEffect)(()=>{l.current?.sync()},[i.layers,i.referenceLayers,i.drawing,i.polygon,i.inspectionCoordinate,y]),(0,pf.jsxs)(`div`,{className:`viewer-canvas potree-canvas`,ref:s,"aria-label":i.combined?`Combined terrain, rasters and point clouds`:`AK C Potree three-dimensional scene`,children:[(0,pf.jsx)(`div`,{ref:f,className:`navigation-target`,role:`img`,"aria-label":`Orbit centre navigation marker`}),(0,pf.jsxs)(`button`,{className:`north-control`,title:`North-up top view`,"aria-label":`North-up top view`,disabled:i.drawing,onClick:()=>l.current?.view(`top`),children:[(0,pf.jsx)(`span`,{ref:m,children:`↑`}),`N`]}),(0,pf.jsxs)(`div`,{className:`scene-controls`,"aria-label":`3D navigation and display`,children:[(0,pf.jsxs)(`div`,{className:`scene-button-row`,children:[(0,pf.jsx)(`button`,{disabled:i.drawing,onClick:()=>l.current?.view(`reset`),children:`Reset view`}),(0,pf.jsx)(`button`,{disabled:i.drawing,onClick:()=>l.current?.view(`top`),children:`Top view`}),(0,pf.jsx)(`button`,{disabled:!A||i.drawing,onClick:()=>l.current?.view(`focus`),children:`Focus pick`})]}),i.drawing&&(0,pf.jsx)(`p`,{className:`drawing-mode`,children:`Orthographic · north up · rotation locked`}),(0,pf.jsxs)(`details`,{children:[(0,pf.jsx)(`summary`,{children:`Display & navigation`}),i.combined&&(0,pf.jsxs)(`label`,{children:[`Raster surface`,(0,pf.jsxs)(`select`,{value:y.terrain,onChange:e=>C(t=>({...t,terrain:e.target.value})),children:[(0,pf.jsx)(`option`,{value:`flat`,children:`Flat reference (216 m)`}),(0,pf.jsx)(`option`,{value:`dtm`,disabled:!i.referenceLayers.some(e=>e.elevationModel===`dtm`),children:`Official DTM`}),(0,pf.jsx)(`option`,{value:`dsm`,disabled:!i.referenceLayers.some(e=>e.elevationModel===`dsm`),children:`Official DSM`})]})]}),(0,pf.jsxs)(`label`,{children:[`Point budget`,(0,pf.jsxs)(`select`,{value:y.budget,onChange:e=>C(t=>({...t,budget:Number(e.target.value)})),children:[i.maxPointBudget&&i.maxPointBudget<1e6&&(0,pf.jsxs)(`option`,{value:i.maxPointBudget,children:[(i.maxPointBudget/1e6).toLocaleString(),` million · this device`]}),[[1e6,`1 million · faster`],[3e6,`3 million · balanced`],[6e6,`6 million · detail`]].map(([e,t])=>(0,pf.jsx)(`option`,{value:e,disabled:!!i.maxPointBudget&&Number(e)>i.maxPointBudget,children:t},e))]})]}),(0,pf.jsxs)(`label`,{children:[`Point size `,(0,pf.jsx)(`input`,{"aria-label":`Point size`,type:`range`,min:`1`,max:`5`,step:`.5`,value:y.size,onChange:e=>C(t=>({...t,size:Number(e.target.value)}))}),(0,pf.jsxs)(`span`,{children:[y.size,` px`]})]}),(0,pf.jsxs)(`label`,{children:[(0,pf.jsx)(`input`,{type:`checkbox`,checked:y.pixels,onChange:e=>C(t=>({...t,pixels:e.target.checked}))}),` Show thermal pixels without smoothing`]}),(0,pf.jsxs)(`p`,{children:[`Drag: orbit · right-drag: pan · scroll: zoom to cursor.`,(0,pf.jsx)(`br`,{}),`Click: inspect stack · double-click: focus surface.`,(0,pf.jsx)(`br`,{}),`Keyboard on canvas: R reset · T top · F focus.`]})]})]}),(0,pf.jsxs)(`div`,{className:`scene-status`,role:`status`,children:[T,D&&(0,pf.jsx)(`span`,{className:`scene-error`,children:D})]}),(0,pf.jsx)(`div`,{className:`alignment-notice`,children:`C3: original metric coordinates restored · GCG2016 height correction · source datum inferred, not survey-certified. DTM: 2017. No cloud stretching or terrain warping.`})]})}export{yf as PotreeView};
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4841],{94629:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(82394),o=r(21831),i=r(82684),u=r(50724),s=r(82555),c=r(97618),f=r(70613),a=r(59696),l=r(68899),d=r(28598);function h(e,t){var r=e.children;return(0,d.jsx)(l.HS,{ref:t,children:r})}var p=i.forwardRef(h),v=r(62547),b=r(82571),O=r(35686),j=r(98464),m=r(46684),w=r(70515),y=r(53808),_=r(19183);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){var t,r=e.addProjectBreadcrumbToCustomBreadcrumbs,n=e.after,h=e.afterHidden,g=e.afterWidth,P=e.afterWidthOverride,x=e.before,E=e.beforeWidth,M=e.breadcrumbs,k=e.children,C=e.errors,S=e.headerMenuItems,A=e.headerOffset,H=e.mainContainerHeader,I=e.navigationItems,R=e.setErrors,W=e.subheaderChildren,D=e.title,N=e.uuid,T=(0,_.i)().width,B="dashboard_after_width_".concat(N),z="dashboard_before_width_".concat(N),F=(0,i.useRef)(null),U=(0,i.useState)(P?g:(0,y.U2)(B,g)),X=U[0],q=U[1],G=(0,i.useState)(!1),J=G[0],K=G[1],L=(0,i.useState)(x?Math.max((0,y.U2)(z,E),13*w.iI):null),Q=L[0],V=L[1],Y=(0,i.useState)(!1),$=Y[0],ee=Y[1],te=(0,i.useState)(null)[1],re=O.ZP.projects.list({},{revalidateOnFocus:!1}).data,ne=null===re||void 0===re?void 0:re.projects,oe={label:function(){var e;return null===ne||void 0===ne||null===(e=ne[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},ie=[];M?(r&&ie.push(oe),ie.push.apply(ie,(0,o.Z)(M))):(null===ne||void 0===ne?void 0:ne.length)>=1&&ie.push.apply(ie,[oe,{bold:!0,label:function(){return D}}]),(0,i.useEffect)((function(){null===F||void 0===F||!F.current||J||$||null===te||void 0===te||te(F.current.getBoundingClientRect().width)}),[J,X,$,Q,F,te,T]),(0,i.useEffect)((function(){J||(0,y.t8)(B,X)}),[h,J,X,B]),(0,i.useEffect)((function(){$||(0,y.t8)(z,Q)}),[$,Q,z]);var ue=(0,j.Z)(g);return(0,i.useEffect)((function(){P&&ue!==g&&q(g)}),[P,g,ue]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f.Z,{title:D}),(0,d.jsx)(a.Z,{breadcrumbs:ie,menuItems:S,project:null===ne||void 0===ne?void 0:ne[0],version:null===ne||void 0===ne||null===(t=ne[0])||void 0===t?void 0:t.version}),(0,d.jsxs)(l.Nk,{children:[0!==(null===I||void 0===I?void 0:I.length)&&(0,d.jsx)(l.lm,{showMore:!0,children:(0,d.jsx)(b.Z,{navigationItems:I,showMore:!0})}),(0,d.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,d.jsxs)(v.Z,{after:n,afterHeightOffset:m.Mz,afterHidden:h,afterMousedownActive:J,afterWidth:X,before:x,beforeHeightOffset:m.Mz,beforeMousedownActive:$,beforeWidth:l.k1+(x?Q:0),headerOffset:A,hideAfterCompletely:!0,leftOffset:x?l.k1:null,mainContainerHeader:H,mainContainerRef:F,setAfterMousedownActive:K,setAfterWidth:q,setBeforeMousedownActive:ee,setBeforeWidth:V,children:[W&&(0,d.jsx)(p,{children:W}),k]})})]}),C&&(0,d.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===R||void 0===R?void 0:R(null)},children:(0,d.jsx)(s.Z,Z(Z({},C),{},{onClose:function(){return null===R||void 0===R?void 0:R(null)}}))})]})}},74805:function(e,t,r){"use strict";r.r(t);var n=r(77837),o=r(38860),i=r.n(o),u=(r(82684),r(56085)),s=r(94629),c=r(93808),f=r(28026),a=r(4383),l=r(50178),d=r(28598);function h(){var e=(0,l.PR)()||{},t=(0,u.ZP)((0,a.Ib)("terminal"),{queryParams:{term_name:null===e||void 0===e?void 0:e.id},shouldReconnect:function(){return!0}}),r=t.lastMessage,n=t.sendMessage;return(0,d.jsx)(s.Z,{title:"Terminal",uuid:"terminal/index",children:(0,d.jsx)(f.Z,{lastMessage:r,sendMessage:n})})}h.getInitialProps=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,c.Z)(h)},27271:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terminal",function(){return r(74805)}])},80022:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},15544:function(e,t,r){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,{Z:function(){return n}})},99177:function(e,t,r){"use strict";function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,{Z:function(){return o}})},93189:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(12539),o=r(80022);function i(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[844,9696,8264,9774,2888,179],(function(){return t=27271,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
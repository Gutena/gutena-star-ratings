!function(){"use strict";var e,t={612:function(){var e=window.wp.element,t=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutena/star-ratings","title":"Star Ratings","category":"gutena","keywords":["product reviews","reviews","ratings","star reviews","testimonials"],"description":"Star Ratings Block by Gutena","textdomain":"gutena-star-ratings","supports":{"align":["wide","full"],"ariaLabel":true,"html":false,"spacing":{"padding":true,"margin":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true}},"attributes":{"uniqueId":{"type":"string"},"position":{"type":"string","default":"left"},"numRating":{"type":"number","default":5},"ratingScale":{"type":"number","default":5},"iconSize":{"type":"number"},"iconColor":{"type":"string"},"blockStyles":{"type":"object"}},"editorScript":"file:./index.js","style":"file:./style-index.css"}'),l=window.wp.i18n,a=window.wp.blockEditor,r=window.wp.components,i=window.wp.primitives,o=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"})),s=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"})),c=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"}));const g=[];(0,t.registerBlockType)(n,{edit:function(t){var n;let{clientId:i,attributes:u,setAttributes:m}=t;const{uniqueId:p,position:v,numRating:w,ratingScale:h,iconSize:d,iconColor:f,blockStyles:E}=u,_=(0,a.useBlockProps)({className:`gutena-star-ratings-block gutena-star-ratings-block-${p} align-${v}`}),b=Math.floor(w),y=w%1==0?0:1,z=h-(b+y),x={left:{icon:o,title:(0,l.__)("Left","gutena-star-ratings")},center:{icon:s,title:(0,l.__)("Center","gutena-star-ratings")},right:{icon:c,title:(0,l.__)("Right","gutena-star-ratings")}};return(0,e.useEffect)((()=>{w>h&&m({numRating:h})}),[h]),(0,e.useEffect)((()=>{!p||g.includes(p)?(m({uniqueId:i.substr(2,9)}),g.push(i.substr(2,9))):g.push(p)}),[]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.BlockControls,{group:"block"},(0,e.createElement)(r.ToolbarDropdownMenu,{icon:null==x||null===(n=x[v])||void 0===n?void 0:n.icon,label:(0,l.__)("Position","gutena-star-ratings"),controls:Object.keys(x).map((e=>{{var t,n,a;const r=e===v;return{icon:null==x||null===(t=x[e])||void 0===t?void 0:t.icon,label:null==x||null===(n=x[e])||void 0===n?void 0:n.title,title:sprintf(
// translators: %s: Title
(0,l.__)("Align %s","gutena-star-ratings"),null==x||null===(a=x[e])||void 0===a?void 0:a.title),isActive:r,onClick:()=>m({position:e}),role:"menuitemradio"}}}))})),(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(r.PanelBody,{title:(0,l.__)("Rating Settings","gutena-star-ratings")},(0,e.createElement)(r.__experimentalToggleGroupControl,{label:(0,l.__)("Position","gutena-star-ratings"),value:v,onChange:e=>m({position:e}),isBlock:!0},(0,e.createElement)(r.__experimentalToggleGroupControlOption,{value:"left",label:(0,l.__)("Left","gutena-star-ratings")}),(0,e.createElement)(r.__experimentalToggleGroupControlOption,{value:"center",label:(0,l.__)("Center","gutena-star-ratings")}),(0,e.createElement)(r.__experimentalToggleGroupControlOption,{value:"right",label:(0,l.__)("Right","gutena-star-ratings")})),(0,e.createElement)(r.RangeControl,{label:(0,l.__)("Rating Scale","gutena-star-ratings"),value:h,onChange:e=>m({ratingScale:e}),min:5,max:10,step:1}),(0,e.createElement)(r.RangeControl,{label:(0,l.__)("Rating","gutena-star-ratings"),value:w,onChange:e=>m({numRating:e}),min:.5,max:h,step:.5}),(0,e.createElement)(r.RangeControl,{label:(0,l.__)("Icon Size","gutena-star-ratings"),value:d,onChange:e=>m({iconSize:e})}),(0,e.createElement)(r.BaseControl,{label:(0,l.__)("Icon Color","gutena-star-ratings"),__nextHasNoMarginBottom:!1},(0,e.createElement)(r.ColorPalette,{value:f,colors:[{name:"red",color:"#f00"},{name:"white",color:"#fff"},{name:"blue",color:"#00f"}],onChange:e=>m({iconColor:e})})))),(0,e.createElement)("div",_,b?[...Array(b).keys()].map(((t,n)=>(0,e.createElement)(r.Icon,{key:n,className:"gutena-full-rating",size:d,style:{fill:f},icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,e.createElement)("path",{d:"M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"}))}))):null,y?(0,e.createElement)(r.Icon,{className:"gutena-half-rating",size:d,style:{fill:f},icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,e.createElement)("path",{d:"M12 14.656l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708v6.948zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z"}))}):null,z&&z>=0?[...Array(z).keys()].map(((t,n)=>(0,e.createElement)(r.Icon,{key:n,className:"gutena-empty-rating",size:d,style:{fill:f},icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,e.createElement)("path",{d:"M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z"}))}))):null))},save:function(t){let{attributes:n}=t;const{uniqueId:l,position:i,numRating:o,ratingScale:s,iconSize:c,iconColor:g}=n,u=a.useBlockProps.save({className:`gutena-star-ratings-block gutena-star-ratings-block-${l} align-${i}`}),m=Math.floor(o),p=o%1==0?0:1,v=s-(m+p);return(0,e.createElement)("div",u,m?[...Array(m).keys()].map(((t,n)=>(0,e.createElement)(r.Icon,{key:n,className:"gutena-full-rating",size:c,style:{fill:g},icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,e.createElement)("path",{d:"M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"}))}))):null,p?(0,e.createElement)(r.Icon,{className:"gutena-half-rating",size:c,style:{fill:g},icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,e.createElement)("path",{d:"M12 14.656l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708v6.948zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z"}))}):null,v&&v>=0?[...Array(v).keys()].map(((t,n)=>(0,e.createElement)(r.Icon,{key:n,className:"gutena-empty-rating",size:c,style:{fill:g},icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,e.createElement)("path",{d:"M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z"}))}))):null)},icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},(0,e.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,e.createElement)("path",{d:"M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z",fill:"rgba(14,164,137,1)"}))})}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,n,a,r){if(!n){var i=1/0;for(g=0;g<e.length;g++){n=e[g][0],a=e[g][1],r=e[g][2];for(var o=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[s])}))?n.splice(s--,1):(o=!1,r<i&&(i=r));if(o){e.splice(g--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var g=e.length;g>0&&e[g-1][2]>r;g--)e[g]=e[g-1];e[g]=[n,a,r]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,i=n[0],o=n[1],s=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in o)l.o(o,a)&&(l.m[a]=o[a]);if(s)var g=s(l)}for(t&&t(n);c<i.length;c++)r=i[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(g)},n=self.webpackChunkgutena_star_ratings=self.webpackChunkgutena_star_ratings||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=l.O(void 0,[431],(function(){return l(612)}));a=l.O(a)}();
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/Rd+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),l=a("q1tI"),o=(r=l)&&r.__esModule?r:{default:r};function c(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}var s=function(e,t,a,r,n){var i=void 0;return r?(i="mailto:"+r,n&&(i+="?"+function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}(n))):e?i="tel:"+e:t?i="sms:"+t:a&&(i="facetime:"+a),i},d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={humanInteraction:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){return!1===this.props.obfuscate?this.renderLink():this.renderObfuscatedLink()}},{key:"renderLink",value:function(){var e=this.props,t=e.tel,a=e.sms,r=e.facetime,i=e.email,l=(e.obfuscate,e.headers),d=e.children,u=c(e,["tel","sms","facetime","email","obfuscate","headers","children"]);return o.default.createElement("a",n({href:s(t,a,r,i,l)},u),d||t||a||r||i)}},{key:"reverse",value:function(e){return e.split("").reverse().join("")}},{key:"renderObfuscatedLink",value:function(){var e=this,t=this.props,a=t.tel,r=t.sms,i=t.facetime,l=t.email,s=(t.obfuscate,t.headers,t.children),d=t.style,u=t.linkText,f=c(t,["tel","sms","facetime","email","obfuscate","headers","children","style","linkText"]),m=!0===this.state.humanInteraction||s?n({},d||{},{unicodeBidi:"bidi-override",display:"inline-block",direction:"ltr"}):n({},d||{},{unicodeBidi:"bidi-override",display:"inline-block",direction:"rtl"});return o.default.createElement("a",n({onClick:this.handleClick.bind(this),onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this),href:u||"obfuscated"},f,{style:m}),!0===e.state.humanInteraction?s||a||r||i||l:s||e.reverse(a||r||i||l).replace("(",")").replace(")","("))}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,a=t.tel,r=t.sms,n=t.facetime,i=t.email,l=t.headers;window.location.href=s(a,r,n,i,l)}},{key:"handleCopiability",value:function(){this.setState((function(e){return n({},e,{humanInteraction:!0})}))}}]),t}(l.Component);t.default=d},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),c=r(a("pVnL")),s=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,v=new WeakMap;function k(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&s.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+s+l+o+a+r+t+i+n+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=s.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,o=s.default.createElement(R,(0,c.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?s.default.createElement("picture",null,n(r),o):o})),R=s.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:l,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=s.default.createRef(),a.placeholderRef=t.placeholderRef||s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,v=e.itemProp,w=e.loading,O=e.draggable,I=g||h;if(!I)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,c.default)({opacity:z?1:0,transition:P?"opacity "+b+"ms":"none"},o),V="boolean"==typeof y?"lightgray":y,T={transitionDelay:b+"ms"},_=(0,c.default)({opacity:this.state.imgLoaded?0:1},P&&T,o,f),H={title:t,alt:this.state.isVisible?"":a,style:_,className:m,itemProp:v},M=this.state.isHydrated?p(I):I[0];if(g)return s.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},s.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),V&&s.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&T)}),M.base64&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:H,imageVariants:I,generateSources:S}),M.tracedSVG&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:H,imageVariants:I,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,k(I),s.default.createElement(R,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:O})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:a,title:t,loading:w},M,{imageVariants:I}))}}));if(h){var N=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete N.display,s.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},V&&s.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:V,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},P&&T)}),M.base64&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:H,imageVariants:I,generateSources:S}),M.tracedSVG&&s.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:H,imageVariants:I,generateSources:x}),this.state.isVisible&&s.default.createElement("picture",null,k(I),s.default.createElement(R,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:O})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:a,title:t,loading:w},M,{imageVariants:I}))}}))}return null},t}(s.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),j=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function V(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}z.propTypes={resolutions:P,sizes:j,fixed:V(d.default.oneOfType([P,d.default.arrayOf(P)])),fluid:V(d.default.oneOfType([j,d.default.arrayOf(j)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var T=z;t.default=T},AZAT:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}n.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-moon"},e.exports=n,n.default=n},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("pNTQ"),l=a("Wbzz"),o=a("AZAT"),c=a.n(o),s=a("OWEi"),d=a.n(s),u=function(){var e,t=null===(e=Object(l.useStaticQuery)("3255793931").site.siteMetadata)||void 0===e?void 0:e.author;return n.a.createElement("header",{id:"top"},n.a.createElement("h1",null,n.a.createElement(l.Link,{to:"/"},t.name||null)),n.a.createElement(i.b.Consumer,null,(function(e){return n.a.createElement("nav",{id:"navigation"},n.a.createElement(l.Link,{activeClassName:"active",to:"/about"},"about"),n.a.createElement(l.Link,{activeClassName:"active",to:"/blog"},"blog"),n.a.createElement(l.Link,{activeClassName:"inactive",to:"/project"},"projects"),n.a.createElement("button",{onClick:e.toggleBlack},e.black?n.a.createElement(d.a,{stroke:"#FFCC33",width:"20"}):n.a.createElement(c.a,{width:"20",fill:"#656565",stroke:"#656565"})))})))},f=a("ePsa"),m=a("/Rd+"),p=a.n(m),g=a("ntml"),h=a.n(g),y=a("FPYb"),b=a.n(y),E=a("rPll"),v=a.n(E);function k(){var e,t=null===(e=Object(l.useStaticQuery)("287504094").site.siteMetadata)||void 0===e?void 0:e.social;return n.a.createElement("footer",null,n.a.createElement("nav",{id:"social"},n.a.createElement("a",{href:t.twitter,target:"_blank",rel:"me noreferrer"},n.a.createElement(v.a,{width:"21",height:"21"})),n.a.createElement("a",{href:t.github,target:"_blank",rel:"noreferrer"},n.a.createElement(b.a,{width:"21",height:"21"})),n.a.createElement("a",{href:t.linkedin,target:"_blank",rel:"noreferrer"},n.a.createElement(h.a,{width:"21",height:"21",fill:"#1966c2"}))),n.a.createElement("div",{className:"email"},"Please reach out:"," ",n.a.createElement(p.a,{email:"violetguo@proton.me"})))}t.a=function(e){var t=e.children,a=e.isIndex,r=void 0!==a&&a;return n.a.createElement(i.b.Consumer,null,(function(e){return n.a.createElement("div",{id:e.black?"dark":"white"},n.a.createElement("section",{className:"container"},n.a.createElement(u,null),r?n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,null)):null,t,n.a.createElement(k,null)))}))}},FPYb:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("g",{key:0},r.createElement("g",null,r.createElement("path",{d:"M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872\r\n\t\t\tc12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464\r\n\t\t\tc-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496\r\n\t\t\tc22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368\r\n\t\t\tc-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68\r\n\t\t\tc0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672\r\n\t\t\tc48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992\r\n\t\t\tc0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496\r\n\t\t\tc0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"}))),r.createElement("g",{key:1}),r.createElement("g",{key:2}),r.createElement("g",{key:3}),r.createElement("g",{key:4}),r.createElement("g",{key:5}),r.createElement("g",{key:6}),r.createElement("g",{key:7}),r.createElement("g",{key:8}),r.createElement("g",{key:9}),r.createElement("g",{key:10}),r.createElement("g",{key:11}),r.createElement("g",{key:12}),r.createElement("g",{key:13}),r.createElement("g",{key:14}),r.createElement("g",{key:15})])}n.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},e.exports=n,n.default=n},OWEi:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("circle",{cx:"12",cy:"12",r:"5",key:0}),r.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3",key:1}),r.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23",key:2}),r.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64",key:3}),r.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78",key:4}),r.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12",key:5}),r.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12",key:6}),r.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36",key:7}),r.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22",key:8})])}n.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-sun"},e.exports=n,n.default=n},ePsa:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("9eSz"),o=a.n(l);t.a=function(){var e,t,a,r,l=Object(i.useStaticQuery)("2652830850"),c=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,s=null==l||null===(t=l.avatar)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.fixed,d=null===(r=l.site.siteMetadata)||void 0===r?void 0:r.social;d.twitter,d.github,d.vsco;return n.a.createElement("section",{className:"welcome"},s&&n.a.createElement(o.a,{fixed:s,width:"175",height:"175",alt:c.name||"",className:"bio-avatar"}),n.a.createElement("h2",null,"Hi there"),n.a.createElement("p",{className:"display-font"},"I'm a software engineer and a machine learning engineer. I can dive deep into machine learning (deep or classic) models and papers, and I also productionize them."))}},ntml:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("g",{key:0},r.createElement("g",null,r.createElement("rect",{y:"160",width:"114.496",height:"352"}))),r.createElement("g",{key:1},r.createElement("g",null,r.createElement("path",{d:"M426.368,164.128c-1.216-0.384-2.368-0.8-3.648-1.152c-1.536-0.352-3.072-0.64-4.64-0.896\r\n\t\t\tc-6.08-1.216-12.736-2.08-20.544-2.08c-66.752,0-109.088,48.544-123.04,67.296V160H160v352h114.496V320\r\n\t\t\tc0,0,86.528-120.512,123.04-32c0,79.008,0,224,0,224H512V274.464C512,221.28,475.552,176.96,426.368,164.128z"}))),r.createElement("g",{key:2},r.createElement("g",null,r.createElement("circle",{cx:"56",cy:"56",r:"56"}))),r.createElement("g",{key:3}),r.createElement("g",{key:4}),r.createElement("g",{key:5}),r.createElement("g",{key:6}),r.createElement("g",{key:7}),r.createElement("g",{key:8}),r.createElement("g",{key:9}),r.createElement("g",{key:10}),r.createElement("g",{key:11}),r.createElement("g",{key:12}),r.createElement("g",{key:13}),r.createElement("g",{key:14}),r.createElement("g",{key:15}),r.createElement("g",{key:16}),r.createElement("g",{key:17})])}n.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},e.exports=n,n.default=n},rPll:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("g",{key:0},r.createElement("g",null,r.createElement("path",{d:"M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016\r\n\t\t\tc-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992\r\n\t\t\tc0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056\r\n\t\t\tc0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152\r\n\t\t\tc0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792\r\n\t\t\tc13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44\r\n\t\t\tC46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568\r\n\t\t\tC480.224,136.96,497.728,118.496,512,97.248z"}))),r.createElement("g",{key:1}),r.createElement("g",{key:2}),r.createElement("g",{key:3}),r.createElement("g",{key:4}),r.createElement("g",{key:5}),r.createElement("g",{key:6}),r.createElement("g",{key:7}),r.createElement("g",{key:8}),r.createElement("g",{key:9}),r.createElement("g",{key:10}),r.createElement("g",{key:11}),r.createElement("g",{key:12}),r.createElement("g",{key:13}),r.createElement("g",{key:14}),r.createElement("g",{key:15})])}n.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},e.exports=n,n.default=n},vrFN:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("TJpk"),l=a("Wbzz"),o=function(e){var t,a,r,o=e.description,c=e.lang,s=e.meta,d=e.title,u=e.image,f=e.imageWidth,m=e.imageHeight,p=Object(l.useStaticQuery)("2841359383").site,g=o||p.siteMetadata.description,h=null===(t=p.siteMetadata)||void 0===t?void 0:t.title;return n.a.createElement(i.Helmet,{htmlAttributes:{lang:c},title:d,titleTemplate:h?"%s | "+h:null,meta:[{name:"description",content:g},{property:"og:title",content:d},{property:"og:image",content:u},{property:"og:image:width",content:f},{property:"og:image:height",content:m},{property:"og:description",content:g},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:(null===(a=p.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:g}].concat(s)},n.a.createElement("link",{rel:"webmention",href:"https://webmention.io/beratbozkurt.net/webmention"}),n.a.createElement("link",{rel:"pingback",href:"https://webmention.io/beratbozkurt.net/xmlrpc"}))};o.defaultProps={lang:"en",meta:[],description:""},t.a=o}}]);
//# sourceMappingURL=commons-3f500f3de415807ee78f.js.map
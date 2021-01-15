/*! For license information please see component---src-pages-index-js-bfc11d22f08267512450.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9eSz":function(e,t,i){"use strict";var a=i("5NKs");t.__esModule=!0,t.default=void 0;var r,n=a(i("v06X")),s=a(i("XEEL")),o=a(i("uDP2")),l=a(i("j8BX")),d=a(i("q1tI")),c=a(i("17x9")),u=function(e){var t=(0,l.default)({},e),i=t.resolutions,a=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,i=e.fixed,a=m(t||i||[]);return a&&a.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),i=g(t);return p[i]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:n}),i&&d.default.createElement("source",{media:r,srcSet:i,sizes:n}))}))}function E(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function j(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:i,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:i,srcSet:a})}))}function R(e,t){var i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:i)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),S.set(e,t)),function(){i.unobserve(e),S.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+d+s+o+i+a+t+n+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=d.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(O,(0,l.default)({ref:t,src:i},n,{ariaHidden:s}));return a.length>1?d.default.createElement("picture",null,r(a),o):o})),O=d.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:i,srcSet:a,src:r},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var T=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=y&&h(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!b&&v&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||y&&(b||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn,isHydrated:!1},i.imageRef=d.default.createRef(),i.placeholderRef=t.placeholderRef||d.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)(i)),i.handleRef=i.handleRef.bind((0,n.default)(i)),i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),(i=g(t))&&(p[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=e.loading,R=e.draggable,x=p||h;if(!x)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:T?1:0,transition:P?"opacity "+y+"ms":"none"},o),H="boolean"==typeof b?"lightgray":b,C={transitionDelay:y+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&C,o,f),V={title:t,alt:this.state.isVisible?"":i,style:N,className:g,itemProp:S},M=this.state.isHydrated?m(x):x[0];if(p)return d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&C)}),M.base64&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:V,imageVariants:x,generateSources:I}),M.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:V,imageVariants:x,generateSources:j}),this.state.isVisible&&d.default.createElement("picture",null,w(x),d.default.createElement(O,{alt:i,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:i,title:t,loading:E},M,{imageVariants:x}))}}));if(h){var W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},P&&C)}),M.base64&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:V,imageVariants:x,generateSources:I}),M.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:V,imageVariants:x,generateSources:j}),this.state.isVisible&&d.default.createElement("picture",null,w(x),d.default.createElement(O,{alt:i,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:i,title:t,loading:E},M,{imageVariants:x}))}}))}return null},t}(d.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,i,a){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[i]=e,r),t,"prop",a)}}T.propTypes={resolutions:P,sizes:z,fixed:H(c.default.oneOfType([P,c.default.arrayOf(P)])),fluid:H(c.default.oneOfType([z,c.default.arrayOf(z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=T;t.default=C},C331:function(e,t,i){"use strict";var a="bfred-it:object-fit-images",r=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,n="undefined"==typeof Image?{style:{"object-position":1}}:new Image,s="object-fit"in n.style,o="object-position"in n.style,l="background-size"in n.style,d="string"==typeof n.currentSrc,c=n.getAttribute,u=n.setAttribute,f=!1;function g(e,t,i){var a="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";c.call(e,"src")!==a&&u.call(e,"src",a)}function m(e,t){e.naturalWidth?t(e):setTimeout(m,100,e,t)}function p(e){var t=function(e){for(var t,i=getComputedStyle(e).fontFamily,a={};null!==(t=r.exec(i));)a[t[1]]=t[2];return a}(e),i=e[a];if(t["object-fit"]=t["object-fit"]||"fill",!i.img){if("fill"===t["object-fit"])return;if(!i.skipTest&&s&&!t["object-position"])return}if(!i.img){i.img=new Image(e.width,e.height),i.img.srcset=c.call(e,"data-ofi-srcset")||e.srcset,i.img.src=c.call(e,"data-ofi-src")||e.src,u.call(e,"data-ofi-src",e.src),e.srcset&&u.call(e,"data-ofi-srcset",e.srcset),g(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{!function(e){var t={get:function(t){return e[a].img[t||"src"]},set:function(t,i){return e[a].img[i||"src"]=t,u.call(e,"data-ofi-"+i,t),p(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}(e)}catch(n){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!d&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}(i.img),e.style.backgroundImage='url("'+(i.img.currentSrc||i.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(t["object-fit"])?m(i.img,(function(){i.img.naturalWidth>e.width||i.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"})):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),m(i.img,(function(t){g(e,t.naturalWidth,t.naturalHeight)}))}function h(e,t){var i=!f&&!e;if(t=t||{},e=e||"img",o&&!t.skipTest||!l)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var r=0;r<e.length;r++)e[r][a]=e[r][a]||{skipTest:t.skipTest},p(e[r]);i&&(document.body.addEventListener("load",(function(e){"IMG"===e.target.tagName&&h(e.target,{skipTest:t.skipTest})}),!0),f=!0,e="img"),t.watchMQ&&window.addEventListener("resize",h.bind(null,e,{skipTest:t.skipTest}))}h.supportsObjectFit=s,h.supportsObjectPosition=o,function(){function e(e,t){return e[a]&&e[a].img&&("src"===t||"srcset"===t)?e[a].img:e}o||(HTMLImageElement.prototype.getAttribute=function(t){return c.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,i){return u.call(e(this,t),t,String(i))})}(),e.exports=h},RXBc:function(e,t,i){"use strict";i.r(t);var a=i("q1tI"),r=i.n(a),n=i("ciIH"),s=i.n(n),o=i("pyUO"),l=i.n(o);i("rMck");function d(e){var t=e.children;return r.a.createElement("div",{style:{margin:"0 0",padding:"0 0",height:"100vh"}},t)}t.default=function(e){var t=e.data,i=[Object.assign({},t.mobileImage.childImageSharp.fluid,{media:"(max-width: 600px)"}),Object.assign({},t.tabletImage.childImageSharp.fluid,{media:"(max-width: 991px)"}),Object.assign({},t.desktopImage.childImageSharp.fluid,{media:"(min-width: 992px)"})];return r.a.createElement(d,null,r.a.createElement("div",{className:l.a.container},r.a.createElement(s.a,{className:l.a.coverPhoto,fluid:i,style:{position:"relative"},"object-fit":"none",alt:"A drawing of a girl"}),r.a.createElement("div",{className:l.a.topChunk},r.a.createElement("h1",{className:l.a.introText},"This is Trang.",r.a.createElement("br",null),"I bring art to heal the world."),r.a.createElement("div",{className:l.a.socialMediaBar},r.a.createElement("img",{className:l.a.icon,src:"assets/imgs/icons/dribbble.svg"}),r.a.createElement("img",{className:l.a.icon,src:"assets/imgs/icons/linkedin.svg"}),r.a.createElement("img",{className:l.a.icon,src:"assets/imgs/icons/github.svg"}),r.a.createElement("img",{className:l.a.icon,src:"assets/imgs/icons/email.svg"})))))}},ciIH:function(e,t,i){"use strict";var a=i("jGDn"),r=i("5NKs");t.__esModule=!0,t.default=void 0;var n=r(i("j8BX")),s=r(i("uDP2")),o=r(i("jGDn")),l=r(i("XEEL")),d=a(i("q1tI")),c=r(i("17x9")),u=r(i("9eSz")),f=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).imageRef=t.props.innerRef||(0,d.createRef)(),t.placeholderRef=(0,d.createRef)(),t}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=document.createElement("img");void 0!==t.style.objectFit&&void 0!==t.style.objectPosition||Promise.resolve().then((function(){return(0,o.default)(i("C331"))})).then((function(t){var i=t.default;i(e.imageRef.current.imageRef.current),i(e.placeholderRef.current)}))},a.render=function(){var e=this.props,t=e.objectFit,i=e.objectPosition,a=(0,s.default)(e,["objectFit","objectPosition"]),r={objectFit:t,objectPosition:i,fontFamily:'"object-fit: '+t+"; object-position: "+i+'"'};return d.default.createElement(u.default,(0,n.default)({ref:this.imageRef,placeholderRef:this.placeholderRef},a,{imgStyle:(0,n.default)({},a.imgStyle,r),placeholderStyle:(0,n.default)({},a.placeholderStyle,r)}))},t}(d.Component);f.propTypes={objectFit:c.default.string,objectPosition:c.default.string},f.defaultProps={objectFit:"cover",objectPosition:"50% 50%"};var g=(0,d.forwardRef)((function(e,t){return d.default.createElement(f,(0,n.default)({},e,{innerRef:t}))}));t.default=g},pyUO:function(e,t,i){e.exports={container:"index-module--container--35ZHF",introText:"index-module--introText--lXIqM",coverPhoto:"index-module--coverPhoto--nHuho",topChunk:"index-module--topChunk--1spTa",socialMediaBar:"index-module--socialMediaBar--26ysk",icon:"index-module--icon---Q_a6"}},rMck:function(e,t,i){}}]);
//# sourceMappingURL=component---src-pages-index-js-bfc11d22f08267512450.js.map
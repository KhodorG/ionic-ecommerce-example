(this["webpackJsonpionic-ecommerce-example"]=this["webpackJsonpionic-ecommerce-example"]||[]).push([[57],{137:function(o,i,e){"use strict";e.r(i),e.d(i,"ion_icon",(function(){return u}));var t=e(17),n=e(9),r=e(10),s=e(55),c=e(68),a=function o(i){if(1===i.nodeType){if("script"===i.nodeName.toLowerCase())return!1;for(var e=0;e<i.attributes.length;e++){var t=i.attributes[e].value;if(Object(c.d)(t)&&0===t.toLowerCase().indexOf("on"))return!1}for(var n=0;n<i.childNodes.length;n++)if(!o(i.childNodes[n]))return!1}return!0},l=new Map,h=new Map,d=function(o,i){var e=h.get(o);if(!e){if("undefined"===typeof fetch||"undefined"===typeof document)return l.set(o,""),Promise.resolve();e=fetch(o).then((function(e){if(e.ok)return e.text().then((function(e){e&&!1!==i&&(e=function(o){var i=document.createElement("div");i.innerHTML=o;for(var e=i.childNodes.length-1;e>=0;e--)"svg"!==i.childNodes[e].nodeName.toLowerCase()&&i.removeChild(i.childNodes[e]);var t=i.firstElementChild;if(t&&"svg"===t.nodeName.toLowerCase()){var n=t.getAttribute("class")||"";if(t.setAttribute("class",(n+" s-ion-icon").trim()),a(t))return i.innerHTML}return""}(e)),l.set(o,e||"")}));l.set(o,"")})),h.set(o,e)}return e},u=function(){function o(i){Object(n.a)(this,o),Object(s.e)(this,i),this.iconName=null,this.isVisible=!1,this.mode=f(),this.lazy=!1,this.sanitize=!0}return Object(r.a)(o,[{key:"connectedCallback",value:function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=!0,o.loadIcon()}))}},{key:"disconnectedCallback",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"waitUntilVisible",value:function(o,i,e){var t=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var n=this.io=new window.IntersectionObserver((function(o){o[0].isIntersecting&&(n.disconnect(),t.io=void 0,e())}),{rootMargin:i});n.observe(o)}else e()}},{key:"loadIcon",value:function(){var o=this;if(this.isVisible){var i=Object(c.c)(this);i&&(l.has(i)?this.svgContent=l.get(i):d(i,this.sanitize).then((function(){return o.svgContent=l.get(i)})))}var e=this.iconName=Object(c.b)(this.name,this.icon,this.mode,this.ios,this.md);this.ariaLabel||"true"===this.ariaHidden||e&&(this.ariaLabel=e.replace(/\-/g," "))}},{key:"render",value:function(){var o,i=this.iconName,e=this.mode||"md",n=this.flipRtl||i&&(i.indexOf("arrow")>-1||i.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(s.d)(s.a,{role:"img",class:Object.assign(Object.assign(Object(t.a)({},e,!0),v(this.color)),(o={},Object(t.a)(o,"icon-".concat(this.size),!!this.size),Object(t.a)(o,"flip-rtl",!!n&&"rtl"===this.el.ownerDocument.dir),o))},this.svgContent?Object(s.d)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(s.d)("div",{class:"icon-inner"}))}},{key:"el",get:function(){return Object(s.b)(this)}}],[{key:"assetsDirs",get:function(){return["svg"]}},{key:"watchers",get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}}]),o}(),f=function(){return"undefined"!==typeof document&&document.documentElement.getAttribute("mode")||"md"},v=function(o){return o?Object(t.a)({"ion-color":!0},"ion-color-".concat(o),!0):null};u.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"}}]);
//# sourceMappingURL=57.e6ee3e28.chunk.js.map
(this["webpackJsonpionic-ecommerce-example"]=this["webpackJsonpionic-ecommerce-example"]||[]).push([[51],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"KEYBOARD_DID_CLOSE",(function(){return o})),n.d(t,"KEYBOARD_DID_OPEN",(function(){return i})),n.d(t,"copyVisualViewport",(function(){return l})),n.d(t,"keyboardDidClose",(function(){return g})),n.d(t,"keyboardDidOpen",(function(){return p})),n.d(t,"keyboardDidResize",(function(){return b})),n.d(t,"resetKeyboardAssist",(function(){return a})),n.d(t,"setKeyboardClose",(function(){return h})),n.d(t,"setKeyboardOpen",(function(){return f})),n.d(t,"startKeyboardAssist",(function(){return c})),n.d(t,"trackViewportChanges",(function(){return y}));var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},d=!1,a=function(){r={},u={},d=!1},c=function(e){s(e),e.visualViewport&&(u=l(e.visualViewport),e.visualViewport.onresize=function(){y(e),p()||b(e)?f(e):g(e)&&h(e)})},s=function(e){e.addEventListener("keyboardDidShow",(function(t){return f(e,t)})),e.addEventListener("keyboardDidHide",(function(){return h(e)}))},f=function(e,t){w(e,t),d=!0},h=function(e){v(e),d=!1},p=function(){var e=(r.height-u.height)*u.scale;return!d&&r.width===u.width&&e>150},b=function(e){return d&&!g(e)},g=function(e){return d&&u.height===e.innerHeight},w=function(e,t){var n=t?t.keyboardHeight:e.innerHeight-u.height,o=new CustomEvent(i,{detail:{keyboardHeight:n}});e.dispatchEvent(o)},v=function(e){var t=new CustomEvent(o);e.dispatchEvent(t)},y=function(e){r=Object.assign({},u),u=l(e.visualViewport)},l=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}]);
//# sourceMappingURL=51.4a670a5e.chunk.js.map
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequirea18f;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequirea18f=n);var r=n("aPYZr"),s=n("4JAgF"),l=n("9HoHC"),a=n("gNsil"),h=n("9PuT7"),u=n("8rJSp"),o=n("bHQQp");customElements.define("lia-terminal",function(e){"use strict";(0,a.default)(i,e);var t=(0,u.default)(i);function i(){var e;(0,s.default)(this,i),e=t.call(this);var n=(0,r.default)(e);return e.resizeObserver=new(0,o.default)((function(e){n.style.height&&(n.height_=n.style.height,n.update(),n.dispatchEvent(new CustomEvent("onchangeheight")))})),e}return(0,l.default)(i,[{key:"connectedCallback",value:function(){this.resizeObserver.observe(this)}},{key:"disconnectedCallback",value:function(){this.resizeObserver.disconnect()}},{key:"update",value:function(){this.height_&&(this.style.maxHeight="none",this.style.height=this.height_)}},{key:"height",get:function(){return this.height_},set:function(e){this.height_!=e&&(this.height_=e,this.update())}}]),i}((0,h.default)(HTMLElement)))}();
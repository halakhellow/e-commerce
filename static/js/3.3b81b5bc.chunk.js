(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[3],{101:function(t,e,n){(function(e){var n=/^\[object .+?Constructor\]$/,r="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,c=r||a||Function("return this")();var o=Array.prototype,i=Function.prototype,u=Object.prototype,s=c["__core-js_shared__"],l=function(){var t=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),f=i.toString,p=u.hasOwnProperty,h=u.toString,v=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_=o.splice,d=C(c,"Map"),m=C(Object,"create");function b(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function y(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function j(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function O(t,e){for(var n,r,a=t.length;a--;)if((n=t[a][0])===(r=e)||n!==n&&r!==r)return a;return-1}function g(t){return!(!k(t)||(e=t,l&&l in e))&&(function(t){var e=k(t)?h.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?v:n).test(function(t){if(null!=t){try{return f.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t));var e}function E(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function C(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return g(n)?n:void 0}function w(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,a=e?e.apply(this,r):r[0],c=n.cache;if(c.has(a))return c.get(a);var o=t.apply(this,r);return n.cache=c.set(a,o),o};return n.cache=new(w.Cache||j),n}function k(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}b.prototype.clear=function(){this.__data__=m?m(null):{}},b.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},b.prototype.get=function(t){var e=this.__data__;if(m){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return p.call(e,t)?e[t]:void 0},b.prototype.has=function(t){var e=this.__data__;return m?void 0!==e[t]:p.call(e,t)},b.prototype.set=function(t,e){return this.__data__[t]=m&&void 0===e?"__lodash_hash_undefined__":e,this},y.prototype.clear=function(){this.__data__=[]},y.prototype.delete=function(t){var e=this.__data__,n=O(e,t);return!(n<0)&&(n==e.length-1?e.pop():_.call(e,n,1),!0)},y.prototype.get=function(t){var e=this.__data__,n=O(e,t);return n<0?void 0:e[n][1]},y.prototype.has=function(t){return O(this.__data__,t)>-1},y.prototype.set=function(t,e){var n=this.__data__,r=O(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},j.prototype.clear=function(){this.__data__={hash:new b,map:new(d||y),string:new b}},j.prototype.delete=function(t){return E(this,t).delete(t)},j.prototype.get=function(t){return E(this,t).get(t)},j.prototype.has=function(t){return E(this,t).has(t)},j.prototype.set=function(t,e){return E(this,t).set(t,e),this},w.Cache=j,t.exports=w}).call(this,n(26))},102:function(t,e,n){"use strict";var r=n(22),a=n(23),c=n(25),o=n(24),i=n(0),u=n.n(i),s=n(18),l=n(27),f=n(43),p=(n(103),function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props.item,e=t.name,n=t.imageUrl,r=t.price,a=this.props,c=a.addItem,o=a.item;return u.a.createElement("div",{className:"CollectionItem"},u.a.createElement("div",{className:"CollectionItem-img",style:{backgroundImage:"url(".concat(n,")")}}),u.a.createElement("div",{className:"CollectionItem-footer"},u.a.createElement("span",null,e),u.a.createElement("span",null,"$",r)),u.a.createElement(f.a,{onClick:function(){return c(o)}},"Add to Cart"))}}]),n}(i.Component));e.a=Object(s.b)(null,(function(t){return{addItem:function(e){return t(Object(l.a)(e))}}}))(p)},103:function(t,e,n){},104:function(t,e,n){"use strict";var r=n(0),a=n.n(r),c=n(20);n(105);e.a=function(){return a.a.createElement("div",{className:"CollectionsNavbar"},a.a.createElement(c.c,{activeClassName:"active",to:"/shop/hats"},"Hats"),a.a.createElement(c.c,{activeClassName:"active",to:"/shop/jackets"},"Jackets"),a.a.createElement(c.c,{activeClassName:"active",to:"/shop/shoes"},"Shoes"),a.a.createElement(c.c,{activeClassName:"active",to:"/shop/womens"},"Womens"),a.a.createElement(c.c,{activeClassName:"active",to:"/shop/mens"},"Mens"))}},105:function(t,e,n){},106:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var a=n(0),c=n.n(a),o=n(45);e.a=function(t){return function(e){var n=e.isLoading,a=r(e,["isLoading"]);return n?c.a.createElement(o.a,null):c.a.createElement(t,a)}}},115:function(t,e,n){},118:function(t,e,n){"use strict";n.r(e);var r=n(18),a=n(14),c=n(11),o=n(97),i=n(106),u=n(0),s=n.n(u),l=n(22),f=n(23),p=n(25),h=n(24),v=n(10),_=n(102),d=(n(115),function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var t=this,e=this.props.collection;return s.a.createElement("div",{className:"CollectionPreview"},s.a.createElement("h3",{onClick:function(){return t.props.history.push("/shop/".concat(e.title.toLowerCase()))}},e.title),s.a.createElement("div",{className:"CollectionPreview-div"},e.items.filter((function(t,e){return e<5})).map((function(t){return s.a.createElement(_.a,{key:t.id,item:t})}))))}}]),n}(u.Component)),m=Object(v.f)(d),b=n(104),y=Object(c.b)({collections:o.d}),j=Object(r.b)(y)((function(t){var e=t.collections;return s.a.createElement("div",null,s.a.createElement(b.a,null),s.a.createElement("div",null,e?Object.keys(e).map((function(t){return s.a.createElement(m,{key:e[t].id,collection:e[t]})})):null))})),O=Object(c.b)({isLoading:o.b}),g=Object(a.d)(Object(r.b)(O),i.a)(j);e.default=g},97:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l}));var r=n(11),a=n(101),c=n.n(a),o=function(t){return t.shop},i=Object(r.a)([o],(function(t){return t.collections})),u=c()((function(t){return Object(r.a)([i],(function(e){return e[t]}))})),s=Object(r.a)([o],(function(t){return t.isFetching})),l=Object(r.a)([o],(function(t){return!!t.collections}))}}]);
//# sourceMappingURL=3.3b81b5bc.chunk.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=new Date("Jan 1, 2028 12:00:00").getTime(),a=setInterval(t,1e3);function t(){var a=(new Date).getTime(),t=e-a;if(t>0){var o=Math.floor(t/864e5);o<10&&(o="0"+o);var n=Math.floor(t%864e5/36e5);n<10&&(n="0"+n);var r=Math.floor(t%36e5/6e4);r<10&&(r="0"+r);var c=Math.floor(t%6e4/1e3);c<10&&(c="0"+c);var v="".concat(o,"d : ").concat(n,"h : ").concat(r,"m : ").concat(c,"s");document.querySelector(".countdown").innerText=v}}
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.d7bca036.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"p3Eu":[function(require,module,exports) {
const e=require("child_process"),t=require("fs"),i=require("path"),o={"LK-S":"https://github.com/TracelessLK/LK-S.git","LK-D":"https://github.com/TracelessLK/LK-D.git","LK-M":"https://github.com/TracelessLK/LK-M.git",LK_M:"https://github.com/TracelessLK/LK-M.git","LK-C":"https://github.com/TracelessLK/LK-C.git"};function r(){const e=process.cwd(),r=i.basename(e);if(!o.hasOwnProperty(r))throw new Error(`${r} is not in ${Object.keys(o)}`);if(!c(e))throw new Error(`${e} is not a git repo`);["LK-M","LK_M"].includes(r)&&n("git checkout dev_z && git branch -m dev");try{n("git remote remove origin-deprecated")}catch(g){}if(s(o[r]).split("\n").map(e=>e.trim()).filter(e=>Boolean(e)).forEach(n),["LK-M","LK-D","LK_M"].includes(r)){const r=i.resolve(e,"submodule/LK-C");if(t.existsSync(r)){console.log("working on LK-C in submodule");const e={cwd:r};try{n("git remote remove origin origin-deprecated",e)}catch(g){}["git remote rename origin origin-deprecated",`git remote add origin ${o["LK-C"]}`,"git fetch origin","git branch -u origin/dev dev","git checkout dev","git remote remove origin-deprecated"].forEach(t=>{n(t,e)})}}console.log("update remote successfully ")}function n(t,i={}){console.log(t),e.execSync(t,i)}function c(e){return t.existsSync(i.resolve(e,".git"))}function s(e){return`\n  git remote rename origin origin-deprecated\ngit remote add origin ${e}\ngit remote remove origin-deprecated\n  `}console.log("version: 0.0.8"),r();
},{}]},{},["p3Eu"], null)
//# sourceMappingURL=/updateRemote.js.map
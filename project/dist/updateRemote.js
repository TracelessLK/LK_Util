parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"p3Eu":[function(require,module,exports) {
const e=require("child_process"),i=require("fs"),t=require("path"),o={"LK-S":"https://github.com/TracelessLK/LK-S.git","LK-D":"https://github.com/TracelessLK/LK-D.git","LK-M":"https://github.com/TracelessLK/LK-M.git",LK_M:"https://github.com/TracelessLK/LK-M.git","LK-C":"https://github.com/TracelessLK/LK-C.git"};function r(){const e=process.cwd(),r=t.basename(e);if(!o.hasOwnProperty(r))throw new Error(`${r} is not in ${Object.keys(o)}`);if(!s(e))throw new Error(`${e} is not a git repo`);if(["LK-M","LK_M"].includes(r)&&n("git checkout dev_z && git branch -m dev"),c(o[r]).split("\n").map(e=>e.trim()).filter(e=>Boolean(e)).forEach(n),["LK-M","LK-D","LK_M"].includes(r)){const r=t.resolve(e,"submodule/LK-C");i.existsSync(r)&&(console.log("working on LK-C in submodule"),["git remote rename origin origin-deprecated",`git remote add origin ${o["LK-C"]}`,"git pull","git branch -u origin/dev dev","git checkout dev","git remote remove origin-deprecated"].forEach(e=>{n(e,{cwd:r})}))}console.log("initial push successfully ")}function n(i,t={}){console.log(i),e.execSync(i,t)}function s(e){return i.existsSync(t.resolve(e,".git"))}function c(e){return`\n  git remote rename origin origin-deprecated\ngit remote add origin ${e}\ngit remote remove origin-deprecated\n  `}console.log("version: 0.0.3"),r();
},{}]},{},["p3Eu"], null)
//# sourceMappingURL=/updateRemote.js.map
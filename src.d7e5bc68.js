parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"G3dB":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){var o=window;return"object"!==e(o.__GameState__)&&(o.__GameState__=t||{}),o.__GameState__}Object.defineProperty(exports,"__esModule",{value:!0}),exports.State=void 0,exports.State=o;
},{}],"hIne":[function(require,module,exports) {
"use strict";function r(r,e,t){return r*(1-t)+e*t}function e(r){var e=new Image;return e.src=r,e}function t(r){return new Promise(function(e,t){var n=new Image;n.onload=function(){return e(n)},n.src=r})}function n(r,e){for(var t=0;t<r.length;t++){for(var n=r[t],o=t-1;o>-1&&r[o][e]>n[e];o--)r[o+1]=r[o];r[o+1]=n}return r}function o(r,e){return Math.floor(Math.random()*(e-r+1))+r}function a(r,e,t){return(r-e.min)*(t.max-t.min)/(e.max-e.min)+t.min}function u(r){for(var e,t,n=r.length;0!==n;)t=Math.floor(Math.random()*n),e=r[n-=1],r[n]=r[t],r[t]=e;return r}function i(r){return Math.floor(Math.random()*r.length)}function s(r,e){var t=Date.now(),n=!1;return function o(){n||(Date.now()-t>=e&&(r(),t=Date.now()),window.requestAnimationFrame(o))}(),function(r){r?e=r:n=!0}}function m(r,e){var t=Date.now(),n=!1;return function o(){n||(Date.now()-t>=e?r():window.requestAnimationFrame(o))}(),function(){n=!0}}function f(r){return r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function p(r,e){void 0===e&&(e=!0);var t=r.reduce(function(r,e){return r+e},0)/r.length;return e?Math.floor(t):t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.average=exports.numberWithCommas=exports.requestTimeout=exports.requestInterval=exports.randomFromArray=exports.shuffle=exports.convertRange=exports.randomInteger=exports.insertionSort=exports.preloadImage=exports.loadImage=exports.lerp=void 0,exports.lerp=r,exports.loadImage=e,exports.preloadImage=t,exports.insertionSort=n,exports.randomInteger=o,exports.convertRange=a,exports.shuffle=u,exports.randomFromArray=i,exports.requestInterval=s,exports.requestTimeout=m,exports.numberWithCommas=f,exports.average=p;
},{}],"BHZy":[function(require,module,exports) {
module.exports={real_news:[{title:"U.S. Elections!",content:"In a week we will know who will be the new president of the United States!",theme:"politics",fake:!1},{title:"President elected",content:"After recent president election, the winner take position",theme:"politics",fake:!1},{title:"New President rules",content:"New Statement from president came out!",theme:"politics",fake:!1},{title:"Britain post Brexit",content:"What has been effected by it?",theme:"politics",fake:!1},{title:"Migrant stuck in Bosnia",content:"What created such incident?",theme:"politics",fake:!1},{title:"President - Vaccines have arrive!",content:"What you should know about them?",theme:"politics",fake:!1},{title:"Cyberpunk 2077 released!",content:"One of the best upcoming games has been finaly released.",theme:"gaming",fake:!1},{title:"Steam winter sale ends soon",content:"Quick grab some game on cheap price!",theme:"gaming",fake:!1},{title:"Minecraft 2 confirmed!",content:"Markus Person confirmed that Minecraft 2 already in development",theme:"gaming",fake:!1},{title:"New Fallout game to be released!",content:"Will franchise rise again after the 76 massive fail?",theme:"gaming",fake:!1},{title:"Club Penguin 2 in making! ",content:"Creators confirm, its real!",theme:"gaming",fake:!1},{title:"New Minecraft update soon.",content:"What changes will there be?",theme:"gaming",fake:!1},{title:"Lil Pump has made new song!",content:"The new song is titled Adidas Gang",theme:"music",fake:!1},{title:"Grammys delayed due Covid-19",content:"Due to Covid-19 pandemic, grammy awards are delayed!",theme:"music",fake:!1},{title:"New James Bond music is top  class.",content:"Song titled NO.TIME.TO.DIE brings new light into Jame bond films!.",theme:"music",fake:!1},{title:"All I want for christmas - best song of generation?",content:"Will there ever be end to it?",theme:"music",fake:!1},{title:"Dr. Dre in Hospital!",content:"What happened and should you be woried?",theme:"music",fake:!1},{title:"New Ed Sheeran album released",content:"What now he has to offer?",theme:"music",fake:!1},{title:"New Avengers movies to come soon!",content:"Marvel announced that Avengers cast will return soon",theme:"films",fake:!1},{title:"New Star Wars movies announced!",content:"Will they be as bad as last 3?",theme:"films",fake:!1},{title:"Petions made to ban Musicals in movies",content:"More then 100 000 000 sigantures have been colected",theme:"films",fake:!1},{title:"New DC movies annouced!",content:"Will it ever be as popular as Marvels films?",theme:"films",fake:!1},{title:"New documentary about WW2, has been released!",content:"What new insights to be found?",theme:"films",fake:!1},{title:"Latvian movie recieves oscar!!",content:"Shock? What? How?",theme:"films",fake:!1},{title:"Scientist found new large Meteor.",content:"What can we learn about it?",theme:"educational",fake:!1},{title:"How to study and concentrate better in School",content:"Tip and Tricks!",theme:"educational",fake:!1},{title:"DIY Hacks for Daily life",content:"Top 10 Hacks that you ...",theme:"educational",fake:!1},{title:"Maximum speed of human?",content:"Scientist doing reasearch of how fast can human run.",theme:"educational",fake:!1}],fake_news:[{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0},{title:"Fake",content:"FakeNews",theme:"FakeNews",fake:!0}]};
},{}],"n6mK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./state"),t=e.State();window.addEventListener("resize",function(){t.element.width=window.innerWidth*window.devicePixelRatio,t.element.height=window.innerHeight*window.devicePixelRatio}),t.element.addEventListener("mousemove",function(e){var n=t.element.getBoundingClientRect();t.mouseX=(e.clientX-n.left)/(n.right-n.left)*t.element.width,t.mouseY=(e.clientY-n.top)/(n.bottom-n.top)*t.element.height}),t.element.addEventListener("mousedown",function(){t.mouseDown=!0}),t.element.addEventListener("mouseup",function(){t.mouseDown=!1});
},{"./state":"G3dB"}],"TbCJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./state"),t=require("./utils"),n=e.State(),s=document.getElementById("news"),a=document.getElementById("modal"),c=document.getElementById("overlay"),i=document.getElementById("pause-menu"),l=document.getElementById("counter"),d=document.getElementById("mood"),o=document.getElementById("selected"),r=document.getElementById("gaming"),v=document.getElementById("educational"),m=document.getElementById("politics"),u=document.getElementById("films"),p=document.getElementById("music"),y=document.getElementById("sport"),L=document.getElementById("post"),f=document.getElementById("relevance-bar"),E=0,I={music:11,sport:9,gaming:7,films:5,politics:3,educational:1};function g(){r.classList.remove("active"),v.classList.remove("active"),u.classList.remove("active"),m.classList.remove("active"),p.classList.remove("active"),y.classList.remove("active")}function w(){var e=n.selectedNewsIndex,t=n.news[e];n.started=!0;var a=document.querySelector("button.active");if(null!==a){var c=s.querySelector('[news-index="'+e+'"]');c&&c.classList.add("posted");var i=n.penguins.find(function(e){return"player"===e.type});i.state="speaking",i.speakFrame=0;var l=n.started?n.entities.length-1:0;if(l<100&&(E=.1),l>100&&(E=.15),l>400&&(E=.2),E=.5,t.fake)n.relevance-=.5;else{var o=t.theme;parseInt(d.value);console.log(E),o===a.id&&(n.relevance+=E)}}}function k(){var e=n.newsIndex,t=n.news[e],a=s.querySelector(".old");a&&a.remove();var c=s.querySelector(".block.one");c&&(c.classList.remove("one"),c.classList.add("old"));var i=s.querySelector(".block.two");i&&(i.classList.add("one"),i.classList.remove("two"));var l=s.querySelector(".block.three");l&&(l.classList.add("two"),l.classList.remove("three"));var d=document.createElement("div");d.className="block new",d.setAttribute("news-index",""+e);var o=document.createElement("h3");o.innerText=t.title;var r=document.createElement("p");r.innerText=t.content,d.appendChild(o),d.appendChild(r),s.appendChild(d),setTimeout(function(){d.className="block three",d.onclick=function(){n.selectedNewsIndex=e,b()}}),n.newsIndex+=1,n.newsIndex>=n.news.length&&(n.newsIndex=0)}function b(){var e=n.selectedNewsIndex,t=n.news[e],s=document.createElement("div");s.className="block new";var i=document.createElement("h3");i.innerText=t.title;var l=document.createElement("p");l.innerText=t.content,s.appendChild(i),s.appendChild(l),o.innerHTML="",o.appendChild(s),L.disabled=!0,a.style.top="32px",c.style.opacity="1",c.style.pointerEvents="auto",n.element.style.transform="scale(2) translateY(-32px)",n.paused=!0}function h(){L.disabled=!0,a.style.top="100%",c.style.opacity="0",i.style.display="none",c.style.pointerEvents="none",n.element.style.transform="scale(1)",n.paused=!1,g()}t.requestInterval(function(){l.innerText=t.numberWithCommas(n.fish)},100),t.requestInterval(function(){n.paused||k()},2e3),t.requestInterval(function(){var e=Math.floor(50*n.relevance);e>100&&(e=100),f.style.width=e+"%",f.style.backgroundColor=e<30?"#f35858":e>70?"#5ef358":"#5893f3"},100),L.addEventListener("click",function(){w(),h()}),c.addEventListener("click",function(){h()}),window.addEventListener("keydown",function(e){"Escape"===e.key&&(n.paused?(n.paused=!1,h()):(n.paused=!0,i.style.display="block",c.style.opacity="1",c.style.pointerEvents="auto"))}),r.addEventListener("click",function(){g(),L.disabled=!1,r.classList.contains("active")?r.classList.remove("active"):r.classList.add("active")}),v.addEventListener("click",function(){g(),L.disabled=!1,v.classList.contains("active")?v.classList.remove("active"):v.classList.add("active")}),u.addEventListener("click",function(){g(),L.disabled=!1,u.classList.contains("active")?u.classList.remove("active"):u.classList.add("active")}),m.addEventListener("click",function(){g(),L.disabled=!1,m.classList.contains("active")?m.classList.remove("active"):m.classList.add("active")}),p.addEventListener("click",function(){g(),L.disabled=!1,p.classList.contains("active")?p.classList.remove("active"):p.classList.add("active")}),y.addEventListener("click",function(){g(),L.disabled=!1,y.classList.contains("active")?y.classList.remove("active"):y.classList.add("active")});
},{"./state":"G3dB","./utils":"hIne"}],"dnrf":[function(require,module,exports) {
var define;
var e;!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof e&&e.amd?e(n):t.Stats=n()}(this,function(){var e=function(){function t(e){return i.appendChild(e.dom),e}function n(e){for(var t=0;t<i.children.length;t++)i.children[t].style.display=t===e?"block":"none";l=e}var l=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",function(e){e.preventDefault(),n(++l%i.children.length)},!1);var a=(performance||Date).now(),o=a,r=0,f=t(new e.Panel("FPS","#0ff","#002")),c=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=t(new e.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:i,addPanel:t,showPanel:n,begin:function(){a=(performance||Date).now()},end:function(){r++;var e=(performance||Date).now();if(c.update(e-a,200),e>o+1e3&&(f.update(1e3*r/(e-o),100),o=e,r=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:i,setMode:n}};return e.Panel=function(e,t,n){var l=1/0,i=0,a=Math.round,o=a(window.devicePixelRatio||1),r=80*o,f=48*o,c=3*o,d=2*o,p=3*o,u=15*o,s=74*o,m=30*o,h=document.createElement("canvas");h.width=r,h.height=f,h.style.cssText="width:80px;height:48px";var v=h.getContext("2d");return v.font="bold "+9*o+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=n,v.fillRect(0,0,r,f),v.fillStyle=t,v.fillText(e,c,d),v.fillRect(p,u,s,m),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(p,u,s,m),{dom:h,update:function(f,y){l=Math.min(l,f),i=Math.max(i,f),v.fillStyle=n,v.globalAlpha=1,v.fillRect(0,0,r,u),v.fillStyle=t,v.fillText(a(f)+" "+e+" ("+a(l)+"-"+a(i)+")",c,d),v.drawImage(h,p+o,u,s-o,m,p,u,s-o,m),v.fillRect(p+s-o,u,o,m),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(p+s-o,u,o,a((1-f/y)*m))}}},e});
},{}],"gnKw":[function(require,module,exports) {
module.exports="/fish-shadow.14f346a6.png";
},{}],"N76B":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Fish=void 0;var e=require("../state"),i=require("../utils"),h=t(require("../../sprites/fish-shadow.png")),s=i.loadImage(h.default),r=e.State(),n=document.getElementById("fish"),a=function(){function t(t,e){this.type="fish",this.spriteHeight=92,this.spriteWidth=92,this.x=t,this.y=e,this.spawnY=e,this.frame=0,this.exists=!0,this.width=this.spriteWidth,this.height=this.spriteHeight,this.collected=!1,this.x<128&&(this.x=128),this.x>r.element.width-128&&(this.x=r.element.width-128)}return t.prototype.draw=function(){var t=r.ctx;if(!1!==this.exists){var e=i.convertRange(this.spawnY,{min:0,max:r.element.height},{min:0,max:2}),h=i.convertRange(this.y,{min:0,max:r.element.height},{min:r.element.height/5,max:r.element.height});t.save(),t.translate(this.x,h),t.scale(e,e),t.drawImage(s,-this.width/2,-this.height/2,this.width,this.height),t.restore()}},t.prototype.update=function(){if(!1!==this.exists){if(this.frame+=1,!this.collected){if(this.frame<50){var t=i.convertRange(this.spawnY-512,{min:0,max:r.element.height},{min:r.element.height/5,max:r.element.height});this.y=i.lerp(this.y,t,.05)}if(this.frame>200)return this.width=i.lerp(this.width,0,.2),this.height=i.lerp(this.height,0,.2),void(this.width<16&&(this.exists=!1));if(!(r.mouseX<=this.x+64&&r.mouseX>=this.x-64))return;this.collected=!0}this.y<64&&(this.width=i.lerp(this.width,0,.1),this.height=i.lerp(this.height,0,.1));var e=r.element.width/2,h=0-r.element.height/5;this.x=i.lerp(this.x,e,.1),this.y=i.lerp(this.y,h,.1),this.width<16&&(this.exists=!1,r.fish+=1,n.className="added",setTimeout(function(){n.className=""},50))}},t}();exports.Fish=a;
},{"../state":"G3dB","../utils":"hIne","../../sprites/fish-shadow.png":"gnKw"}],"aYiE":[function(require,module,exports) {
module.exports="/penguin-left.d7613f7b.png";
},{}],"UN3O":[function(require,module,exports) {
module.exports="/penguin-right.e5afec6e.png";
},{}],"DPpk":[function(require,module,exports) {
module.exports="/speech_bubble.72d410ef.png";
},{}],"NgjU":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Penguin=void 0;var i=require("./fish"),e=require("../state"),h=require("../utils"),s=t(require("../../sprites/penguin-left.png")),r=t(require("../../sprites/penguin-right.png")),n=t(require("../../sprites/speech_bubble.png")),a=h.loadImage(s.default),g=h.loadImage(r.default),p=h.loadImage(n.default),m=e.State(),d=function(){function t(t,i){this.type="penguin",this.spriteHeight=92,this.spriteWidth=92,this.message="",this.x=t,this.y=i,this.state="spawning",this.frame=h.randomInteger(0,20),this.direction=h.randomInteger(0,1)?"left":"right",this.width=this.spriteWidth/2,this.height=0,this.exists=!0,this.involvement=h.randomInteger(75,125),this.spawnFrame=h.randomInteger(0,200)}return t.prototype.draw=function(){var t=m.ctx;if(m.started&&this.exists){var i="left"===this.direction?a:g,e=h.convertRange(this.y,{min:0,max:m.element.height},{min:0,max:2}),s=h.convertRange(this.y,{min:0,max:m.element.height},{min:m.element.height/5,max:m.element.height});e<0||(t.save(),t.translate(this.x,s),t.scale(e,e),t.drawImage(i,-this.width/2,18-this.height,this.width,this.height),t.restore())}},t.prototype.update=function(){var t=m.element.width,e=m.element.height;if(m.started&&this.exists){if(this.involvement-=.05,m.relevance<=.5&&(this.involvement-=.05),m.relevance>=1&&(this.involvement+=.02),this.involvement<=0&&(this.state="leaving"),300===this.spawnFrame&&"walking"===this.state){var s=new i.Fish(this.x,this.y-1);m.entities.push(s)}this.frame+=1,this.frame>20&&(this.frame=0),this.spawnFrame+=1,this.spawnFrame>300&&(this.spawnFrame=0),"speaking"===this.state&&(this.frame+=.5,this.height=this.frame>=10?h.lerp(this.height,this.spriteHeight-16,.2):h.lerp(this.height,this.spriteHeight+16,.2),this.width=this.frame>=10?h.lerp(this.width,this.spriteWidth+8,.2):h.lerp(this.width,this.spriteWidth,.2)),"walking"===this.state&&(this.height=this.frame>=10?h.lerp(this.height,this.spriteHeight-24,.3):h.lerp(this.height,this.spriteHeight+4,.3),this.width=this.frame>=10?h.lerp(this.width,this.spriteWidth+16,.2):h.lerp(this.width,this.spriteWidth-4,.2),"left"===this.direction?(this.x-=h.convertRange(this.y,{min:0,max:e},{min:0,max:2}),this.x<=-this.width&&(this.x=t+this.width)):(this.x+=h.convertRange(this.y,{min:0,max:e},{min:0,max:2}),this.x>=t+this.width&&(this.x=-this.width))),"spawning"===this.state&&(this.width=h.lerp(this.width,this.spriteWidth,.1),this.height=h.lerp(this.height,this.spriteHeight,.1)+.1,this.height>=this.spriteHeight&&(this.state="walking",this.width=this.spriteWidth,this.height=this.spriteHeight)),"leaving"===this.state&&(this.width=h.lerp(this.width,0,.05),this.height=h.lerp(this.height,0,.1)-.05,this.height<=10&&(this.exists=!1))}},t}();exports.Penguin=d;
},{"./fish":"N76B","../state":"G3dB","../utils":"hIne","../../sprites/penguin-left.png":"aYiE","../../sprites/penguin-right.png":"UN3O","../../sprites/speech_bubble.png":"DPpk"}],"tfSq":[function(require,module,exports) {
module.exports="/stone.3472d47b.png";
},{}],"WISO":[function(require,module,exports) {
module.exports="/main-penguin.9124c1d0.png";
},{}],"SVjc":[function(require,module,exports) {
module.exports="/main-penguin-loudspeaker.1117fe6f.png";
},{}],"ld7h":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Player=void 0;var e=require("../state"),i=require("../utils"),h=t(require("../../sprites/stone.png")),s=t(require("../../sprites/main-penguin.png")),n=t(require("../../sprites/main-penguin-loudspeaker.png")),r=i.loadImage(h.default),p=i.loadImage(s.default),a=i.loadImage(n.default),g=e.State(),u=function(){function t(){this.type="player",this.stoneSpriteHeight=200,this.stoneSpriteWidth=400,this.penguinSpriteHeight=120,this.penguinSpriteWidth=120,this.penguinOffsetX=48,this.penguinOffsetY=-60,this.x=g.element.width/2,this.y=g.element.height/1.75,this.width=this.penguinSpriteWidth,this.height=this.penguinSpriteHeight,this.exists=!0,this.frame=0,this.speakFrame=0,this.state="idle"}return t.prototype.draw=function(){var t=g.ctx,e=i.convertRange(this.y,{min:0,max:g.element.height},{min:0,max:2}),h=i.convertRange(this.y,{min:0,max:g.element.height},{min:g.element.height/5,max:g.element.height}),s="speaking"===this.state?a:p;t.save(),t.translate(this.x,h),t.scale(e,e),t.drawImage(r,-this.stoneSpriteWidth/2,48-this.stoneSpriteHeight,this.stoneSpriteWidth,this.stoneSpriteHeight),t.drawImage(s,-this.width/2+this.penguinOffsetX,-(this.height+16)+this.penguinOffsetY,this.width,this.height),t.restore()},t.prototype.update=function(){this.x=Math.floor(g.element.width/2),this.y=Math.floor(g.element.height/1.75),this.frame+=1,this.frame>100&&(this.frame=0),"idle"===this.state&&(this.frame>50?(this.height=i.lerp(this.height,this.penguinSpriteHeight,.05),this.width=i.lerp(this.width,this.penguinSpriteWidth,.05)):(this.height=i.lerp(this.height,this.penguinSpriteHeight-16,.05),this.width=i.lerp(this.width,this.penguinSpriteWidth+8,.05))),"speaking"===this.state&&(this.frame+=8,this.speakFrame+=1,this.frame>50?(this.height=i.lerp(this.height,this.penguinSpriteHeight+16,.1),this.width=i.lerp(this.width,this.penguinSpriteWidth-8,.1)):(this.height=i.lerp(this.height,this.penguinSpriteHeight-32,.1),this.width=i.lerp(this.width,this.penguinSpriteWidth+16,.1))),this.speakFrame>150&&(this.speakFrame=0,this.state="idle")},t}();exports.Player=u;
},{"../state":"G3dB","../utils":"hIne","../../sprites/stone.png":"tfSq","../../sprites/main-penguin.png":"WISO","../../sprites/main-penguin-loudspeaker.png":"SVjc"}],"Yu7U":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("stats.js")),n=require("./state"),i=require("./utils"),r=require("./entities/penguin"),s=require("./entities/player"),u=new t.default;u.showPanel(0);for(var o=n.State(),a=0;a<20;a++){var l=i.randomInteger(0,o.element.width),g=i.randomInteger(o.element.height/3,o.element.height-64),d=new r.Penguin(l,g);o.penguins.push(d)}var p=new s.Player;function m(){if(o.paused)window.requestAnimationFrame(m);else{u.begin();for(var e=0;e<o.penguins.length;e++)o.penguins[e].update();for(e=0;e<o.entities.length;e++)o.entities[e].update();o.penguins=o.penguins.filter(function(e){return e.exists}),o.entities=o.entities.filter(function(e){return e.exists}),o.ctx.clearRect(0,0,o.element.width,o.element.height);for(e=0;e<o.penguins.length;e++)o.penguins[e].draw();for(e=0;e<o.entities.length;e++)o.entities[e].draw();console.log(o.penguins.length),u.end(),window.requestAnimationFrame(m)}}o.penguins.push(p),i.insertionSort(o.penguins,"y");var c=document.getElementById("overlay");c.style.opacity="1",document.getElementById("start-button").onclick=function(){m(),o.paused=!1,c.style.opacity="0",document.getElementById("start-menu").remove()};
},{"stats.js":"dnrf","./state":"G3dB","./utils":"hIne","./entities/penguin":"NgjU","./entities/player":"ld7h"}],"tRIU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./entities/penguin"),n=require("./state"),r=require("./utils"),t=n.State();r.requestInterval(function(){t.paused||t.started&&(t.relevance-=.03,t.relevance>1.2&&(t.relevance-=.02),t.relevance<0&&(t.relevance=0),t.relevance>2&&(t.relevance=2))},1e3),r.requestInterval(function(){if(!t.paused&&t.started){var n=t.entities.length/5,a=Math.floor(n*t.relevance)-n;t.relevance>1&&(a+=1);for(var i=0;i<a;i++){var l=r.randomInteger(0,t.element.width),s=r.randomInteger(t.element.height/3,t.element.height-64),u=new e.Penguin(l,s);t.penguins.push(u)}r.insertionSort(t.penguins,"y")}},1e3);
},{"./entities/penguin":"NgjU","./state":"G3dB","./utils":"hIne"}],"QCba":[function(require,module,exports) {
"use strict";var e=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var i=Array(e),n=0;for(r=0;r<t;r++)for(var s=arguments[r],o=0,u=s.length;o<u;o++,n++)i[n]=s[o];return i};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./core/state"),t=require("./core/utils"),i=require("./content.json"),n=document.getElementById("stage");n.width=window.innerWidth*window.devicePixelRatio,n.height=window.innerHeight*window.devicePixelRatio;var s=n.getContext("2d");r.State({paused:!0,element:n,ctx:s,mouseX:0,mouseY:0,mouseDown:!1,entities:[],penguins:[],started:!1,fish:0,relevance:1,news:t.shuffle(e(i.real_news,i.fake_news)),newsIndex:0,selectedNewsIndex:0}),require("./core/input"),require("./core/gui"),require("./core/main"),require("./core/timers");
},{"./core/state":"G3dB","./core/utils":"hIne","./content.json":"BHZy","./core/input":"n6mK","./core/gui":"TbCJ","./core/main":"Yu7U","./core/timers":"tRIU"}]},{},["QCba"], null)
//# sourceMappingURL=/src.d7e5bc68.js.map
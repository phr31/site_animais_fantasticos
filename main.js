/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={633:(t,e,n)=>{var o=n(738).default;function r(){"use strict";t.exports=r=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function v(t,e,n,o){var r=e&&e.prototype instanceof w?e:w,i=Object.create(r.prototype),a=new D(o||[]);return s(i,"_invoke",{value:O(t,n,a)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=v;var p="suspendedStart",y="suspendedYield",m="executing",g="completed",b={};function w(){}function L(){}function M(){}var E={};f(E,u,(function(){return this}));var k=Object.getPrototypeOf,x=k&&k(k(C([])));x&&x!==i&&a.call(x,u)&&(E=x);var S=M.prototype=w.prototype=Object.create(E);function T(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function n(r,i,s,c){var u=d(t[r],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==o(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var r;s(this,"_invoke",{value:function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}})}function O(t,n,o){var r=p;return function(i,a){if(r===m)throw Error("Generator is already running");if(r===g){if("throw"===i)throw a;return{value:e,done:!0}}for(o.method=i,o.arg=a;;){var s=o.delegate;if(s){var c=j(s,o);if(c){if(c===b)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===p)throw r=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=m;var u=d(t,n,o);if("normal"===u.type){if(r=o.done?g:y,u.arg===b)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(r=g,o.method="throw",o.arg=u.arg)}}}function j(t,n){var o=n.method,r=t.iterator[o];if(r===e)return n.delegate=null,"throw"===o&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),b;var i=d(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(a.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(o(t)+" is not iterable")}return L.prototype=M,s(S,"constructor",{value:M,configurable:!0}),s(M,"constructor",{value:L,configurable:!0}),L.displayName=f(M,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,f(t,h,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},T(A.prototype),f(A.prototype,l,(function(){return this})),n.AsyncIterator=A,n.async=function(t,e,o,r,i){void 0===i&&(i=Promise);var a=new A(v(t,e,o,r),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(S),f(S,h,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},n.values=C,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(o,r){return s.type="throw",s.arg=t,n.next=o,r&&(n.method="next",n.arg=e),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;q(n)}return r}}throw Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:C(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=e),b}},n}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},738:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},756:(t,e,n)=>{var o=n(633)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var a=function(){return i((function e(n,o){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.scrollToSection=this.scrollToSection.bind(this)}),[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",(function(e){return t.scrollToSection(e)}))}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}])}(),s=function(){return i((function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}),[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent())}}])}(),c=function(){return i((function e(n,o){t(this,e),this.tabMenu=document.querySelectorAll(n),this.tabContent=document.querySelectorAll(o),this.activeClass="ativo"}),[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){e.addEventListener("click",(function(){t.activeTab(n)}))}))}},{key:"init",value:function(){this.tabMenu.length&&this.tabContent.length&&(this.activeTab[0],this.addTabNavEvent())}}])}(),u=function(){return i((function e(n,o,r){t(this,e),this.botaoAbrir=document.querySelector(n),this.botaoFechar=document.querySelector(o),this.containerModal=document.querySelector(r),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}),[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"cliqueForaModal",value:function(t){t.target===this.containerModal&&this.toggleModal()}},{key:"addModalEvent",value:function(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}},{key:"init",value:function(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvent(),this}}])}(),l=function(){return i((function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}),[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX+190,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",this.onMouseLeave),this.element.removeEventListener("mousemove",this.onMouseMove)}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipEvent",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipEvent(),this}}])}();function h(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){h(i,o,r,a,s,"next",t)}function s(t){h(i,o,r,a,s,"throw",t)}a(void 0)}))}}var v=n(756),d=n.n(v),p=function(){return i((function e(n,o,r){t(this,e),this.numeros=document.querySelectorAll(n),this.observerClass=o,this.observerTarget=document.querySelector(r),this.handleMutation=this.handleMutation.bind(this)}),[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=Math.floor(e/100),o=0,r=setInterval((function(){o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(r))}),25*Math.random())}}])}();function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var m=function(){return i((function e(n){var o,r;t(this,e),this.sections=document.querySelectorAll(n),this.windowMetade=.6*window.innerHeight,this.checkDistance=(o=this.checkDistance.bind(this),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r&&clearTimeout(r),r=setTimeout((function(){o.apply(void 0,e),r=null}),100)}),this.active="ativo"}),[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.windowMetade)}}))}},{key:"checkDistance",value:function(){var t=this;this.distance.forEach((function(e){window.pageYOffset>e.offset?e.element.classList.add(t.active):e.element.classList.contains(t.active)&&e.element.classList.remove(t.active)}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}])}();function g(t,e,n){var o=document.documentElement,r="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){o.removeEventListener(t,i)})),n())}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){o.addEventListener(t,i)}))})),t.setAttribute(r,""))}var b=function(){return i((function e(n,o){t(this,e),this.dropdownMenus=document.querySelectorAll(n),this.active="active",this.events=void 0===o?["touchstart","click"]:o,this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}),[{key:"activeDropdownMenu",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.active),g(n,this.events,(function(){n.classList.remove(e.active)}))}},{key:"addDropdownMenusEvent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropdownMenu)}))}))}},{key:"init",value:function(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}])}(),w=function(){return i((function e(n,o,r){t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(o),this.active="active",this.openMenu=this.openMenu.bind(this),this.events=void 0===r?["click","touchstart"]:r}),[{key:"openMenu",value:function(){var t=this;this.menuList.classList.add(this.active),this.menuButton.classList.add(this.active),g(this.menuList,this.events,(function(){t.menuList.classList.remove(t.active),t.menuButton.classList.remove(t.active)}))}},{key:"addMenuMobileEvents",value:function(){var t=this;this.events.forEach((function(e){t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}])}(),L=function(){return i((function e(n){t(this,e),this.funcionamento=document.querySelector(n),this.active="aberto"}),[{key:"dadosFuncionamento",value:function(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}},{key:"dadosAgora",value:function(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}},{key:"estaAberto",value:function(){var t=-1!==this.diasSemana.indexOf(this.diaAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&e}},{key:"ativaAberto",value:function(){this.estaAberto()&&this.funcionamento.classList.add(this.active)}},{key:"init",value:function(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.ativaAberto()),console.log(this),this}}])}();new a('[data-menu="suave"] a[href^="#"]').init(),new s('[data-anime="accordion"] dt').init(),new c('[data-tab="menu"] li','[data-tab="content"] section').init(),new u('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new l("[data-tooltip]").init(),function(t,e){var n=document.querySelector(".numeros-grid");function o(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}function r(){return(r=f(d().mark((function t(){var e;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("../../animaisapi.json");case 3:return e=t.sent,t.next=6,e.json();case 6:t.sent.forEach((function(t){o(t)})),new p("[data-numero]","ativo",".numeros").init(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(Error(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}(),new m('[data-anime="scroll"]').init(),new b("[data-dropdown]").init(),new w('[data-menu="button"]','[data-menu="list"]').init(),new L("[data-semana]").init(),function(t,e){function n(){return(n=f(d().mark((function t(){var e,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://blockchain.info/ticker");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,document.querySelector(".btc-preco").innerText=(1e3/n.BRL.sell).toFixed(4),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(Error(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}()})()})();
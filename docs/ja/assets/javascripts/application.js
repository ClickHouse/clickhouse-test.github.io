(function(e,a){for(var i in a)e[i]=a[i];}(window,(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}
};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter
});}
};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=6);})
([(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;exports.default={createElement:function createElement(tag,properties){var el=document.createElement(tag);if(properties)Array.prototype.forEach.call(Object.keys(properties),function(attr){el.setAttribute(attr,properties[attr]);});var iterateChildNodes=function iterateChildNodes(nodes){Array.prototype.forEach.call(nodes,function(node){if(typeof node==="string"||typeof node==="number"){el.textContent+=node;}else if(Array.isArray(node)){iterateChildNodes(node);}else if(typeof node.__html!=="undefined"){el.innerHTML+=node.__html;}else if(node instanceof Node){el.appendChild(node);}});};for(var _len=arguments.length,children=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){children[_key-2]=arguments[_key];}
iterateChildNodes(children);return el;}};module.exports=exports.default;}),(function(module,exports){var g;g=(function(){return this;})();try{g=g||Function("return this")()||(1,eval)("this");}catch(e){if(typeof window==="object")
g=window;}
module.exports=g;}),(function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var index=typeof fetch=='function'?fetch.bind():function(url,options){options=options||{};return new Promise(function(resolve,reject){var request=new XMLHttpRequest();request.open(options.method||'get',url);for(var i in options.headers){request.setRequestHeader(i,options.headers[i]);}
request.withCredentials=options.credentials=='include';request.onload=function(){resolve(response());};request.onerror=reject;request.send(options.body);function response(){var keys=[],all=[],headers={},header;request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(m,key,value){keys.push(key=key.toLowerCase());all.push([key,value]);header=headers[key];headers[key]=header?(header+","+value):value;});return{ok:(request.status/200|0)==1,status:request.status,statusText:request.statusText,url:request.responseURL,clone:response,text:function(){return Promise.resolve(request.responseText);},json:function(){return Promise.resolve(request.responseText).then(JSON.parse);},blob:function(){return Promise.resolve(new Blob([request.response]));},headers:{keys:function(){return keys;},entries:function(){return all;},get:function(n){return headers[n.toLowerCase()];},has:function(n){return n.toLowerCase()in headers;}}};}});};__webpack_exports__["default"]=(index);}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Listener=function(){function Listener(els,events,handler){var _this=this;_classCallCheck(this,Listener);this.els_=Array.prototype.slice.call(typeof els==="string"?document.querySelectorAll(els):[].concat(els));this.handler_=typeof handler==="function"?{update:handler}:handler;this.events_=[].concat(events);this.update_=function(ev){return _this.handler_.update(ev);};}
Listener.prototype.listen=function listen(){var _this2=this;this.els_.forEach(function(el){_this2.events_.forEach(function(event){el.addEventListener(event,_this2.update_,false);});});if(typeof this.handler_.setup==="function")this.handler_.setup();};Listener.prototype.unlisten=function unlisten(){var _this3=this;this.els_.forEach(function(el){_this3.events_.forEach(function(event){el.removeEventListener(event,_this3.update_);});});if(typeof this.handler_.reset==="function")this.handler_.reset();};return Listener;}();exports.default=Listener;}),,,(function(module,exports,__webpack_require__){"use strict";(function(JSX){exports.__esModule=true;exports.app=undefined;__webpack_require__(7);__webpack_require__(8);__webpack_require__(9);__webpack_require__(10);__webpack_require__(11);__webpack_require__(12);__webpack_require__(13);var _promisePolyfill=__webpack_require__(14);var _promisePolyfill2=_interopRequireDefault(_promisePolyfill);var _clipboard=__webpack_require__(19);var _clipboard2=_interopRequireDefault(_clipboard);var _fastclick=__webpack_require__(20);var _fastclick2=_interopRequireDefault(_fastclick);var _Material=__webpack_require__(21);var _Material2=_interopRequireDefault(_Material);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
window.Promise=window.Promise||_promisePolyfill2.default;var translate=function translate(key){var meta=document.getElementsByName("lang:"+key)[0];if(!(meta instanceof HTMLMetaElement))throw new ReferenceError();return meta.content;};function initialize(config){new _Material2.default.Event.Listener(document,"DOMContentLoaded",function(){if(!(document.body instanceof HTMLElement))throw new ReferenceError();_fastclick2.default.attach(document.body);Modernizr.addTest("ios",function(){return!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);});var tables=document.querySelectorAll("table:not([class])");Array.prototype.forEach.call(tables,function(table){var wrap=JSX.createElement("div",{"class":"md-typeset__scrollwrap"},JSX.createElement("div",{"class":"md-typeset__table"}));if(table.nextSibling){table.parentNode.insertBefore(wrap,table.nextSibling);}else{table.parentNode.appendChild(wrap);}
wrap.children[0].appendChild(table);});if(_clipboard2.default.isSupported()){var blocks=document.querySelectorAll(".codehilite > pre, pre > code");Array.prototype.forEach.call(blocks,function(block,index){var id="__code_"+index;var button=JSX.createElement("button",{"class":"md-clipboard",title:translate("clipboard.copy"),"data-clipboard-target":"#"+id+" pre, #"+id+" code"},JSX.createElement("span",{"class":"md-clipboard__message"}));var parent=block.parentNode;parent.id=id;parent.insertBefore(button,block);});var copy=new _clipboard2.default(".md-clipboard");copy.on("success",function(action){var message=action.trigger.querySelector(".md-clipboard__message");if(!(message instanceof HTMLElement))throw new ReferenceError();action.clearSelection();if(message.dataset.mdTimer)clearTimeout(parseInt(message.dataset.mdTimer,10));message.classList.add("md-clipboard__message--active");message.innerHTML=translate("clipboard.copied");message.dataset.mdTimer=setTimeout(function(){message.classList.remove("md-clipboard__message--active");message.dataset.mdTimer="";},2000).toString();});}
if(!Modernizr.details){var _blocks=document.querySelectorAll("details > summary");Array.prototype.forEach.call(_blocks,function(summary){summary.addEventListener("click",function(ev){var details=ev.target.parentNode;if(details.hasAttribute("open")){details.removeAttribute("open");}else{details.setAttribute("open","");}});});}
var details=function details(){if(document.location.hash){var el=document.getElementById(document.location.hash.substring(1));if(!el)return;var parent=el.parentNode;while(parent&&!(parent instanceof HTMLDetailsElement)){parent=parent.parentNode;}
if(parent&&!parent.open){parent.open=true;var loc=location.hash;location.hash=" ";location.hash=loc;}}};window.addEventListener("hashchange",details);details();if(Modernizr.ios){var scrollable=document.querySelectorAll("[data-md-scrollfix]");Array.prototype.forEach.call(scrollable,function(item){item.addEventListener("touchstart",function(){var top=item.scrollTop;if(top===0){item.scrollTop=1;}else if(top+item.offsetHeight===item.scrollHeight){item.scrollTop=top-1;}});});}}).listen();new _Material2.default.Event.Listener(window,["scroll","resize","orientationchange"],new _Material2.default.Header.Shadow("[data-md-component=container]","[data-md-component=header]")).listen();new _Material2.default.Event.Listener(window,["scroll","resize","orientationchange"],new _Material2.default.Header.Title("[data-md-component=title]",".md-typeset h1")).listen();if(document.querySelector("[data-md-component=hero]"))new _Material2.default.Event.Listener(window,["scroll","resize","orientationchange"],new _Material2.default.Tabs.Toggle("[data-md-component=hero]")).listen();if(document.querySelector("[data-md-component=tabs]"))new _Material2.default.Event.Listener(window,["scroll","resize","orientationchange"],new _Material2.default.Tabs.Toggle("[data-md-component=tabs]")).listen();new _Material2.default.Event.MatchMedia("(min-width: 1220px)",new _Material2.default.Event.Listener(window,["scroll","resize","orientationchange"],new _Material2.default.Sidebar.Position("[data-md-component=navigation]","[data-md-component=header]")));if(document.querySelector("[data-md-component=toc]"))new _Material2.default.Event.MatchMedia("(min-width: 960px)",new _Material2.default.Event.Listener(window,["scroll","resize","orientationchange"],new _Material2.default.Sidebar.Position("[data-md-component=toc]","[data-md-component=header]")));new _Material2.default.Event.MatchMedia("(min-width: 960px)",new _Material2.default.Event.Listener(window,"scroll",new _Material2.default.Nav.Blur("[data-md-component=toc] [href]")));var collapsibles=document.querySelectorAll("[data-md-component=collapsible]");Array.prototype.forEach.call(collapsibles,function(collapse){new _Material2.default.Event.MatchMedia("(min-width: 1220px)",new _Material2.default.Event.Listener(collapse.previousElementSibling,"click",new _Material2.default.Nav.Collapse(collapse)));});new _Material2.default.Event.MatchMedia("(max-width: 1219px)",new _Material2.default.Event.Listener("[data-md-component=navigation] [data-md-toggle]","change",new _Material2.default.Nav.Scrolling("[data-md-component=navigation] nav")));if(document.querySelector("[data-md-component=search]")){new _Material2.default.Event.MatchMedia("(max-width: 959px)",new _Material2.default.Event.Listener("[data-md-toggle=search]","change",new _Material2.default.Search.Lock("[data-md-toggle=search]")));new _Material2.default.Event.Listener("[data-md-component=query]",["focus","keyup","change"],new _Material2.default.Search.Result("[data-md-component=result]",function(){return fetch(config.url.base+"/"+(config.version<"0.17"?"mkdocs":"search")+"/search_index.json",{credentials:"same-origin"}).then(function(response){return response.json();}).then(function(data){return data.docs.map(function(doc){doc.location=config.url.base+"/"+doc.location;return doc;});});})).listen();new _Material2.default.Event.Listener("[data-md-component=reset]","click",function(){setTimeout(function(){var query=document.querySelector("[data-md-component=query]");if(!(query instanceof HTMLInputElement))throw new ReferenceError();query.focus();},10);}).listen();new _Material2.default.Event.Listener("[data-md-toggle=search]","change",function(ev){setTimeout(function(toggle){if(!(toggle instanceof HTMLInputElement))throw new ReferenceError();if(toggle.checked){var query=document.querySelector("[data-md-component=query]");if(!(query instanceof HTMLInputElement))throw new ReferenceError();query.focus();}},400,ev.target);}).listen();new _Material2.default.Event.MatchMedia("(min-width: 960px)",new _Material2.default.Event.Listener("[data-md-component=query]","focus",function(){var toggle=document.querySelector("[data-md-toggle=search]");if(!(toggle instanceof HTMLInputElement))throw new ReferenceError();if(!toggle.checked){toggle.checked=true;toggle.dispatchEvent(new CustomEvent("change"));}}));new _Material2.default.Event.Listener(window,"keydown",function(ev){var toggle=document.querySelector("[data-md-toggle=search]");if(!(toggle instanceof HTMLInputElement))throw new ReferenceError();var query=document.querySelector("[data-md-component=query]");if(!(query instanceof HTMLInputElement))throw new ReferenceError();if(ev.metaKey||ev.ctrlKey)return;if(toggle.checked){if(ev.keyCode===13){if(query===document.activeElement){ev.preventDefault();var focus=document.querySelector("[data-md-component=search] [href][data-md-state=active]");if(focus instanceof HTMLLinkElement){window.location=focus.getAttribute("href");toggle.checked=false;toggle.dispatchEvent(new CustomEvent("change"));query.blur();}}
}else if(ev.keyCode===9||ev.keyCode===27){toggle.checked=false;toggle.dispatchEvent(new CustomEvent("change"));query.blur();}else if([8,37,39].indexOf(ev.keyCode)!==-1){if(query!==document.activeElement)query.focus();}else if([38,40].indexOf(ev.keyCode)!==-1){var key=ev.keyCode;var links=Array.prototype.slice.call(document.querySelectorAll("[data-md-component=query], [data-md-component=search] [href]"));var _focus=links.find(function(link){if(!(link instanceof HTMLElement))throw new ReferenceError();return link.dataset.mdState==="active";});if(_focus)_focus.dataset.mdState="";var index=Math.max(0,(links.indexOf(_focus)+links.length+(key===38?-1:+1))%links.length);if(links[index]){links[index].dataset.mdState="active";links[index].focus();}
ev.preventDefault();ev.stopPropagation();return false;}
}else if(document.activeElement&&!document.activeElement.form){if(ev.keyCode===70||ev.keyCode===83){query.focus();ev.preventDefault();}}}).listen();new _Material2.default.Event.Listener(window,"keypress",function(){var toggle=document.querySelector("[data-md-toggle=search]");if(!(toggle instanceof HTMLInputElement))throw new ReferenceError();if(toggle.checked){var query=document.querySelector("[data-md-component=query]");if(!(query instanceof HTMLInputElement))throw new ReferenceError();if(query!==document.activeElement)query.focus();}}).listen();}
new _Material2.default.Event.Listener(document.body,"keydown",function(ev){if(ev.keyCode===9){var labels=document.querySelectorAll("[data-md-component=navigation] .md-nav__link[for]:not([tabindex])");Array.prototype.forEach.call(labels,function(label){if(label.offsetHeight)label.tabIndex=0;});}}).listen();new _Material2.default.Event.Listener(document.body,"mousedown",function(){var labels=document.querySelectorAll("[data-md-component=navigation] .md-nav__link[tabindex]");Array.prototype.forEach.call(labels,function(label){label.removeAttribute("tabIndex");});}).listen();document.body.addEventListener("click",function(){if(document.body.dataset.mdState==="tabbing")document.body.dataset.mdState="";});new _Material2.default.Event.MatchMedia("(max-width: 959px)",new _Material2.default.Event.Listener("[data-md-component=navigation] [href^='#']","click",function(){var toggle=document.querySelector("[data-md-toggle=drawer]");if(!(toggle instanceof HTMLInputElement))throw new ReferenceError();if(toggle.checked){toggle.checked=false;toggle.dispatchEvent(new CustomEvent("change"));}}))
;(function(){var el=document.querySelector("[data-md-source]");if(!el)return _promisePolyfill2.default.resolve([]);else if(!(el instanceof HTMLAnchorElement))throw new ReferenceError();switch(el.dataset.mdSource){case"github":return new _Material2.default.Source.Adapter.GitHub(el).fetch();default:return _promisePolyfill2.default.resolve([]);}
})().then(function(facts){var sources=document.querySelectorAll("[data-md-source]");Array.prototype.forEach.call(sources,function(source){new _Material2.default.Source.Repository(source).initialize(facts);});});}
var app={initialize:initialize};exports.app=app;}.call(exports,__webpack_require__(0)))
}),(function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"assets/images/icons/bitbucket.svg";}),(function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"assets/images/icons/github.svg";}),(function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"assets/images/icons/gitlab.svg";}),(function(module,exports){}),(function(module,exports){}),(function(module,exports){(function(){if(typeof window==='undefined'){return;}
try{var ce=new window.CustomEvent('test',{cancelable:true});ce.preventDefault();if(ce.defaultPrevented!==true){throw new Error('Could not prevent default');}}catch(e){var CustomEvent=function(event,params){var evt,origPrevent;params=params||{bubbles:false,cancelable:false,detail:undefined};evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);origPrevent=evt.preventDefault;evt.preventDefault=function(){origPrevent.call(this);try{Object.defineProperty(this,'defaultPrevented',{get:function(){return true;}});}catch(e){this.defaultPrevented=true;}};return evt;};CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;}})();}),(function(module,exports,__webpack_require__){if(!window.fetch)window.fetch=__webpack_require__(2).default||__webpack_require__(2);}),(function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});(function(setImmediate){var __WEBPACK_IMPORTED_MODULE_0__finally__=__webpack_require__(18);var setTimeoutFunc=setTimeout;function noop(){}
function bind(fn,thisArg){return function(){fn.apply(thisArg,arguments);};}
function Promise(fn){if(!(this instanceof Promise))
throw new TypeError('Promises must be constructed via new');if(typeof fn!=='function')throw new TypeError('not a function');this._state=0;this._handled=false;this._value=undefined;this._deferreds=[];doResolve(fn,this);}
function handle(self,deferred){while(self._state===3){self=self._value;}
if(self._state===0){self._deferreds.push(deferred);return;}
self._handled=true;Promise._immediateFn(function(){var cb=self._state===1?deferred.onFulfilled:deferred.onRejected;if(cb===null){(self._state===1?resolve:reject)(deferred.promise,self._value);return;}
var ret;try{ret=cb(self._value);}catch(e){reject(deferred.promise,e);return;}
resolve(deferred.promise,ret);});}
function resolve(self,newValue){try{if(newValue===self)
throw new TypeError('A promise cannot be resolved with itself.');if(newValue&&(typeof newValue==='object'||typeof newValue==='function')){var then=newValue.then;if(newValue instanceof Promise){self._state=3;self._value=newValue;finale(self);return;}else if(typeof then==='function'){doResolve(bind(then,newValue),self);return;}}
self._state=1;self._value=newValue;finale(self);}catch(e){reject(self,e);}}
function reject(self,newValue){self._state=2;self._value=newValue;finale(self);}
function finale(self){if(self._state===2&&self._deferreds.length===0){Promise._immediateFn(function(){if(!self._handled){Promise._unhandledRejectionFn(self._value);}});}
for(var i=0,len=self._deferreds.length;i<len;i++){handle(self,self._deferreds[i]);}
self._deferreds=null;}
function Handler(onFulfilled,onRejected,promise){this.onFulfilled=typeof onFulfilled==='function'?onFulfilled:null;this.onRejected=typeof onRejected==='function'?onRejected:null;this.promise=promise;}
function doResolve(fn,self){var done=false;try{fn(function(value){if(done)return;done=true;resolve(self,value);},function(reason){if(done)return;done=true;reject(self,reason);});}catch(ex){if(done)return;done=true;reject(self,ex);}}
Promise.prototype['catch']=function(onRejected){return this.then(null,onRejected);};Promise.prototype.then=function(onFulfilled,onRejected){var prom=new this.constructor(noop);handle(this,new Handler(onFulfilled,onRejected,prom));return prom;};Promise.prototype['finally']=__WEBPACK_IMPORTED_MODULE_0__finally__["a"];Promise.all=function(arr){return new Promise(function(resolve,reject){if(!arr||typeof arr.length==='undefined')
throw new TypeError('Promise.all accepts an array');var args=Array.prototype.slice.call(arr);if(args.length===0)return resolve([]);var remaining=args.length;function res(i,val){try{if(val&&(typeof val==='object'||typeof val==='function')){var then=val.then;if(typeof then==='function'){then.call(val,function(val){res(i,val);},reject);return;}}
args[i]=val;if(--remaining===0){resolve(args);}}catch(ex){reject(ex);}}
for(var i=0;i<args.length;i++){res(i,args[i]);}});};Promise.resolve=function(value){if(value&&typeof value==='object'&&value.constructor===Promise){return value;}
return new Promise(function(resolve){resolve(value);});};Promise.reject=function(value){return new Promise(function(resolve,reject){reject(value);});};Promise.race=function(values){return new Promise(function(resolve,reject){for(var i=0,len=values.length;i<len;i++){values[i].then(resolve,reject);}});};Promise._immediateFn=(typeof setImmediate==='function'&&function(fn){setImmediate(fn);})||function(fn){setTimeoutFunc(fn,0);};Promise._unhandledRejectionFn=function _unhandledRejectionFn(err){if(typeof console!=='undefined'&&console){console.warn('Possible Unhandled Promise Rejection:',err);}};__webpack_exports__["default"]=(Promise);}.call(__webpack_exports__,__webpack_require__(15).setImmediate))
}),(function(module,exports,__webpack_require__){(function(global){var apply=Function.prototype.apply;exports.setTimeout=function(){return new Timeout(apply.call(setTimeout,window,arguments),clearTimeout);};exports.setInterval=function(){return new Timeout(apply.call(setInterval,window,arguments),clearInterval);};exports.clearTimeout=exports.clearInterval=function(timeout){if(timeout){timeout.close();}};function Timeout(id,clearFn){this._id=id;this._clearFn=clearFn;}
Timeout.prototype.unref=Timeout.prototype.ref=function(){};Timeout.prototype.close=function(){this._clearFn.call(window,this._id);};exports.enroll=function(item,msecs){clearTimeout(item._idleTimeoutId);item._idleTimeout=msecs;};exports.unenroll=function(item){clearTimeout(item._idleTimeoutId);item._idleTimeout=-1;};exports._unrefActive=exports.active=function(item){clearTimeout(item._idleTimeoutId);var msecs=item._idleTimeout;if(msecs>=0){item._idleTimeoutId=setTimeout(function onTimeout(){if(item._onTimeout)
item._onTimeout();},msecs);}};__webpack_require__(16);exports.setImmediate=(typeof self!=="undefined"&&self.setImmediate)||(typeof global!=="undefined"&&global.setImmediate)||(this&&this.setImmediate);exports.clearImmediate=(typeof self!=="undefined"&&self.clearImmediate)||(typeof global!=="undefined"&&global.clearImmediate)||(this&&this.clearImmediate);}.call(exports,__webpack_require__(1)))
}),(function(module,exports,__webpack_require__){(function(global,process){(function(global,undefined){"use strict";if(global.setImmediate){return;}
var nextHandle=1;var tasksByHandle={};var currentlyRunningATask=false;var doc=global.document;var registerImmediate;function setImmediate(callback){if(typeof callback!=="function"){callback=new Function(""+callback);}
var args=new Array(arguments.length-1);for(var i=0;i<args.length;i++){args[i]=arguments[i+1];}
var task={callback:callback,args:args};tasksByHandle[nextHandle]=task;registerImmediate(nextHandle);return nextHandle++;}
function clearImmediate(handle){delete tasksByHandle[handle];}
function run(task){var callback=task.callback;var args=task.args;switch(args.length){case 0:callback();break;case 1:callback(args[0]);break;case 2:callback(args[0],args[1]);break;case 3:callback(args[0],args[1],args[2]);break;default:callback.apply(undefined,args);break;}}
function runIfPresent(handle){if(currentlyRunningATask){setTimeout(runIfPresent,0,handle);}else{var task=tasksByHandle[handle];if(task){currentlyRunningATask=true;try{run(task);}finally{clearImmediate(handle);currentlyRunningATask=false;}}}}
function installNextTickImplementation(){registerImmediate=function(handle){process.nextTick(function(){runIfPresent(handle);});};}
function canUsePostMessage(){if(global.postMessage&&!global.importScripts){var postMessageIsAsynchronous=true;var oldOnMessage=global.onmessage;global.onmessage=function(){postMessageIsAsynchronous=false;};global.postMessage("","*");global.onmessage=oldOnMessage;return postMessageIsAsynchronous;}}
function installPostMessageImplementation(){var messagePrefix="setImmediate$"+Math.random()+"$";var onGlobalMessage=function(event){if(event.source===global&&typeof event.data==="string"&&event.data.indexOf(messagePrefix)===0){runIfPresent(+event.data.slice(messagePrefix.length));}};if(global.addEventListener){global.addEventListener("message",onGlobalMessage,false);}else{global.attachEvent("onmessage",onGlobalMessage);}
registerImmediate=function(handle){global.postMessage(messagePrefix+handle,"*");};}
function installMessageChannelImplementation(){var channel=new MessageChannel();channel.port1.onmessage=function(event){var handle=event.data;runIfPresent(handle);};registerImmediate=function(handle){channel.port2.postMessage(handle);};}
function installReadyStateChangeImplementation(){var html=doc.documentElement;registerImmediate=function(handle){var script=doc.createElement("script");script.onreadystatechange=function(){runIfPresent(handle);script.onreadystatechange=null;html.removeChild(script);script=null;};html.appendChild(script);};}
function installSetTimeoutImplementation(){registerImmediate=function(handle){setTimeout(runIfPresent,0,handle);};}
var attachTo=Object.getPrototypeOf&&Object.getPrototypeOf(global);attachTo=attachTo&&attachTo.setTimeout?attachTo:global;if({}.toString.call(global.process)==="[object process]"){installNextTickImplementation();}else if(canUsePostMessage()){installPostMessageImplementation();}else if(global.MessageChannel){installMessageChannelImplementation();}else if(doc&&"onreadystatechange"in doc.createElement("script")){installReadyStateChangeImplementation();}else{installSetTimeoutImplementation();}
attachTo.setImmediate=setImmediate;attachTo.clearImmediate=clearImmediate;}(typeof self==="undefined"?typeof global==="undefined"?this:global:self));}.call(exports,__webpack_require__(1),__webpack_require__(17)))
}),(function(module,exports){var process=module.exports={};var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}
function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}
(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}
try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}}())
function runTimeout(fun){if(cachedSetTimeout===setTimeout){return setTimeout(fun,0);}
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}
try{return cachedSetTimeout(fun,0);}catch(e){try{return cachedSetTimeout.call(null,fun,0);}catch(e){return cachedSetTimeout.call(this,fun,0);}}}
function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){return clearTimeout(marker);}
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}
try{return cachedClearTimeout(marker);}catch(e){try{return cachedClearTimeout.call(null,marker);}catch(e){return cachedClearTimeout.call(this,marker);}}}
var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}
draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}
if(queue.length){drainQueue();}}
function drainQueue(){if(draining){return;}
var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}
queueIndex=-1;len=queue.length;}
currentQueue=null;draining=false;runClearTimeout(timeout);}
process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}
queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};function Item(fun,array){this.fun=fun;this.array=array;}
Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';process.versions={};function noop(){}
process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[]}
process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/'};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};}),(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]=(function(callback){var constructor=this.constructor;return this.then(function(value){return constructor.resolve(callback()).then(function(){return value;});},function(reason){return constructor.resolve(callback()).then(function(){return constructor.reject(reason);});});});}),(function(module,exports,__webpack_require__){/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root,factory){if(true)
module.exports=factory();else if(typeof define==='function'&&define.amd)
define([],factory);else if(typeof exports==='object')
exports["ClipboardJS"]=factory();else
root["ClipboardJS"]=factory();})(this,function(){return  (function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}
};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.i=function(value){return value;};__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter
});}
};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=3);})
([(function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[module,__webpack_require__(7)],__WEBPACK_AMD_DEFINE_FACTORY__=(factory),__WEBPACK_AMD_DEFINE_RESULT__=(typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__)):__WEBPACK_AMD_DEFINE_FACTORY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof exports!=="undefined"){factory(module,require('select'));}else{var mod={exports:{}};factory(mod,global.select);global.clipboardAction=mod.exports;}})(this,function(module,_select){'use strict';var _select2=_interopRequireDefault(_select);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}
return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var ClipboardAction=function(){function ClipboardAction(options){_classCallCheck(this,ClipboardAction);this.resolveOptions(options);this.initSelection();}
_createClass(ClipboardAction,[{key:'resolveOptions',value:function resolveOptions(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=options.action;this.container=options.container;this.emitter=options.emitter;this.target=options.target;this.text=options.text;this.trigger=options.trigger;this.selectedText='';}},{key:'initSelection',value:function initSelection(){if(this.text){this.selectFake();}else if(this.target){this.selectTarget();}}},{key:'selectFake',value:function selectFake(){var _this=this;var isRTL=document.documentElement.getAttribute('dir')=='rtl';this.removeFake();this.fakeHandlerCallback=function(){return _this.removeFake();};this.fakeHandler=this.container.addEventListener('click',this.fakeHandlerCallback)||true;this.fakeElem=document.createElement('textarea');this.fakeElem.style.fontSize='12pt';this.fakeElem.style.border='0';this.fakeElem.style.padding='0';this.fakeElem.style.margin='0';this.fakeElem.style.position='absolute';this.fakeElem.style[isRTL?'right':'left']='-9999px';var yPosition=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=yPosition+'px';this.fakeElem.setAttribute('readonly','');this.fakeElem.value=this.text;this.container.appendChild(this.fakeElem);this.selectedText=(0,_select2.default)(this.fakeElem);this.copyText();}},{key:'removeFake',value:function removeFake(){if(this.fakeHandler){this.container.removeEventListener('click',this.fakeHandlerCallback);this.fakeHandler=null;this.fakeHandlerCallback=null;}
if(this.fakeElem){this.container.removeChild(this.fakeElem);this.fakeElem=null;}}},{key:'selectTarget',value:function selectTarget(){this.selectedText=(0,_select2.default)(this.target);this.copyText();}},{key:'copyText',value:function copyText(){var succeeded=void 0;try{succeeded=document.execCommand(this.action);}catch(err){succeeded=false;}
this.handleResult(succeeded);}},{key:'handleResult',value:function handleResult(succeeded){this.emitter.emit(succeeded?'success':'error',{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)});}},{key:'clearSelection',value:function clearSelection(){if(this.trigger){this.trigger.focus();}
window.getSelection().removeAllRanges();}},{key:'destroy',value:function destroy(){this.removeFake();}},{key:'action',set:function set(){var action=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'copy';this._action=action;if(this._action!=='copy'&&this._action!=='cut'){throw new Error('Invalid "action" value, use either "copy" or "cut"');}},get:function get(){return this._action;}},{key:'target',set:function set(target){if(target!==undefined){if(target&&(typeof target==='undefined'?'undefined':_typeof(target))==='object'&&target.nodeType===1){if(this.action==='copy'&&target.hasAttribute('disabled')){throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');}
if(this.action==='cut'&&(target.hasAttribute('readonly')||target.hasAttribute('disabled'))){throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');}
this._target=target;}else{throw new Error('Invalid "target" value, use a valid Element');}}},get:function get(){return this._target;}}]);return ClipboardAction;}();module.exports=ClipboardAction;});}),(function(module,exports,__webpack_require__){var is=__webpack_require__(6);var delegate=__webpack_require__(5);function listen(target,type,callback){if(!target&&!type&&!callback){throw new Error('Missing required arguments');}
if(!is.string(type)){throw new TypeError('Second argument must be a String');}
if(!is.fn(callback)){throw new TypeError('Third argument must be a Function');}
if(is.node(target)){return listenNode(target,type,callback);}
else if(is.nodeList(target)){return listenNodeList(target,type,callback);}
else if(is.string(target)){return listenSelector(target,type,callback);}
else{throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');}}
function listenNode(node,type,callback){node.addEventListener(type,callback);return{destroy:function(){node.removeEventListener(type,callback);}}}
function listenNodeList(nodeList,type,callback){Array.prototype.forEach.call(nodeList,function(node){node.addEventListener(type,callback);});return{destroy:function(){Array.prototype.forEach.call(nodeList,function(node){node.removeEventListener(type,callback);});}}}
function listenSelector(selector,type,callback){return delegate(document.body,selector,type,callback);}
module.exports=listen;}),(function(module,exports){function E(){}
E.prototype={on:function(name,callback,ctx){var e=this.e||(this.e={});(e[name]||(e[name]=[])).push({fn:callback,ctx:ctx});return this;},once:function(name,callback,ctx){var self=this;function listener(){self.off(name,listener);callback.apply(ctx,arguments);};listener._=callback
return this.on(name,listener,ctx);},emit:function(name){var data=[].slice.call(arguments,1);var evtArr=((this.e||(this.e={}))[name]||[]).slice();var i=0;var len=evtArr.length;for(i;i<len;i++){evtArr[i].fn.apply(evtArr[i].ctx,data);}
return this;},off:function(name,callback){var e=this.e||(this.e={});var evts=e[name];var liveEvents=[];if(evts&&callback){for(var i=0,len=evts.length;i<len;i++){if(evts[i].fn!==callback&&evts[i].fn._!==callback)
liveEvents.push(evts[i]);}}
(liveEvents.length)?e[name]=liveEvents:delete e[name];return this;}};module.exports=E;}),(function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[module,__webpack_require__(0),__webpack_require__(2),__webpack_require__(1)],__WEBPACK_AMD_DEFINE_FACTORY__=(factory),__WEBPACK_AMD_DEFINE_RESULT__=(typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__)):__WEBPACK_AMD_DEFINE_FACTORY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof exports!=="undefined"){factory(module,require('./clipboard-action'),require('tiny-emitter'),require('good-listener'));}else{var mod={exports:{}};factory(mod,global.clipboardAction,global.tinyEmitter,global.goodListener);global.clipboard=mod.exports;}})(this,function(module,_clipboardAction,_tinyEmitter,_goodListener){'use strict';var _clipboardAction2=_interopRequireDefault(_clipboardAction);var _tinyEmitter2=_interopRequireDefault(_tinyEmitter);var _goodListener2=_interopRequireDefault(_goodListener);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}
return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}
return call&&(typeof call==="object"||typeof call==="function")?call:self;}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}
subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
var Clipboard=function(_Emitter){_inherits(Clipboard,_Emitter);function Clipboard(trigger,options){_classCallCheck(this,Clipboard);var _this=_possibleConstructorReturn(this,(Clipboard.__proto__||Object.getPrototypeOf(Clipboard)).call(this));_this.resolveOptions(options);_this.listenClick(trigger);return _this;}
_createClass(Clipboard,[{key:'resolveOptions',value:function resolveOptions(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.action=typeof options.action==='function'?options.action:this.defaultAction;this.target=typeof options.target==='function'?options.target:this.defaultTarget;this.text=typeof options.text==='function'?options.text:this.defaultText;this.container=_typeof(options.container)==='object'?options.container:document.body;}},{key:'listenClick',value:function listenClick(trigger){var _this2=this;this.listener=(0,_goodListener2.default)(trigger,'click',function(e){return _this2.onClick(e);});}},{key:'onClick',value:function onClick(e){var trigger=e.delegateTarget||e.currentTarget;if(this.clipboardAction){this.clipboardAction=null;}
this.clipboardAction=new _clipboardAction2.default({action:this.action(trigger),target:this.target(trigger),text:this.text(trigger),container:this.container,trigger:trigger,emitter:this});}},{key:'defaultAction',value:function defaultAction(trigger){return getAttributeValue('action',trigger);}},{key:'defaultTarget',value:function defaultTarget(trigger){var selector=getAttributeValue('target',trigger);if(selector){return document.querySelector(selector);}}},{key:'defaultText',value:function defaultText(trigger){return getAttributeValue('text',trigger);}},{key:'destroy',value:function destroy(){this.listener.destroy();if(this.clipboardAction){this.clipboardAction.destroy();this.clipboardAction=null;}}}],[{key:'isSupported',value:function isSupported(){var action=arguments.length>0&&arguments[0]!==undefined?arguments[0]:['copy','cut'];var actions=typeof action==='string'?[action]:action;var support=!!document.queryCommandSupported;actions.forEach(function(action){support=support&&!!document.queryCommandSupported(action);});return support;}}]);return Clipboard;}(_tinyEmitter2.default);function getAttributeValue(suffix,element){var attribute='data-clipboard-'+suffix;if(!element.hasAttribute(attribute)){return;}
return element.getAttribute(attribute);}
module.exports=Clipboard;});}),(function(module,exports){var DOCUMENT_NODE_TYPE=9;if(typeof Element!=='undefined'&&!Element.prototype.matches){var proto=Element.prototype;proto.matches=proto.matchesSelector||proto.mozMatchesSelector||proto.msMatchesSelector||proto.oMatchesSelector||proto.webkitMatchesSelector;}
function closest(element,selector){while(element&&element.nodeType!==DOCUMENT_NODE_TYPE){if(typeof element.matches==='function'&&element.matches(selector)){return element;}
element=element.parentNode;}}
module.exports=closest;}),(function(module,exports,__webpack_require__){var closest=__webpack_require__(4);function _delegate(element,selector,type,callback,useCapture){var listenerFn=listener.apply(this,arguments);element.addEventListener(type,listenerFn,useCapture);return{destroy:function(){element.removeEventListener(type,listenerFn,useCapture);}}}
function delegate(elements,selector,type,callback,useCapture){if(typeof elements.addEventListener==='function'){return _delegate.apply(null,arguments);}
if(typeof type==='function'){return _delegate.bind(null,document).apply(null,arguments);}
if(typeof elements==='string'){elements=document.querySelectorAll(elements);}
return Array.prototype.map.call(elements,function(element){return _delegate(element,selector,type,callback,useCapture);});}
function listener(element,selector,type,callback){return function(e){e.delegateTarget=closest(e.target,selector);if(e.delegateTarget){callback.call(element,e);}}}
module.exports=delegate;}),(function(module,exports){exports.node=function(value){return value!==undefined&&value instanceof HTMLElement&&value.nodeType===1;};exports.nodeList=function(value){var type=Object.prototype.toString.call(value);return value!==undefined&&(type==='[object NodeList]'||type==='[object HTMLCollection]')&&('length'in value)&&(value.length===0||exports.node(value[0]));};exports.string=function(value){return typeof value==='string'||value instanceof String;};exports.fn=function(value){var type=Object.prototype.toString.call(value);return type==='[object Function]';};}),(function(module,exports){function select(element){var selectedText;if(element.nodeName==='SELECT'){element.focus();selectedText=element.value;}
else if(element.nodeName==='INPUT'||element.nodeName==='TEXTAREA'){var isReadOnly=element.hasAttribute('readonly');if(!isReadOnly){element.setAttribute('readonly','');}
element.select();element.setSelectionRange(0,element.value.length);if(!isReadOnly){element.removeAttribute('readonly');}
selectedText=element.value;}
else{if(element.hasAttribute('contenteditable')){element.focus();}
var selection=window.getSelection();var range=document.createRange();range.selectNodeContents(element);selection.removeAllRanges();selection.addRange(range);selectedText=selection.toString();}
return selectedText;}
module.exports=select;})
]);});}),(function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;;(function(){'use strict';function FastClick(layer,options){var oldOnClick;options=options||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=options.touchBoundary||10;this.layer=layer;this.tapDelay=options.tapDelay||200;this.tapTimeout=options.tapTimeout||700;if(FastClick.notNeeded(layer)){return;}
function bind(method,context){return function(){return method.apply(context,arguments);};}
var methods=['onMouse','onClick','onTouchStart','onTouchMove','onTouchEnd','onTouchCancel'];var context=this;for(var i=0,l=methods.length;i<l;i++){context[methods[i]]=bind(context[methods[i]],context);}
if(deviceIsAndroid){layer.addEventListener('mouseover',this.onMouse,true);layer.addEventListener('mousedown',this.onMouse,true);layer.addEventListener('mouseup',this.onMouse,true);}
layer.addEventListener('click',this.onClick,true);layer.addEventListener('touchstart',this.onTouchStart,false);layer.addEventListener('touchmove',this.onTouchMove,false);layer.addEventListener('touchend',this.onTouchEnd,false);layer.addEventListener('touchcancel',this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==='click'){rmv.call(layer,type,callback.hijacked||callback,capture);}else{rmv.call(layer,type,callback,capture);}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==='click'){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event);}}),capture);}else{adv.call(layer,type,callback,capture);}};}
if(typeof layer.onclick==='function'){oldOnClick=layer.onclick;layer.addEventListener('click',function(event){oldOnClick(event);},false);layer.onclick=null;}}
var deviceIsWindowsPhone=navigator.userAgent.indexOf("Windows Phone")>=0;var deviceIsAndroid=navigator.userAgent.indexOf('Android')>0&&!deviceIsWindowsPhone;var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent)&&!deviceIsWindowsPhone;var deviceIsIOS4=deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);var deviceIsIOSWithBadTarget=deviceIsIOS&&(/OS [6-7]_\d/).test(navigator.userAgent);var deviceIsBlackBerry10=navigator.userAgent.indexOf('BB10')>0;FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){case'button':case'select':case'textarea':if(target.disabled){return true;}
break;case'input':if((deviceIsIOS&&target.type==='file')||target.disabled){return true;}
break;case'label':case'iframe':case'video':return true;}
return(/\bneedsclick\b/).test(target.className);};FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case'textarea':return true;case'select':return!deviceIsAndroid;case'input':switch(target.type){case'button':case'checkbox':case'file':case'image':case'radio':case'submit':return false;}
return!target.disabled&&!target.readOnly;default:return(/\bneedsfocus\b/).test(target.className);}};FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur();}
touch=event.changedTouches[0];clickEvent=document.createEvent('MouseEvents');clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent);};FastClick.prototype.determineEventType=function(targetElement){if(deviceIsAndroid&&targetElement.tagName.toLowerCase()==='select'){return'mousedown';}
return'click';};FastClick.prototype.focus=function(targetElement){var length;if(deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf('date')!==0&&targetElement.type!=='time'&&targetElement.type!=='month'){length=targetElement.value.length;targetElement.setSelectionRange(length,length);}else{targetElement.focus();}};FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break;}
parentElement=parentElement.parentElement;}while(parentElement);}
if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop;}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode;}
return eventTarget;};FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;if(event.targetTouches.length>1){return true;}
targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true;}
if(!deviceIsIOS4){if(touch.identifier&&touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false;}
this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement);}}
this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if((event.timeStamp-this.lastClickTime)<this.tapDelay){event.preventDefault();}
return true;};FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true;}
return false;};FastClick.prototype.onTouchMove=function(event){if(!this.trackingClick){return true;}
if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null;}
return true;};FastClick.prototype.findControl=function(labelElement){if(labelElement.control!==undefined){return labelElement.control;}
if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor);}
return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');};FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true;}
if((event.timeStamp-this.lastClickTime)<this.tapDelay){this.cancelNextClick=true;return true;}
if((event.timeStamp-this.trackingClickStart)>this.tapTimeout){return true;}
this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent;}
targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==='label'){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(deviceIsAndroid){return false;}
targetElement=forElement;}}else if(this.needsFocus(targetElement)){if((event.timeStamp-trackingClickStart)>100||(deviceIsIOS&&window.top!==window&&targetTagName==='input')){this.targetElement=null;return false;}
this.focus(targetElement);this.sendClick(targetElement,event);if(!deviceIsIOS||targetTagName!=='select'){this.targetElement=null;event.preventDefault();}
return false;}
if(deviceIsIOS&&!deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true;}}
if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event);}
return false;};FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null;};FastClick.prototype.onMouse=function(event){if(!this.targetElement){return true;}
if(event.forwardedTouchEvent){return true;}
if(!event.cancelable){return true;}
if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation();}else{event.propagationStopped=true;}
event.stopPropagation();event.preventDefault();return false;}
return true;};FastClick.prototype.onClick=function(event){var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true;}
if(event.target.type==='submit'&&event.detail===0){return true;}
permitted=this.onMouse(event);if(!permitted){this.targetElement=null;}
return permitted;};FastClick.prototype.destroy=function(){var layer=this.layer;if(deviceIsAndroid){layer.removeEventListener('mouseover',this.onMouse,true);layer.removeEventListener('mousedown',this.onMouse,true);layer.removeEventListener('mouseup',this.onMouse,true);}
layer.removeEventListener('click',this.onClick,true);layer.removeEventListener('touchstart',this.onTouchStart,false);layer.removeEventListener('touchmove',this.onTouchMove,false);layer.removeEventListener('touchend',this.onTouchEnd,false);layer.removeEventListener('touchcancel',this.onTouchCancel,false);};FastClick.notNeeded=function(layer){var metaViewport;var chromeVersion;var blackberryVersion;var firefoxVersion;if(typeof window.ontouchstart==='undefined'){return true;}
chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(deviceIsAndroid){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport){if(metaViewport.content.indexOf('user-scalable=no')!==-1){return true;}
if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth){return true;}}
}else{return true;}}
if(deviceIsBlackBerry10){blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(blackberryVersion[1]>=10&&blackberryVersion[2]>=3){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport){if(metaViewport.content.indexOf('user-scalable=no')!==-1){return true;}
if(document.documentElement.scrollWidth<=window.outerWidth){return true;}}}}
if(layer.style.msTouchAction==='none'||layer.style.touchAction==='manipulation'){return true;}
firefoxVersion=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(firefoxVersion>=27){metaViewport=document.querySelector('meta[name=viewport]');if(metaViewport&&(metaViewport.content.indexOf('user-scalable=no')!==-1||document.documentElement.scrollWidth<=window.outerWidth)){return true;}}
if(layer.style.touchAction==='none'||layer.style.touchAction==='manipulation'){return true;}
return false;};FastClick.attach=function(layer,options){return new FastClick(layer,options);};if(true){!(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return FastClick;}).call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof module!=='undefined'&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick;}else{window.FastClick=FastClick;}}());}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Event=__webpack_require__(22);var _Event2=_interopRequireDefault(_Event);var _Header=__webpack_require__(24);var _Header2=_interopRequireDefault(_Header);var _Nav=__webpack_require__(27);var _Nav2=_interopRequireDefault(_Nav);var _Search=__webpack_require__(31);var _Search2=_interopRequireDefault(_Search);var _Sidebar=__webpack_require__(37);var _Sidebar2=_interopRequireDefault(_Sidebar);var _Source=__webpack_require__(39);var _Source2=_interopRequireDefault(_Source);var _Tabs=__webpack_require__(45);var _Tabs2=_interopRequireDefault(_Tabs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default={Event:_Event2.default,Header:_Header2.default,Nav:_Nav2.default,Search:_Search2.default,Sidebar:_Sidebar2.default,Source:_Source2.default,Tabs:_Tabs2.default};}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Listener=__webpack_require__(3);var _Listener2=_interopRequireDefault(_Listener);var _MatchMedia=__webpack_require__(23);var _MatchMedia2=_interopRequireDefault(_MatchMedia);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default={Listener:_Listener2.default,MatchMedia:_MatchMedia2.default};}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Listener=__webpack_require__(3);var _Listener2=_interopRequireDefault(_Listener);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var MatchMedia=function MatchMedia(query,listener){_classCallCheck(this,MatchMedia);this.handler_=function(mq){if(mq.matches)listener.listen();else listener.unlisten();};var media=window.matchMedia(query);media.addListener(this.handler_);this.handler_(media);};exports.default=MatchMedia;}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Shadow=__webpack_require__(25);var _Shadow2=_interopRequireDefault(_Shadow);var _Title=__webpack_require__(26);var _Title2=_interopRequireDefault(_Title);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default={Shadow:_Shadow2.default,Title:_Title2.default};}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Shadow=function(){function Shadow(el,header){_classCallCheck(this,Shadow);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof HTMLElement)||!(ref.parentNode instanceof HTMLElement))throw new ReferenceError();this.el_=ref.parentNode;ref=typeof header==="string"?document.querySelector(header):header;if(!(ref instanceof HTMLElement))throw new ReferenceError();this.header_=ref;this.height_=0;this.active_=false;}
Shadow.prototype.setup=function setup(){var current=this.el_;while(current=current.previousElementSibling){if(!(current instanceof HTMLElement))throw new ReferenceError();this.height_+=current.offsetHeight;}
this.update();};Shadow.prototype.update=function update(ev){if(ev&&(ev.type==="resize"||ev.type==="orientationchange")){this.height_=0;this.setup();}else{var active=window.pageYOffset>=this.height_;if(active!==this.active_)this.header_.dataset.mdState=(this.active_=active)?"shadow":"";}};Shadow.prototype.reset=function reset(){this.header_.dataset.mdState="";this.height_=0;this.active_=false;};return Shadow;}();exports.default=Shadow;}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Title=function(){function Title(el,header){_classCallCheck(this,Title);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof HTMLElement))throw new ReferenceError();this.el_=ref;ref=typeof header==="string"?document.querySelector(header):header;if(!(ref instanceof HTMLHeadingElement))throw new ReferenceError();this.header_=ref;this.active_=false;}
Title.prototype.setup=function setup(){var _this=this;Array.prototype.forEach.call(this.el_.children,function(node){node.style.width=_this.el_.offsetWidth-20+"px";});};Title.prototype.update=function update(ev){var _this2=this;var active=window.pageYOffset>=this.header_.offsetTop;if(active!==this.active_)this.el_.dataset.mdState=(this.active_=active)?"active":"";if(ev.type==="resize"||ev.type==="orientationchange"){Array.prototype.forEach.call(this.el_.children,function(node){node.style.width=_this2.el_.offsetWidth-20+"px";});}};Title.prototype.reset=function reset(){this.el_.dataset.mdState="";this.el_.style.width="";this.active_=false;};return Title;}();exports.default=Title;}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Blur=__webpack_require__(28);var _Blur2=_interopRequireDefault(_Blur);var _Collapse=__webpack_require__(29);var _Collapse2=_interopRequireDefault(_Collapse);var _Scrolling=__webpack_require__(30);var _Scrolling2=_interopRequireDefault(_Scrolling);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default={Blur:_Blur2.default,Collapse:_Collapse2.default,Scrolling:_Scrolling2.default};}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Blur=function(){function Blur(els){_classCallCheck(this,Blur);this.els_=typeof els==="string"?document.querySelectorAll(els):els;this.index_=0;this.offset_=window.pageYOffset;this.dir_=false;this.anchors_=[].reduce.call(this.els_,function(anchors,el){return anchors.concat(document.getElementById(el.hash.substring(1))||[]);},[]);}
Blur.prototype.setup=function setup(){this.update();};Blur.prototype.update=function update(){var offset=window.pageYOffset;var dir=this.offset_-offset<0;if(this.dir_!==dir)this.index_=dir?this.index_=0:this.index_=this.els_.length-1;if(this.anchors_.length===0)return;if(this.offset_<=offset){for(var i=this.index_+1;i<this.els_.length;i++){if(this.anchors_[i].offsetTop-(56+24)<=offset){if(i>0)this.els_[i-1].dataset.mdState="blur";this.index_=i;}else{break;}}
}else{for(var _i=this.index_;_i>=0;_i--){if(this.anchors_[_i].offsetTop-(56+24)>offset){if(_i>0)this.els_[_i-1].dataset.mdState="";}else{this.index_=_i;break;}}}
this.offset_=offset;this.dir_=dir;};Blur.prototype.reset=function reset(){Array.prototype.forEach.call(this.els_,function(el){el.dataset.mdState="";});this.index_=0;this.offset_=window.pageYOffset;};return Blur;}();exports.default=Blur;}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Collapse=function(){function Collapse(el){_classCallCheck(this,Collapse);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof HTMLElement))throw new ReferenceError();this.el_=ref;}
Collapse.prototype.setup=function setup(){var current=this.el_.getBoundingClientRect().height;this.el_.style.display=current?"block":"none";this.el_.style.overflow=current?"visible":"hidden";};Collapse.prototype.update=function update(){var _this=this;var current=this.el_.getBoundingClientRect().height;this.el_.style.display="block";this.el_.style.overflow="";if(current){this.el_.style.maxHeight=current+"px";requestAnimationFrame(function(){_this.el_.setAttribute("data-md-state","animate");_this.el_.style.maxHeight="0px";});}else{this.el_.setAttribute("data-md-state","expand");this.el_.style.maxHeight="";var height=this.el_.getBoundingClientRect().height;this.el_.removeAttribute("data-md-state");this.el_.style.maxHeight="0px";requestAnimationFrame(function(){_this.el_.setAttribute("data-md-state","animate");_this.el_.style.maxHeight=height+"px";});}
var end=function end(ev){var target=ev.target;if(!(target instanceof HTMLElement))throw new ReferenceError();target.removeAttribute("data-md-state");target.style.maxHeight="";target.style.display=current?"none":"block";target.style.overflow=current?"hidden":"visible";target.removeEventListener("transitionend",end);};this.el_.addEventListener("transitionend",end,false);};Collapse.prototype.reset=function reset(){this.el_.dataset.mdState="";this.el_.style.maxHeight="";this.el_.style.display="";this.el_.style.overflow="";};return Collapse;}();exports.default=Collapse;}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Scrolling=function(){function Scrolling(el){_classCallCheck(this,Scrolling);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof HTMLElement))throw new ReferenceError();this.el_=ref;}
Scrolling.prototype.setup=function setup(){var main=this.el_.children[this.el_.children.length-1];main.style.webkitOverflowScrolling="touch";var toggles=this.el_.querySelectorAll("[data-md-toggle]");Array.prototype.forEach.call(toggles,function(toggle){if(!(toggle instanceof HTMLInputElement))throw new ReferenceError();if(toggle.checked){var pane=toggle.nextElementSibling;if(!(pane instanceof HTMLElement))throw new ReferenceError();while(pane.tagName!=="NAV"&&pane.nextElementSibling){pane=pane.nextElementSibling;}
if(!(toggle.parentNode instanceof HTMLElement)||!(toggle.parentNode.parentNode instanceof HTMLElement))throw new ReferenceError();var parent=toggle.parentNode.parentNode;var target=pane.children[pane.children.length-1];parent.style.webkitOverflowScrolling="";target.style.webkitOverflowScrolling="touch";}});};Scrolling.prototype.update=function update(ev){var target=ev.target;if(!(target instanceof HTMLElement))throw new ReferenceError();var pane=target.nextElementSibling;if(!(pane instanceof HTMLElement))throw new ReferenceError();while(pane.tagName!=="NAV"&&pane.nextElementSibling){pane=pane.nextElementSibling;}
if(!(target.parentNode instanceof HTMLElement)||!(target.parentNode.parentNode instanceof HTMLElement))throw new ReferenceError();var parent=target.parentNode.parentNode;var active=pane.children[pane.children.length-1];parent.style.webkitOverflowScrolling="";active.style.webkitOverflowScrolling="";if(!target.checked){var end=function end(){if(pane instanceof HTMLElement){parent.style.webkitOverflowScrolling="touch";pane.removeEventListener("transitionend",end);}};pane.addEventListener("transitionend",end,false);}
if(target.checked){var _end=function _end(){if(pane instanceof HTMLElement){active.style.webkitOverflowScrolling="touch";pane.removeEventListener("transitionend",_end);}};pane.addEventListener("transitionend",_end,false);}};Scrolling.prototype.reset=function reset(){this.el_.children[1].style.webkitOverflowScrolling="";var toggles=this.el_.querySelectorAll("[data-md-toggle]");Array.prototype.forEach.call(toggles,function(toggle){if(!(toggle instanceof HTMLInputElement))throw new ReferenceError();if(toggle.checked){var pane=toggle.nextElementSibling;if(!(pane instanceof HTMLElement))throw new ReferenceError();while(pane.tagName!=="NAV"&&pane.nextElementSibling){pane=pane.nextElementSibling;}
if(!(toggle.parentNode instanceof HTMLElement)||!(toggle.parentNode.parentNode instanceof HTMLElement))throw new ReferenceError();var parent=toggle.parentNode.parentNode;var active=pane.children[pane.children.length-1];parent.style.webkitOverflowScrolling="";active.style.webkitOverflowScrolling="";}});};return Scrolling;}();exports.default=Scrolling;}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Lock=__webpack_require__(32);var _Lock2=_interopRequireDefault(_Lock);var _Result=__webpack_require__(33);var _Result2=_interopRequireDefault(_Result);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default={Lock:_Lock2.default,Result:_Result2.default};}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Lock=function(){function Lock(el){_classCallCheck(this,Lock);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof HTMLInputElement))throw new ReferenceError();this.el_=ref;if(!document.body)throw new ReferenceError();this.lock_=document.body;}
Lock.prototype.setup=function setup(){this.update();};Lock.prototype.update=function update(){var _this=this;if(this.el_.checked){this.offset_=window.pageYOffset;setTimeout(function(){window.scrollTo(0,0);if(_this.el_.checked){_this.lock_.dataset.mdState="lock";}},400);}else{this.lock_.dataset.mdState="";setTimeout(function(){if(typeof _this.offset_!=="undefined")window.scrollTo(0,_this.offset_);},100);}};Lock.prototype.reset=function reset(){if(this.lock_.dataset.mdState==="lock")window.scrollTo(0,this.offset_);this.lock_.dataset.mdState="";};return Lock;}();exports.default=Lock;}),(function(module,exports,__webpack_require__){"use strict";(function(JSX){exports.__esModule=true;var _escapeStringRegexp=__webpack_require__(34);var _escapeStringRegexp2=_interopRequireDefault(_escapeStringRegexp);var _exposeLoaderLunrLunr=__webpack_require__(35);var _exposeLoaderLunrLunr2=_interopRequireDefault(_exposeLoaderLunrLunr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var truncate=function truncate(string,n){var i=n;if(string.length>i){while(string[i]!==" "&&--i>0){}
return string.substring(0,i)+"...";}
return string;};var translate=function translate(key){var meta=document.getElementsByName("lang:"+key)[0];if(!(meta instanceof HTMLMetaElement))throw new ReferenceError();return meta.content;};var Result=function(){function Result(el,data){_classCallCheck(this,Result);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof HTMLElement))throw new ReferenceError();this.el_=ref;var _Array$prototype$slic=Array.prototype.slice.call(this.el_.children),meta=_Array$prototype$slic[0],list=_Array$prototype$slic[1];this.data_=data;this.meta_=meta;this.list_=list;this.message_={placeholder:this.meta_.textContent,none:translate("search.result.none"),one:translate("search.result.one"),other:translate("search.result.other")
};var tokenizer=translate("search.tokenizer");if(tokenizer.length)_exposeLoaderLunrLunr2.default.tokenizer.separator=tokenizer;this.lang_=translate("search.language").split(",").filter(Boolean).map(function(lang){return lang.trim();});}
Result.prototype.update=function update(ev){var _this=this;if(ev.type==="focus"&&!this.index_){var init=function init(data){_this.docs_=data.reduce(function(docs,doc){var _doc$location$split=doc.location.split("#"),path=_doc$location$split[0],hash=_doc$location$split[1];if(hash){doc.parent=docs.get(path);if(doc.parent&&!doc.parent.done){doc.parent.title=doc.title;doc.parent.text=doc.text;doc.parent.done=true;}}
doc.text=doc.text.replace(/\n/g," ").replace(/\s+/g," ").replace(/\s+([,.:;!?])/g,function(_,char){return char;});if(!doc.parent||doc.parent.title!==doc.title)docs.set(doc.location,doc);return docs;},new Map());var docs=_this.docs_,lang=_this.lang_;_this.stack_=[];_this.index_=(0,_exposeLoaderLunrLunr2.default)(function(){var _pipeline,_this2=this;var filters={"search.pipeline.trimmer":_exposeLoaderLunrLunr2.default.trimmer,"search.pipeline.stopwords":_exposeLoaderLunrLunr2.default.stopWordFilter
};var pipeline=Object.keys(filters).reduce(function(result,name){if(!translate(name).match(/^false$/i))result.push(filters[name]);return result;},[]);this.pipeline.reset();if(pipeline)(_pipeline=this.pipeline).add.apply(_pipeline,pipeline);if(lang.length===1&&lang[0]!=="en"&&_exposeLoaderLunrLunr2.default[lang[0]]){this.use(_exposeLoaderLunrLunr2.default[lang[0]]);}else if(lang.length>1){this.use(_exposeLoaderLunrLunr2.default.multiLanguage.apply(_exposeLoaderLunrLunr2.default,lang));}
this.field("title",{boost:10});this.field("text");this.ref("location");docs.forEach(function(doc){return _this2.add(doc);});});var container=_this.el_.parentNode;if(!(container instanceof HTMLElement))throw new ReferenceError();container.addEventListener("scroll",function(){while(_this.stack_.length&&container.scrollTop+container.offsetHeight>=container.scrollHeight-16){_this.stack_.splice(0,10).forEach(function(render){return render();});}});};setTimeout(function(){return typeof _this.data_==="function"?_this.data_().then(init):init(_this.data_);},250);}else if(ev.type==="focus"||ev.type==="keyup"){var target=ev.target;if(!(target instanceof HTMLInputElement))throw new ReferenceError();if(!this.index_||target.value===this.value_)return;while(this.list_.firstChild){this.list_.removeChild(this.list_.firstChild);}
this.value_=target.value;if(this.value_.length===0){this.meta_.textContent=this.message_.placeholder;return;}
var result=this.index_
.query(function(query){_this.value_.toLowerCase().split(" ").filter(Boolean).forEach(function(term){term=_exposeLoaderLunrLunr2.default.stemmer(new _exposeLoaderLunrLunr2.default.Token(term)).toString();for(var lang in _this.lang_){lang=_this.lang_[lang];if(typeof(_exposeLoaderLunrLunr2.default[lang])!=='undefined'&&typeof(_exposeLoaderLunrLunr2.default[lang].stemmer)!=='undefined'){term=_exposeLoaderLunrLunr2.default[lang].stemmer(new _exposeLoaderLunrLunr2.default.Token(term)).toString();}}
query.term(term,{wildcard:_exposeLoaderLunrLunr2.default.Query.wildcard.TRAILING|_exposeLoaderLunrLunr2.default.Query.wildcard.LEADING});});})
.reduce(function(items,item){var doc=_this.docs_.get(item.ref);if(doc.parent){var ref=doc.parent.location;items.set(ref,(items.get(ref)||[]).concat(item));}else{var _ref=doc.location;items.set(_ref,items.get(_ref)||[]);}
return items;},new Map());var query=(0,_escapeStringRegexp2.default)(this.value_.trim()).replace(new RegExp(_exposeLoaderLunrLunr2.default.tokenizer.separator,"img"),"|");var match=new RegExp("(^|"+_exposeLoaderLunrLunr2.default.tokenizer.separator+")("+query+")","img");var highlight=function highlight(_,separator,token){return separator+"<em>"+token+"</em>";};this.stack_=[];result.forEach(function(items,ref){var _stack_;var doc=_this.docs_.get(ref);var article=JSX.createElement("li",{"class":"md-search-result__item"},JSX.createElement("a",{href:doc.location,title:doc.title,"class":"md-search-result__link",tabindex:"-1"},JSX.createElement("article",{"class":"md-search-result__article md-search-result__article--document"},JSX.createElement("h1",{"class":"md-search-result__title"},{__html:doc.title.replace(match,highlight)}),doc.text.length?JSX.createElement("p",{"class":"md-search-result__teaser"},{__html:doc.text.replace(match,highlight)}):{})));var sections=items.map(function(item){return function(){var section=_this.docs_.get(item.ref);article.appendChild(JSX.createElement("a",{href:section.location,title:section.title,"class":"md-search-result__link","data-md-rel":"anchor",tabindex:"-1"},JSX.createElement("article",{"class":"md-search-result__article"},JSX.createElement("h1",{"class":"md-search-result__title"},{__html:section.title.replace(match,highlight)}),section.text.length?JSX.createElement("p",{"class":"md-search-result__teaser"},{__html:truncate(section.text.replace(match,highlight),400)}):{})));};});(_stack_=_this.stack_).push.apply(_stack_,[function(){return _this.list_.appendChild(article);}].concat(sections));});var container=this.el_.parentNode;if(!(container instanceof HTMLElement))throw new ReferenceError();while(this.stack_.length&&container.offsetHeight>=container.scrollHeight-16){this.stack_.shift()();}
var anchors=this.list_.querySelectorAll("[data-md-rel=anchor]");Array.prototype.forEach.call(anchors,function(anchor){["click","keydown"].forEach(function(action){anchor.addEventListener(action,function(ev2){if(action==="keydown"&&ev2.keyCode!==13)return;var toggle=document.querySelector("[data-md-toggle=search]");if(!(toggle instanceof HTMLInputElement))throw new ReferenceError();if(toggle.checked){toggle.checked=false;toggle.dispatchEvent(new CustomEvent("change"));}
ev2.preventDefault();setTimeout(function(){document.location.href=anchor.href;},100);});});});switch(result.size){case 0:this.meta_.textContent=this.message_.none;break;case 1:this.meta_.textContent=this.message_.one;break;default:this.meta_.textContent=this.message_.other.replace("#",result.size);}}};return Result;}();exports.default=Result;}.call(exports,__webpack_require__(0)))
}),(function(module,exports,__webpack_require__){"use strict";var matchOperatorsRe=/[|\\{}()[\]^$+*?.]/g;module.exports=function(str){if(typeof str!=='string'){throw new TypeError('Expected a string');}
return str.replace(matchOperatorsRe,'\\$&');};}),(function(module,exports,__webpack_require__){(function(global){module.exports=global["lunr"]=__webpack_require__(36);}.call(exports,__webpack_require__(1)))
}),(function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;;(function(){var lunr=function(config){var builder=new lunr.Builder
builder.pipeline.add(lunr.trimmer,lunr.stopWordFilter,lunr.stemmer)
builder.searchPipeline.add(lunr.stemmer)
config.call(builder,builder)
return builder.build()}
lunr.version="2.1.5"/*!
 * lunr.utils
 * Copyright (C) 2017 Oliver Nightingale
 */

lunr.utils={}
lunr.utils.warn=(function(global){return function(message){if(global.console&&console.warn){console.warn(message)}}
})(this)
lunr.utils.asString=function(obj){if(obj===void 0||obj===null){return""}else{return obj.toString()}}
lunr.FieldRef=function(docRef,fieldName,stringValue){this.docRef=docRef
this.fieldName=fieldName
this._stringValue=stringValue}
lunr.FieldRef.joiner="/"
lunr.FieldRef.fromString=function(s){var n=s.indexOf(lunr.FieldRef.joiner)
if(n===-1){throw"malformed field ref string"}
var fieldRef=s.slice(0,n),docRef=s.slice(n+1)
return new lunr.FieldRef(docRef,fieldRef,s)}
lunr.FieldRef.prototype.toString=function(){if(this._stringValue==undefined){this._stringValue=this.fieldName+lunr.FieldRef.joiner+this.docRef}
return this._stringValue}
lunr.idf=function(posting,documentCount){var documentsWithTerm=0
for(var fieldName in posting){if(fieldName=='_index')continue
documentsWithTerm+=Object.keys(posting[fieldName]).length}
var x=(documentCount-documentsWithTerm+0.5)/(documentsWithTerm+0.5)
return Math.log(1+Math.abs(x))}
lunr.Token=function(str,metadata){this.str=str||""
this.metadata=metadata||{}}
lunr.Token.prototype.toString=function(){return this.str}
lunr.Token.prototype.update=function(fn){this.str=fn(this.str,this.metadata)
return this}
lunr.Token.prototype.clone=function(fn){fn=fn||function(s){return s}
return new lunr.Token(fn(this.str,this.metadata),this.metadata)}/*!
 * lunr.tokenizer
 * Copyright (C) 2017 Oliver Nightingale
 */

lunr.tokenizer=function(obj){if(obj==null||obj==undefined){return[]}
if(Array.isArray(obj)){return obj.map(function(t){return new lunr.Token(lunr.utils.asString(t).toLowerCase())})}
var str=obj.toString().trim().toLowerCase(),len=str.length,tokens=[]
for(var sliceEnd=0,sliceStart=0;sliceEnd<=len;sliceEnd++){var char=str.charAt(sliceEnd),sliceLength=sliceEnd-sliceStart
if((char.match(lunr.tokenizer.separator)||sliceEnd==len)){if(sliceLength>0){tokens.push(new lunr.Token(str.slice(sliceStart,sliceEnd),{position:[sliceStart,sliceLength],index:tokens.length}))}
sliceStart=sliceEnd+1}}
return tokens}
lunr.tokenizer.separator=/[\s\-]+//*!
 * lunr.Pipeline
 * Copyright (C) 2017 Oliver Nightingale
 */

lunr.Pipeline=function(){this._stack=[]}
lunr.Pipeline.registeredFunctions=Object.create(null)
lunr.Pipeline.registerFunction=function(fn,label){if(label in this.registeredFunctions){lunr.utils.warn('Overwriting existing registered function: '+label)}
fn.label=label
lunr.Pipeline.registeredFunctions[fn.label]=fn}
lunr.Pipeline.warnIfFunctionNotRegistered=function(fn){var isRegistered=fn.label&&(fn.label in this.registeredFunctions)
if(!isRegistered){lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n',fn)}}
lunr.Pipeline.load=function(serialised){var pipeline=new lunr.Pipeline
serialised.forEach(function(fnName){var fn=lunr.Pipeline.registeredFunctions[fnName]
if(fn){pipeline.add(fn)}else{throw new Error('Cannot load unregistered function: '+fnName)}})
return pipeline}
lunr.Pipeline.prototype.add=function(){var fns=Array.prototype.slice.call(arguments)
fns.forEach(function(fn){lunr.Pipeline.warnIfFunctionNotRegistered(fn)
this._stack.push(fn)},this)}
lunr.Pipeline.prototype.after=function(existingFn,newFn){lunr.Pipeline.warnIfFunctionNotRegistered(newFn)
var pos=this._stack.indexOf(existingFn)
if(pos==-1){throw new Error('Cannot find existingFn')}
pos=pos+1
this._stack.splice(pos,0,newFn)}
lunr.Pipeline.prototype.before=function(existingFn,newFn){lunr.Pipeline.warnIfFunctionNotRegistered(newFn)
var pos=this._stack.indexOf(existingFn)
if(pos==-1){throw new Error('Cannot find existingFn')}
this._stack.splice(pos,0,newFn)}
lunr.Pipeline.prototype.remove=function(fn){var pos=this._stack.indexOf(fn)
if(pos==-1){return}
this._stack.splice(pos,1)}
lunr.Pipeline.prototype.run=function(tokens){var stackLength=this._stack.length
for(var i=0;i<stackLength;i++){var fn=this._stack[i]
tokens=tokens.reduce(function(memo,token,j){var result=fn(token,j,tokens)
if(result===void 0||result==='')return memo
return memo.concat(result)},[])}
return tokens}
lunr.Pipeline.prototype.runString=function(str){var token=new lunr.Token(str)
return this.run([token]).map(function(t){return t.toString()})}
lunr.Pipeline.prototype.reset=function(){this._stack=[]}
lunr.Pipeline.prototype.toJSON=function(){return this._stack.map(function(fn){lunr.Pipeline.warnIfFunctionNotRegistered(fn)
return fn.label})}/*!
 * lunr.Vector
 * Copyright (C) 2017 Oliver Nightingale
 */

lunr.Vector=function(elements){this._magnitude=0
this.elements=elements||[]}
lunr.Vector.prototype.positionForIndex=function(index){if(this.elements.length==0){return 0}
var start=0,end=this.elements.length/2,sliceLength=end-start,pivotPoint=Math.floor(sliceLength/2),pivotIndex=this.elements[pivotPoint*2]
while(sliceLength>1){if(pivotIndex<index){start=pivotPoint}
if(pivotIndex>index){end=pivotPoint}
if(pivotIndex==index){break}
sliceLength=end-start
pivotPoint=start+Math.floor(sliceLength/2)
pivotIndex=this.elements[pivotPoint*2]}
if(pivotIndex==index){return pivotPoint*2}
if(pivotIndex>index){return pivotPoint*2}
if(pivotIndex<index){return(pivotPoint+1)*2}}
lunr.Vector.prototype.insert=function(insertIdx,val){this.upsert(insertIdx,val,function(){throw"duplicate index"})}
lunr.Vector.prototype.upsert=function(insertIdx,val,fn){this._magnitude=0
var position=this.positionForIndex(insertIdx)
if(this.elements[position]==insertIdx){this.elements[position+1]=fn(this.elements[position+1],val)}else{this.elements.splice(position,0,insertIdx,val)}}
lunr.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude
var sumOfSquares=0,elementsLength=this.elements.length
for(var i=1;i<elementsLength;i+=2){var val=this.elements[i]
sumOfSquares+=val*val}
return this._magnitude=Math.sqrt(sumOfSquares)}
lunr.Vector.prototype.dot=function(otherVector){var dotProduct=0,a=this.elements,b=otherVector.elements,aLen=a.length,bLen=b.length,aVal=0,bVal=0,i=0,j=0
while(i<aLen&&j<bLen){aVal=a[i],bVal=b[j]
if(aVal<bVal){i+=2}else if(aVal>bVal){j+=2}else if(aVal==bVal){dotProduct+=a[i+1]*b[j+1]
i+=2
j+=2}}
return dotProduct}
lunr.Vector.prototype.similarity=function(otherVector){return this.dot(otherVector)/(this.magnitude()*otherVector.magnitude())}
lunr.Vector.prototype.toArray=function(){var output=new Array(this.elements.length/2)
for(var i=1,j=0;i<this.elements.length;i+=2,j++){output[j]=this.elements[i]}
return output}
lunr.Vector.prototype.toJSON=function(){return this.elements}/*!
 * lunr.stemmer
 * Copyright (C) 2017 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

lunr.stemmer=(function(){var step2list={"ational":"ate","tional":"tion","enci":"ence","anci":"ance","izer":"ize","bli":"ble","alli":"al","entli":"ent","eli":"e","ousli":"ous","ization":"ize","ation":"ate","ator":"ate","alism":"al","iveness":"ive","fulness":"ful","ousness":"ous","aliti":"al","iviti":"ive","biliti":"ble","logi":"log"},step3list={"icate":"ic","ative":"","alize":"al","iciti":"ic","ical":"ic","ful":"","ness":""},c="[^aeiou]",v="[aeiouy]",C=c+"[^aeiouy]*",V=v+"[aeiou]*",mgr0="^("+C+")?"+V+C,meq1="^("+C+")?"+V+C+"("+V+")?$",mgr1="^("+C+")?"+V+C+V+C,s_v="^("+C+")?"+v;var re_mgr0=new RegExp(mgr0);var re_mgr1=new RegExp(mgr1);var re_meq1=new RegExp(meq1);var re_s_v=new RegExp(s_v);var re_1a=/^(.+?)(ss|i)es$/;var re2_1a=/^(.+?)([^s])s$/;var re_1b=/^(.+?)eed$/;var re2_1b=/^(.+?)(ed|ing)$/;var re_1b_2=/.$/;var re2_1b_2=/(at|bl|iz)$/;var re3_1b_2=new RegExp("([^aeiouylsz])\\1$");var re4_1b_2=new RegExp("^"+C+v+"[^aeiouwxy]$");var re_1c=/^(.+?[^aeiou])y$/;var re_2=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;var re_3=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;var re_4=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;var re2_4=/^(.+?)(s|t)(ion)$/;var re_5=/^(.+?)e$/;var re_5_1=/ll$/;var re3_5=new RegExp("^"+C+v+"[^aeiouwxy]$");var porterStemmer=function porterStemmer(w){var stem,suffix,firstch,re,re2,re3,re4;if(w.length<3){return w;}
firstch=w.substr(0,1);if(firstch=="y"){w=firstch.toUpperCase()+w.substr(1);}
re=re_1a
re2=re2_1a;if(re.test(w)){w=w.replace(re,"$1$2");}
else if(re2.test(w)){w=w.replace(re2,"$1$2");}
re=re_1b;re2=re2_1b;if(re.test(w)){var fp=re.exec(w);re=re_mgr0;if(re.test(fp[1])){re=re_1b_2;w=w.replace(re,"");}}else if(re2.test(w)){var fp=re2.exec(w);stem=fp[1];re2=re_s_v;if(re2.test(stem)){w=stem;re2=re2_1b_2;re3=re3_1b_2;re4=re4_1b_2;if(re2.test(w)){w=w+"e";}
else if(re3.test(w)){re=re_1b_2;w=w.replace(re,"");}
else if(re4.test(w)){w=w+"e";}}}
re=re_1c;if(re.test(w)){var fp=re.exec(w);stem=fp[1];w=stem+"i";}
re=re_2;if(re.test(w)){var fp=re.exec(w);stem=fp[1];suffix=fp[2];re=re_mgr0;if(re.test(stem)){w=stem+step2list[suffix];}}
re=re_3;if(re.test(w)){var fp=re.exec(w);stem=fp[1];suffix=fp[2];re=re_mgr0;if(re.test(stem)){w=stem+step3list[suffix];}}
re=re_4;re2=re2_4;if(re.test(w)){var fp=re.exec(w);stem=fp[1];re=re_mgr1;if(re.test(stem)){w=stem;}}else if(re2.test(w)){var fp=re2.exec(w);stem=fp[1]+fp[2];re2=re_mgr1;if(re2.test(stem)){w=stem;}}
re=re_5;if(re.test(w)){var fp=re.exec(w);stem=fp[1];re=re_mgr1;re2=re_meq1;re3=re3_5;if(re.test(stem)||(re2.test(stem)&&!(re3.test(stem)))){w=stem;}}
re=re_5_1;re2=re_mgr1;if(re.test(w)&&re2.test(w)){re=re_1b_2;w=w.replace(re,"");}
if(firstch=="y"){w=firstch.toLowerCase()+w.substr(1);}
return w;};return function(token){return token.update(porterStemmer);}})();lunr.Pipeline.registerFunction(lunr.stemmer,'stemmer')/*!
 * lunr.stopWordFilter
 * Copyright (C) 2017 Oliver Nightingale
 */

lunr.generateStopWordFilter=function(stopWords){var words=stopWords.reduce(function(memo,stopWord){memo[stopWord]=stopWord
return memo},{})
return function(token){if(token&&words[token.toString()]!==token.toString())return token}}
lunr.stopWordFilter=lunr.generateStopWordFilter(['a','able','about','across','after','all','almost','also','am','among','an','and','any','are','as','at','be','because','been','but','by','can','cannot','could','dear','did','do','does','either','else','ever','every','for','from','get','got','had','has','have','he','her','hers','him','his','how','however','i','if','in','into','is','it','its','just','least','let','like','likely','may','me','might','most','must','my','neither','no','nor','not','of','off','often','on','only','or','other','our','own','rather','said','say','says','she','should','since','so','some','than','that','the','their','them','then','there','these','they','this','tis','to','too','twas','us','wants','was','we','were','what','when','where','which','while','who','whom','why','will','with','would','yet','you','your'])
lunr.Pipeline.registerFunction(lunr.stopWordFilter,'stopWordFilter')/*!
 * lunr.trimmer
 * Copyright (C) 2017 Oliver Nightingale
 */

lunr.trimmer=function(token){return token.update(function(s){return s.replace(/^\W+/,'').replace(/\W+$/,'')})}
lunr.Pipeline.registerFunction(lunr.trimmer,'trimmer')/*!
 * lunr.TokenSet
 * Copyright (C) 2017 Oliver Nightingale
 */

lunr.TokenSet=function(){this.final=false
this.edges={}
this.id=lunr.TokenSet._nextId
lunr.TokenSet._nextId+=1}
lunr.TokenSet._nextId=1
lunr.TokenSet.fromArray=function(arr){var builder=new lunr.TokenSet.Builder
for(var i=0,len=arr.length;i<len;i++){builder.insert(arr[i])}
builder.finish()
return builder.root}
lunr.TokenSet.fromClause=function(clause){if('editDistance'in clause){return lunr.TokenSet.fromFuzzyString(clause.term,clause.editDistance)}else{return lunr.TokenSet.fromString(clause.term)}}
lunr.TokenSet.fromFuzzyString=function(str,editDistance){var root=new lunr.TokenSet
var stack=[{node:root,editsRemaining:editDistance,str:str}]
while(stack.length){var frame=stack.pop()
if(frame.str.length>0){var char=frame.str.charAt(0),noEditNode
if(char in frame.node.edges){noEditNode=frame.node.edges[char]}else{noEditNode=new lunr.TokenSet
frame.node.edges[char]=noEditNode}
if(frame.str.length==1){noEditNode.final=true}else{stack.push({node:noEditNode,editsRemaining:frame.editsRemaining,str:frame.str.slice(1)})}}
if(frame.editsRemaining>0&&frame.str.length>1){var char=frame.str.charAt(1),deletionNode
if(char in frame.node.edges){deletionNode=frame.node.edges[char]}else{deletionNode=new lunr.TokenSet
frame.node.edges[char]=deletionNode}
if(frame.str.length<=2){deletionNode.final=true}else{stack.push({node:deletionNode,editsRemaining:frame.editsRemaining-1,str:frame.str.slice(2)})}}
if(frame.editsRemaining>0&&frame.str.length==1){frame.node.final=true}
if(frame.editsRemaining>0&&frame.str.length>=1){if("*"in frame.node.edges){var substitutionNode=frame.node.edges["*"]}else{var substitutionNode=new lunr.TokenSet
frame.node.edges["*"]=substitutionNode}
if(frame.str.length==1){substitutionNode.final=true}else{stack.push({node:substitutionNode,editsRemaining:frame.editsRemaining-1,str:frame.str.slice(1)})}}
if(frame.editsRemaining>0){if("*"in frame.node.edges){var insertionNode=frame.node.edges["*"]}else{var insertionNode=new lunr.TokenSet
frame.node.edges["*"]=insertionNode}
if(frame.str.length==0){insertionNode.final=true}else{stack.push({node:insertionNode,editsRemaining:frame.editsRemaining-1,str:frame.str})}}
if(frame.editsRemaining>0&&frame.str.length>1){var charA=frame.str.charAt(0),charB=frame.str.charAt(1),transposeNode
if(charB in frame.node.edges){transposeNode=frame.node.edges[charB]}else{transposeNode=new lunr.TokenSet
frame.node.edges[charB]=transposeNode}
if(frame.str.length==1){transposeNode.final=true}else{stack.push({node:transposeNode,editsRemaining:frame.editsRemaining-1,str:charA+frame.str.slice(2)})}}}
return root}
lunr.TokenSet.fromString=function(str){var node=new lunr.TokenSet,root=node,wildcardFound=false
for(var i=0,len=str.length;i<len;i++){var char=str[i],final=(i==len-1)
if(char=="*"){wildcardFound=true
node.edges[char]=node
node.final=final}else{var next=new lunr.TokenSet
next.final=final
node.edges[char]=next
node=next
if(wildcardFound){node.edges["*"]=root}}}
return root}
lunr.TokenSet.prototype.toArray=function(){var words=[]
var stack=[{prefix:"",node:this}]
while(stack.length){var frame=stack.pop(),edges=Object.keys(frame.node.edges),len=edges.length
if(frame.node.final){frame.prefix.charAt(0)
words.push(frame.prefix)}
for(var i=0;i<len;i++){var edge=edges[i]
stack.push({prefix:frame.prefix.concat(edge),node:frame.node.edges[edge]})}}
return words}
lunr.TokenSet.prototype.toString=function(){if(this._str){return this._str}
var str=this.final?'1':'0',labels=Object.keys(this.edges).sort(),len=labels.length
for(var i=0;i<len;i++){var label=labels[i],node=this.edges[label]
str=str+label+node.id}
return str}
lunr.TokenSet.prototype.intersect=function(b){var output=new lunr.TokenSet,frame=undefined
var stack=[{qNode:b,output:output,node:this}]
while(stack.length){frame=stack.pop()
var qEdges=Object.keys(frame.qNode.edges),qLen=qEdges.length,nEdges=Object.keys(frame.node.edges),nLen=nEdges.length
for(var q=0;q<qLen;q++){var qEdge=qEdges[q]
for(var n=0;n<nLen;n++){var nEdge=nEdges[n]
if(nEdge==qEdge||qEdge=='*'){var node=frame.node.edges[nEdge],qNode=frame.qNode.edges[qEdge],final=node.final&&qNode.final,next=undefined
if(nEdge in frame.output.edges){next=frame.output.edges[nEdge]
next.final=next.final||final}else{next=new lunr.TokenSet
next.final=final
frame.output.edges[nEdge]=next}
stack.push({qNode:qNode,output:next,node:node})}}}}
return output}
lunr.TokenSet.Builder=function(){this.previousWord=""
this.root=new lunr.TokenSet
this.uncheckedNodes=[]
this.minimizedNodes={}}
lunr.TokenSet.Builder.prototype.insert=function(word){var node,commonPrefix=0
if(word<this.previousWord){throw new Error("Out of order word insertion")}
for(var i=0;i<word.length&&i<this.previousWord.length;i++){if(word[i]!=this.previousWord[i])break
commonPrefix++}
this.minimize(commonPrefix)
if(this.uncheckedNodes.length==0){node=this.root}else{node=this.uncheckedNodes[this.uncheckedNodes.length-1].child}
for(var i=commonPrefix;i<word.length;i++){var nextNode=new lunr.TokenSet,char=word[i]
node.edges[char]=nextNode
this.uncheckedNodes.push({parent:node,char:char,child:nextNode})
node=nextNode}
node.final=true
this.previousWord=word}
lunr.TokenSet.Builder.prototype.finish=function(){this.minimize(0)}
lunr.TokenSet.Builder.prototype.minimize=function(downTo){for(var i=this.uncheckedNodes.length-1;i>=downTo;i--){var node=this.uncheckedNodes[i],childKey=node.child.toString()
if(childKey in this.minimizedNodes){node.parent.edges[node.char]=this.minimizedNodes[childKey]}else{node.child._str=childKey
this.minimizedNodes[childKey]=node.child}
this.uncheckedNodes.pop()}}/*!
 * lunr.Index
 * Copyright (C) 2017 Oliver Nightingale
 */

lunr.Index=function(attrs){this.invertedIndex=attrs.invertedIndex
this.fieldVectors=attrs.fieldVectors
this.tokenSet=attrs.tokenSet
this.fields=attrs.fields
this.pipeline=attrs.pipeline}
lunr.Index.prototype.search=function(queryString){return this.query(function(query){var parser=new lunr.QueryParser(queryString,query)
parser.parse()})}
lunr.Index.prototype.query=function(fn){var query=new lunr.Query(this.fields),matchingFields=Object.create(null),queryVectors=Object.create(null),termFieldCache=Object.create(null)
fn.call(query,query)
for(var i=0;i<query.clauses.length;i++){var clause=query.clauses[i],terms=null
if(clause.usePipeline){terms=this.pipeline.runString(clause.term)}else{terms=[clause.term]}
for(var m=0;m<terms.length;m++){var term=terms[m]
clause.term=term
var termTokenSet=lunr.TokenSet.fromClause(clause),expandedTerms=this.tokenSet.intersect(termTokenSet).toArray()
for(var j=0;j<expandedTerms.length;j++){var expandedTerm=expandedTerms[j],posting=this.invertedIndex[expandedTerm],termIndex=posting._index
for(var k=0;k<clause.fields.length;k++){var field=clause.fields[k],fieldPosting=posting[field],matchingDocumentRefs=Object.keys(fieldPosting),termField=expandedTerm+"/"+field
if(queryVectors[field]===undefined){queryVectors[field]=new lunr.Vector}
queryVectors[field].upsert(termIndex,1*clause.boost,function(a,b){return a+b})
if(termFieldCache[termField]){continue}
for(var l=0;l<matchingDocumentRefs.length;l++){var matchingDocumentRef=matchingDocumentRefs[l],matchingFieldRef=new lunr.FieldRef(matchingDocumentRef,field),metadata=fieldPosting[matchingDocumentRef],fieldMatch
if((fieldMatch=matchingFields[matchingFieldRef])===undefined){matchingFields[matchingFieldRef]=new lunr.MatchData(expandedTerm,field,metadata)}else{fieldMatch.add(expandedTerm,field,metadata)}}
termFieldCache[termField]=true}}}}
var matchingFieldRefs=Object.keys(matchingFields),results=[],matches=Object.create(null)
for(var i=0;i<matchingFieldRefs.length;i++){var fieldRef=lunr.FieldRef.fromString(matchingFieldRefs[i]),docRef=fieldRef.docRef,fieldVector=this.fieldVectors[fieldRef],score=queryVectors[fieldRef.fieldName].similarity(fieldVector),docMatch
if((docMatch=matches[docRef])!==undefined){docMatch.score+=score
docMatch.matchData.combine(matchingFields[fieldRef])}else{var match={ref:docRef,score:score,matchData:matchingFields[fieldRef]}
matches[docRef]=match
results.push(match)}}
return results.sort(function(a,b){return b.score-a.score})}
lunr.Index.prototype.toJSON=function(){var invertedIndex=Object.keys(this.invertedIndex).sort().map(function(term){return[term,this.invertedIndex[term]]},this)
var fieldVectors=Object.keys(this.fieldVectors).map(function(ref){return[ref,this.fieldVectors[ref].toJSON()]},this)
return{version:lunr.version,fields:this.fields,fieldVectors:fieldVectors,invertedIndex:invertedIndex,pipeline:this.pipeline.toJSON()}}
lunr.Index.load=function(serializedIndex){var attrs={},fieldVectors={},serializedVectors=serializedIndex.fieldVectors,invertedIndex={},serializedInvertedIndex=serializedIndex.invertedIndex,tokenSetBuilder=new lunr.TokenSet.Builder,pipeline=lunr.Pipeline.load(serializedIndex.pipeline)
if(serializedIndex.version!=lunr.version){lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+lunr.version+"' does not match serialized index '"+serializedIndex.version+"'")}
for(var i=0;i<serializedVectors.length;i++){var tuple=serializedVectors[i],ref=tuple[0],elements=tuple[1]
fieldVectors[ref]=new lunr.Vector(elements)}
for(var i=0;i<serializedInvertedIndex.length;i++){var tuple=serializedInvertedIndex[i],term=tuple[0],posting=tuple[1]
tokenSetBuilder.insert(term)
invertedIndex[term]=posting}
tokenSetBuilder.finish()
attrs.fields=serializedIndex.fields
attrs.fieldVectors=fieldVectors
attrs.invertedIndex=invertedIndex
attrs.tokenSet=tokenSetBuilder.root
attrs.pipeline=pipeline
return new lunr.Index(attrs)}/*!
 * lunr.Builder
 * Copyright (C) 2017 Oliver Nightingale
 */

lunr.Builder=function(){this._ref="id"
this._fields=[]
this.invertedIndex=Object.create(null)
this.fieldTermFrequencies={}
this.fieldLengths={}
this.tokenizer=lunr.tokenizer
this.pipeline=new lunr.Pipeline
this.searchPipeline=new lunr.Pipeline
this.documentCount=0
this._b=0.75
this._k1=1.2
this.termIndex=0
this.metadataWhitelist=[]}
lunr.Builder.prototype.ref=function(ref){this._ref=ref}
lunr.Builder.prototype.field=function(field){this._fields.push(field)}
lunr.Builder.prototype.b=function(number){if(number<0){this._b=0}else if(number>1){this._b=1}else{this._b=number}}
lunr.Builder.prototype.k1=function(number){this._k1=number}
lunr.Builder.prototype.add=function(doc){var docRef=doc[this._ref]
this.documentCount+=1
for(var i=0;i<this._fields.length;i++){var fieldName=this._fields[i],field=doc[fieldName],tokens=this.tokenizer(field),terms=this.pipeline.run(tokens),fieldRef=new lunr.FieldRef(docRef,fieldName),fieldTerms=Object.create(null)
this.fieldTermFrequencies[fieldRef]=fieldTerms
this.fieldLengths[fieldRef]=0
this.fieldLengths[fieldRef]+=terms.length
for(var j=0;j<terms.length;j++){var term=terms[j]
if(fieldTerms[term]==undefined){fieldTerms[term]=0}
fieldTerms[term]+=1
if(this.invertedIndex[term]==undefined){var posting=Object.create(null)
posting["_index"]=this.termIndex
this.termIndex+=1
for(var k=0;k<this._fields.length;k++){posting[this._fields[k]]=Object.create(null)}
this.invertedIndex[term]=posting}
if(this.invertedIndex[term][fieldName][docRef]==undefined){this.invertedIndex[term][fieldName][docRef]=Object.create(null)}
for(var l=0;l<this.metadataWhitelist.length;l++){var metadataKey=this.metadataWhitelist[l],metadata=term.metadata[metadataKey]
if(this.invertedIndex[term][fieldName][docRef][metadataKey]==undefined){this.invertedIndex[term][fieldName][docRef][metadataKey]=[]}
this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)}}}}
lunr.Builder.prototype.calculateAverageFieldLengths=function(){var fieldRefs=Object.keys(this.fieldLengths),numberOfFields=fieldRefs.length,accumulator={},documentsWithField={}
for(var i=0;i<numberOfFields;i++){var fieldRef=lunr.FieldRef.fromString(fieldRefs[i]),field=fieldRef.fieldName
documentsWithField[field]||(documentsWithField[field]=0)
documentsWithField[field]+=1
accumulator[field]||(accumulator[field]=0)
accumulator[field]+=this.fieldLengths[fieldRef]}
for(var i=0;i<this._fields.length;i++){var field=this._fields[i]
accumulator[field]=accumulator[field]/documentsWithField[field]}
this.averageFieldLength=accumulator}
lunr.Builder.prototype.createFieldVectors=function(){var fieldVectors={},fieldRefs=Object.keys(this.fieldTermFrequencies),fieldRefsLength=fieldRefs.length,termIdfCache=Object.create(null)
for(var i=0;i<fieldRefsLength;i++){var fieldRef=lunr.FieldRef.fromString(fieldRefs[i]),field=fieldRef.fieldName,fieldLength=this.fieldLengths[fieldRef],fieldVector=new lunr.Vector,termFrequencies=this.fieldTermFrequencies[fieldRef],terms=Object.keys(termFrequencies),termsLength=terms.length
for(var j=0;j<termsLength;j++){var term=terms[j],tf=termFrequencies[term],termIndex=this.invertedIndex[term]._index,idf,score,scoreWithPrecision
if(termIdfCache[term]===undefined){idf=lunr.idf(this.invertedIndex[term],this.documentCount)
termIdfCache[term]=idf}else{idf=termIdfCache[term]}
score=idf*((this._k1+1)*tf)/(this._k1*(1-this._b+this._b*(fieldLength/this.averageFieldLength[field]))+tf)
scoreWithPrecision=Math.round(score*1000)/1000
fieldVector.insert(termIndex,scoreWithPrecision)}
fieldVectors[fieldRef]=fieldVector}
this.fieldVectors=fieldVectors}
lunr.Builder.prototype.createTokenSet=function(){this.tokenSet=lunr.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())}
lunr.Builder.prototype.build=function(){this.calculateAverageFieldLengths()
this.createFieldVectors()
this.createTokenSet()
return new lunr.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:this._fields,pipeline:this.searchPipeline})}
lunr.Builder.prototype.use=function(fn){var args=Array.prototype.slice.call(arguments,1)
args.unshift(this)
fn.apply(this,args)}
lunr.MatchData=function(term,field,metadata){var clonedMetadata=Object.create(null),metadataKeys=Object.keys(metadata)
for(var i=0;i<metadataKeys.length;i++){var key=metadataKeys[i]
clonedMetadata[key]=metadata[key].slice()}
this.metadata=Object.create(null)
this.metadata[term]=Object.create(null)
this.metadata[term][field]=clonedMetadata}
lunr.MatchData.prototype.combine=function(otherMatchData){var terms=Object.keys(otherMatchData.metadata)
for(var i=0;i<terms.length;i++){var term=terms[i],fields=Object.keys(otherMatchData.metadata[term])
if(this.metadata[term]==undefined){this.metadata[term]=Object.create(null)}
for(var j=0;j<fields.length;j++){var field=fields[j],keys=Object.keys(otherMatchData.metadata[term][field])
if(this.metadata[term][field]==undefined){this.metadata[term][field]=Object.create(null)}
for(var k=0;k<keys.length;k++){var key=keys[k]
if(this.metadata[term][field][key]==undefined){this.metadata[term][field][key]=otherMatchData.metadata[term][field][key]}else{this.metadata[term][field][key]=this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])}}}}}
lunr.MatchData.prototype.add=function(term,field,metadata){if(!(term in this.metadata)){this.metadata[term]=Object.create(null)
this.metadata[term][field]=metadata
return}
if(!(field in this.metadata[term])){this.metadata[term][field]=metadata
return}
var metadataKeys=Object.keys(metadata)
for(var i=0;i<metadataKeys.length;i++){var key=metadataKeys[i]
if(key in this.metadata[term][field]){this.metadata[term][field][key]=this.metadata[term][field][key].concat(metadata[key])}else{this.metadata[term][field][key]=metadata[key]}}}
lunr.Query=function(allFields){this.clauses=[]
this.allFields=allFields}
lunr.Query.wildcard=new String("*")
lunr.Query.wildcard.NONE=0
lunr.Query.wildcard.LEADING=1
lunr.Query.wildcard.TRAILING=2 
lunr.Query.prototype.clause=function(clause){if(!('fields'in clause)){clause.fields=this.allFields}
if(!('boost'in clause)){clause.boost=1}
if(!('usePipeline'in clause)){clause.usePipeline=true}
if(!('wildcard'in clause)){clause.wildcard=lunr.Query.wildcard.NONE}
if((clause.wildcard&lunr.Query.wildcard.LEADING)&&(clause.term.charAt(0)!=lunr.Query.wildcard)){clause.term="*"+clause.term}
if((clause.wildcard&lunr.Query.wildcard.TRAILING)&&(clause.term.slice(-1)!=lunr.Query.wildcard)){clause.term=""+clause.term+"*"}
this.clauses.push(clause)
return this}
lunr.Query.prototype.term=function(term,options){var clause=options||{}
clause.term=term
this.clause(clause)
return this}
lunr.QueryParseError=function(message,start,end){this.name="QueryParseError"
this.message=message
this.start=start
this.end=end}
lunr.QueryParseError.prototype=new Error
lunr.QueryLexer=function(str){this.lexemes=[]
this.str=str
this.length=str.length
this.pos=0
this.start=0
this.escapeCharPositions=[]}
lunr.QueryLexer.prototype.run=function(){var state=lunr.QueryLexer.lexText
while(state){state=state(this)}}
lunr.QueryLexer.prototype.sliceString=function(){var subSlices=[],sliceStart=this.start,sliceEnd=this.pos
for(var i=0;i<this.escapeCharPositions.length;i++){sliceEnd=this.escapeCharPositions[i]
subSlices.push(this.str.slice(sliceStart,sliceEnd))
sliceStart=sliceEnd+1}
subSlices.push(this.str.slice(sliceStart,this.pos))
this.escapeCharPositions.length=0
return subSlices.join('')}
lunr.QueryLexer.prototype.emit=function(type){this.lexemes.push({type:type,str:this.sliceString(),start:this.start,end:this.pos})
this.start=this.pos}
lunr.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1)
this.pos+=1}
lunr.QueryLexer.prototype.next=function(){if(this.pos>=this.length){return lunr.QueryLexer.EOS}
var char=this.str.charAt(this.pos)
this.pos+=1
return char}
lunr.QueryLexer.prototype.width=function(){return this.pos-this.start}
lunr.QueryLexer.prototype.ignore=function(){if(this.start==this.pos){this.pos+=1}
this.start=this.pos}
lunr.QueryLexer.prototype.backup=function(){this.pos-=1}
lunr.QueryLexer.prototype.acceptDigitRun=function(){var char,charCode
do{char=this.next()
charCode=char.charCodeAt(0)}while(charCode>47&&charCode<58)
if(char!=lunr.QueryLexer.EOS){this.backup()}}
lunr.QueryLexer.prototype.more=function(){return this.pos<this.length}
lunr.QueryLexer.EOS='EOS'
lunr.QueryLexer.FIELD='FIELD'
lunr.QueryLexer.TERM='TERM'
lunr.QueryLexer.EDIT_DISTANCE='EDIT_DISTANCE'
lunr.QueryLexer.BOOST='BOOST'
lunr.QueryLexer.lexField=function(lexer){lexer.backup()
lexer.emit(lunr.QueryLexer.FIELD)
lexer.ignore()
return lunr.QueryLexer.lexText}
lunr.QueryLexer.lexTerm=function(lexer){if(lexer.width()>1){lexer.backup()
lexer.emit(lunr.QueryLexer.TERM)}
lexer.ignore()
if(lexer.more()){return lunr.QueryLexer.lexText}}
lunr.QueryLexer.lexEditDistance=function(lexer){lexer.ignore()
lexer.acceptDigitRun()
lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
return lunr.QueryLexer.lexText}
lunr.QueryLexer.lexBoost=function(lexer){lexer.ignore()
lexer.acceptDigitRun()
lexer.emit(lunr.QueryLexer.BOOST)
return lunr.QueryLexer.lexText}
lunr.QueryLexer.lexEOS=function(lexer){if(lexer.width()>0){lexer.emit(lunr.QueryLexer.TERM)}}
lunr.QueryLexer.termSeparator=lunr.tokenizer.separator
lunr.QueryLexer.lexText=function(lexer){while(true){var char=lexer.next()
if(char==lunr.QueryLexer.EOS){return lunr.QueryLexer.lexEOS}
if(char.charCodeAt(0)==92){lexer.escapeCharacter()
continue}
if(char==":"){return lunr.QueryLexer.lexField}
if(char=="~"){lexer.backup()
if(lexer.width()>0){lexer.emit(lunr.QueryLexer.TERM)}
return lunr.QueryLexer.lexEditDistance}
if(char=="^"){lexer.backup()
if(lexer.width()>0){lexer.emit(lunr.QueryLexer.TERM)}
return lunr.QueryLexer.lexBoost}
if(char.match(lunr.QueryLexer.termSeparator)){return lunr.QueryLexer.lexTerm}}}
lunr.QueryParser=function(str,query){this.lexer=new lunr.QueryLexer(str)
this.query=query
this.currentClause={}
this.lexemeIdx=0}
lunr.QueryParser.prototype.parse=function(){this.lexer.run()
this.lexemes=this.lexer.lexemes
var state=lunr.QueryParser.parseFieldOrTerm
while(state){state=state(this)}
return this.query}
lunr.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]}
lunr.QueryParser.prototype.consumeLexeme=function(){var lexeme=this.peekLexeme()
this.lexemeIdx+=1
return lexeme}
lunr.QueryParser.prototype.nextClause=function(){var completedClause=this.currentClause
this.query.clause(completedClause)
this.currentClause={}}
lunr.QueryParser.parseFieldOrTerm=function(parser){var lexeme=parser.peekLexeme()
if(lexeme==undefined){return}
switch(lexeme.type){case lunr.QueryLexer.FIELD:return lunr.QueryParser.parseField
case lunr.QueryLexer.TERM:return lunr.QueryParser.parseTerm
default:var errorMessage="expected either a field or a term, found "+lexeme.type
if(lexeme.str.length>=1){errorMessage+=" with value '"+lexeme.str+"'"}
throw new lunr.QueryParseError(errorMessage,lexeme.start,lexeme.end)}}
lunr.QueryParser.parseField=function(parser){var lexeme=parser.consumeLexeme()
if(lexeme==undefined){return}
if(parser.query.allFields.indexOf(lexeme.str)==-1){var possibleFields=parser.query.allFields.map(function(f){return"'"+f+"'"}).join(', '),errorMessage="unrecognised field '"+lexeme.str+"', possible fields: "+possibleFields
throw new lunr.QueryParseError(errorMessage,lexeme.start,lexeme.end)}
parser.currentClause.fields=[lexeme.str]
var nextLexeme=parser.peekLexeme()
if(nextLexeme==undefined){var errorMessage="expecting term, found nothing"
throw new lunr.QueryParseError(errorMessage,lexeme.start,lexeme.end)}
switch(nextLexeme.type){case lunr.QueryLexer.TERM:return lunr.QueryParser.parseTerm
default:var errorMessage="expecting term, found '"+nextLexeme.type+"'"
throw new lunr.QueryParseError(errorMessage,nextLexeme.start,nextLexeme.end)}}
lunr.QueryParser.parseTerm=function(parser){var lexeme=parser.consumeLexeme()
if(lexeme==undefined){return}
parser.currentClause.term=lexeme.str.toLowerCase()
if(lexeme.str.indexOf("*")!=-1){parser.currentClause.usePipeline=false}
var nextLexeme=parser.peekLexeme()
if(nextLexeme==undefined){parser.nextClause()
return}
switch(nextLexeme.type){case lunr.QueryLexer.TERM:parser.nextClause()
return lunr.QueryParser.parseTerm
case lunr.QueryLexer.FIELD:parser.nextClause()
return lunr.QueryParser.parseField
case lunr.QueryLexer.EDIT_DISTANCE:return lunr.QueryParser.parseEditDistance
case lunr.QueryLexer.BOOST:return lunr.QueryParser.parseBoost
default:var errorMessage="Unexpected lexeme type '"+nextLexeme.type+"'"
throw new lunr.QueryParseError(errorMessage,nextLexeme.start,nextLexeme.end)}}
lunr.QueryParser.parseEditDistance=function(parser){var lexeme=parser.consumeLexeme()
if(lexeme==undefined){return}
var editDistance=parseInt(lexeme.str,10)
if(isNaN(editDistance)){var errorMessage="edit distance must be numeric"
throw new lunr.QueryParseError(errorMessage,lexeme.start,lexeme.end)}
parser.currentClause.editDistance=editDistance
var nextLexeme=parser.peekLexeme()
if(nextLexeme==undefined){parser.nextClause()
return}
switch(nextLexeme.type){case lunr.QueryLexer.TERM:parser.nextClause()
return lunr.QueryParser.parseTerm
case lunr.QueryLexer.FIELD:parser.nextClause()
return lunr.QueryParser.parseField
case lunr.QueryLexer.EDIT_DISTANCE:return lunr.QueryParser.parseEditDistance
case lunr.QueryLexer.BOOST:return lunr.QueryParser.parseBoost
default:var errorMessage="Unexpected lexeme type '"+nextLexeme.type+"'"
throw new lunr.QueryParseError(errorMessage,nextLexeme.start,nextLexeme.end)}}
lunr.QueryParser.parseBoost=function(parser){var lexeme=parser.consumeLexeme()
if(lexeme==undefined){return}
var boost=parseInt(lexeme.str,10)
if(isNaN(boost)){var errorMessage="boost must be numeric"
throw new lunr.QueryParseError(errorMessage,lexeme.start,lexeme.end)}
parser.currentClause.boost=boost
var nextLexeme=parser.peekLexeme()
if(nextLexeme==undefined){parser.nextClause()
return}
switch(nextLexeme.type){case lunr.QueryLexer.TERM:parser.nextClause()
return lunr.QueryParser.parseTerm
case lunr.QueryLexer.FIELD:parser.nextClause()
return lunr.QueryParser.parseField
case lunr.QueryLexer.EDIT_DISTANCE:return lunr.QueryParser.parseEditDistance
case lunr.QueryLexer.BOOST:return lunr.QueryParser.parseBoost
default:var errorMessage="Unexpected lexeme type '"+nextLexeme.type+"'"
throw new lunr.QueryParseError(errorMessage,nextLexeme.start,nextLexeme.end)}}
;(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__=(factory),__WEBPACK_AMD_DEFINE_RESULT__=(typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module)):__WEBPACK_AMD_DEFINE_FACTORY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else if(typeof exports==='object'){module.exports=factory()}else{root.lunr=factory()}}(this,function(){return lunr}))})();}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Position=__webpack_require__(38);var _Position2=_interopRequireDefault(_Position);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default={Position:_Position2.default};}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Position=function(){function Position(el,header){_classCallCheck(this,Position);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof HTMLElement)||!(ref.parentNode instanceof HTMLElement))throw new ReferenceError();this.el_=ref;this.parent_=ref.parentNode;ref=typeof header==="string"?document.querySelector(header):header;if(!(ref instanceof HTMLElement))throw new ReferenceError();this.header_=ref;this.height_=0;this.pad_=window.getComputedStyle(this.header_).position==="fixed";}
Position.prototype.setup=function setup(){var top=Array.prototype.reduce.call(this.parent_.children,function(offset,child){return Math.max(offset,child.offsetTop);},0);this.offset_=top-(this.pad_?this.header_.offsetHeight:0);this.update();};Position.prototype.update=function update(ev){var offset=window.pageYOffset;var visible=window.innerHeight;if(ev&&ev.type==="resize")this.setup();var bounds={top:this.pad_?this.header_.offsetHeight:0,bottom:this.parent_.offsetTop+this.parent_.offsetHeight
};var height=visible-bounds.top-Math.max(0,this.offset_-offset)-Math.max(0,offset+visible-bounds.bottom);if(height!==this.height_)this.el_.style.height=(this.height_=height)+"px";if(offset>=this.offset_){if(this.el_.dataset.mdState!=="lock")this.el_.dataset.mdState="lock";}else if(this.el_.dataset.mdState==="lock"){this.el_.dataset.mdState="";}};Position.prototype.reset=function reset(){this.el_.dataset.mdState="";this.el_.style.height="";this.height_=0;};return Position;}();exports.default=Position;}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Adapter=__webpack_require__(40);var _Adapter2=_interopRequireDefault(_Adapter);var _Repository=__webpack_require__(44);var _Repository2=_interopRequireDefault(_Repository);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default={Adapter:_Adapter2.default,Repository:_Repository2.default};}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _GitHub=__webpack_require__(41);var _GitHub2=_interopRequireDefault(_GitHub);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default={GitHub:_GitHub2.default};}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Abstract2=__webpack_require__(42);var _Abstract3=_interopRequireDefault(_Abstract2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
var GitHub=function(_Abstract){_inherits(GitHub,_Abstract);function GitHub(el){_classCallCheck(this,GitHub);var _this=_possibleConstructorReturn(this,_Abstract.call(this,el));var matches=/^.+github\.com\/([^/]+)\/?([^/]+)?.*$/.exec(_this.base_);if(matches&&matches.length===3){var user=matches[1],name=matches[2];_this.base_="https://api.github.com/users/"+user+"/repos";_this.name_=name;}
return _this;}
GitHub.prototype.fetch_=function fetch_(){var _this2=this;var paginate=function paginate(){var page=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;return fetch(_this2.base_+"?per_page=30&page="+page).then(function(response){return response.json();}).then(function(data){if(!(data instanceof Array))throw new TypeError();if(_this2.name_){var repo=data.find(function(item){return item.name===_this2.name_;});if(!repo&&data.length===30)return paginate(page+1);return repo?[_this2.format_(repo.stargazers_count)+" Stars",_this2.format_(repo.forks_count)+" Forks"]:[];}else{return[data.length+" Repositories"];}});};return paginate();};return GitHub;}(_Abstract3.default);exports.default=GitHub;}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _jsCookie=__webpack_require__(43);var _jsCookie2=_interopRequireDefault(_jsCookie);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Abstract=function(){function Abstract(el){_classCallCheck(this,Abstract);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof HTMLAnchorElement))throw new ReferenceError();this.el_=ref;this.base_=this.el_.href;this.salt_=this.hash_(this.base_);}
Abstract.prototype.fetch=function fetch(){var _this=this;return new Promise(function(resolve){var cached=_jsCookie2.default.getJSON(_this.salt_+".cache-source");if(typeof cached!=="undefined"){resolve(cached);}else{_this.fetch_().then(function(data){_jsCookie2.default.set(_this.salt_+".cache-source",data,{expires:1/96});resolve(data);});}});};Abstract.prototype.fetch_=function fetch_(){throw new Error("fetch_(): Not implemented");};Abstract.prototype.format_=function format_(number){if(number>10000)return(number/1000).toFixed(0)+"k";else if(number>1000)return(number/1000).toFixed(1)+"k";return""+number;};Abstract.prototype.hash_=function hash_(str){var hash=0;if(str.length===0)return hash;for(var i=0,len=str.length;i<len;i++){hash=(hash<<5)-hash+str.charCodeAt(i);hash|=0;}
return hash;};return Abstract;}();exports.default=Abstract;}),(function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function(factory){var registeredInModuleLoader=false;if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__=(factory),__WEBPACK_AMD_DEFINE_RESULT__=(typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module)):__WEBPACK_AMD_DEFINE_FACTORY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));registeredInModuleLoader=true;}
if(true){module.exports=factory();registeredInModuleLoader=true;}
if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api;};}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key];}}
return result;}
function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return;}
if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires;}
attributes.expires=attributes.expires?attributes.expires.toUTCString():'';try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result;}}catch(e){}
if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);}else{value=converter.write(value,key);}
key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);var stringifiedAttributes='';for(var attributeName in attributes){if(!attributes[attributeName]){continue;}
stringifiedAttributes+='; '+attributeName;if(attributes[attributeName]===true){continue;}
stringifiedAttributes+='='+attributes[attributeName];}
return(document.cookie=key+'='+value+stringifiedAttributes);}
if(!key){result={};}
var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(!this.json&&cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1);}
try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie);}catch(e){}}
if(key===name){result=cookie;break;}
if(!key){result[name]=cookie;}}catch(e){}}
return result;}
api.set=api;api.get=function(key){return api.call(api,key);};api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments));};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}));};api.withConverter=init;return api;}
return init(function(){});}));}),(function(module,exports,__webpack_require__){"use strict";(function(JSX){exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Repository=function(){function Repository(el){_classCallCheck(this,Repository);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof HTMLElement))throw new ReferenceError();this.el_=ref;}
Repository.prototype.initialize=function initialize(facts){if(facts.length&&this.el_.children.length)this.el_.children[this.el_.children.length-1].appendChild(JSX.createElement("ul",{"class":"md-source__facts"},facts.map(function(fact){return JSX.createElement("li",{"class":"md-source__fact"},fact);})));this.el_.dataset.mdState="done";};return Repository;}();exports.default=Repository;}.call(exports,__webpack_require__(0)))
}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _Toggle=__webpack_require__(46);var _Toggle2=_interopRequireDefault(_Toggle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default={Toggle:_Toggle2.default};}),(function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}
var Toggle=function(){function Toggle(el){_classCallCheck(this,Toggle);var ref=typeof el==="string"?document.querySelector(el):el;if(!(ref instanceof Node))throw new ReferenceError();this.el_=ref;this.active_=false;}
Toggle.prototype.update=function update(){var active=window.pageYOffset>=this.el_.children[0].offsetTop+(5-48);if(active!==this.active_)this.el_.dataset.mdState=(this.active_=active)?"hidden":"";};Toggle.prototype.reset=function reset(){this.el_.dataset.mdState="";this.active_=false;};return Toggle;}();exports.default=Toggle;})
])));
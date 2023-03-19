(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226,646],{35796:function(t,e,n){"use strict";n.d(e,{d:function(){return f}});var r=n(15861),i=n(15671),o=n(43144),a=n(97326),c=n(60136),s=n(82963),u=n(61120),h=n(4942),d=n(64687),l=n.n(d),p=n(45624),f=function(t){(0,c.Z)(w,t);var e,n,d,f=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=(0,u.Z)(w);if(e){var r=(0,u.Z)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,s.Z)(this,t)});function w(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.Z)(this,w),t=f.call(this),(0,h.Z)((0,a.Z)(t),"clientId",void 0),t.clientId=e.clientId,t}return(0,o.Z)(w,[{key:"authenticateUser",value:(n=(0,r.Z)(l().mark(function t(){var e,n,r,i,o,a,c,s,u,h;return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(!this.provider||!(null!==(e=this.chainConfig)&&void 0!==e&&e.chainId))){t.next=2;break}throw p.RM.notConnectedError();case 2:if(r=(n=this.chainConfig).chainNamespace,i=n.chainId,!(this.status!==p.MP.CONNECTED)){t.next=5;break}throw p.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 5:return t.next=7,this.provider.request({method:"eth_accounts"});case 7:if(!((o=t.sent)&&o.length>0)){t.next=26;break}if(!(a=(0,p.Cb)(o[0],this.name))||(0,p.$E)(a)){t.next=14;break}return t.abrupt("return",{idToken:a});case 14:return c={domain:window.location.origin,uri:window.location.href,address:o[0],chainId:parseInt(i,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:new Date().toISOString()},t.next=17,(0,p.tV)(c,r);case 17:return s=t.sent,t.next=20,this.provider.request({method:"personal_sign",params:[s,o[0]]});case 20:return u=t.sent,t.next=23,(0,p.rn)(r,u,s,this.name,this.sessionTime,this.clientId);case 23:return h=t.sent,(0,p.Fr)(o[0],this.name,h),t.abrupt("return",{idToken:h});case 26:throw p.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 27:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)})},{key:"disconnect",value:(d=(0,r.Z)(l().mark(function t(){var e;return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.status!==p.MP.CONNECTED)){t.next=2;break}throw p.RM.disconnectionError("Not connected with wallet");case 2:return t.next=4,this.provider.request({method:"eth_accounts"});case 4:(e=t.sent)&&e.length>0&&(0,p.qz)(e[0],this.name);case 6:case"end":return t.stop()}},t,this)})),function(){return d.apply(this,arguments)})}]),w}(p.J5)},21357:function(t,e,n){"use strict";n.r(e),n.d(e,{WalletConnectV1Adapter:function(){return m}});var r=n(15861),i=n(15671),o=n(43144),a=n(97326),c=n(73237),s=n(60136),u=n(82963),h=n(61120),d=n(4942),l=n(64687),p=n.n(l),f=n(71516),w=n(45624),v=n(35796),y=n(52062),k=[{name:"Rainbow",chains:[w.EN.EIP155],logo:"https://images.web3auth.io/login-rainbow.svg",mobile:{native:"rainbow:",universal:"https://rnbwapp.com"},desktop:{native:"",universal:""}},{name:"MetaMask",chains:[w.EN.EIP155],logo:"https://images.web3auth.io/login-metamask.svg",mobile:{native:"metamask:",universal:"https://metamask.app.link"},desktop:{native:"",universal:""}}];function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var m=function(t){(0,s.Z)(R,t);var e,n,l,v,m,C,E,b,x,N=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n=(0,h.Z)(R);if(e){var r=(0,h.Z)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,u.Z)(this,t)});function R(t){var e;return(0,i.Z)(this,R),e=N.call(this,t),(0,d.Z)((0,a.Z)(e),"name",w.rW.WALLET_CONNECT_V1),(0,d.Z)((0,a.Z)(e),"adapterNamespace",w.yk.EIP155),(0,d.Z)((0,a.Z)(e),"currentChainNamespace",w.EN.EIP155),(0,d.Z)((0,a.Z)(e),"type",w.hN.EXTERNAL),(0,d.Z)((0,a.Z)(e),"adapterOptions",void 0),(0,d.Z)((0,a.Z)(e),"status",w.MP.NOT_READY),(0,d.Z)((0,a.Z)(e),"adapterData",{uri:"",extensionAdapters:k}),(0,d.Z)((0,a.Z)(e),"connector",null),(0,d.Z)((0,a.Z)(e),"wcProvider",null),(0,d.Z)((0,a.Z)(e),"rehydrated",!1),e.adapterOptions=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach(function(e){(0,d.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t),e.chainConfig=t.chainConfig||null,e.sessionTime=t.sessionTime||86400,e}return(0,o.Z)(R,[{key:"connected",get:function(){var t;return!!(null!==(t=this.connector)&&void 0!==t&&t.connected)}},{key:"provider",get:function(){var t;return(null===(t=this.wcProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw Error("Not implemented")}},{key:"init",value:(n=(0,r.Z)(p().mark(function t(){return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((0,c.Z)((0,h.Z)(R.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=(0,w.h2)(w.EN.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new y.WalletConnectProvider({config:{chainConfig:this.chainConfig},connector:this.connector}),this.emit(w.n2.READY,w.rW.WALLET_CONNECT_V1),this.status=w.MP.READY,w.cM.debug("initializing wallet connect v1 adapter"),!this.connector.connected){t.next=11;break}return this.rehydrated=!0,t.next=11,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId});case 11:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)})},{key:"connect",value:(l=(0,r.Z)(p().mark(function t(){var e,n,i=this;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((0,c.Z)((0,h.Z)(R.prototype),"checkConnectionRequirements",this).call(this),this.connector){t.next=3;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 3:if(!this.connected){t.next=7;break}return t.next=6,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId});case 6:return t.abrupt("return",this.provider);case 7:if(!(this.status!==w.MP.CONNECTING)){t.next=13;break}return null!==(e=this.adapterOptions.adapterSettings)&&void 0!==e&&e.qrcodeModal&&(this.connector=this.getWalletConnectInstance(),this.wcProvider=new y.WalletConnectProvider({config:{chainConfig:this.chainConfig,skipLookupNetwork:null===(n=this.adapterOptions.adapterSettings)||void 0===n?void 0:n.skipNetworkSwitching},connector:this.connector})),t.next=11,this.createNewSession();case 11:this.status=w.MP.CONNECTING,this.emit(w.n2.CONNECTING,{adapter:w.rW.WALLET_CONNECT_V1});case 13:return t.abrupt("return",new Promise(function(t,e){if(!i.connector)return e(w.Ty.notReady("Wallet adapter is not ready yet"));i.connector.on("modal_closed",(0,r.Z)(p().mark(function t(){return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i.status=w.MP.READY,i.emit(w.n2.READY,w.rW.WALLET_CONNECT_V1),t.abrupt("return",e(Error("User closed modal")));case 3:case"end":return t.stop()}},t)})));try{i.connector.on("connect",function(){var e=(0,r.Z)(p().mark(function e(n,r){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n&&i.emit(w.n2.ERRORED,n),w.cM.debug("connected event emitted by web3auth"),e.next=4,i.onConnectHandler(r.params[0]);case 4:return e.abrupt("return",t(i.provider));case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}())}catch(t){w.cM.error("Wallet connect v1 adapter error while connecting",t),i.status=w.MP.READY,i.rehydrated=!0,i.emit(w.n2.ERRORED,t),e(t instanceof w.up?t:w.RM.connectionError("Failed to login with wallet connect: ".concat((null==t?void 0:t.message)||"")))}}));case 14:case"end":return t.stop()}},t,this)})),function(){return l.apply(this,arguments)})},{key:"setAdapterSettings",value:function(t){this.status!==w.MP.READY&&(null!=t&&t.sessionTime&&(this.sessionTime=t.sessionTime),null!=t&&t.clientId&&(this.clientId=t.clientId))}},{key:"getUserInfo",value:(v=(0,r.Z)(p().mark(function t(){return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connected){t.next=2;break}throw w.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)})},{key:"disconnect",value:(m=(0,r.Z)(p().mark(function t(){var e,n=arguments;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(n.length>0&&void 0!==n[0]?n[0]:{cleanup:!1}).cleanup,!(!this.connector||!this.connected)){t.next=4;break}throw w.RM.notConnectedError("Not connected with wallet");case 4:return t.next=6,(0,c.Z)((0,h.Z)(R.prototype),"disconnect",this).call(this);case 6:return t.next=8,this.connector.killSession();case 8:this.rehydrated=!1,e?(this.connector=null,this.status=w.MP.NOT_READY,this.wcProvider=null):this.status=w.MP.READY,this.emit(w.n2.DISCONNECTED);case 11:case"end":return t.stop()}},t,this)})),function(){return m.apply(this,arguments)})},{key:"addChain",value:(C=(0,r.Z)(p().mark(function t(e){var n,r;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.wcProvider){t.next=3;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 3:if(!(r=null===(n=this.adapterOptions.adapterSettings)||void 0===n?void 0:n.networkSwitchModal)){t.next=7;break}return t.next=7,r.addNetwork({chainConfig:e,appOrigin:window.location.hostname});case 7:return t.next=9,this.wcProvider.addChain(e);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),w.cM.error(t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])})),function(t){return C.apply(this,arguments)})},{key:"switchChain",value:(E=(0,r.Z)(p().mark(function t(e,n){var r,i;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.wcProvider){t.next=2;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 2:if(!(i=null===(r=this.adapterOptions.adapterSettings)||void 0===r?void 0:r.networkSwitchModal)){t.next=6;break}return t.next=6,i.switchNetwork({currentChainConfig:n,newChainConfig:e,appOrigin:window.location.hostname});case 6:return t.next=8,this.wcProvider.switchChain({chainId:n.chainId,lookup:!1,addChain:!1});case 8:case"end":return t.stop()}},t,this)})),function(t,e){return E.apply(this,arguments)})},{key:"createNewSession",value:(b=(0,r.Z)(p().mark(function t(){var e,n,i,o,a=this,c=arguments;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=c.length>0&&void 0!==c[0]?c[0]:{forceNewSession:!1},this.connector){t.next=3;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 3:if(!(i.forceNewSession&&this.connector.pending)){t.next=6;break}return t.next=6,this.connector.killSession();case 6:if(!(null!==(e=this.adapterOptions)&&void 0!==e&&null!==(n=e.adapterSettings)&&void 0!==n&&n.qrcodeModal)){t.next=10;break}return t.next=9,this.connector.createSession({chainId:parseInt((null===(o=this.chainConfig)||void 0===o?void 0:o.chainId)||"0x1",16)});case 9:return t.abrupt("return");case 10:return t.abrupt("return",new Promise(function(t,e){var n;if(!a.connector)return e(w.Ty.notReady("Wallet adapter is not ready yet"));w.cM.debug("creating new session for web3auth wallet connect"),a.connector.on("display_uri",function(){var n=(0,r.Z)(p().mark(function n(r,i){var o,c;return p().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=3;break}return a.emit(w.n2.ERRORED,w.RM.connectionError("Failed to display wallet connect qr code")),n.abrupt("return",e(r));case 3:return c=i.params[0],a.updateAdapterData({uri:c,extensionAdapters:k}),null===(o=a.connector)||void 0===o||o.off("display_uri"),n.abrupt("return",t());case 7:case"end":return n.stop()}},n)}));return function(t,e){return n.apply(this,arguments)}}()),a.connector.createSession({chainId:parseInt((null===(n=a.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)}).catch(function(t){return w.cM.error("error while creating new wallet connect session",t),a.emit(w.n2.ERRORED,t),e(t)})}));case 11:case"end":return t.stop()}},t,this)})),function(){return b.apply(this,arguments)})},{key:"onConnectHandler",value:(x=(0,r.Z)(p().mark(function t(e){var n,r,i,o,a,c;return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(!this.connector||!this.wcProvider)){t.next=2;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 2:if(this.chainConfig){t.next=4;break}throw w.Ty.invalidParams("Chain config is not set");case 4:if(n=e.chainId,w.cM.debug("connected chainId in hex"),!(n!==parseInt(this.chainConfig.chainId,16))||(a=(0,w.h2)(w.EN.EIP155,n)||{chainId:"0x".concat(n.toString(16)),displayName:"Unknown Network"},!(!(c=null===(r=this.adapterOptions.adapterSettings)||void 0===r?void 0:r.qrcodeModal)||c&&!(null!==(i=this.adapterOptions)&&void 0!==i&&null!==(o=i.adapterSettings)&&void 0!==o&&o.skipNetworkSwitching)))){t.next=27;break}return t.prev=10,t.next=13,this.addChain(this.chainConfig);case 13:return t.next=15,this.switchChain(a,this.chainConfig);case 15:this.connector=this.getWalletConnectInstance(),t.next=27;break;case 18:return t.prev=18,t.t0=t.catch(10),w.cM.error("error while chain switching",t.t0),t.next=23,this.createNewSession({forceNewSession:!0});case 23:return this.emit(w.n2.ERRORED,w.Ty.fromCode(5e3,"Not connected to correct network. Expected: ".concat(this.chainConfig.displayName,", Current: ").concat((null==a?void 0:a.displayName)||n,", Please switch to correct network from wallet"))),this.status=w.MP.READY,this.rehydrated=!0,t.abrupt("return");case 27:return t.next=29,this.wcProvider.setupProvider(this.connector);case 29:this.subscribeEvents(this.connector),this.status=w.MP.CONNECTED,this.emit(w.n2.CONNECTED,{adapter:w.rW.WALLET_CONNECT_V1,reconnected:this.rehydrated});case 32:case"end":return t.stop()}},t,this,[[10,18]])})),function(t){return x.apply(this,arguments)})},{key:"subscribeEvents",value:function(t){var e,n=this;t.on("session_update",(e=(0,r.Z)(p().mark(function t(e){return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e&&n.emit(w.n2.ERRORED,e);case 1:case"end":return t.stop()}},t)})),function(t){return e.apply(this,arguments)}))}},{key:"getWalletConnectInstance",value:function(){var t=this.adapterOptions.adapterSettings||{};return t.bridge=t.bridge||"https://bridge.walletconnect.org",new f.Z(t)}}]),R}(v.d)},62859:function(){},75304:function(){},32772:function(){},69159:function(){},8268:function(){},91614:function(){},29704:function(){},88924:function(){}}]);
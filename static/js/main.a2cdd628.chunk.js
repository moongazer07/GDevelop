(this["webpackJsonpgdevelop-ide"]=this["webpackJsonpgdevelop-ide"]||[]).push([[58],{17:function(e,n,t){(function(n){var r=t(108)();e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{rethrowException:!1};try{return n.require?n.require(e):r?r(e):null}catch(o){if(t.rethrowException)throw o;return null}}}).call(this,t(10))},18:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(4),o=t(5),i=t(17),a=t.n(i),c=t(62),u=t.n(c),s=t(44),l=a()("electron"),d=l?l.shell:null,f=l?l.remote.dialog:null,p="_",h=null,g=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,null,[{key:"setTitle",value:function(e){if(l)try{l.remote.getCurrentWindow().setTitle(e)}catch(n){console.error("Caught an error while calling browserWindow.setTitle",n)}else document.title=e}},{key:"setTitleBarColor",value:function(e){if(!l&&h!==e){var n=document.querySelector('meta[name="theme-color"]');n&&(n.setAttribute("content",e),h=e)}}},{key:"setBounds",value:function(e,n,t,r){if(l){var o=1;if(Object(s.g)()){var i={x:e,y:n,width:t,height:r};o=l.remote.screen.getDisplayMatching(i).scaleFactor}var a=l.remote.getCurrentWindow();try{a.setBounds({x:Math.round(e/o),y:Math.round(n/o),width:Math.round(t/o),height:Math.round(r/o)})}catch(c){console.warn("Unable to change window bounds",c)}this.show()}}},{key:"quit",value:function(){l&&l.remote.app.quit()}},{key:"show",value:function(){if(l){var e=l.remote.getCurrentWindow();e.showInactive(),e.setAlwaysOnTop(!0)}}},{key:"hide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(l){var n=l.remote.getCurrentWindow();n.isFocused()&&!e||(n.setAlwaysOnTop(!1),n.hide())}}},{key:"onFocus",value:function(e){if(l)return l.remote.getCurrentWindow().on("focus",e)}},{key:"onBlur",value:function(e){if(l)return l.remote.getCurrentWindow().on("blur",e)}},{key:"onClose",value:function(e){if(l)return l.remote.getCurrentWindow().on("close",e)}},{key:"getArguments",value:function(){if(l)return l.remote.getGlobal("args");var e={};return new u.a(window.location.search).forEach((function(n,t){return e[t]=n})),e[p]=e.project?[e.project]:[],e}},{key:"showMessageBox",value:function(e,n){if(f&&l){var t=l.remote.getCurrentWindow();f.showMessageBoxSync(t,{message:e,type:n,buttons:["OK"]})}else alert(e)}},{key:"showConfirmDialog",value:function(e,n){if(!f||!l)return confirm(e);var t=l.remote.getCurrentWindow();return 0===f.showMessageBoxSync(t,{message:e,type:n,buttons:["OK","Cancel"]})}},{key:"setUpContextMenu",value:function(){if(l){var e=l.remote.require("electron-editor-context-menu");window.addEventListener("contextmenu",(function(n){if(n.target.closest('textarea, input, [contenteditable="true"]')){var t=e();setTimeout((function(){t.popup({window:l.remote.getCurrentWindow()})}),30)}}))}else document&&document.addEventListener("contextmenu",(function(e){return!!e.target.closest('textarea, input, [contenteditable="true"]')||(e.preventDefault(),!1)}))}},{key:"openExternalURL",value:function(e){e&&(l?d&&d.openExternal(e):window.open(e,"_blank"))}},{key:"hasMainMenu",value:function(){return!!l}},{key:"isDev",value:function(){if(!l)return!1;try{var e=l.remote.require("electron-is").dev();return e}catch(n){return console.error("Caught an error while calling electron.remote.require('electron-is').dev",n),!1}}}]),e}()},24:function(e,n){e.exports={version:"5.0.0-beta119",gitHash:"41988322ee314c0fc7df667a166af450f8328394",versionWithHash:"5.0.0-beta119-41988322ee314c0fc7df667a166af450f8328394"}},27:function(e,n,t){"use strict";var r=t(25),o=t.n(r),i=t(18),a=t(33),c=(t(34),function(){try{var e=localStorage.getItem("".concat("gd-local-stats","-program-opening"));if(null!==e)return parseInt(e,10)}catch(n){console.warn("Unable to load stored program opening count",n)}return 0}),u=t(59),s=t(29);t.d(n,"a",(function(){return p})),t.d(n,"l",(function(){return h})),t.d(n,"f",(function(){return g})),t.d(n,"j",(function(){return v})),t.d(n,"r",(function(){return m})),t.d(n,"h",(function(){return b})),t.d(n,"i",(function(){return w})),t.d(n,"e",(function(){return y})),t.d(n,"n",(function(){return U})),t.d(n,"o",(function(){return E})),t.d(n,"p",(function(){return k})),t.d(n,"q",(function(){return C})),t.d(n,"c",(function(){return A})),t.d(n,"b",(function(){return j})),t.d(n,"k",(function(){return D})),t.d(n,"m",(function(){return S})),t.d(n,"d",(function(){return O})),t.d(n,"g",(function(){return x}));var l=i.b.isDev(),d=null,f=null,p=function(e){if(l)console.info("Development build - Analytics disabled");else{var n=Object(s.b)(),t=Object(s.c)(),r=o.a.utils.cookie("visitor-stats"),i=o.a.utils.timer();i.start(),(d=new o.a({projectId:"593d9f0595cfc907a1f8126a",writeKey:"B917F1DB50EE4C8949DBB374D2962845A22838B425AA43322A37138691A5270EB0358AEE45A4F61AFA7713B9765B4980517A1E276D4973A2E546EA851BF7757523706367ED430C041D2728A63BF61B5D1B2079C75E455DDDFAAC4324128AC2DB"})).extendEvents((function(){var s=e.getFirebaseUserSync();return f=f||Object(u.a)(),{user:{uuid:Object(a.a)(),uid:s?s.uid:void 0,providerId:s?s.providerId:void 0,email:s?s.email:void 0,emailVerified:s?s.emailVerified:void 0},localStats:{programOpeningCount:c()},versionMetadata:{version:n,versionWithHash:t},startupTimesSummary:f,page:{title:document.title,url:document.location.href},referrer:{url:document.referrer},tech:{browser:o.a.helpers.getBrowserProfile(),ip:"${keen.ip}",ua:"${keen.user_agent}"},time:o.a.helpers.getDatetimeIndex(),visitor:{id:r.get("user_id"),time_on_page:i.value()},keen:{timestamp:(new Date).toISOString(),addons:[{name:"keen:ip_to_geo",input:{ip:"tech.ip"},output:"geo"},{name:"keen:ua_parser",input:{ua_string:"tech.ua"},output:"tech.info"},{name:"keen:url_parser",input:{url:"page.url"},output:"page.info"},{name:"keen:referrer_parser",input:{page_url:"page.url",referrer_url:"referrer.url"},output:"referrer.info"}]}}}))}},h=function(){!l&&d&&(!function(){var e=c()+1;try{localStorage.setItem("".concat("gd-local-stats","-program-opening"),""+e)}catch(n){console.warn("Unable to store program opening count",n)}}(),d.recordEvent("program_opening"))},g=function(e){!l&&d&&d.recordEvent("export_launched",{platform:"GDevelop JS Platform",exportKind:e})},v=function(e){!l&&d&&d.recordEvent("new_game_creation",{platform:"GDevelop JS Platform",templateName:e})},m=function(e){!l&&d&&d.recordEvent("tutorial_opened",{tutorialName:e})},b=function(){!l&&d&&d.recordEvent("help_finder_opened",{})},w=function(e){console.log("sendHelpSearch",e),!l&&d&&d.recordEvent("help_search",{searchText:e})},y=function(e,n,t,r){!l&&d&&d.recordEvent("error_message",{message:e,type:n,rawError:t,errorId:r})},U=function(e){!l&&d&&d.recordEvent("signup",{email:e})},E=function(e){var n=e.mode,t=e.id;!l&&d&&d.recordEvent("subscription-check-dialog-shown",{mode:n,title:t})},k=function(){!l&&d&&d.recordEvent("subscription-check-dialog-dismiss")},C=function(){!l&&d&&d.recordEvent("subscription-dialog-shown",{})},A=function(e){var n=e.id,t=e.name;!l&&d&&d.recordEvent("asset-opened",{id:n,name:t})},j=function(e){var n=e.id,t=e.name;!l&&d&&d.recordEvent("asset-added-to-project",{id:n,name:t})},D=function(e){!l&&d&&d.recordEvent("new-object-created",{name:e})},S=function(e,n){!l&&d&&d.recordEvent("showcase-open-game-link",{title:e,linkType:n})},O=function(e){!l&&d&&d.recordEvent("choose-plan-click",{planId:e})},x=function(e){!l&&d&&d.recordEvent("open_external_editor",{editorName:e})}},28:function(e,n,t){"use strict";t.d(n,"f",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return i})),t.d(n,"h",(function(){return a})),t.d(n,"g",(function(){return c})),t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return s})),t.d(n,"e",(function(){return l})),t.d(n,"i",(function(){return d}));var r={baseUrl:"https://game-previews.gdevelop-app.com/"},o={baseUrl:"https://api.gdevelop-app.com/build"},i={apiKey:"AIzaSyAnX9QMacrIl3yo4zkVFEVhDppGVDDewBc",authDomain:"gdevelop-services.firebaseapp.com",databaseURL:"https://gdevelop-services.firebaseio.com",projectId:"gdevelop-services",storageBucket:"gdevelop-services.appspot.com",messagingSenderId:"44882707384"},a={baseUrl:"https://api.gdevelop-app.com/usage"},c={baseUrl:"https://api.gdevelop-app.com/release"},u={baseUrl:"https://api.gdevelop-app.com/asset"},s={baseUrl:"https://api.gdevelop-app.com/analytics"},l={baseUrl:"https://api.gdevelop-app.com/game"},d={baseUrl:"https://api.gdevelop-app.com/user"}},29:function(e,n,t){"use strict";(function(e){t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return u}));var r=t(24),o=t.n(r),i=function(){return o.a.version},a=function(){return o.a.versionWithHash},c="",u=function(){if(c)return c;var n=e.gd;return c=n?n.VersionWrapper.fullString():"Unknown"}}).call(this,t(10))},33:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(){try{var e=localStorage.getItem("gd-user-uuid");if(e)return e}catch(t){console.warn("Unable to load stored user UUID",t)}var n=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}();try{localStorage.setItem("gd-user-uuid",n)}catch(t){console.warn("Unable to save user UUID",t)}return n}},34:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(4),o=t(61),i=t(20),a=t(28),c=t(31),u=t.n(c),s=function e(){var n=this;Object(r.a)(this,e),this.firebaseUser=null,this.user=null,this._onUserChangeCallback=null,this.setOnUserChangeCallback=function(e){n._onUserChangeCallback=e},this.createFirebaseAccount=function(e){return Object(i.a)(n.auth,e.email,e.password).then((function(e){n.firebaseUser=e.user})).catch((function(e){throw console.error("Error while creating firebase account:",e),e}))},this.createUser=function(e,t){return e().then((function(e){if(!n.firebaseUser)throw console.error("Cannot get user if not logged in"),new Error("Cannot get user if not logged in");return u.a.post("".concat(a.i.baseUrl,"/user"),{id:n.firebaseUser.uid,email:t.email,username:t.username},{params:{userId:n.firebaseUser.uid},headers:{Authorization:e}})})).then((function(e){n.user=e.data})).catch((function(e){throw console.error("Error while creating user:",e),e}))},this.login=function(e){return Object(i.e)(n.auth,e.email,e.password).then((function(e){n.firebaseUser=e.user})).catch((function(e){throw console.error("Error while login:",e),e}))},this.forgotPassword=function(e){return Object(i.d)(n.auth,e.email)},this.getFirebaseUser=function(e){if(!n.isAuthenticated())return e({unauthenticated:!0});e(null,n.firebaseUser)},this.getUserProfile=function(e){return e().then((function(e){if(!n.firebaseUser)throw console.error("Cannot get user if not logged in"),new Error("Cannot get user if not logged in");return u.a.get("".concat(a.i.baseUrl,"/user/").concat(n.firebaseUser.uid),{params:{userId:n.firebaseUser.uid},headers:{Authorization:e}})})).then((function(e){return e.data})).catch((function(e){throw console.error("Error while fetching user:",e),e}))},this.editUserProfile=function(e,t){return e().then((function(e){if(!n.firebaseUser)throw console.error("Cannot get user if not logged in"),new Error("Cannot get user if not logged in");var r=t.username,o=t.description;return u.a.patch("".concat(a.i.baseUrl,"/user/").concat(n.firebaseUser.uid),{username:r,description:o},{params:{userId:n.firebaseUser.uid},headers:{Authorization:e}})})).then((function(e){return e.data})).catch((function(e){throw console.error("Error while editing user:",e),e.response.data}))},this.getFirebaseUserSync=function(){return n.firebaseUser},this.logout=function(){Object(i.f)(n.auth).then((function(){console.log("Logout successful")})).catch((function(e){console.log("An error happened during logout",e)}))},this.getAuthorizationHeader=function(){return n.firebaseUser?n.firebaseUser.getIdToken().then((function(e){return"Bearer ".concat(e)})):Promise.reject(new Error("User is not authenticated"))},this.isAuthenticated=function(){return!!n.firebaseUser};var t=Object(o.a)(a.d);this.auth=Object(i.b)(t),Object(i.c)(this.auth,(function(e){n.firebaseUser=e||null,n._onUserChangeCallback&&n._onUserChangeCallback()}))}},42:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return c}));var r=t(18),o=t(27),i=function(e){r.b.showMessageBox(e,"info")},a=function(e,n){n&&n.delayToNextTick?setTimeout((function(){r.b.showMessageBox(e,"warning")})):r.b.showMessageBox(e,"warning")},c=function(e){var n=e.message,t=e.rawError,i=e.errorId,a=e.doNotReport;r.b.showMessageBox(n,"error"),a||Object(o.e)(n,"error",t,i),console.error("".concat(i,': "').concat(n,'". Raw error:'),t)}},44:function(e,n,t){"use strict";t.d(n,"d",(function(){return l})),t.d(n,"a",(function(){return d})),t.d(n,"c",(function(){return f})),t.d(n,"b",(function(){return p})),t.d(n,"g",(function(){return h})),t.d(n,"e",(function(){return g})),t.d(n,"f",(function(){return v}));var r=t(17),o=t.n(r),i=o()("electron"),a=o()("process"),c=!1;i&&(c=i.remote.require("electron-is").windows());var u=!("undefined"===typeof navigator||!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)),s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test("undefined"!==typeof navigator?navigator.userAgent:""),l=function(){return"undefined"!==typeof navigator?navigator.userAgent||"Unknown navigator":"Unknown (not a navigator)"},d=function(){return a?a.arch||"Unknown architecture":"Unknown architecture (web-app)"},f=function(){return a&&a.getSystemVersion?a.getSystemVersion()||"Unknown system version":"Unknown system version (web-app)"},p=function(){return a?a.platform||"Unknown platform":("undefined"!==typeof navigator?navigator.platform:"")||"Unknown platform (web-app)"},h=function(){return c},g=function(){return u},v=function(){return s}},46:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){return new Promise((function(n,t){if("undefined"!==typeof document){var r=document.body;if(r){var o=document.createElement("script");o.type="text/javascript",o.src=e,o.onload=function(){return n()},o.onerror=function(e){return t(e)},o.onabort=function(e){return t(e)},r.appendChild(o)}else t(new Error("loadScript is only supported in a browser environment."))}else t(new Error("loadScript is only supported in a browser environment."))}))}},59:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return o}));var r=e.GD_STARTUP_TIMES;r||console.error("Could not find GD_STARTUP_TIMES array. Have you declared it in index.html, in a synchronous script?");var o=function(){var e=["<init>",0];return{steps:r.map((function(n){var t={stepName:n[0],time:n[1],elapsedTime:n[1]-e[1]};return e=n,t})),totalStartupTime:e[1]}}}).call(this,t(10))},63:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(64),o=t.n(r),i=t(33),a=t(29),c=function(){o.a.config("https://e10c176ee68f432199cd292ba181e03b@sentry.io/233519",{release:Object(a.c)()}).install().setUserContext({id:Object(i.a)()})}},65:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e){if("serviceWorker"in navigator){var n=new URL(".",window.location.href);if(n.origin!==window.location.origin)return void console.log("The origin in PUBLIC_URL (".concat(n.origin,") is different than the current origin (").concat(window.location.origin,") - Service Worker disabled"));window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");r?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):i(n,e)}))}else console.log("Development build (or unsupported browser) - Service Worker disabled")}function i(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}},67:function(e,n,t){},68:function(e,n,t){e.exports=t(69)},69:function(e,n,t){"use strict";t.r(n),function(e){var n=t(4),r=t(5),o=t(7),i=t(6),a=(t(70),t(16)),c=t.n(a),u=t(43),s=t.n(u),l=t(34),d=t(27),f=t(63),p=t(65),h=(t(67),t(17)),g=t.n(h),v=t(46),m=t(42),b=t(24),w=t.n(b),y=e.GD_STARTUP_TIMES||[],U=g()("electron"),E={loadingMessage:{position:"absolute",top:"calc(50% + 80px)",left:15,right:15,fontSize:20,fontFamily:"sans-serif",color:"darkgray",textAlign:"center",animation:"text-focus-in 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"}},k=function(a){Object(o.a)(s,a);var u=Object(i.a)(s);function s(){var e;Object(n.a)(this,s);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=u.call.apply(u,[this].concat(r))).state={loadingMessage:"Loading the editor...",App:null},e.authentication=new l.a,e.handleEditorLoadError=function(n){var t=U?"Please restart the application or reinstall the latest version if the problem persists.":"Please check your internet connectivity, close the tab and reopen it.";e.setState({loadingMessage:"Unable to load GDevelop. ".concat(t)}),Object(m.a)({message:"Unable to load GDevelop. ".concat(t),rawError:n,errorId:"editor-load-error"})},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var n=this;Object(d.a)(this.authentication),Object(f.a)(),y.push(["bootstrapperComponentDidMount",performance.now()]),Object(v.a)("./libGD.js?cache-buster=".concat(w.a.versionWithHash)).then((function(){y.push(["libGDLoadedTime",performance.now()]);var r=e.initializeGDevelopJs;r?r({locateFile:function(e,n){return n+e+"?cache-buster=".concat(w.a.versionWithHash)}}).then((function(r){e.gd=r,y.push(["libGD.js initialization done",performance.now()]),U?Promise.all([t.e(0),t.e(1),t.e(4)]).then(t.bind(null,114)).then((function(e){return n.setState({App:e.create(n.authentication),loadingMessage:""})})).catch(n.handleEditorLoadError):Promise.all([t.e(0),t.e(62),t.e(1),t.e(3)]).then(t.bind(null,115)).then((function(e){return n.setState({App:e.create(n.authentication),loadingMessage:""})})).catch(n.handleEditorLoadError)})):n.handleEditorLoadError(new Error("Missing initializeGDevelopJs in libGD.js"))}),this.handleEditorLoadError)}},{key:"render",value:function(){var e=this.state,n=e.App,t=e.loadingMessage;return c.a.createElement(c.a.Fragment,null,n,t&&c.a.createElement("div",{style:E.loadingMessage},t))}}]),s}(a.Component),C=document.getElementById("root");C?(y.push(["reactDOMRenderCall",performance.now()]),s.a.render(c.a.createElement(k,null),C)):console.error("No root element defined in index.html"),Object(p.a)(),Object(d.l)()}.call(this,t(10))}},[[68,59,61]]]);
//# sourceMappingURL=main.a2cdd628.chunk.js.map
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/js-base64@3.7.7/base64.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,n){var r,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r=t.Base64,(e=n()).noConflict=function(){return t.Base64=r,e},t.Meteor&&(Base64=e),t.Base64=e)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:this,(function(){"use strict";var t,n="3.7.7",r=n,e="function"==typeof Buffer,o="function"==typeof TextDecoder?new TextDecoder:void 0,u="function"==typeof TextEncoder?new TextEncoder:void 0,i=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),f=(t={},i.forEach((function(n,r){return t[n]=r})),t),c=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,a=String.fromCharCode.bind(String),d="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):function(t){return new Uint8Array(Array.prototype.slice.call(t,0))},s=function(t){return t.replace(/=/g,"").replace(/[+\/]/g,(function(t){return"+"==t?"-":"_"}))},l=function(t){return t.replace(/[^A-Za-z0-9\+\/]/g,"")},h=function(t){for(var n,r,e,o,u="",f=t.length%3,c=0;c<t.length;){if((r=t.charCodeAt(c++))>255||(e=t.charCodeAt(c++))>255||(o=t.charCodeAt(c++))>255)throw new TypeError("invalid character found");u+=i[(n=r<<16|e<<8|o)>>18&63]+i[n>>12&63]+i[n>>6&63]+i[63&n]}return f?u.slice(0,f-3)+"===".substring(f):u},p="function"==typeof btoa?function(t){return btoa(t)}:e?function(t){return Buffer.from(t,"binary").toString("base64")}:h,y=e?function(t){return Buffer.from(t).toString("base64")}:function(t){for(var n=[],r=0,e=t.length;r<e;r+=4096)n.push(a.apply(null,t.subarray(r,r+4096)));return p(n.join(""))},A=function(t,n){return void 0===n&&(n=!1),n?s(y(t)):y(t)},b=function(t){if(t.length<2)return(n=t.charCodeAt(0))<128?t:n<2048?a(192|n>>>6)+a(128|63&n):a(224|n>>>12&15)+a(128|n>>>6&63)+a(128|63&n);var n=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return a(240|n>>>18&7)+a(128|n>>>12&63)+a(128|n>>>6&63)+a(128|63&n)},g=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,B=function(t){return t.replace(g,b)},x=e?function(t){return Buffer.from(t,"utf8").toString("base64")}:u?function(t){return y(u.encode(t))}:function(t){return p(B(t))},C=function(t,n){return void 0===n&&(n=!1),n?s(x(t)):x(t)},m=function(t){return C(t,!0)},v=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,U=function(t){switch(t.length){case 4:var n=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return a(55296+(n>>>10))+a(56320+(1023&n));case 3:return a((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return a((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},F=function(t){return t.replace(v,U)},w=function(t){if(t=t.replace(/\s+/g,""),!c.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));for(var n,r,e,o="",u=0;u<t.length;)n=f[t.charAt(u++)]<<18|f[t.charAt(u++)]<<12|(r=f[t.charAt(u++)])<<6|(e=f[t.charAt(u++)]),o+=64===r?a(n>>16&255):64===e?a(n>>16&255,n>>8&255):a(n>>16&255,n>>8&255,255&n);return o},S="function"==typeof atob?function(t){return atob(l(t))}:e?function(t){return Buffer.from(t,"base64").toString("binary")}:w,E=e?function(t){return d(Buffer.from(t,"base64"))}:function(t){return d(S(t).split("").map((function(t){return t.charCodeAt(0)})))},D=function(t){return E(z(t))},R=e?function(t){return Buffer.from(t,"base64").toString("utf8")}:o?function(t){return o.decode(E(t))}:function(t){return F(S(t))},z=function(t){return l(t.replace(/[-_]/g,(function(t){return"-"==t?"+":"/"})))},T=function(t){return R(z(t))},Z=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}},j=function(){var t=function(t,n){return Object.defineProperty(String.prototype,t,Z(n))};t("fromBase64",(function(){return T(this)})),t("toBase64",(function(t){return C(this,t)})),t("toBase64URI",(function(){return C(this,!0)})),t("toBase64URL",(function(){return C(this,!0)})),t("toUint8Array",(function(){return D(this)}))},I=function(){var t=function(t,n){return Object.defineProperty(Uint8Array.prototype,t,Z(n))};t("toBase64",(function(t){return A(this,t)})),t("toBase64URI",(function(){return A(this,!0)})),t("toBase64URL",(function(){return A(this,!0)}))},O={version:n,VERSION:r,atob:S,atobPolyfill:w,btoa:p,btoaPolyfill:h,fromBase64:T,toBase64:C,encode:C,encodeURI:m,encodeURL:m,utob:B,btou:F,decode:T,isValid:function(t){if("string"!=typeof t)return!1;var n=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(n)||!/[^\s0-9a-zA-Z\-_]/.test(n)},fromUint8Array:A,toUint8Array:D,extendString:j,extendUint8Array:I,extendBuiltins:function(){j(),I()},Base64:{}};return Object.keys(O).forEach((function(t){return O.Base64[t]=O[t]})),O}));
//# sourceMappingURL=/sm/b3f991b414b0fa1b0799af2a7f930299e529ee04d4e0dc56fb33a5bfd532f984.map

!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).version = {})
}
(this, (function (exports) {
        "use strict";
        function __awaiter(e, t, n, i) {
            return new(n || (n = Promise))((function (s, a) {
                    function o(e) {
                        try {
                            d(i.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function r(e) {
                        try {
                            d(i.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }
                    function d(e) {
                        var t;
                        e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                    e(t)
                                }))).then(o, r)
                    }
                    d((i = i.apply(e, t || [])).next())
                }))
        }
        var Blocking;
        "function" == typeof SuppressedError && SuppressedError,
        function (e) {
            e.PENDING = "pending",
            e.NONE = "none",
            e.BLOCKED = "blocked",
            e.ALLOWED = "allowed"
        }
        (Blocking || (Blocking = {}));
        class Adblock {
            constructor(e) {
                this.state = Blocking.PENDING,
                this._mocked = !1,
                e ? (this.state = e, this._mocked = !0) : this.state = Blocking.ALLOWED
            }
            inject() {
                return __awaiter(this, void 0, void 0, (function  * () {}))
            }
            get isBlocked() {
                return this.state === Blocking.BLOCKED
            }
            get isAllowed() {
                return this.state === Blocking.ALLOWED
            }
            toContext() {
                return {
                    user_has_ad_blocker: null,
                    is_ad_blocked: null
                }
            }
        }
        const OBFUSCATING_BASE_64_PREFIX = "UxFdVMwNFNwN0wzODEybV",
        encode = e => OBFUSCATING_BASE_64_PREFIX + btoa(unescape(encodeURIComponent(JSON.stringify(e))));
        function decode$1(e) {
			console.log(e)
			//return JSON.parse(decodeURIComponent(escape(Base64.decode(e.replace(OBFUSCATING_BASE_64_PREFIX, "")))));
			const base64String = e.split(',')[1] || e;
			const cleanString = base64String.replace(/\s/g, ''); 
	
            return JSON.parse(decodeURIComponent(escape(atob(cleanString.replace(OBFUSCATING_BASE_64_PREFIX, "")))))
        }
        var version = "0.4.2";
        const APP_ENV = "production",
        TRACKING_DOMAIN = "https://click-euw1.bodis.com/",
        SALES_JS_URL = "https://parking.bodiscdn.com/js/inquiry.js",
        GOOGLE_CAF_TIMEOUT_SCRIPTS = "0",
        GOOGLE_CAF_TIMEOUT_CALLBACKS = "0",
        GOOGLE_MV3_URL_PARAMS = "abp=1&bodis=true",
        APP_VERSION = version,
        COOKIE_CONSENT_JS_URL = "",
        isLocal = (e = !0) => "production" !== APP_ENV;
        function log(...e) {}
        const FIND_DOMAIN_URL = "",
		//const FIND_DOMAIN_URL = "",
        getFindDomain = (e = "", t = !1) => {
            const n = `${e}/${FIND_DOMAIN_URL}${window.location.search}`,
            i = e ? "include" : "same-origin",
            s = Object.assign({
                Accept: "application/json",
                "Content-Type": "application/json"
            }, t ? { "X-HOST": window.location.host  } : {});

            return fetch(n, {
                method: "POST",
                headers: s,
                credentials: i
            }).then((e => e.text())).then(function(e){
				console.log(e)
				return decode$1(e);
			})
        };
        var ZeroClickReasons;
        !function (e) {
            e.CAF_TIMEDOUT = "caf_timedout",
            e.CAF_ADLOAD_FAIL_RS = "caf_adloadfail_rs",
            e.CAF_ADLOAD_FAIL_ADS = "caf_adloadfail_ads",
            e.DISABLED_GB = "disabled_gb",
            e.DISABLED_AB = "disabled_ab",
            e.DISABLED_DS = "disabled_ds",
            e.AD_BLOCKED = "ad_blocked",
            e.PREFERRED = "preferred"
        }
        (ZeroClickReasons || (ZeroClickReasons = {}));
        const getZeroClick = e => __awaiter(void 0, void 0, void 0, (function  * () {
                    const t = Object.assign(Object.assign({}, e), {
                        type: "zc_fetch"
                    });
                    return fetch("/_zc", {
                        method: "POST",
                        body: JSON.stringify({
                            signature: encode(t)
                        }),
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }
                    }).then((e => __awaiter(void 0, void 0, void 0, (function  * () {
                                    try {
										
                                        return decode$1(yield e.text())
                                    } catch (e) {
                                        return {}
                                    }
                                }))))
                })),
        waiter = (e, t) => new Promise((n => {
                t(e),
                e <= 0 && n();
                let i = e;
                const s = () => {
                    i > 0 ? (i -= 1, t(i), setTimeout(s, 1e3)) : n()
                };
                s()
            })),
        decode = () => window.park ? JSON.parse(atob(window.park)) : {};
		console.log(window.park)
        var PAGE_STYLES = '* {\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml, body {\n  width: 100%;\n  margin: 0;\n}\n\nhtml {\n  background-color: #2B2B2B;\n  height: 100%;\n}\n\nbody {\n  min-height: 90%;\n  font-family: Arial, sans-serif;\n  letter-spacing: 1.2px;\n  color: #ccc;\n  text-align: center;\n}\n\n/* App Target - This starts hidden until we apply a class to "activate" it */\n\n#target {\n  opacity: 0;\n  visibility: hidden;\n}\n\n/* Status Messages - These are displayed when we are not rendering ad blocks or Related Search */\n\n#pk-status-message {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Sales Box - Default State */\n\n#sales-box {\n  display: block;\n  width: 100%;\n  padding: 3px;\n  text-align: center;\n  text-decoration: none;\n  color: #8EABC0;\n}\n\n#sales-box a {\n  display: block;\n  width: 100%;\n  text-decoration: inherit;\n  color: #8EABC0;\n  cursor: pointer;\n}\n\n/* Sales Box - Highlighted State */\n\n#sales-box.is-highlighted {\n  position: relative;\n  z-index: 1;\n  background: #032438 linear-gradient(to top, #044368 0%, #000 100%);\n  box-shadow: 0 0 15px 0 #000;\n  border-bottom: 3px solid #262626;\n}\n\n#sales-box.is-highlighted a {\n  line-height: 1.3;\n  display: inline-block;\n  font-size: 18px;\n  color: #fff;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);\n  background: none;\n}\n\n/* Ellipsis Loader */\n\n.pk-loader {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.pk-loader div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #ccc;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.pk-loader div:nth-child(1) {\n  left: 8px;\n  animation: pk-anim-1 0.6s infinite;\n}\n\n.pk-loader div:nth-child(2) {\n  left: 8px;\n  animation: pk-anim-2 0.6s infinite;\n}\n\n.pk-loader div:nth-child(3) {\n  left: 32px;\n  animation: pk-anim-2 0.6s infinite;\n}\n\n.pk-loader div:nth-child(4) {\n  left: 56px;\n  animation: pk-anim-1 0.6s infinite;\n  animation-direction: reverse;\n}\n\n.pk-loader-text {\n  position: fixed;\n  font-size: 12px;\n  right: 20px;\n  bottom: 20px;\n  font-weight: lighter;\n}\n\n/* Utilities */\n\n.pk-message-title {\n  font-size: 2em;\n  font-weight: bold;\n}\n\n.pk-page-ready {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n@media only screen and (max-width: 600px) {\n  .hidden-xs {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n\n/* Animation */\n\n@keyframes pk-anim-1 {\n  0% {\n      transform: scale(0);\n  }\n  100% {\n      transform: scale(1);\n  }\n}\n\n@keyframes pk-anim-2 {\n  0% {\n      transform: translate(0, 0);\n  }\n  100% {\n      transform: translate(24px, 0);\n  }\n}\n';
        const APP_TARGET = "#target",
        MESSAGE_SELECTOR = "#pk-status-message",
        PAGE_READY_CLASS = "pk-page-ready",
        MESSAGE_TEMPLATE = '<div id="pk-status-message"></div>';
        class Renderer {
            constructor(e) {
                this._domIsReady = !1,
                this.revealPage = () => {
                    this.domNode && this.domNode.classList.add(PAGE_READY_CLASS)
                },
                this.injectMetaDescription = e => {
                    if (!e || 0 === e.length)
                        return;
                    window.document.title = e;
                    const t = document.createElement("meta");
                    t.setAttribute("name", "description"),
                    t.setAttribute("content", `See relevant content for ${e}`),
                    document.getElementsByTagName("head")[0].appendChild(t)
                },
                this.domNode = document.querySelector(e);

            }
            get domIsReady() {
                return this._domIsReady
            }
            set domIsReady(e) {
                this._domIsReady = e,
                e && this.injectStyles(PAGE_STYLES)
            }
            message(e, t = "") {
                if (this.injectHTML(MESSAGE_TEMPLATE), this.domNode) {
                    const t = this.domNode.querySelector(MESSAGE_SELECTOR);
                    t && (t.innerHTML = e)
                }
                t && this.injectMetaDescription(t)
            }
            salesBanner(e) {
                if (!e)
                    return;
                const {
                    href: t,
                    position: n,
                    message: i,
                    theme: s
                } = e,
                a = document.createElement("div"),
                o = n || "",
                r = "HIGHLIGHT" === s ? "is-highlighted" : "";
                a.innerHTML = t ? `\n        <div id="sales-box" class="${o} ${r}">\n          <a href="/listing" target="_blank" rel="noopener">${i}</a>\n        </div>\n      ` : `\n        <div id="sales-box" class="no-href ${o} ${r}">\n          ${i}\n        </div>\n      `,
                "BOTTOM" === n ? (a.style.marginTop = "30px", document.body.appendChild(a)) : document.body.prepend(a)
            }
            loading(e) {
                let t = "a few";
                e > 0 && (t = `<span id="redirect">${e}</span>`),
                this.message(`\n      <div class="pk-loader">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n      <div class="pk-loader-text hidden-xs">\n        Page loading in ${t} seconds, please wait...\n      </div>\n    `)
            }
            adBlockMessage() {
                this.message("\n      <h1>Ad block detected</h1>\n      Please disable your ad blocker and reload the page.\n    ")
            }
            errorParkingUnavailable() {
                this.message("\n      <h1>An Error Occurred</h1>\n      <p>Parking is currently unavailable. We'll be right back.</p>\n    ")
            }
            errorParkingServicesDisabled() {
                this.message("\n      <h1>An Error Occurred</h1>\n      <p>Services for this domain name have been disabled.</p>\n    ")
            }
            errorParkingNoSponsors(e) {
                this.message(`\n      <div class="pk-message-title" data-nosnippet>\n        No sponsors\n      </div>\n      <span data-nosnippet>\n        ${window.location.hostname} currently does not have any sponsors for you.\n      </span>\n    `, e)
            }
            imprint(e) {
                if (!e)
                    return;
                const t = document.querySelector("#imprint-text");
                t && (t.innerHTML = e.replace(/(?:\r\n|\r|\n)/g, "<br>"))
            }
            injectStyles(e) {
                if (!e)
                    return;
                const t = document.createElement("style");
                t.innerHTML = e.toString(),
                document.head.appendChild(t)
            }
            injectScript(e) {
                if (!e)
                    return;
                const t = document.createElement("script");
                t.type = "text/javascript",
                t.src = e,
                document.body.appendChild(t)
            }
            injectJS(js) {
                js && 0 !== js.length && eval(js)
            }
            injectHTML(e) {
			
                this.domNode ? (e && (this.domNode.innerHTML = e), this.domIsReady = !0) : (this.domIsReady = !1, console.error("An error occurred when trying to render this page. DOM node not found."))
            }
            prerender(e) {
			
                this.injectMetaDescription(e.domain),
                this.injectHTML(e.html)
            }
            template(e) {
                var t;
                this.domIsReady || this.prerender(e),
                this.injectStyles(e.stylesheet),
                this.imprint(e.imprint),
                this.salesBanner(e.salesBanner),
                this.injectJS(e.javascript),
                null === (t = e.scripts) || void 0 === t || t.forEach((e => {
                        this.injectScript(e)
                    }))
            }
        }
        const Render = new Renderer(APP_TARGET);
        var Type;
        !function (e) {
            e[e.Failed = 0] = "Failed",
            e[e.Disabled = 1] = "Disabled",
            e[e.Redirect = 2] = "Redirect",
            e[e.Parking = 3] = "Parking",
            e[e.Sales = 4] = "Sales"
        }
        (Type || (Type = {}));
        let State$2 = class {
            get trackingType() {
                return this._trackingType
            }
            set trackingType(e) {
                this._trackingType = e
            }
            get track() {
                return !!this.trackingType
            }
        };
        class Disabled extends State$2 {
            constructor() {
                super(...arguments),
                this.type = Type.Disabled
            }
            static build(e, t) {
                let n;
                switch (t === Blocking.BLOCKED && (n = "adblocker"), e.cannotPark) {
                case "disabled_mr":
                case "disabled_rc":
                    n = e.cannotPark
                }
                if (n) {
                    const t = new Disabled;
                    return t.reason = n,
                    t.domain = e.domainName,
                    t
                }
            }
            get message() {
                switch (this.reason) {
                case "adblocker":
                    return "<h1>Ad block detected</h1> Please disable your ad blocker and reload the page.";
                case "disabled_mr":
                    return `<h1>Invalid URL</h1> Referral traffic for ${this.domain} does not meet requirements.`;
                default:
                    return `<h1>No sponsors</h1> ${this.domain} currently does not have any sponsors for you.`
                }
            }
            get trackingType() {
                switch (this.reason) {
                case "adblocker":
                    return "ad_blocked_message";
                case "disabled_mr":
                    return "invalid_referral";
                case "disabled_rc":
                    return "revenue_cap_reached";
                default:
                    return "no_sponsors_message"
                }
            }
            toContext() {
                return {
                    cannotPark: this.reason
                }
            }
        }
        class Failed extends State$2 {
            constructor() {
                super(...arguments),
                this.type = Type.Failed
            }
            static cannotPark({
                cannotPark: e
            }) {
                switch (e) {
                case "disabled_b":
                case "prohibited_ua":
                case "disabled_fr":
                case "revenue_cap_reached":
                case "disabled_mr":
                case "disabled_rc":
                case "disabled_cp":
                case "invalid_domain": {
                        const t = new Failed;
                        return t.reason = e,
                        t
                    }
                }
            }
            static noSponsors({
                cannotLoadAds: e
            }) {
                if (e) {
                    const e = new Failed;
                    return e.reason = "no_sponsors",
                    e
                }
            }
            static fromError(e) {
                const t = new Failed;
                return t.reason = "js_error",
                t.error = e,
                t
            }
            get track() {
                return !!this.trackingType
            }
            get message() {
                switch (this.reason) {
                case "disabled_fr":
                case "disabled_rc":
                case "no_sponsors":
                    return `\n          <h1 data-nosnippet>No Sponsors</h1>\n          <p data-nosnippet>${this.domain} currently does not have any sponsors for you.</p>`;
                case "disabled_mr":
                    return `\n          <h1>Invalid URL</h1>\n          <p>Referral traffic for ${this.domain} does not meet requirements.</p>`;
                case "js_error":
                    return "\n          <h1>An Error Occurred</h1>\n          <p>Parking is currently unavailable. We'll be right back.</p>\n      ";
                default:
                    return "\n          <h1>An Error Occurred</h1>\n          <p>Services for this domain name have been disabled.</p>\n        "
                }
            }
            get trackingType() {
                switch (this.reason) {
                case "disabled_rc":
                    return "revenue_cap_reached";
                case "disabled_mr":
                    return "invalid_referral";
                case "adblock":
                    return "ad_blocked_message";
                case "no_sponsors":
                    return "no_sponsors_message"
                }
            }
            get domain() {
                return window.location.hostname
            }
            toContext() {
                return {
                    cannotPark: this.reason
                }
            }
        }
        function unpackPHPArrayObject(e, t) {
            const n = e[t];
            if (n && !Array.isArray(n))
                return n
        }
        class Parking extends State$2 {
            constructor() {
                super(...arguments),
                this.type = Type.Parking
            }
            static build(e, t) {
                const n = new Parking;
                n.domain = e.domainName,
                n.html = e.template,
                n.scripts = e.scripts || [],
                n.javascript = e.inlineJs,
                n.stylesheet = e.styles,
                n.imprint = e.imprintText;
                const i = unpackPHPArrayObject(e, "salesSettings"),
                s = (null == i ? void 0 : i.status) && "NOT_FOR_SALE" !== (null == i ? void 0 : i.status);
                if (s) {
                    const {
                        status: e,
                        location: t,
                        message: s,
                        link: a,
                        type: o
                    } = i;
                    n.salesBanner = {
                        message: s,
                        href: a,
                        position: t,
                        theme: o
                    }
                }
                return t.wantsToServeAds ? n.trackingType = "ctr" : s && window.location.pathname.startsWith("/listing") ? n.trackingType = "sales" : n.trackingType = "visit",
                n
            }
            toContext() {
                return {}
            }
        }
        class Sales extends State$2 {
            constructor() {
                super(...arguments),
                this.type = Type.Sales
            }
            static build(e) {
                const t = unpackPHPArrayObject(e, "salesSettings");
                if (!t)
                    return;
                const {
                    status: n
                } = t;
                return ["NOT_FOR_SALE", "EXTERNAL_MARKET", "URL"].includes(n) ? void 0 : window.location.pathname.startsWith("/listing") ? new Sales : void 0
            }
            toContext() {
                return {}
            }
            get trackingType() {
                return "sales"
            }
            init(e) {
                window.context = e;
                const t = document.createElement("script");
                t.type = "text/javascript",
                t.src = SALES_JS_URL,
                document.head.append(t)
            }
        }
        class Redirect extends State$2 {
            constructor() {
                super(...arguments),
                this.type = Type.Redirect
            }
            static build(e, t, n) {
                const i = unpackPHPArrayObject(e, "salesSettings"), {
                    zeroClickDelay: s,
                    skenzoRedirect: a,
                    skenzoUrl: o,
                    showInquiryForm: r,
                    canZeroClick: d,
                    cannotPark: c
                } = e;
                if (window.location.pathname.startsWith("/listing") && ["EXTERNAL_MARKET", "URL"].includes(null == i ? void 0 : i.status)) {
                    if (null == i ? void 0 : i.external)
                        return Redirect.toState(i.external, "sales");
                    if (null == i ? void 0 : i.link)
                        return Redirect.toState(i.link, "sales")
                }
                if (n.cannotLoadAds && n.wantsToServeAds)
                    return Redirect.toState(n.noAdsRedirectUrl, "no_ads_redirect");
                if (d && (null == t ? void 0 : t.reason)) {
                    if (null == t ? void 0 : t.redirect)
                        return Redirect.toState(t.redirect, "zc_redirect", s);
                    if (a && o)
                        return Redirect.toState(o, "skenzo_redirect")
                }
                return (null == i ? void 0 : i.status) && "NOT_FOR_SALE" !== (null == i ? void 0 : i.status) && (n.cannotLoadAds || n.cannotLoadAds && !d || r) ? Redirect.toState(`${window.location.origin}/listing`) : void 0
            }
            static toState(e, t, n = 0) {
                const i = new Redirect;
                return i.url = e,
                i.delay = n,
                i.trackingType = t,
                i
            }
            toContext() {
                return {}
            }
        }
        const browserState = () => {
            var e,
            t,
            n,
            i,
            s;
            const {
                screen: {
                    width: a,
                    height: o
                },
                self: r,
                top: d,
                matchMedia: c,
                opener: l
            } = window, {
                documentElement: {
                    clientWidth: h,
                    clientHeight: u
                }
            } = document;
            let p;
            try {
                p = (new Date).getTimezoneOffset() / 60 * -1
            } catch (e) {
                p = null
            }
            return {
                popup: !(!l || l === window),
                timezone_offset: p,
                user_preference: null === (e = null === Intl || void 0 === Intl ? void 0 : Intl.DateTimeFormat()) || void 0 === e ? void 0 : e.resolvedOptions(),
                user_using_darkmode: Boolean(c && c("(prefers-color-scheme: dark)").matches),
                user_supports_darkmode: Boolean(c),
                window_resolution: {
                    width: null != h ? h : 0,
                    height: null != u ? u : 0
                },
                screen_resolution: {
                    width: null != a ? a : 0,
                    height: null != o ? o : 0
                },
                frame: d === r ? null : {
                    innerWidth: null !== (t = null == r ? void 0 : r.innerWidth) && void 0 !== t ? t : 0,
                    innerHeight: null !== (n = null == r ? void 0 : r.innerHeight) && void 0 !== n ? n : 0,
                    outerWidth: null !== (i = null == r ? void 0 : r.outerWidth) && void 0 !== i ? i : 0,
                    outerHeight: null !== (s = null == r ? void 0 : r.outerHeight) && void 0 !== s ? s : 0
                }
            }
        },
        TRACKING_URL = "_tr",
        buildSignature = ({
            callbacks: e,
            context: t
        }, n) => {
            var i,
            s,
            a,
            o;
            return Object.assign({
                ad_loaded_callback: null == e ? void 0 : e.adLoadedCallback,
                app_version: version,
                caf_client_id: null === (i = null == t ? void 0 : t.pageOptions) || void 0 === i ? void 0 : i.pubId,
                caf_timed_out: null == e ? void 0 : e.cafTimedOut,
                caf_loaded_ms: null == e ? void 0 : e.cafLoadedMs,
                channel: null === (s = null == t ? void 0 : t.pageOptions) || void 0 === s ? void 0 : s.channel,
                terms: null === (a = null == t ? void 0 : t.pageOptions) || void 0 === a ? void 0 : a.terms,
                fd_server_datetime: t.fd_server_datetime,
                fd_server: t.fd_server,
                flex_rule: t.flex_rule,
                host: t.host,
                ip: t.ip,
                ivt: null === (o = null == t ? void 0 : t.pageOptions) || void 0 === o ? void 0 : o.ivt,
                js_error: t.js_error,
                no_ads_redirect: t.noAdsRedirect,
                page_headers: t.page_headers,
                page_loaded_callback: null == e ? void 0 : e.pageLoadedCallback,
                page_method: t.page_method,
                page_request: t.page_request,
                page_time: t.page_time,
                page_url: t.page_url,
                reportable_channel: t.reportableChannel,
                reportable_style_id: t.reportableStyleId,
                template_id: t.templateId,
                type: n,
                user_has_ad_blocker: t.user_has_ad_blocker,
                uuid: t.uuid,
                zeroclick: t.zeroClick
            }, browserState())
        },
        trackVisit = ({
            callbacks: e,
            context: t
        }, n, i = "") => {
            const s = `${i}/${TRACKING_URL}`,
            a = i ? "include" : "same-origin",
            o = buildSignature({
                callbacks: e,
                context: t
            }, n);
            let r = {};
            "click" === n && (r = {
                    click: "true",
                    session: t.uuid,
                    nc: Date.now().toString()
                }),
            fetch(s, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: a,
                body: JSON.stringify(Object.assign({
                        signature: encode(o)
                    }, r))
            })
        };
        var State$1;
        !function () {
            if (!window.CustomEvent) {
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    const n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                    n
                }
                e.prototype = window.Event.prototype,
                window.CustomEvent = e
            }
        }
        (),
        function (e) {
            e[e.Pending = 0] = "Pending",
            e[e.Loaded = 1] = "Loaded",
            e[e.Failed = 2] = "Failed"
        }
        (State$1 || (State$1 = {}));
        class Provider {
            constructor(e) {
                this.timeoutSeconds = 5,
                this.handlePixelEvent = e => {
                    switch (this.state) {
                    case State$1.Failed:
                        break;
                    case State$1.Pending:
                        setTimeout((() => this.handlePixelEvent(e)), 100);
                        break;
                    case State$1.Loaded:
                        this.onPixelEvent(e)
                    }
                },
                this.watch = () => {
                    switch (this.state) {
                    case State$1.Loaded:
                    case State$1.Failed:
                        break;
                    case State$1.Pending:
                        this.isLoaded() ? this.state = State$1.Loaded : this.isTimedOut() ? this.state = State$1.Failed : setTimeout(this.watch, 50)
                    }
                },
                this.config = e,
                this.identifier && this.identifier.length > 0 ? (this.state = State$1.Pending, this.timeoutAt = new Date, this.timeoutAt.setSeconds(this.timeoutAt.getSeconds() + this.timeoutAfter()), this.injectPixel()) : this.state = State$1.Failed
            }
            get identifier() {
                var e;
                return null === (e = this.config) || void 0 === e ? void 0 : e.key
            }
            get pixelEvents() {
                var e;
                return null === (e = this.config) || void 0 === e ? void 0 : e.pixel_events
            }
            injectPixel() {
                this.injectedAt || (this.injectedAt = new Date, this.inject(), this.watch())
            }
            inject() {
                const e = document.createElement("script");
                e.text = this.script,
                document.head.appendChild(e)
            }
            isTimedOut() {
                return +new Date >= +this.timeoutAt
            }
            timeoutAfter() {
                return this.timeoutSeconds
            }
            selectPixelEvents(e) {
                if (Array.isArray(this.pixelEvents))
                    return this.pixelEvents.filter((t => "term-view" === t.trigger && "visit" === e || (!(!["term-click", "ad-view"].includes(t.trigger) || "ctr" !== e) || "ad-click" === t.trigger && "click" === e)))
            }
        }
        class Facebook extends Provider {
            get script() {
                return `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${this.identifier}');`
            }
            onPixelEvent(e) {
                this.selectPixelEvents(e).forEach((e => {
                        e && (e.custom ? window.fbq("trackCustom", e.event) : window.fbq("track", e.event))
                    }))
            }
            isLoaded() {
                return !!window.fbq
            }
        }
        class Outbrain extends Provider {
            get script() {
                return `!function(_window, _document) {var OB_ADV_ID = '${this.identifier}';if (_window.obApi) {var toArray = function(object) {return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];};_window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;}var api = _window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = '1.1';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = _document.createElement('script');tag.async = true;tag.src = '//amplify.outbrain.com/cp/obtp.js';tag.type = 'text/javascript';var script = _document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag, script);}(window, document);`
            }
            onPixelEvent(e) {
                this.selectPixelEvents(e).forEach((e => {
                        e && window.obApi("track", e.event)
                    }))
            }
            isLoaded() {
                return !!window.obApi
            }
        }
        class Revcontent extends Provider {
            get script() {
                return ""
            }
            inject() {
                const e = document.createElement("script");
                e.src = "https://assets.revcontent.com/master/rev.js",
                document.head.appendChild(e)
            }
            onPixelEvent(e) {
                this.selectPixelEvents(e).forEach((e => {
                        e && window.rev("event", e.event)
                    }))
            }
            isLoaded() {
                return !!window.rev
            }
        }
        class Taboola extends Provider {
            get script() {
                return "window._tfa = window._tfa || [];!function (t, f, a, x) {if (!document.getElementById(x)) {t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);}}(document.createElement('script'),document.getElementsByTagName('script')[0],'//cdn.taboola.com/libtrc/unip/1451879/tfa.js','tb_tfa_script');"
            }
            onPixelEvent(e) {
                this.selectPixelEvents(e).forEach((e => {
                        e && window._tfa.push({
                            notify: "event",
                            name: e.event,
                            id: e.pixel_id
                        })
                    }))
            }
            isLoaded() {
                return Array.isArray(window._tfa)
            }
        }
        class Tiktok extends Provider {
            constructor(e, t) {
                super(e),
                this.useAltTikTokEventsForAdsPlatformUser = t
            }
            get script() {
                return `!function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${this.identifier}');}(window, document, 'ttq');`
            }
            onPixelEvent(e) {
                window.ttq && this.selectPixelEvents(e).forEach((e => {
                        e && window.ttq.instance(this.identifier).track(e.event)
                    }))
            }
            isLoaded() {
                return !!window.ttq
            }
        }
        const ADS_PARAM$1 = "?caf",
        MESSAGE_PREFIX = "FSXDC,.aCS:",
        ALLOWED_ORIGINS = ["https://www.google.com", "https://www.adsensecustomsearchads.com", "https://syndicatedsearch.goog", "https://googleadservices.com"];
        class Pixels {
            static build(e) {
                const t = unpackPHPArrayObject(e, "pixel_tracking_data");
                if (t)
                    return t.useAltTikTokEventsForAdsPlatformUser = e.is_ads, new Pixels(t)
            }
            constructor(e) {
                this.onPixelEvent = e => {
                    const {
                        detail: {
                            type: t
                        }
                    } = e;
                    switch (t) {
                    case "visit":
                    case "ctr":
                    case "click":
                        this.providers.forEach((e => e.handlePixelEvent(t)))
                    }
                },
                this.providers = [new Facebook(e.facebook), new Tiktok(e.tiktok, e.useAltTikTokEventsForAdsPlatformUser), new Taboola(e.taboola), new Revcontent(e.revcontent), new Outbrain(e.outbrain)]
            }
            listenForEvents() {
                document.addEventListener("pixel", (e => {
                        this.onPixelEvent(e)
                    }));
                window.onmessage = e => {
                    const {
                        origin: t,
                        data: n
                    } = e;
                    ALLOWED_ORIGINS.includes(t) && (null == n ? void 0 : n.startsWith(MESSAGE_PREFIX)) && window.location.search.startsWith(ADS_PARAM$1) && document.dispatchEvent(new CustomEvent("pixel", {
                            detail: {
                                type: "click"
                            }
                        }))
                }
            }
            dispatchEvent(e) {
                document.dispatchEvent(new CustomEvent("pixel", {
                        detail: e
                    }))
            }
        }
        var State;
        !function (e) {
            e[e.Pending = 0] = "Pending",
            e[e.Loaded = 1] = "Loaded",
            e[e.Failure = 2] = "Failure",
            e[e.TimedOut = 3] = "TimedOut",
            e[e.Errored = 4] = "Errored"
        }
        (State || (State = {}));
        const CAF_SCRIPT_SRC = `https://www.google.com/adsense/domains/caf.js?${GOOGLE_MV3_URL_PARAMS}`,
        TIMEOUT_SCRIPTS = Number(GOOGLE_CAF_TIMEOUT_SCRIPTS),
        TIMEOUT_CALLBACKS = Number(GOOGLE_CAF_TIMEOUT_CALLBACKS);
        class StateMachine {
            constructor() {
                this.state = State.Pending
            }
            transitionTo(e) {
                this.state = e
            }
            transitionFromPendingTo(e) {
                this.done || (this.state = e)
            }
            get loaded() {
                return this.state === State.Loaded
            }
            get timedOut() {
                return this.state === State.TimedOut
            }
            get done() {
                return this.state !== State.Pending
            }
        }
        class Ads {
            constructor(e, t) {
                this.state = {
                    script: new StateMachine,
                    blocks: new StateMachine
                },
                this.blocksLoaded = [],
                this.injectScriptTags = () => __awaiter(this, void 0, void 0, (function  * () {
                        return new Promise((e => {
                                const t = document.createElement("script");
                                t.type = "text/javascript",
                                t.src = CAF_SCRIPT_SRC,
                                t.addEventListener("load", (() => e(!0))),
                                t.addEventListener("error", (() => e(!1))),
                                document.body.appendChild(t),
                                TIMEOUT_SCRIPTS > 0 && setTimeout((() => e(!1)), TIMEOUT_SCRIPTS)
                            }))
                    })),
                this.onPageLoaded = (e, t) => {
                    if (this.pageLoaded = {
                            requestAccepted: e,
                            status: t
                        }, this.state.script.done)
                        return;
                    const n = null == t ? void 0 : t.error_code;
                    n ? (this.state.script.transitionTo(State.Failure), this.failureReason = `caf_pageloaderror_${n}`) : this.state.script.transitionTo(State.Loaded)
                },
                this.onBlockLoaded = (e, t, n, i) => {
                    this.blocksLoaded.push({
                        containerName: e,
                        adsLoaded: t,
                        isExperimentVariant: n,
                        callbackOptions: i
                    }),
                    this.state.blocks.done || (t ? this.state.blocks.transitionTo(State.Loaded) : this.blocksLoaded.length >= this.blocks.length && (this.state.blocks.transitionTo(State.Failure), this.failureReason = `caf_adloadfail_${e}`))
                },
                this.onTimeout = () => {
                    this.state.script.transitionFromPendingTo(State.TimedOut),
                    this.state.blocks.transitionFromPendingTo(State.TimedOut)
                },
                this.blocks = e,
                this.options = t
            }
            get loaded() {
                return this.state.script.loaded && !this.blocksLoaded.map((e => e.adsLoaded)).includes(!1)
            }
            waitForBlocks() {
                return __awaiter(this, void 0, void 0, (function  * () {
                        return new Promise((e => {
                                const t = () => {
                                    const n = performance.now();
                                    if (this.state.blocks.done)
                                        return this.cafLoadTime = Math.round(n - this.cafStartTime), void e();
                                    const i = this.blocksLoaded.map((e => e.adsLoaded));
                                    i.includes(!1) || i.length >= this.blocks.length ? e() : setTimeout(t, 50)
                                };
                                t()
                            }))
                    }))
            }
            inject() {
                return __awaiter(this, void 0, void 0, (function  * () {
                        try {
                            const e = yield this.injectScriptTags();
                            return this.cafStartTime = performance.now(),
                            e && void 0 !== window.google ? (new window.google.ads.domains.Caf(Object.assign(Object.assign({}, this.options), {
                                        pageLoadedCallback: this.onPageLoaded,
                                        adLoadedCallback: this.onBlockLoaded
                                    }), ...this.blocks), TIMEOUT_CALLBACKS > 0 && setTimeout(this.onTimeout, TIMEOUT_CALLBACKS), yield new Promise((e => {
                                        const t = () => {
                                            this.state.script.done ? e() : setTimeout(t, 10)
                                        };
                                        t()
                                    }))) : void this.state.script.transitionTo(State.Failure)
                        } catch (e) {
                            return void(this.error = e.toString())
                        }
                    }))
            }
            toCallbacks() {
                return {
                    adLoadedCallback: this.blocksLoaded.slice(-1)[0],
                    pageLoadedCallback: this.pageLoaded,
                    cafTimedOut: this.state.script.timedOut || this.state.blocks.timedOut,
                    cafLoadedMs: this.cafLoadTime,
                    googleAdsFailure: !!this.failureReason
                }
            }
            toContext() {
                const e = {
                    cafScriptWasLoaded: this.state.script.loaded,
                    cafScriptLoadTime: this.cafLoadTime,
                    callbacks: this.toCallbacks
                };
                return this.error && (e.js_error = {
                        message: this.error
                    }),
                this.state.script.loaded || (e.zeroclick = {
                        reason: "googleAdsFailure"
                    }),
                e
            }
            mockFailedState() {
                this.state.blocks.transitionTo(State.Failure),
                this.state.script.transitionTo(State.Failure)
            }
        }
        class TagManager {
            constructor(e) {
                this.injected = !1,
                this.identifier = e
            }
            inject() {
                if (this.injected)
                    return;
                if (!this.identifier)
                    return;
                if ("TEST" === this.identifier)
                    return;
                const e = document.createElement("script");
                e.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${this.identifier}`),
                document.head.appendChild(e),
                this.track(),
                this.injected = !0
            }
            track() {
                this.push("js", new Date),
                this.push("config", this.identifier)
            }
            push(e, t) {
                window.dataLayer || (window.dataLayer = []),
                window.dataLayer.push(arguments)
            }
        }
        const ADS_PARAM = "caf",
        ADS_TRACKING_URL = "_tr",
        BLOCKS_TYPE = "ads",
        BLOCKS_CONTAINER = "rs",
        KNOWN_CAF_PARAMS = ["caf", "query", "afdToken", "pcsa", "nb", "nm", "nx", "ny", "is", "clkt"];
        class Google {
            static build({
                pageOptions: e,
                preferredLanguage: t,
                blocks: n,
                googleAnalytics: i
            }, s, a, o) {
                let r = {};
                e && (r = Object.assign({}, e), r.hl || (r.hl = t));
                let d = null == e ? void 0 : e.resultsPageBaseUrl;
                d || (d = window.location.origin);
                return new Google(s.uuid, n, r, i, d, o)
            }
            constructor(e, t, n, i, s, a) {
                this._blocks = t,
                this._pageOptions = n,
                this.uuid = e,
                this._baseURL = new URL(s),
                this._signature = a,
                this.ads = new Ads(this.blocks, this.pageOptions),
                this.tagManager = new TagManager(i)
            }
            injectTagManager() {
                this.tagManager.inject()
            }
            injectAds() {
                return __awaiter(this, void 0, void 0, (function  * () {
                        yield this.ads.inject()
                    }))
            }
            waitForBlocks() {
                return __awaiter(this, void 0, void 0, (function  * () {
                        return this.ads.waitForBlocks()
                    }))
            }
            get blocks() {
                return (this._blocks || []).filter((e => this.wantsToServeAds ? e.type === BLOCKS_TYPE : e.container === BLOCKS_CONTAINER)).map((e => {
                        const t = this.baseURL;
                        new URLSearchParams(window.location.search).forEach(((e, n) => {
                                t.searchParams.has(n) || t.searchParams.append(n, e)
                            }));
                        const n = Object.assign({}, e);
                        if (n.resultsPageBaseUrl = t.toString(), this.wantsToServeAds) {
                            const e = new URLSearchParams;
                            e.append("click", "true"),
                            e.append("session", this.uuid);
                            const t = Object.assign({}, this._signature);
                            delete t.ad_loaded_callback,
                            delete t.caf_loaded_ms,
                            delete t.caf_timed_out,
                            delete t.flex_rule,
                            delete t.frame,
                            delete t.js_error,
                            delete t.no_ads_redirect,
                            delete t.page_headers,
                            delete t.page_request,
                            delete t.page_loaded_callback,
                            delete t.popup,
                            delete t.screen_resolution,
                            delete t.user_has_ad_blocker,
                            delete t.user_preference,
                            delete t.user_supports_darkmode,
                            delete t.user_using_darkmode,
                            delete t.zeroclick,
                            e.append("signature", encode(t)),
                            n.clicktrackUrl = `${TRACKING_DOMAIN}${ADS_TRACKING_URL}?${e.toString()}`
                        }
                        return n
                    }))
            }
            get baseURL() {
                const e = new URL(this._baseURL.origin);
                return e.searchParams.append(ADS_PARAM, "1"),
                this._baseURL.searchParams.forEach(((t, n) => {
                        e.searchParams.append(n, t)
                    })),
                e
            }
            get pageOptions() {
                const e = Object.assign({}, this._pageOptions);
                return Object.keys(this._pageOptions).forEach((t => {
                        t.startsWith("bodis") && delete e[t]
                    })),
                e
            }
            get cannotLoadAds() {
                return !this.ads.loaded
            }
            get wantsToServeAds() {
                return new URLSearchParams(window.location.search).has(ADS_PARAM)
            }
            get adsMode() {
                return this.ads.loaded && this.wantsToServeAds
            }
            get adsReady() {
                return this.wantsToServeAds && !this.cannotLoadAds
            }
            get noAdsRedirectUrl() {
                const e = new URLSearchParams(window.location.search);
                return KNOWN_CAF_PARAMS.forEach((t => e.delete(t))),
`${window.location.origin}?${e.toString()}`
            }
            get callbacks() {
                return this.ads.toCallbacks()
            }
            toContext() {
                return Object.assign({
                    blocks: this.blocks,
                    pageOptions: this.pageOptions
                }, this.ads.toContext())
            }
        }
        class CookieConsentManager {
            constructor() {
                this.injectScriptTag = () => __awaiter(this, void 0, void 0, (function  * () {
                        return new Promise((e => {
                                const t = document.createElement("script");
                                t.setAttribute("src", COOKIE_CONSENT_JS_URL),
                                t.addEventListener("load", (() => this.awaitConsent(e))),
                                t.addEventListener("error", (() => e(!1))),
                                document.head.appendChild(t)
                            }))
                    }))
            }
            inject() {
                return __awaiter(this, void 0, void 0, (function  * () {
                        this.injected || !COOKIE_CONSENT_JS_URL || isLocal() || (this.injected = yield this.injectScriptTag())
                    }))
            }
            awaitConsent(e) {
                let t = 0;
                const n = setInterval((() => {
                            t += 1,
                            20 === t && (clearInterval(n), e(!0)),
                            void 0 !== window.__tcfapi && (window.addEventListener("ConsentActivity", (t => {
                                        const {
                                            detail: {
                                                status: n
                                            }
                                        } = t;
                                        n && e(!0)
                                    })), clearInterval(n))
                        }), 50)
            }
        }
        class App {
            main() {
                var e,  t;
				 //console.log(atob(window.park || []))
                return __awaiter(this, void 0, void 0, (function  * () {
					
                        if (this.parkResponse = decode(), this.findDomainResponse = yield getFindDomain(), !this.findDomainResponse)
                            throw new Error("Domain failed to load.");
                        this.pixels = Pixels.build(this.findDomainResponse),
                        null === (e = this.pixels) || void 0 === e || e.listenForEvents(),
                        this.adblock = new Adblock,
                        yield this.adblock.inject(),
                        this.google = Google.build(this.findDomainResponse, this.parkResponse, this.adblock, buildSignature({
                                    context: this.context,
                                    callbacks: null === (t = this.google) || void 0 === t ? void 0 : t.callbacks
                                }, "click")),
                        this.google.injectTagManager();
                        const n = Parking.build(this.findDomainResponse, this.google);
                        Render.prerender(n),
                        this.cookieConsentManager = new CookieConsentManager,
                        yield this.cookieConsentManager.inject();
                        let i = Failed.cannotPark(this.findDomainResponse);
                        if (i)
                            return void(yield this.transitionToFailed(i));
                        yield this.google.injectAds();
                        const s = Disabled.build(this.findDomainResponse, this.adblock.state);
                        if (s)
                            return void(yield this.transitionToDisabled(s));
                        const a = Sales.build(this.findDomainResponse);
                        if (a)
                            return void(yield this.transitionToSales(a));
                        this.eligibleForZeroClick && (this.zeroClickResponse = yield getZeroClick(this.context));
                        const o = Redirect.build(this.findDomainResponse, this.zeroClickResponse, this.google);
                        o ? yield this.transitionToRedirect(o) : (i = Failed.noSponsors(this.google), i ? yield this.transitionToFailed(i) : yield this.transitionToParking(n))
                    }))
            }
            transitionToParking(e) {
                return __awaiter(this, void 0, void 0, (function  * () {
                        this.state = e,
                        Render.template(e),
                        Render.revealPage(),
                        yield this.google.waitForBlocks(),
                        yield this.track()
                    }))
            }
            transitionToRedirect(e) {
                return __awaiter(this, void 0, void 0, (function  * () {
                        this.state = e;
                        const t = this.track();
                        Render.revealPage(),
                        yield waiter(e.delay, (e => Render.loading(e))),
                        yield t,
                        window.location.href = e.url,
                        log(`➡ Redirecting [${e.url}]`)
                    }))
            }
            transitionToFailed(e) {
                return __awaiter(this, void 0, void 0, (function  * () {
                        this.state = e,
                        Render.message(e.message),
                        Render.revealPage(),
                        yield this.track()
                    }))
            }
            transitionToSales(e) {
                return __awaiter(this, void 0, void 0, (function  * () {
                        this.state = e,
                        e.init(this.context),
                        yield this.track()
                    }))
            }
            transitionToDisabled(e) {
                return __awaiter(this, void 0, void 0, (function  * () {
                        this.state = e,
                        Render.message(e.message),
                        Render.revealPage(),
                        yield this.track()
                    }))
            }
            track() {
                var e;
                return __awaiter(this, void 0, void 0, (function  * () {
                        if (!this.state.track)
                            return Promise.resolve();
                        try {
                            const t = this.state.trackingType;
                            return null === (e = this.pixels) || void 0 === e || e.dispatchEvent({
                                type: t
                            }),
                            trackVisit({
                                context: this.context,
                                callbacks: this.google.callbacks
                            }, t)
                        } catch (e) {
                            return
                        }
                    }))
            }
            get eligibleForZeroClick() {
                const {
                    cannotPark: e,
                    canZeroClick: t,
                    zeroClick: n
                } = this.findDomainResponse, {
                    cannotLoadAds: i,
                    wantsToServeAds: s
                } = this.google;
                return !!t && (!!e || (!(!i || s) || !!(null == n ? void 0 : n.reason)))
            }
            get context() {
                var e,
                t,
                n,
                i;
                const s = this.findDomainResponse,
                a = this.parkResponse,
                o = null === (e = this.state) || void 0 === e ? void 0 : e.toContext(),
                r = null === (t = this.adblock) || void 0 === t ? void 0 : t.toContext(),
                d = null === (n = this.google) || void 0 === n ? void 0 : n.toContext(),
                c = browserState(),
                l = Object.assign(Object.assign({}, null === (i = this.findDomainResponse) || void 0 === i ? void 0 : i.zeroClick), this.zeroClickResponse);
                return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
                                            app_version: APP_VERSION
                                        }, s), a), r), d), o), c), {
                    zeroClick: l
                })
            }
            init() {
                return __awaiter(this, void 0, void 0, (function  * () {
                        try {
                            window.__parkour = this,
                            yield this.main()
                        } catch (e) {
                            console.error("app", e);
                            const t = Failed.fromError(e);
                            this.state = t,
                            Render.message(t.message),
                            Render.revealPage()
                        }
                    }))
            }
        }
        (new App).init(),
        exports.App = App
    }));

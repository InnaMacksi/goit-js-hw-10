function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=a||f||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,l,a,f=0,c=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,r=i;return o=i=void 0,f=e,u=t.apply(r,n)}function h(t){return f=t,l=setTimeout(w,e),c?y(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-f>=r}function w(){var t=g();if(j(t))return O(t);l=setTimeout(w,function(t){var n=e-(t-a);return s?d(n,r-(t-f)):n}(t))}function O(t){return l=void 0,m&&o?y(t):(o=i=void 0,u)}function T(){var t=g(),n=j(t);if(o=arguments,i=this,a=t,n){if(void 0===l)return h(a);if(s)return l=setTimeout(w,e),y(a)}return void 0===l&&(l=setTimeout(w,e)),u}return e=b(e)||0,v(n)&&(c=!!n.leading,r=(s="maxWait"in n)?p(b(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=a=i=l=void 0},T.flush=function(){return void 0===l?u:O(g())},T};fetch(`https://restcountries.com/v3.1/name/${"ukraine"}?fields=name,flags,capital,population,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((t=>{console.log("🚀~ data:",t);const{name:{official:e},flags:{svg:n},capital:o,population:i,languages:r}=t[0];return console.log(e),console.log(n),console.log(o[0]),console.log(i),console.log(Object.values(r).join(", ")),t})).catch(console.warn);let m="";const y=document.querySelector("ul.country-list"),h=y.previousElementSibling;y.nextElementSibling;h.addEventListener("input",t(e)((t=>{m=t.target.value,console.log("name:",m)}),300));
//# sourceMappingURL=index.813b343a.js.map

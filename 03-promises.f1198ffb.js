!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("iU1Pc"),r=document.querySelector(".form"),a=r.elements.delay,l=r.elements.step,c=r.elements.amount,s=0;r.addEventListener("submit",(function(e){e.preventDefault();var n=parseInt(a.value),t=setInterval((function(){var e,o,r,u=parseInt(l.value);n+=u,(s+=1)===+c.value&&clearInterval(t),(e=s,o=n,r=Math.random()>.5,new Promise((function(n,t){setTimeout((function(){r?n({position:e,delay:o}):t({position:e,delay:o})}),a.value)}))).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}),n)}))}();
//# sourceMappingURL=03-promises.f1198ffb.js.map

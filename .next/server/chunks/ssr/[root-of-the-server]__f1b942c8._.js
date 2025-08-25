module.exports = [
"[externals]/aos [external] (aos, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("aos", () => require("aos"));

module.exports = mod;
}),
"[project]/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyApp
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/aos [external] (aos, cjs)");
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__["default"].init({
            duration: 800,
            easing: 'ease-in-out',
            mirror: true,
            anchorPlacement: 'top-bottom'
        });
        __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__["default"].refresh();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
        ...pageProps
    }, void 0, false, {
        fileName: "[project]/pages/_app.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f1b942c8._.js.map
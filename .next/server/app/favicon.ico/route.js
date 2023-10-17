"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 4002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=D%3A%5CEngineering%5CTutorial%5COstad%20Platform%5CNext%20JS%5CProjects%5CDigital-Agency%5Csrc%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!D:\\Engineering\\Tutorial\\Ostad Platform\\Next JS\\Projects\\Digital-Agency\\src\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(4002)));
module.exports = __webpack_exports__;

})();
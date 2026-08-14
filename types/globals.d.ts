// Bootstrap's JS bundle is loaded from the CDN by the layout templates, so it only exists as a global
// at runtime. Declared here so `npm run test-typecheck` can see it.
declare const bootstrap: typeof import('bootstrap');

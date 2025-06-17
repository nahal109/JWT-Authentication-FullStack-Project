
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cars"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28333, hash: '9eda34821c53727fd3dafe942ccdd2eee036598ed359daf06191548c43a90985', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17143, hash: '0cdd0443cd2b5ec63ebcbe93fa73cac37677b954db18ccb23211692dd44c6bac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cars/index.html': {size: 83439, hash: 'dee0e976da4e7fabbb589eddfd9f5d716368b30d61d405e7c711d22dd7130877', text: () => import('./assets-chunks/cars_index_html.mjs').then(m => m.default)},
    'styles-FSC5D7RV.css': {size: 233819, hash: 'pifpBgMWvbw', text: () => import('./assets-chunks/styles-FSC5D7RV_css.mjs').then(m => m.default)}
  },
};

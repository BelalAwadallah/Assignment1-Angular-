
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Assignment1-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular/about"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Assignment1-Angular/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5376, hash: '38ce823e6a6d0d3a7a909cf4a4d264ad7000f1953cb4485a8f893c3b2b9685c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '98f8c42fba9ec9e706fd94e474c7da4801136985c256be90004e2e4ef30e0ee8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 23385, hash: 'e8c6580a8bd9ac5425aeef957788c0a9de1a7b3adc2d5585d3c4791b0cd0775b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 25630, hash: '5989e779750676a5c0882d120d531dd77b83ff1ea406dda1b4599c46d27303ce', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28148, hash: '97d5612a11549a9530d5ce754ce8653ecd08f22f10bfde415100cd85990ed65c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23176, hash: 'd82cf6df4379dcd751c05bc8b15e0317b7a79fd5f80a9a4eb7f22f026829b5d4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};

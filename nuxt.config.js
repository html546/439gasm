const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/qrcode.js' },
      { src: '/js/three.min.js' },
      { src: '/js/gio.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'cyan' },

  /*
  ** Global CSS
  */

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/i18n'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/trade1', '/trade2', '/trade3', '/login', '/register', '/forget', '/browser', '/friend', '/person', '/list/:id?', '/email/:id?', '/recommend', '/prize', '/reinvestment', '/activate', '/finance', '/pass/:id?', '/transfer/:id?', '/manage', '/operate', '/tc', '/tc/trade1', '/tc/trade2', '/tc/trade3', '/tc/login', '/tc/register', '/tc/forget', '/tc/browser', '/tc/friend', '/tc/person', '/tc/list/:id?', '/tc/email/:id?', '/tc/recommend', '/tc/prize', '/tc/reinvestment', '/tc/activate', '/tc/finance', '/tc/pass/:id?', '/tc/transfer/:id?', '/tc/manage', '/tc/operate']
  },
  proxy: {
    '/api': "http://t439.shangtua.com:88/"
  }
}

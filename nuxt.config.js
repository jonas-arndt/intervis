const routerBase = process.env.DEPLOY_ENV === 'UCLAB' ? '/intervis/' : '/'

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'intervis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },

      // favicon
      { name: 'msapplication-TileColor', content: '#f9faff' },
      { name: 'msapplication-config', content: './browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' },

    ],
    link: [
      // favicon
      { rel: 'apple-touch-icon', sizes: '180x180', href: './apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: './favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: './favicon-16x16.png' },
      { rel: 'manifest', href: './site.webmanifest' },
      { rel: 'mask-icon', href: './safari-pinned-tab.svg', color: '#ff4002' },
      { rel: 'shortcut icon', href: './favicon.ico' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      '~/components/case_studies',
      '~/components/chapters',
      '~/components/design-decisions',
      '~/components/disclosure',
      '~/components/elements',
      '~/components/layout',
      '~/components/popups',
      '~/components/visualizations',
    ]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n'
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'de', iso: 'de-DE', file: 'de.js' }
    ],
    defaultLocale: 'en',
    langDir: '~/locales/',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  router: {
    base: routerBase
  }
}

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
			
			// preview
			{ property: 'og:type', content:'website' },
			{ property: 'og:url', content:'https://uclab.fh-potsdam.de/intervis/' },
			{ property: 'og:title', content:'Inter...what? Intersectionality! A visual Introduction' },
			{ property: 'og:description', content:'With this article we aim to accessibly explain the topics of intersectionality, discrimination and privilege using visual elements. Intersectional perspectives have not yet arrived in everyday vocabulary and social discourse in Germany. We would like to change that, and this article can be a beginning for that.' },
			{ property: 'og:image', content:'https://uclab.fh-potsdam.de/intervis/preview.png' },
			{ name: 'twitter:card', content:'summary_large_image' },			
			
    ],
    link: [
      // favicon
      { rel: 'apple-touch-icon', sizes: '180x180', href: './favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: './favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: './favicon/favicon-16x16.png' },
      { rel: 'manifest', href: './favicon/site.webmanifest' },
      { rel: 'mask-icon', href: './favicon/safari-pinned-tab.svg', color: '#ff4002' },
      { rel: 'shortcut icon', href: './favicon/favicon.ico' },
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
      '~/components/animations',
      '~/components/case_studies',
      '~/components/chapters',
      '~/components/design-decisions',
      '~/components/disclosure',
      '~/components/elements',
      '~/components/fallbacks',
      '~/components/instrumentation',
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
    'nuxt-i18n',
    'nuxt-polyfill'
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'de', iso: 'de-DE', file: 'de.js' }
    ],
    defaultLocale: 'en',
    langDir: '~/locales/',
  },

  // Configure polyfills:
  polyfill: {
    features: [
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      }
    ]
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

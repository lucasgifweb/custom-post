export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Midwest Design Week',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A Virtual Design Conference hosted by Midwest AIGA Chapters Cincinnati, Detroit, Indianapolis, Louisville, Northwest Arkansas, Saint Louis, Toledo, West Michigan, and Wisconsin.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://midwestdesignweek.com/og-image.jpg',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Midwest Design Week',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://midwestdesignweek.com',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://midwestdesignweek.com/og-image.jpg',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'A Virtual Design Conference hosted by Midwest AIGA Chapters Cincinnati, Detroit, Indianapolis, Louisville, Northwest Arkansas, Saint Louis, Toledo, West Michigan, and Wisconsin.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  googleFonts: {
    families: {
      'Hind+Siliguri': [400, 600],
    },
    display: 'block',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/date-fns',
  ],

  dateFns: {
    defaultLocale: 'en-US',
    format: 'MMM. d, haaa',
    methods: ['format', 'isAfter', 'sub', 'getMinutes'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/apollo',
  ],

  generate: {
    fallback: '404.html',
  },

  // Apollo configuration
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BASE_URL || 'https://mwdwaiga.wpengine.com/graphql',
      },
    },
    errorHandler: '~/plugins/apollo-error-handler.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {},
      },
      // transpile: ['gsap'],
    },

    extractCSS: true,
    extend(config, ctx) {
      config.devtool = process.env.NODE_ENV === 'development' ? '#source-map' : '';
    },
    babel: {
      // silence message in console - known nuxt bug - https://github.com/nuxt/nuxt.js/pull/9631
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    },
  },
};

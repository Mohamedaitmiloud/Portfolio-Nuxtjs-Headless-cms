
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Mohamed Aitmiloud | Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mohamed Aitmiloud, Web Developer' },
      { hid: 'author', name: 'author', content: 'Mohamed Aitmiloud' },
      { hid: 'og:title', property: 'og:title', content: 'Portfolio' },
      { hid: 'og:description', property: 'og:description', content: 'Vous cherchez un Developpeur Web au Maroc pour la creation de votre Site Internet ? Prenons Contact' },
      { hid: 'og:type', property: 'og:type', content: 'Portfolio' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Mohamed Aitmiloud' },
      { name: 'twitter:description', content: 'Mohamed Aitmiloud, Web Developer' },
      { name: 'twitter:site', content: 'Mohamed Aitmiloud' },
      { name: 'twitter:creator', content: 'Mohamed Aitmiloud' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/font.css'},
      { rel: 'stylesheet', href: '/css/uikit-custom.min.css'},
      { rel: 'stylesheet', href: '/css/app.css'},
    ],
      script: [
          { src: '/js/plugins.min.js', body:true},
          { src: '/js/app.js', body:true},
          { hid: 'stripe', src: 'https://apps.elfsight.com/p/platform.js', defer: true },
          { src: '/js/hotjar.js'},
      ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],


  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/apollo',
  ],

  apollo:{
    clientConfigs:{
      default: '~/apollo/config.js'
    }
  },

  googleAnalytics: {
    id: 'UA-193272380-2'
  },


  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {

  }
}

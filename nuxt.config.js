export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'jonathan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/fonts/css/all.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
  axios: {},
  build: {},
  auth: {
    strategies: {
      google: {
        clientId:
          '984509632679-3aal6r248d9gfguuojvd19klq4fpr9v1.apps.googleusercontent.com',
        scope: ['profile', 'email'],
        codeChallengeMethod: '',
      },
    },
  },
}

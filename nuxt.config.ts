// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Dimitris Konstantinou — Tokenization Product & Engineering Lead',
      meta: [
        {
          name: 'description',
          content:
            'Technical product and blockchain leader delivering institutional tokenization and digital asset platforms. Deutsche Börse D7, DTCC, Solidity, ERC-1400/3643, Hyperledger Besu.',
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
})

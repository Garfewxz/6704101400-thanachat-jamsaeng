import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => {
  return {
    boot: [],

    css: ['app.scss'],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      },
      vueRouterMode: 'history', // เปลี่ยนจาก hash เป็น history
      vitePlugins: [
        ['vite-plugin-checker', {
          eslint: {
            lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{js,mjs,cjs,vue}"',
            useFlatConfig: true
          }
        }, { server: false }]
      ]
    },

    devServer: {
      open: true
    },

    framework: {
      config: {
        brand: {
          primary: '#027be3',
          secondary: '#26A69A',
          accent: '#9C27B0',
          positive: '#21BA45',
          negative: '#C10015',
          info: '#31CCEC',
          warning: '#F2C037'
        }
      },
      plugins: ['Notify', 'Dialog']
    },

    animations: ['fadeIn', 'fadeOut'],

    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false
    },

    pwa: {
      workboxMode: 'GenerateSW'
    },

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      builder: {
        appId: '6704101400-thanachat-jamsaeng'
      }
    },

    bex: {
      extraScripts: []
    }
  }
})

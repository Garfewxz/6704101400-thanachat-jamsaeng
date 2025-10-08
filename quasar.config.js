// quasar.config.js
export default defineConfig({
  build: {
    target: {
      browser: ['es2022', 'chrome115', 'firefox115', 'safari14']
    },
    vueRouterMode: 'hash', // หรือ 'history' ถ้าใช้ backend รองรับ
    publicPath: process.env.PUBLIC_PATH || '/',
    sourcemap: false, // ปิดเพื่อให้ build เร็วขึ้นใน CI
  },

  // เพิ่ม environment variables ถ้าจำเป็น
  env: {
    API_URL: process.env.API_URL || 'https://api.example.com'
  }
})

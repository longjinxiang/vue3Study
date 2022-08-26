import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
    host: '0.0.0.0',
    // proxy: {
    //   '/api': {
    //     target: 'https://192.168.0.1:8888/api/private/v1/',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    //设置路径别名
    alias: {
      '@': resolve(__dirname, 'src'),
      '*': resolve('')
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 此处修改为要被预处理的scss文件地址
        additionalData: `
        @import "@/styles/variables.scss";  // scss文件地址
        @import "@/styles/mixin.scss";     // scss文件地址
        `
      }
    }
  },
  define: {
    'process.env': {
      VUE_APP_BASE_API: 'http://127.0.0.1:8888',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  }
})

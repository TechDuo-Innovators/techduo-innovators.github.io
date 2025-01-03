// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    ssr:false,
    css: ['~/assets/css/main.css'],
    content: {},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },

    modules: [
      '@nuxt/ui',
      '@nuxt/content',
      '@nuxt/image',
      '@vueuse/nuxt'
    ]
})
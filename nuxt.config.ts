// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    ssr: false,
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },
    app: {
        head: {
            link: [{rel: 'icon', type: 'image/png', href: '/favicon.png'}]
        }
    },
    vite:{
        esbuild: {
            supported: {
                'top-level-await': true
            },
        },
    },
    modules: [
        '@nuxt/ui',
        '@nuxt/content',
        '@nuxt/image',
        '@vueuse/nuxt'
    ]
})
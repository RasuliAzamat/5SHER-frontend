import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    target: 'static',
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    app: {
        head: {
            script: [{src: '/js/canvas.js'}],
        },
    },
    router: {
        options: {
            linkActiveClass: 'active',
            linkExactActiveClass: 'active',
        },
    },
    css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
})

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                darkblue: '#58555e',
                light: '#ffffff',
                dark: '#323232',
                darkgreen: '#5f5c4b',
            },
            maxWidth: {
                'app-container': '1440px',
            },
        },
    },
    plugins: [],
}

module.exports = {
    // This is where we choose what system we wanna use in nuxt. Universal or SPA.
    // Difference between those two can be found here: https://nuxtjs.org/api/configuration-mode/
    mode: 'spa',
    
    // NuxtJS is build-in with vue-meta and allows us to describe titles and head properties directly from the nuxt.config.js
    // You can read more about what properties can be used in the field here: https://nuxtjs.org/api/configuration-head/
    head: {
        title: "Home",
        titleTemplate: "%s - Spa Application",

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]
    }
}
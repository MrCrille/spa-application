<template>
    <section>
        <!-- Simple heading tag nothing more to say about that. -->
        <h1>This is a test page</h1>

        <!-- Nuxt link is the default way to switch between pages inside the application. -->
        <nuxt-link class="button" to="/">Goto front page</nuxt-link>
    </section>
</template>

<script>
export default {
    head: {
        // Here we define the title for the page
        // If you take a look at the nuxt.config.js you can find a key called "titleTemplate" with a template char %s
        // When switched to this page the %s will be replaced with the value of this tag.
        title: "Test"
    }
}
</script>

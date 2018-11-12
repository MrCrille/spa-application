<template>
    <section>
        <h1 id="title">Welcome to our page!</h1>
        <a class="button" href="#" @click.prevent="animate('#title')">Animate Title</a>
        <nuxt-link class="button" to="test">Goto test page</nuxt-link>
    </section>
</template>

<script>
export default {
    methods: {
        animate(element) {
            var txt = document.querySelector(element).innerHTML;
            var i = 0;
            var speed = 50;

            document.querySelector(element).innerHTML = "";

            function typeWriter() {
                if (i < txt.length) {
                    document.querySelector(element).innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }

            setTimeout(typeWriter, speed);
        },
    }
}
</script>

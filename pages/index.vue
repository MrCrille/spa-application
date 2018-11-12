<template>
    <section>
        <!-- A simple H1 tag with our default text for our Animation. -->
        <h1 id="title">Welcome to our page!</h1>

        <!-- This link will be prevented by Vue, because of the @click.prevent and call the mehod animation, with
        the element sector of #title to target the title above. -->
        <a class="button" href="#" @click.prevent="animate('#title')">Animate Title</a>

        <!-- Nuxt link is the default way to switch between pages inside the application. -->
        <nuxt-link class="button" to="test">Goto test page</nuxt-link>
    </section>
</template>

<script>
export default {
    methods: {
        animate(element) {
            // First we are taking the current value of the element and writing it into an variable.
            var txt = document.querySelector(element).innerHTML;
            // Setting the i to 0 as a default because i is our loop rotation variable.
            var i = 0;
            // And to set the speed we added a simple variable for the timeout process to use.
            var speed = 50;

            // When the text from the element is store in an variable we clear out the current text and prepare the writing.
            document.querySelector(element).innerHTML = "";

            // Here we define the typeWriter animation.
            function typeWriter() {
                // As long as the variable i is less than the length of the text we continue the process.
                if (i < txt.length) {
                    // Here we add the character from the text stored at the index of i.
                    document.querySelector(element).innerHTML += txt.charAt(i);

                    // Addding a 1 to our existing value of the variable i.
                    i++;

                    // To make the animation seem real we add a timeout as a sleep function so it looks like the charaters is getting
                    // typed on a keyboard.
                    setTimeout(typeWriter, speed);
                }
            }

            // Starting the animation by calling the typeWriter function after it's defined.
            setTimeout(typeWriter, speed);
        },
    }
}
</script>

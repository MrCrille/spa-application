<template>
    <div id="layout">
        <nuxt />
    </div>
</template>

<style>
    body, html {
        padding: 0;
        margin: 0;
        
        background: #eee;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    #layout {
        padding: 10px;
    }

    .button {
        text-decoration: none;

        border: 1px solid #555;
        color: #000;

        padding: 5px;

        border-radius: 3px;

        transition: 0.25s all;
    }

    .button:hover {
        background: rgb(73, 168, 73);
        color: #fff;
        border-color: rgb(73, 168, 73);
    }
</style>

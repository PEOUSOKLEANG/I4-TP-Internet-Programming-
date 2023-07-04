<template>
    <div>
        <h1>លេខមួយ.com</h1>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap');
    h1{
        color: white;
    }
    div{
        z-index:99;
        font-family: 'Merriweather', serif;
        width: 100%;
        text-align: center;
        padding: 1rem 0;
        background-color: rgb(108, 106, 106);
        position: sticky;
        top:0;
        left: 0;
        right: 0;
    }
</style>
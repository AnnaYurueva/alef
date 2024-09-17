<template>
    <header>
        <img alt="Alef logo" class="logo" src="@/assets/logo.svg" />
        <nav>
            <RouterLink to="/">Форма</RouterLink>
            <RouterLink to="/preview">Превью</RouterLink>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
@import '/src/assets/variables.scss';

header {
    display: flex;
    align-items: center;
    padding: 22px 50px;
    -webkit-box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);
    box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);

    & nav {
        display: flex;
        width: 100%;
        justify-self: center;
        justify-content: center;
        gap: 24px;
    }

    & a {
        color: $gray;
        text-decoration: none;
        transition: color .3s linear;

        &:hover {
            color: $black;
        }
    }
}
</style>

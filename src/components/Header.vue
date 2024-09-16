<template>
    <header>
        <img alt="Alef logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <div class="">
            <nav>
                <RouterLink to="/">Форма</RouterLink>
                <RouterLink to="/preview">Превью</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

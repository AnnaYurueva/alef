<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="content">
    <div>
      <Header />
      <main>
        <RouterView />
      </main>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.content {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;

  & main {
    max-width: 616px;
    width: 100%;
    margin: 30px auto;
  }
}
</style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import type { IData } from "@/interfaces/data";
import type { Ref } from 'vue'

const store = useUserStore()
const data: Ref<IData | null> = ref(null)

onMounted(() => {
  data.value = store.getData
})
</script>

<template>
  <div v-if="!!data" class="about">
    <div class="person">
      <h2 class="title">Персональные данные</h2>
      <p class="info">{{ data.user?.name }}, {{ data.user?.age }} лет</p>
    </div>
    <div v-if="data.childs?.length">
      <h2 class="title">Дети</h2>
      <div class="child" v-for="(child, index) of data.childs" :key="index">
        <p class="info">
          {{ child.nameChild }}, {{ child.ageChild }} лет
        </p>
      </div>
    </div>
    <div v-else>
      <h2 class="title">Добавьте детей</h2>
      <RouterLink to="/">Добавить</RouterLink>
    </div>
  </div>
  <div v-else>
    <h2 class="title">Заполните форму для отображения инфомации</h2>
    <RouterLink to="/">Заполнить форму</RouterLink>
  </div>
</template>

<style scoped lang="scss">
@import '/src/assets/variables.scss';

.person {
  margin-bottom: 60px;
}

.info {
  color: $black;
  font-weight: 700;
  font-size: 16px;
}

.child {
  display: inline-block;
  padding: 10px 20px;
  background-color: $gray-l;
  border-radius: 5px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>

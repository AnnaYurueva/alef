<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import Button from '@/components/Ui/Button.vue'
import Input from '@/components/Ui/Input.vue'
import IconPlus from '@/components/icons/IconPlus.vue';
import ChildForm from '@/components/ChildForm.vue';
import type { IChild } from '@/interfaces/data';
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router'

const router = useRouter()

const MAX_COUNT_CHILD = 5
const showAddChildBtn = ref(true)
const store = useUserStore()

const form = ref({
  name: '',
  age: null
})

const childItem: Ref<IChild> = ref({
  nameChild: '',
  ageChild: null
})

const childsData: Ref<IChild[]> = ref([])

function addChild() {
  if (childsData.value.length <= MAX_COUNT_CHILD) {
    childsData.value.push(childItem.value)
    if (childsData.value.length === MAX_COUNT_CHILD) {
      showAddChildBtn.value = false
    }
  }
}

function deleteChild(index: number) {
  childsData.value.splice(index, 1)
  showAddChildBtn.value = true
}

function setChild(index: number, data: IChild) {
  childsData.value[index] = data
}

const errors: Ref<any> = ref({});
const isNameValid = computed(() => form.value.name.trim() !== '');
const validateField = (field: string) => {
  errors.value[field] = '';
  if (field === 'name' && !isNameValid.value) {
    errors.value.name = 'Name is required.';
  }
}

function submitForm() {
  errors.value = {}
  validateField('name');

  let errorsCount = 0
  for (let error of Object.values(errors.value)) {
    if (error.length > 0) errorsCount++
  }  

  if (errorsCount === 0) {    
    store.setChilds(childsData.value)
    store.setUser(form.value)
    router.push('/preview')
  } else {
    console.log(errors.value);
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div>
      <h2 class="title">Персональные данные</h2>
      <div class="person-wrapper">
        <Input label="Имя" v-model:inputData="form.name" :showError="errors.name && !isNameValid" :textError="errors.name"
          @blur="validateField('name')" />
        <Input label="Возвраст" type="number" v-model:inputData="form.age" />
      </div>

    </div>

    <div class="title-wrapper">
      <h2 class="title">Дети (макс. {{ MAX_COUNT_CHILD }})</h2>
      <Button v-if="showAddChildBtn" variant="outline" @click.prevent="addChild">
        <IconPlus />
        Добавить ребенка
      </Button>
    </div>

    <ChildForm v-for="(child, index) of childsData" :ageChild="child.ageChild" :nameChild="child.nameChild" :key="index"
      @deleteChild="deleteChild(index)" @update="setChild(index, $event)" />

    <Button type="submit">Сохранить</Button>
  </form>
</template>

<style scoped lang="scss">
.person-wrapper {
  margin-bottom: 30px;
  display: grid;
  gap: 10px;
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & .title {
    margin-bottom: 0;
  }
}
</style>

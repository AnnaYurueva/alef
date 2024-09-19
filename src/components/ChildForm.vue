<script setup lang="ts">
import Button from '@/components/Ui/Button.vue'
import Input from '@/components/Ui/Input.vue'
import type { IChild } from '@/interfaces/data';
import { ref, onMounted, watch } from 'vue';
const emits = defineEmits(['deleteChild', 'update'])
const props = defineProps<IChild>()

const nameChild = ref('')
const ageChild = ref()

function inputChild() {
    return{
        nameChild: nameChild.value,
        ageChild: ageChild.value
    }
}

onMounted(() => {
    if(!!props) {
        nameChild.value = props.nameChild
        ageChild.value = props.ageChild
    }
})

watch(inputChild, (newValue) => {
    emits('update', newValue)
})
</script>
<template>
 <div class="child-row">
      <Input label="Имя" v-model:inputData="nameChild"  />
      <Input label="Возвраст" type="number" v-model:inputData="ageChild" />
      <Button variant="text" @click.prevent="emits('deleteChild')">
        Удалить
      </Button>
    </div>
</template>

<style scoped lang="scss">
.child-row {
  display: flex;
  gap: 18px;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 30px;
  }
}
</style>
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface User {
  name: string
  age: number | null
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const getUser = computed(() => user.value)

  function setUser(name: string, age: number) {
    user.value!.name = name
    user.value!.age = age
  }

  return { user, setUser, getUser }
})

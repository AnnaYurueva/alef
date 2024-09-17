import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser, IChild } from '@/interfaces'

export const useUserStore = defineStore('user', () => {
  const user: Ref<IUser> = ref({})
  const childs: Ref<IChild[] | []> = ref([])
  const getUser = computed(() => user.value)
  const getChilds = computed(() => childs.value)

  const getData = computed(() => {   
    if (!user.value.name) return null
    return { 
      user: user.value, 
      childs: childs.value
     }
  })

  function setUser(name: string, age: number) {
    user.value!.name = name
    user.value!.age = age
  }

  function setChilds(data: IChild[]) {
    if (!data.length) return

    childs.value = [...data]    
  }

  return { getUser, getChilds, getData, setUser, setChilds }
})

import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser, IChild } from '@/interfaces/data'

export const useUserStore = defineStore('user', () => {
  const user: Ref<IUser> = ref({name: ''})
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

  function setUser(data: IUser) {
    user.value.name = data.name
    user.value.age = data.age ? data.age : null
  }

  function setChilds(data: IChild[]) {
    if (!data.length) return

    childs.value = [...data]    
  }

  return { getUser, getChilds, getData, setUser, setChilds }
})

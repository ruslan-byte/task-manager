import { defineStore } from 'pinia'
export const useTaskModalStore = defineStore('task-modal', {
  state:()=>( {
    isShow: false
  }),
  actions: {
    showModal () {
        this.isShow = true
    },
    hideModal () {
        this.isShow = false
    },
  }
})
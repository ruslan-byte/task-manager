<template>
  <section class="pt-20">
    <button
      class="g-button mb-8 ml-auto block g-button-green"
      @click="taskModalStore.showModal"
    >
      Создать новую задачу
    </button>
    <TaskList></TaskList>
    <TaskModal></TaskModal>
  </section>
</template>
<script setup>
import TaskList from "@/components/TaskList.vue";
import TaskModal from "@/components/TaskModal.vue";
import { useTaskModalStore } from "../store/task-modal";
const taskModalStore = useTaskModalStore();
</script>
<style lang="scss"></style>

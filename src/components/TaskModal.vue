<template>
  <Modal :is-show="taskModalStore.isShow">
    <h3 class="text-h2 font-semibold mb-6">Создать новую задачу</h3>
    <textarea
      type="text"
      class="g-text-area w-full min-h-40 resize-none mb-4"
      placeholder="Например: Написать feedback по тестовому заданию"
    />
    <div class="flex justify-between">
      <button class="g-button g-button-green">Сохранить</button>
      <button class="g-button g-button-red">Отмена</button>
    </div>
  </Modal>
</template>
<script setup>
import Modal from "@/components/Modal.vue";
import { useTaskModalStore } from "../store/task-modal";
const taskModalStore = useTaskModalStore();
</script>
<style lang="scss"></style>

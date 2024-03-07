<template>
  <ul class="border border-gray-light rounded-md px-4 py-4">
    <li
      class="flex gap-2 justify-between items-center border-b border-gray-light last:border-none mb-2 last:mb-0"
    >
      <Checkbox v-model="isChecked">
        <p :class="{ 'line-through text-gray-light': isChecked }">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          voluptatibus esse, non labore nostrum odio, maxime quia rem laudantium
          nam iusto et error perferendis voluptatum reiciendis corporis aperiam
          necessitatibus? Voluptas!
        </p>
      </Checkbox>

      <div class="flex gap-4 items-center">
        <button class="g-button">Редактировать</button>
        <button class="g-button g-button-red">Удалить</button>
      </div>
    </li>
  </ul>
</template>
<script setup>
import Checkbox from "@/components/Checkbox.vue";
import { ref } from "vue";
const isChecked = ref(false);
</script>
<style lang="scss"></style>

<template>
  <ul class="border border-gray-light rounded-md px-4 py-4">
    <li
      class="flex gap-2 justify-between items-center border-b border-gray-light last:border-none mb-2 last:mb-0"
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        voluptatibus esse, non labore nostrum odio, maxime quia rem laudantium
        nam iusto et error perferendis voluptatum reiciendis corporis aperiam
        necessitatibus? Voluptas!
      </p>
      <div class="flex gap-4 items-center">
        <Button class="g-button">Редактировать</Button>
        <Button class="g-button g-button-red">Удалить</Button>
      </div>
    </li>
  </ul>
</template>
<script setup>
import Checkbox from "@/components/Checkbox.vue";
</script>
<style lang="scss"></style>

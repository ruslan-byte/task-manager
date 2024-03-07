<template>
  <div
    v-if="isShow"
    class="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center"
  >
    <div
      class="bg-gray absolute top-0 bottom-0 right-0 left-0 opacity-35"
    ></div>
    <div
      class="min-h-[100px] bg-white rounded-md p-6 z-10 relative mx-auto w-[428px]"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ isShow: Boolean });
</script>
<style lang="scss"></style>

<template>
  <label>
    <input type="checkbox" v-model="value" />
  </label>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get: () => props.modelValue,
  set: (newVal) => emit("update:modelValue", newVal),
});
</script>
<style lang="scss"></style>

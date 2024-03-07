<template>
  <label class="cursor-pointer flex gap-2 items-center">
    <div>
      <input type="checkbox" v-model="value" hidden />
      <IconCheck v-if="value" class="w-8 h-8"></IconCheck>
      <IconUnchecked v-else class="w-8 h-8"></IconUnchecked>
    </div>
    <slot></slot>
  </label>
</template>
<script setup>
import { computed } from "vue";
import IconCheck from "@/components/Icon/IconCheck.vue";
import IconUnchecked from "@/components/Icon/IconUnchecked.vue";
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>
<style lang="scss"></style>

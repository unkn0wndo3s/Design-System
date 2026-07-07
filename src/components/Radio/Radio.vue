<script setup lang="ts">
interface Props {
  id: string;
  name: string;
  value?: string;
  disabled?: boolean;
}

defineProps<Props>();

const model = defineModel<string>();
</script>

<template>
  <label :class="['radio', { 'radio--disabled': disabled }]" :for="id">
    <input
      :id="id"
      v-model="model"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      class="radio__input"
    />
    <span class="radio__dot" aria-hidden="true"></span>
    <span class="radio__label"><slot /></span>
  </label>
</template>

<style lang="scss">
@use './_radio.scss';
</style>

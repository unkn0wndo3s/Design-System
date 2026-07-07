<script setup lang="ts">
interface Props {
  id: string;
  name?: string;
  disabled?: boolean;
}

defineProps<Props>();

const checked = defineModel<boolean>({ default: false });
</script>

<template>
  <label :class="['checkbox', { 'checkbox--disabled': disabled }]" :for="id">
    <input
      :id="id"
      v-model="checked"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      class="checkbox__input"
    />
    <span class="checkbox__box" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 13l4 4L19 7"></path>
      </svg>
    </span>
    <span class="checkbox__label"><slot /></span>
  </label>
</template>

<style lang="scss">
@use './_checkbox.scss';
</style>

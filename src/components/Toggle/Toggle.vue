<script setup lang="ts">
interface Props {
  name?: string;
  id?: string;
}

withDefaults(defineProps<Props>(), { name: 'toggle' });

const checked = defineModel<boolean>({ default: false });
</script>

<template>
  <div
    :id="id"
    :class="['toggle', { 'toggle-active': checked }]"
    role="switch"
    :aria-checked="checked"
    tabindex="0"
    @click="checked = !checked"
    @keydown.enter.prevent="checked = !checked"
    @keydown.space.prevent="checked = !checked"
  >
    <div class="toggle-switch"></div>
  </div>
</template>

<style lang="scss">
@use './_toggle.scss';
</style>

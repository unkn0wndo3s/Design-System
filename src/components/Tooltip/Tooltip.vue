<script setup lang="ts">
interface Props {
  label: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

withDefaults(defineProps<Props>(), { position: 'top' });
</script>

<template>
  <span :class="['tooltip', `tooltip--${position}`]">
    <slot />
    <span class="tooltip__bubble" role="tooltip">{{ label }}</span>
  </span>
</template>

<style lang="scss">
@use './_tooltip.scss';
</style>

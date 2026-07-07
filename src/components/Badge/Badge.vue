<script setup lang="ts">
interface Props {
  type?: 'primary' | 'neutral' | 'success' | 'warning' | 'error' | 'info';
  variant?: 'soft' | 'solid';
}

withDefaults(defineProps<Props>(), { type: 'primary', variant: 'soft' });
</script>

<template>
  <span :class="['badge', `badge__${type}`, `badge--${variant}`]">
    <slot />
  </span>
</template>

<style lang="scss">
@use './_badge.scss';
</style>

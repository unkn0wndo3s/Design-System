<script setup lang="ts">
interface Props {
  type: 'known' | 'unknown';
  percentage?: number;
  width?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="['loading-bar', `loading-bar--${type}`]"
    :style="width ? { width } : undefined"
  >
    <div
      v-if="type === 'known' && percentage !== undefined"
      class="loading-bar__progress"
      :style="{ width: `${percentage}%` }"
    />
    <div v-else class="loading-bar__unknown" />
  </div>
</template>

<style lang="scss">
@use './_loadingBar.scss';
</style>

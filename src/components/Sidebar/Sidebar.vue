<script setup lang="ts">
interface Props {
  header?: string;
}

withDefaults(defineProps<Props>(), { header: 'Nova' });
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__head">
      <span class="sidebar__mark"></span>
      <span class="sidebar__title">{{ header }}</span>
    </div>
    <nav class="sidebar__nav">
      <slot />
    </nav>
    <div class="sidebar__footer">
      <slot name="footer" />
    </div>
  </aside>
</template>

<style lang="scss">
@use './_sidebar.scss';
</style>

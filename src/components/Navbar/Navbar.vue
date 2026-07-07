<script setup lang="ts">
interface Props {
  brand?: string;
}

withDefaults(defineProps<Props>(), { brand: 'Nova' });
</script>

<template>
  <header class="navbar">
    <div class="navbar__brand">
      <span class="navbar__mark"></span>
      <span class="navbar__title">{{ brand }}</span>
    </div>
    <nav class="navbar__links"><slot /></nav>
    <div class="navbar__right"><slot name="right" /></div>
  </header>
</template>

<style lang="scss">
@use './_navbar.scss';
</style>

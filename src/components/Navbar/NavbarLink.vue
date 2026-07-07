<script setup lang="ts">
interface Props {
  href: string;
}

withDefaults(defineProps<Props>(), { href: '#' });
</script>

<template>
  <a :href="href" class="navbar__link"><slot /></a>
</template>

<style lang="scss">
@use './_navbar.scss';
</style>

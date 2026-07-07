<script setup lang="ts">
interface Props {
  href?: string;
  current?: boolean;
}

withDefaults(defineProps<Props>(), { href: '#', current: false });
</script>

<template>
  <a
    :href="href"
    :class="['breadcrumb__item', { 'breadcrumb__item--current': current }]"
    :aria-current="current ? 'page' : undefined"
  >
    <slot />
  </a>
</template>

<style lang="scss">
@use './_breadcrumb.scss';
</style>

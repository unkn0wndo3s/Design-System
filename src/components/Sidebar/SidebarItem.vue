<script setup lang="ts">
interface Props {
  href?: string;
  active?: boolean;
}

withDefaults(defineProps<Props>(), { href: '#', active: false });
</script>

<template>
  <a :href="href" :class="['sidebar__item', { 'sidebar__item--active': active }]">
    <span v-if="$slots.icon" class="sidebar__item-icon">
      <slot name="icon" />
    </span>
    <span class="sidebar__item-label"><slot /></span>
  </a>
</template>

<style lang="scss">
@use './_sidebar.scss';
</style>

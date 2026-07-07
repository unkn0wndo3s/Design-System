<script setup lang="ts">
interface Props {
  url: string;
  blank?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="link__container">
    <a
      :href="url"
      class="link"
      :target="blank ? '_blank' : undefined"
      :rel="blank ? 'noopener noreferrer' : undefined"
    >
      <slot />
    </a>
  </div>
</template>

<style lang="scss">
@use './_link.scss';
</style>

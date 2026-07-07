<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
  cover?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <div
      v-if="cover"
      class="card__cover"
      :style="{ backgroundImage: `url(${cover})` }"
    />
    <div class="card__body">
      <p v-if="title" class="card__title">{{ title }}</p>
      <p v-if="subtitle" class="card__subtitle">{{ subtitle }}</p>
      <div class="card__content"><slot /></div>
      <div v-if="$slots.footer" class="card__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './_card.scss';
</style>

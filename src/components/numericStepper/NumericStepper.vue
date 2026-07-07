<script setup lang="ts">
import Button from '../Button/Button.vue';
import { Minus, Plus } from 'lucide-vue-next';

interface Props {
  id?: string;
  min?: number;
  max?: number;
  step?: number;
}

const props = withDefaults(defineProps<Props>(), { step: 1 });

const value = defineModel<number>({ default: 0 });

function clamp(next: number): number {
  const min = props.min ?? -Infinity;
  const max = props.max ?? Infinity;
  return Math.min(max, Math.max(min, next));
}

function increment() {
  value.value = clamp(value.value + props.step);
}

function decrement() {
  value.value = clamp(value.value - props.step);
}
</script>

<template>
  <div :id="id" class="numeric-stepper">
    <span class="numeric-stepper__control" @click="decrement">
      <Button type="ghost" :icon="true">
        <Minus :size="24" />
      </Button>
    </span>

    <p class="numeric-stepper__value">{{ value }}</p>

    <span class="numeric-stepper__control" @click="increment">
      <Button type="ghost" :icon="true">
        <Plus :size="24" />
      </Button>
    </span>
  </div>
</template>

<style lang="scss">
@use './_numericStepper.scss';
</style>

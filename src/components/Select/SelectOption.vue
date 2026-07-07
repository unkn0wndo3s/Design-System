<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import { selectKey } from './select-context';

interface Props {
  value: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), { disabled: false });

const context = inject(selectKey);
const labelEl = ref<HTMLElement | null>(null);

const isSelected = computed(() => context?.selectedValue.value === props.value);

onMounted(() => {
  context?.registerOption({
    value: props.value,
    label: labelEl.value?.textContent?.trim() ?? props.value,
    disabled: props.disabled,
  });
});

onBeforeUnmount(() => context?.unregisterOption(props.value));
</script>

<template>
  <li
    ref="labelEl"
    role="option"
    :aria-selected="isSelected"
    :aria-disabled="disabled ? 'true' : undefined"
    :class="[
      'select-option',
      { 'select-option__disabled': disabled, 'select-option__selected': isSelected },
    ]"
    @click="context?.select(value)"
  >
    <slot />
  </li>
</template>

<style lang="scss">
@use './_selectOption.scss';
</style>

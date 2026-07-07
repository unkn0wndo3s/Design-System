<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, provide, ref } from 'vue';
import { ChevronLeft, ChevronDown } from 'lucide-vue-next';
import { selectKey, type SelectOptionEntry } from './select-context';

interface Props {
  default?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), { disabled: false });

const model = defineModel<string>();

const emit = defineEmits<{ change: [payload: { value: string; label: string }] }>();

const root = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const options = ref<SelectOptionEntry[]>([]);

const selectedValue = computed<string | null>({
  get: () => model.value ?? props.default ?? options.value[0]?.value ?? null,
  set: (value) => {
    if (value !== null) model.value = value;
  },
});

const selectedLabel = computed(
  () => options.value.find((o) => o.value === selectedValue.value)?.label ?? '',
);

function select(value: string) {
  const option = options.value.find((o) => o.value === value);
  if (!option || option.disabled) return;

  selectedValue.value = value;
  isOpen.value = false;
  emit('change', { value: option.value, label: option.label });
}

function registerOption(option: SelectOptionEntry) {
  options.value.push(option);
}

function unregisterOption(value: string) {
  options.value = options.value.filter((o) => o.value !== value);
}

provide(selectKey, { selectedValue, select, registerOption, unregisterOption });

function toggle() {
  if (!props.disabled) isOpen.value = !isOpen.value;
}

function onDocumentClick(event: MouseEvent) {
  if (root.value && !root.value.contains(event.target as Node)) isOpen.value = false;
}

onMounted(() => document.addEventListener('click', onDocumentClick));
onBeforeUnmount(() => document.removeEventListener('click', onDocumentClick));
</script>

<template>
  <div
    ref="root"
    :class="['select', { 'select--disabled': disabled, 'select--open': isOpen }]"
    @keydown.escape="isOpen = false"
  >
    <button
      class="select__trigger"
      type="button"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      :disabled="disabled"
      @click="toggle"
    >
      <span class="select__label">{{ selectedLabel }}</span>
      <span
        :class="['select__arrow', 'select__arrow--closed', { 'select__arrow--hidden': isOpen }]"
      >
        <ChevronLeft :size="16" />
      </span>
      <span
        :class="['select__arrow', 'select__arrow--open', { 'select__arrow--hidden': !isOpen }]"
      >
        <ChevronDown :size="16" />
      </span>
    </button>

    <ul v-show="isOpen" class="select__dropdown" role="listbox">
      <slot />
    </ul>
  </div>
</template>

<style lang="scss">
@use './_select.scss';
</style>

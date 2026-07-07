<script setup lang="ts">
import { computed, inject } from 'vue';
import { paginationKey } from './pagination-context';

interface Props {
  page: number;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), { disabled: false });

const context = inject(paginationKey);

const isSelected = computed(() => context?.currentPage.value === props.page);

function onClick() {
  if (!props.disabled) context?.setPage(props.page);
}
</script>

<template>
  <div
    :class="[
      'pagination-number',
      {
        'pagination-number__disabled': disabled,
        'pagination-number__selected': isSelected,
      },
    ]"
    @click="onClick"
  >
    <slot>{{ page }}</slot>
  </div>
</template>

<style lang="scss">
@use './_paginationNumber.scss';
</style>

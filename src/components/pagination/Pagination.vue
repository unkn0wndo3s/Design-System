<script setup lang="ts">
import { provide } from 'vue';
import { paginationKey } from './pagination-context';

const currentPage = defineModel<number>({ default: 1 });

const emit = defineEmits<{ change: [page: number] }>();

function setPage(page: number) {
  currentPage.value = page;
  emit('change', page);
}

provide(paginationKey, { currentPage, setPage });
</script>

<template>
  <div class="pagination">
    <slot />
  </div>
</template>

<style lang="scss">
@use './_pagination.scss';
</style>

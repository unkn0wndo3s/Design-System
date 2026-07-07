<script setup lang="ts">
import { computed, inject } from 'vue';
import { tabKey } from './tab-context';

interface Props {
  itemId: string;
}

const props = defineProps<Props>();

const context = inject(tabKey);

const isActive = computed(() => context?.activeTab.value === props.itemId);
</script>

<template>
  <div v-show="isActive" role="tabpanel">
    <slot />
  </div>
</template>

<style lang="scss">
@use './_tab.scss';
</style>

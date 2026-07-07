<script setup lang="ts">
import { computed, inject, onMounted } from 'vue';
import { tabKey } from './tab-context';

interface Props {
  id: string;
}

const props = defineProps<Props>();

const context = inject(tabKey);

const isActive = computed(() => context?.activeTab.value === props.id);

onMounted(() => context?.registerItem(props.id));
</script>

<template>
  <div
    :class="['tab__item', { 'tab__item--active': isActive }]"
    role="tab"
    :aria-selected="isActive"
    tabindex="0"
    @click="context?.setActive(id)"
    @keydown.enter.prevent="context?.setActive(id)"
    @keydown.space.prevent="context?.setActive(id)"
  >
    <slot />
  </div>
</template>

<style lang="scss">
@use './_tab.scss';
</style>

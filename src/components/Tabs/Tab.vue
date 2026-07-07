<script setup lang="ts">
import { provide } from 'vue';
import { tabKey } from './tab-context';

interface Props {
  id?: string;
  defaultActive?: string;
}

const props = defineProps<Props>();

const activeTab = defineModel<string>('active');

const emit = defineEmits<{ change: [itemId: string] }>();

function setActive(itemId: string) {
  activeTab.value = itemId;
  emit('change', itemId);
}

function registerItem(itemId: string) {
  // Premier onglet enregistré = actif par défaut (sauf defaultActive ou v-model)
  if (activeTab.value === undefined) {
    activeTab.value = props.defaultActive ?? itemId;
  }
}

provide(tabKey, { activeTab, setActive, registerItem });
</script>

<template>
  <div :id="id" class="tab">
    <slot />
  </div>
</template>

<style lang="scss">
@use './_tab.scss';
</style>

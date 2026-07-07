<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { X } from 'lucide-vue-next';

interface Props {
  id?: string;
  title?: string;
}

defineProps<Props>();

const open = defineModel<boolean>('open', { default: false });

function close() {
  open.value = false;
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && open.value) close();
}

onMounted(() => document.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown));
</script>

<template>
  <div v-if="open" :id="id" class="modal" data-open="true">
    <div class="modal__overlay" @click.self="close">
      <div class="modal__dialog" role="dialog" aria-modal="true" :aria-label="title">
        <div class="modal__head">
          <span class="modal__title">{{ title }}</span>
          <X class="modal__close" :size="18" aria-label="Close" @click="close" />
        </div>
        <div class="modal__body"><slot /></div>
        <div v-if="$slots.footer" class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './_modal.scss';
</style>

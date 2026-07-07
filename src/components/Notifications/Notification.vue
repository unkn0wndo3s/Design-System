<script setup lang="ts">
import { ref } from 'vue';
import { X } from 'lucide-vue-next';

interface Props {
  type: 'info' | 'success' | 'warning' | 'error';
}

defineProps<Props>();

const emit = defineEmits<{ close: [] }>();

const visible = ref(true);

function close() {
  visible.value = false;
  emit('close');
}
</script>

<template>
  <div v-if="visible" :class="['notification', `notification__${type}`]" role="alert">
    <div :class="`notification__${type}__content`">
      <slot />
    </div>
    <button
      :class="`notification__${type}__close`"
      aria-label="Close notification"
      @click="close"
    >
      <X :size="16" />
    </button>
  </div>
</template>

<style lang="scss">
@use './_notification.scss';
</style>

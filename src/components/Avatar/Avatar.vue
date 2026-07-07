<script setup lang="ts">
import { computed, ref } from 'vue';
import { User } from 'lucide-vue-next';

interface Props {
  type: 'photo' | 'initials';
  name: string;
  image?: string;
}

const props = defineProps<Props>();

const imageFailed = ref(false);

const initials = computed(() =>
  props.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase(),
);
</script>

<template>
  <div class="avatar">
    <div
      v-if="type === 'photo' && image"
      class="avatar__content avatar__content--photo"
    >
      <img
        v-show="!imageFailed"
        :src="image"
        :alt="name"
        class="avatar__content"
        @error="imageFailed = true"
      />
      <span v-if="imageFailed" class="avatar__fallback">
        <User :size="24" />
      </span>
    </div>
    <span v-else class="avatar__content">{{ initials }}</span>
  </div>
</template>

<style lang="scss">
@use './_avatar.scss';
</style>

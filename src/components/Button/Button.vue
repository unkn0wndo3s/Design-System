<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  type?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: boolean;
  href?: string;
  htmlType?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'md',
  disabled: false,
  icon: false,
  htmlType: 'button',
});

const tag = computed(() => (props.href ? 'a' : 'button'));

const classes = computed(() => [
  'button',
  `button__${props.type}`,
  `button--${props.size}`,
  { 'button--icon': props.icon, 'button--disabled': props.disabled },
]);
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :href="href"
    :type="href ? undefined : htmlType"
    :aria-disabled="disabled ? 'true' : undefined"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </component>
</template>

<style lang="scss">
@use './_button.scss';
</style>

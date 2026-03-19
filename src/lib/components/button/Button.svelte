<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    disabled?: boolean;
    size?: 'Small' | 'Medium' | 'Large';
    variant?: 'Primary' | 'Secondary';

    children?: Snippet;

    onclick?: () => void;
  }

  const {
    disabled = false,
    size = 'Medium',
    variant = 'Primary',
    onclick,
    children,
    ...props
  }: Props = $props();
</script>

<button
  type="button"
  class={[`button`, `button--${variant}`, `button--${size}`].join(' ')}
  {...props}
  {disabled}
  {onclick}
>
  {#if children}
    {@render children()}
  {/if}
</button>

<style lang="scss" global>
  @use "./button.scss";
</style>
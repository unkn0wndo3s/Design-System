<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    disabled?: boolean;
    selected?: boolean;
    children?: Snippet;
    onclick?: () => void;
  }

  const {
    disabled = false,
    selected = false,
    children,
    onclick,
    ...props
  }: Props = $props();

  const displayState = $derived(disabled ? 'Disabled' : selected ? 'Selected' : 'Default');
</script>

<button
  type="button"
  class={[`badge`, `badge--${displayState}`].join(' ')}
  {...props}
  {disabled}
  {onclick}
>
  <span class="badge__content">
    {#if children}
      {@render children()}
    {:else}
      badge
    {/if}
  </span>
</button>

<style lang="scss" global>
  @use './badge.scss';
</style>
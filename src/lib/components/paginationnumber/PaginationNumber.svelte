<script lang="ts">
  import type { Snippet } from 'svelte';

  type PaginationState = 'Default' | 'Hover' | 'Active' | 'Selected' | 'Disabled';

  interface Props {
    state?: PaginationState;
    disabled?: boolean;
    selected?: boolean;
    label?: string | number;

    children?: Snippet;

    onclick?: (event: MouseEvent) => void;
  }

  const {
    state = 'Default',
    disabled = false,
    selected = false,
    label = 'x',
    children,
    onclick,
    ...props
  }: Props = $props();

  const isDisabled = $derived(disabled || state === 'Disabled');

  const resolvedState = $derived(
    isDisabled
      ? 'Disabled'
      : selected || state === 'Selected'
        ? 'Selected'
        : state === 'Hover'
          ? 'Hover'
          : state === 'Active'
            ? 'Active'
            : 'Default'
  );

  const isSelected = $derived(resolvedState === 'Selected');
</script>

<button
  type="button"
  class={[
    'pagination-number',
    `pagination-number--${resolvedState}`
  ].join(' ')}
  aria-current={isSelected ? 'page' : undefined}
  onclick={onclick}
  disabled={isDisabled}
  {...props}
>
  <span class="pagination-number__label">
    {#if children}
      {@render children()}
    {:else}
      {label}
    {/if}
  </span>
</button>

<style lang="scss" global>
  @use "./paginationnumber.scss";
</style>

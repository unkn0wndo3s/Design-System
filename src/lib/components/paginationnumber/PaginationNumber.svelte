<script lang="ts">
  import { getContext } from 'svelte';
  import type { Snippet } from 'svelte';
  import type { Writable } from 'svelte/store';

  type PaginationState = 'Default' | 'Hover' | 'Active' | 'Selected' | 'Disabled';

  interface PaginationContext {
    selectedPageStore?: Writable<string | number>;
    isPageDisabled?: (page: string | number) => boolean;
    onPageSelect?: (page: string | number, event: MouseEvent) => void;
  }

  interface Props {
    page?: string | number;
    url?: string;
    state?: PaginationState;
    disabled?: boolean;
    selected?: boolean;
    label?: string | number;

    children?: Snippet;

    onclick?: (event: MouseEvent) => void;
  }

  const {
    page,
    url,
    state = 'Default',
    disabled = false,
    selected = false,
    label = 'x',
    children,
    onclick,
    ...props
  }: Props = $props();

  const paginationContext = getContext<PaginationContext>('nds-pagination');
  const selectedPageStore = paginationContext?.selectedPageStore;

  const resolvedLabel = $derived(page ?? label);
  const isContextDisabled = $derived(page !== undefined ? (paginationContext?.isPageDisabled?.(page) ?? false) : false);
  const isContextSelected = $derived(page !== undefined && selectedPageStore ? $selectedPageStore === page : false);

  const isDisabled = $derived(disabled || state === 'Disabled' || isContextDisabled);

  const resolvedState = $derived(
    isDisabled
      ? 'Disabled'
      : selected || isContextSelected || state === 'Selected'
        ? 'Selected'
        : state === 'Hover'
          ? 'Hover'
          : state === 'Active'
            ? 'Active'
            : 'Default'
  );

  const isSelected = $derived(resolvedState === 'Selected');

  function handleAction(event: MouseEvent) {
    if (isDisabled) {
      event.preventDefault();
      return;
    }

    if (page !== undefined) {
      paginationContext?.onPageSelect?.(page, event);
    }

    onclick?.(event);
  }
</script>

{#if url}
  <a
    class={[
      'pagination-number',
      `pagination-number--${resolvedState}`
    ].join(' ')}
    href={url}
    aria-current={isSelected ? 'page' : undefined}
    aria-disabled={isDisabled}
    tabindex={isDisabled ? -1 : undefined}
    onclick={handleAction}
    {...props}
  >
    <span class="pagination-number__label">
      {#if children}
        {@render children()}
      {:else}
        {resolvedLabel}
      {/if}
    </span>
  </a>
{:else}
  <button
    type="button"
    class={[
      'pagination-number',
      `pagination-number--${resolvedState}`
    ].join(' ')}
    aria-current={isSelected ? 'page' : undefined}
    onclick={handleAction}
    disabled={isDisabled}
    {...props}
  >
    <span class="pagination-number__label">
      {#if children}
        {@render children()}
      {:else}
        {resolvedLabel}
      {/if}
    </span>
  </button>
{/if}

<style lang="scss" global>
  @use "./paginationnumber.scss";
</style>

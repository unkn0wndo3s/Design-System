<script lang="ts">
  import { setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import type { Snippet } from 'svelte';
  import PaginationNumber from '../paginationnumber/PaginationNumber.svelte';

  type PaginationState = 'Default' | 'Hover' | 'Active' | 'Selected' | 'Disabled';

  interface Props {
    pages?: Array<string | number>;
    selectedPage?: string | number;
    disabled?: boolean;
    itemStates?: Record<string, PaginationState>;

    children?: Snippet;

    onpageclick?: (page: string | number, event: MouseEvent) => void;
  }

  interface PaginationContext {
    selectedPageStore?: Writable<string | number>;
    isPageDisabled?: (page: string | number) => boolean;
    onPageSelect?: (page: string | number, event: MouseEvent) => void;
  }

  let {
    pages = [1, 2, 3, 4, 5],
    selectedPage = $bindable<string | number>(2),
    disabled = false,
    itemStates = {},
    children,
    onpageclick,
    ...props
  }: Props = $props();

  const selectedPageStore = writable<string | number>(selectedPage);

  $effect(() => {
    selectedPageStore.set(selectedPage);
  });

  function isPageDisabled(page: string | number) {
    return disabled || itemStates[String(page)] === 'Disabled';
  }

  function handlePageSelect(page: string | number, event: MouseEvent) {
    if (isPageDisabled(page)) {
      return;
    }

    selectedPage = page;
    selectedPageStore.set(page);
    onpageclick?.(page, event);
  }

  setContext('nds-pagination', {
    selectedPageStore,
    isPageDisabled,
    onPageSelect: handlePageSelect,
  } satisfies PaginationContext);

  function handlePageClick(page: string | number) {
    return (event: MouseEvent) => {
      handlePageSelect(page, event);
    };
  }
</script>

<nav class="paginating" aria-label="Pagination" {...props}>
  {#if children}
    {@render children()}
  {:else}
    {#each pages as page (String(page))}
      <PaginationNumber
        label={page}
        selected={page === selectedPage}
        disabled={isPageDisabled(page)}
        state={itemStates[String(page)]}
        onclick={handlePageClick(page)}
      />
    {/each}
  {/if}
</nav>

<style lang="scss" global>
  @use "./paginating.scss";
</style>

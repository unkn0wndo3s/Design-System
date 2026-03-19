<script lang="ts">
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

  let {
    pages = [1, 2, 3, 4, 5],
    selectedPage = $bindable<string | number>(2),
    disabled = false,
    itemStates = {},
    children,
    onpageclick,
    ...props
  }: Props = $props();

  function isPageDisabled(page: string | number) {
    return disabled || itemStates[String(page)] === 'Disabled';
  }

  function handlePageClick(page: string | number) {
    return (event: MouseEvent) => {
      if (isPageDisabled(page)) {
        return;
      }

      selectedPage = page;
      onpageclick?.(page, event);
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

<script lang="ts">
  import { setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import type { Snippet } from 'svelte';

  interface Props {
    value?: string;
    placeholder?: string;
    children?: Snippet;
  }

  let {
    value = $bindable(''),
    placeholder = 'Default option',
    children,
    ...props
  }: Props = $props();

  let isExpanded = $state(false);
  const selectedValueStore = writable(value);

  const selectedLabel = $derived(value || placeholder);

  $effect(() => {
    selectedValueStore.set(value);
  });

  function handleToggle() {
    isExpanded = !isExpanded;
  }

  function handleOptionSelect(nextValue: string) {
    value = nextValue;
    isExpanded = false;
  }

  interface SelectContext {
    onOptionSelect?: (value: string) => void;
    selectedValueStore?: Writable<string>;
  }

  setContext('nds-select', {
    onOptionSelect: handleOptionSelect,
    selectedValueStore,
  } satisfies SelectContext);
</script>

<div
  class={[
    'select',
    isExpanded && 'select--expanded'
  ].filter(Boolean).join(' ')}
  {...props}
>
  <button type="button" class="select__trigger" aria-expanded={isExpanded} onclick={handleToggle}>
    <span class="select__label">{selectedLabel}</span>
    <span class={[
      'select__chevron',
      isExpanded && 'select__chevron--expanded'
    ].filter(Boolean).join(' ')} aria-hidden="true"></span>
  </button>

  {#if isExpanded}
    <div class="select__options" role="listbox" tabindex="0">
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/if}
</div>

<style lang="scss" global>
  @use './select.scss';
</style>
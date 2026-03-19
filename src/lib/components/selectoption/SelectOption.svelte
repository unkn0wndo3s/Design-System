<script lang="ts">
  import { getContext } from 'svelte';
  import type { Snippet } from 'svelte';
  import type { Writable } from 'svelte/store';

  interface Props {
    value?: string;
    state?: 'Default' | 'Hover' | 'Selected';
    children?: Snippet;
    onclick?: (event: MouseEvent) => void;
  }

  const { value, state: optionState = 'Default', children, onclick, ...props }: Props = $props();

  interface SelectContext {
    onOptionSelect?: (value: string) => void;
    selectedValueStore?: Writable<string>;
  }

  const selectContext = getContext<SelectContext>('nds-select');
  const selectedValueStore = selectContext?.selectedValueStore;

  let optionElement: HTMLButtonElement | undefined;
  const resolvedValue = $derived(value ?? optionElement?.textContent?.trim() ?? '');

  const isContextSelected = $derived(selectedValueStore ? $selectedValueStore === resolvedValue : false);
  const resolvedState = $derived(selectedValueStore ? (isContextSelected ? 'Selected' : 'Default') : optionState);
  const isSelected = $derived(resolvedState === 'Selected');

  function handleClick(event: MouseEvent) {
    onclick?.(event);
    selectContext?.onOptionSelect?.(resolvedValue);
  }
</script>

<button
  type="button"
  bind:this={optionElement}
  class={[`select-option`, `select-option--${resolvedState}`].join(' ')}
  data-select-option="true"
  data-value={resolvedValue}
  role="option"
  aria-selected={isSelected}
  onclick={handleClick}
  {...props}
>
  <span class="select-option__label">
    {#if children}
      {@render children()}
    {/if}
  </span>
</button>

<style lang="scss" global>
  @use "./selectoption.scss";
</style>
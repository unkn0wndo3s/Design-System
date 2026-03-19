<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  interface Props {
    label?: string;
    value?: string;
    state?: 'Default' | 'Hover' | 'Selected';
    onclick?: (event: MouseEvent) => void;
  }

  const {
    label = 'Option',
    value = label,
    state = 'Default',
    onclick,
    ...props
  }: Props = $props();

  interface SelectContext {
    onOptionSelect?: (value: string) => void;
    selectedValueStore?: Writable<string>;
  }

  const selectContext = getContext<SelectContext>('nds-select');
  const selectedValueStore = selectContext?.selectedValueStore;

  const isContextSelected = $derived(selectedValueStore ? $selectedValueStore === value : false);
  const resolvedState = $derived(selectedValueStore ? (isContextSelected ? 'Selected' : 'Default') : state);
  const isSelected = $derived(resolvedState === 'Selected');

  function handleClick(event: MouseEvent) {
    onclick?.(event);
    selectContext?.onOptionSelect?.(value);
  }
</script>

<button
  type="button"
  class={[`select-option`, `select-option--${resolvedState}`].join(' ')}
  data-select-option="true"
  data-value={value}
  role="option"
  aria-selected={isSelected}
  onclick={handleClick}
  {...props}
>
  <span class="select-option__label">{label}</span>
</button>

<style lang="scss" global>
  @use "./selectoption.scss";
</style>
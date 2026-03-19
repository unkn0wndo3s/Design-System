<script lang="ts">
  import { getContext } from 'svelte';

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

  const isSelected = $derived(state === 'Selected');

  const selectContext = getContext<{ onOptionSelect?: (value: string) => void }>('nds-select');

  function handleClick(event: MouseEvent) {
    onclick?.(event);
    selectContext?.onOptionSelect?.(value);
  }
</script>

<button
  type="button"
  class={[`select-option`, `select-option--${state}`].join(' ')}
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
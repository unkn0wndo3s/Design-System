<script lang="ts">
  interface Props {
    label?: string;
    state?: 'Default' | 'Hover' | 'Selected';
  }

  const {
    label = 'Option',
    state = 'Default',
    ...props
  }: Props = $props();

  const isSelected = $derived(state === 'Selected');
</script>

<div
  class={[`select-option`, `select-option--${state}`].join(' ')}
  role="option"
  aria-selected={isSelected}
  {...props}
>
  <span class="select-option__label">{label}</span>
</div>

<style lang="scss" global>
  @use "./selectoption.scss";
</style>
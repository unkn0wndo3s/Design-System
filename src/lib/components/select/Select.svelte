<script lang="ts">
  import SelectOption from '../selectoption/SelectOption.svelte';

  interface Props {
    label?: string;
    expanded?: boolean;
    optionLabel?: string;
  }

  const {
    label = 'Default option',
    expanded = false,
    optionLabel = 'Option',
    ...props
  }: Props = $props();
</script>

<div
  class={[
    'select',
    expanded && 'select--expanded'
  ].filter(Boolean).join(' ')}
  {...props}
>
  <div class="select__trigger" role="button" aria-expanded={expanded} tabindex="0">
    <span class="select__label">{label}</span>
    <span class={[
      'select__chevron',
      expanded && 'select__chevron--expanded'
    ].filter(Boolean).join(' ')} aria-hidden="true"></span>
  </div>

  {#if expanded}
    <div class="select__options" role="listbox">
      <SelectOption state="Default" label={optionLabel} />
      <SelectOption state="Selected" label={optionLabel} />
    </div>
  {/if}
</div>

<style lang="scss" global>
  @use './select.scss';
</style>
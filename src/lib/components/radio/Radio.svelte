<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLInputAttributes, 'type' | 'checked' | 'disabled'> {
    checked?: boolean;
    disabled?: boolean;

    onchange?: (event: Event) => void;
  }

  let {
    checked = $bindable(false),
    disabled = false,
    onchange,
    ...props
  }: Props = $props();

  function handleChange(event: Event) {
    checked = (event.currentTarget as HTMLInputElement).checked;
    onchange?.(event);
  }
</script>

<label
  class={[
    'radio',
    checked && 'radio--checked',
    disabled && 'radio--disabled'
  ].filter(Boolean).join(' ')}
>
  <input
    type="radio"
    class="radio__input"
    {checked}
    {disabled}
    onchange={handleChange}
    {...props}
  />

  <span class="radio__control" aria-hidden="true">
    <span class="radio__dot"></span>
  </span>
</label>

<style lang="scss" global>
  @use "./radio.scss";
</style>

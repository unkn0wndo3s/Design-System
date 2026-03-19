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
</script>

<label
  class={[
    'toggle',
    checked && 'toggle--checked',
    disabled && 'toggle--disabled'
  ].filter(Boolean).join(' ')}
>
  <input
    type="checkbox"
    class="toggle__input"
    bind:checked
    {disabled}
    {onchange}
    {...props}
  />

  <span class="toggle__control" aria-hidden="true">
    <span class="toggle__thumb"></span>
  </span>
</label>

<style lang="scss" global>
  @use './toggle.scss';
</style>

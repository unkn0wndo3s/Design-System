<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLInputAttributes, 'type' | 'checked' | 'disabled'> {
    checked?: boolean;
    disabled?: boolean;
    children?: Snippet;

    onchange?: (event: Event) => void;
  }

  let {
    checked = $bindable(false),
    disabled = false,
    children,
    onchange,
    ...props
  }: Props = $props();
</script>

<label
  class={[
    'checkbox',
    checked && 'checkbox--checked',
    disabled && 'checkbox--disabled',
    children && 'checkbox--with-label'
  ].filter(Boolean).join(' ')}
>
  <input
    type="checkbox"
    class="checkbox__input"
    bind:checked
    {disabled}
    {onchange}
    {...props}
  />

  <span class="checkbox__control" aria-hidden="true">
    <span class="checkbox__mark"></span>
  </span>

  {#if children}
    <span class="checkbox__label">
      {@render children()}
    </span>
  {/if}
</label>

<style lang="scss" global>
  @use "./checkbox.scss";
</style>
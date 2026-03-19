<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLTextareaAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLTextareaAttributes, 'placeholder' | 'disabled' | 'value' | 'rows'> {
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    rows?: number;
    label?: string;
    children?: Snippet;
  }

  let {
    disabled = false,
    placeholder = 'Type here',
    value = $bindable(''),
    rows = 4,
    label = 'Message',
    children,
    ...props
  }: Props = $props();

  function handleInput(event: Event) {
    const target = event.currentTarget;
    if (!(target instanceof HTMLTextAreaElement)) {
      return;
    }

    value = target.value;
  }
</script>

<label class={[
  'textarea',
  disabled && 'textarea--disabled'
].filter(Boolean).join(' ')}>
  {#if label}
    <span class="textarea__label">{label}</span>
  {/if}

  <textarea
    class="textarea__field"
    value={value}
    oninput={handleInput}
    {placeholder}
    {rows}
    {disabled}
    {...props}
  ></textarea>

  {#if children}
    <span class="textarea__support">
      {@render children()}
    </span>
  {/if}
</label>

<style lang="scss" global>
  @use "/src/lib/components/textarea/textarea.scss";
</style>
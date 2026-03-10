<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    disabled?: boolean;
    size: 'Small' | 'Medium' | 'Large';

    children?: Snippet; 
    
    onclick?: () => void;
  }

  const { disabled, size, onclick, children, ...props }: Props = $props();
</script>

<button
  type="button"
  class={[`button`, `button--${size}`, disabled && 'button--disabled'].join(' ')}
  {...props}
  {disabled}
  {onclick}
>
  {#if children}
    {@render children()}
  {/if}
</button>

<style lang="scss" global>
  @import "./button.scss";
</style>
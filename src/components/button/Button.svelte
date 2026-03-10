<script lang="ts">
  import type { Snippet } from 'svelte'; // Import du type pour les snippets

  interface Props {
    disabled?: boolean;
    size: 'Small' | 'Medium' | 'Large';
    /** Le snippet qui remplace le slot par défaut */
    children?: Snippet; 
    /** The onclick event handler */
    onclick?: () => void;
  }

  // On récupère children ici
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
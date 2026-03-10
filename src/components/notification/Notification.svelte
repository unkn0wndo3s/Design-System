<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    disabled?: boolean;
    type: "error" | "success" | "warning" | "info";

    children?: Snippet; 
    /** The onclick event handler */
    onclick?: () => void;
  }

  const { type, onclick, children, ...props }: Props = $props();
</script>

<div class={[`notification`, `notification--${type}`]}
  {...props}>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss" global>
  @import "./search.scss";
</style>
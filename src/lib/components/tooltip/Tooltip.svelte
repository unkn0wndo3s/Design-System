<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    position?:
      | 'bottom-right'
      | 'bottom-left'
      | 'top-right'
      | 'top-left'
      | 'right'
      | 'left'
      | 'bottom'
      | 'top';
    children?: Snippet; 
  }

  const {
    position = 'bottom-right',
    children,
    ...props
  }: Props = $props();
</script>

<div class={[`tooltip`, `tooltip--${position}`].join(' ')} role="tooltip" {...props}>
    <span class="tooltip__text">
  {#if children}
    {@render children()}
    
  {/if}
  </span>
</div>

<style lang="scss" global>
  @use './tooltip.scss';
</style>

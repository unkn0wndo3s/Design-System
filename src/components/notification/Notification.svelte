<script lang="ts">
  import type { Snippet } from 'svelte';
  // @ts-expect-error - Icon library alias is configured externally
  import Close from '~icons/my-icons/close'; 


  interface Props {
    disabled?: boolean;
    type: "error" | "success" | "warning" | "info";

    children?: Snippet; 
  }

  const { type, children, ...props }: Props = $props();
</script>

<div class={[`notification`, `notification--${type}`]}
  {...props}>
  {#if children}
    {@render children()}
  {/if}
  <Close />
</div>

<style lang="scss" global>
  @import "./notification.scss";
</style>
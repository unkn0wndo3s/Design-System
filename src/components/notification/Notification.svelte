<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from '../icons/icon.svelte';


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
  <Icon type="close" size={24} />
</div>

<style lang="scss" global>
  @import "./notification.scss";
</style>
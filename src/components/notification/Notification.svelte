<script lang="ts">
  import type { Snippet } from 'svelte';
  // @ts-expect-error - Icon library alias is configured externally
  import Close from '~icons/my-icons/close'; 

  let visible = $state(true);

  interface Props {
    disabled?: boolean;
    type: "error" | "success" | "warning" | "info";

    children?: Snippet; 
  }

  const { type, children, ...props }: Props = $props();

  function handleClose() {
    visible = false;
  }
</script>

{#if visible}
  <div class={[`notification`, `notification--${type}`]}
    {...props}>
    {#if children}
      {@render children()}
    {/if}
    <Close onclick={handleClose} />
  </div>
{/if}

<style lang="scss" global>
  @import "./notification.scss";
</style>
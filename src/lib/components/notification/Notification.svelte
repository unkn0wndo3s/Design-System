<script lang="ts">
  import type { Snippet } from 'svelte';
  import CloseIcon from '../icons/CloseIcon.svelte'; 

  let visible = $state(true);

  const fallbackMessageByType: Record<'error' | 'success' | 'warning' | 'info', string> = {
    error: 'Error message',
    success: 'Success message',
    info: 'Info message',
    warning: 'Warning Message',
  };

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
  <div class={[`notification`, `notification--${type}`]} {...props}>
    {#if children}
      {@render children()}
    {:else}
      <span class="notification__message">{fallbackMessageByType[type]}</span>
    {/if}

    <button type="button" class="notification__close" aria-label="Close notification" onclick={handleClose}>
      <CloseIcon />
    </button>
  </div>
{/if}

<style lang="scss" global>
  @import "./notification.scss";
</style>
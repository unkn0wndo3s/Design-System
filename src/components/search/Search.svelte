<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    disabled?: boolean;
    placeholder: string;

    children?: Snippet; 
    /** The onclick event handler */
    onclick?: () => void;
  }

  const { disabled, placeholder, onclick, ...props }: Props = $props();
</script>

<input
  type="text"
  class={[`search`, disabled && 'search--disabled'].join(' ')}
  placeholder={placeholder}
  {...props}
  {disabled}
  {onclick}
/>

<style lang="scss" global>
  @import "./search.scss";
</style>
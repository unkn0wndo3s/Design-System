<script lang="ts">
  // @ts-expect-error - Icon library alias is configured externally
  import SearchIcon from '~icons/my-icons/search';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface Props extends Omit<HTMLInputAttributes, 'placeholder' | 'disabled' | 'type'> {
    disabled?: boolean;
    placeholder?: string;
  }

  let inputValue = $state('');
  let isFocused = $state(false);

  const {
    disabled = false,
    placeholder = 'search',
    ...props
  }: Props = $props();
</script>

<label class={[`search`, disabled && 'search--disabled'].filter(Boolean).join(' ')}>
  {#if !isFocused && !inputValue}
    <span class="search__icon" aria-hidden="true">
      <SearchIcon />
    </span>
    <span class="search__placeholder-text" aria-hidden="true">
      {placeholder}
    </span>
  {/if}

  <input
    type="text"
    class="search__input"
    placeholder=""
    bind:value={inputValue}
    onfocus={() => (isFocused = true)}
    onblur={() => (isFocused = false)}
    {...props}
    {disabled}
  />
</label>

<style lang="scss" global>
  @import "./search.scss";
</style>
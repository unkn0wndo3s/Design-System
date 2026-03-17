<script lang="ts">
  interface Props {
    state?: 'unknown' | 'known';
    percentage?: number;
  }

  const {
    state = 'unknown',
    percentage,
    ...props
  }: Props = $props();
</script>

<div class={[`loadingbar`, !percentage && `loadingbar--${state}`].filter(Boolean).join(' ')} {...props}>
  <div class="loadingbar__background"></div>
  <div
    class="loadingbar__progress"
    style={percentage !== undefined ? `width: ${percentage}%` : undefined}
  ></div>
</div>

<style lang="scss" global>
  @import "./loadingbar.scss";
</style>

<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Badge from '../lib/components/badge/Badge.svelte';

  const { Story } = defineMeta({
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
      selected: {
        control: { type: 'boolean' },
      },
      disabled: {
        control: { type: 'boolean' },
      },
    },
  });
</script>

<Story name="Default">badge</Story>
<Story name="Selected" args={{ selected: true }}>badge</Story>
<Story name="Disabled" args={{ disabled: true }}>badge</Story>
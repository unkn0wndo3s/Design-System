<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PaginationNumber from '../lib/components/paginationnumber/PaginationNumber.svelte';

  const { Story } = defineMeta({
    title: 'Components/PaginationNumber',
    component: PaginationNumber,
    tags: ['autodocs'],
    argTypes: {
      state: {
        control: { type: 'select' },
        options: ['Default', 'Hover', 'Active', 'Selected', 'Disabled'],
      },
      selected: {
        control: { type: 'boolean' },
      },
      disabled: {
        control: { type: 'boolean' },
      },
      label: { control: { type: 'text' } },
    },
  });
</script>

<Story name="Default" args={{ state: 'Default', label: 'x' }} />
<Story name="Hover" args={{ state: 'Hover', label: 'x' }} />
<Story name="Active" args={{ state: 'Active', label: 'x' }} />
<Story name="Selected" args={{ state: 'Selected', label: 'x' }} />
<Story name="Disabled" args={{ state: 'Disabled', label: 'x' }} />
<Story name="Custom Content">12</Story>

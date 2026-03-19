<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SelectOption from '../lib/components/selectoption/SelectOption.svelte';

  const { Story } = defineMeta({
    title: 'Components/SelectOption',
    component: SelectOption,
    tags: ['autodocs'],
    argTypes: {
      state: {
        control: { type: 'select' },
        options: ['Default', 'Hover', 'Selected'],
      },
      label: { control: { type: 'text' } },
    },
  });
</script>

<Story name="Default" args={{ state: 'Default', label: 'Option' }} />
<Story name="Hover" args={{ state: 'Hover', label: 'Option' }} />
<Story name="Selected" args={{ state: 'Selected', label: 'Option' }} />
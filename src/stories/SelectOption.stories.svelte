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
      value: { control: { type: 'text' } },
    },
  });
</script>

<Story name="Default" args={{ state: 'Default', value: 'Option' }}>Option</Story>
<Story name="Hover" args={{ state: 'Hover', value: 'Option' }}>Option</Story>
<Story name="Selected" args={{ state: 'Selected', value: 'Option' }}>Option</Story>
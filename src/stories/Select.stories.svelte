<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select from '../lib/components/select/Select.svelte';
  import SelectOption from '../lib/components/selectoption/SelectOption.svelte';

  const { Story } = defineMeta({
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
      value: { control: { type: 'text' } },
      placeholder: { control: { type: 'text' } },
    },
  });
</script>

<Story name="Default" args={{ placeholder: 'Default option', value: '' }}>
  <SelectOption label="Option" value="Option" />
  <SelectOption label="Second option" value="Second option" />
</Story>

<Story name="With Value" args={{ placeholder: 'Default option', value: 'Option' }}>
  <SelectOption label="Option" value="Option" />
  <SelectOption label="Second option" value="Second option" />
</Story>
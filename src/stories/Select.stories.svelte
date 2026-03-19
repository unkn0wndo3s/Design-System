<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Select from '../lib/components/select/Select.svelte';

  const { Story } = defineMeta({
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
      label: { control: { type: 'text' } },
      optionLabel: { control: { type: 'text' } },
      expanded: { control: { type: 'boolean' } },
    },
  });
</script>

<Story name="Default" args={{ label: 'Default option', expanded: false, optionLabel: 'Option' }} />
<Story name="Expanded" args={{ label: 'Default option', expanded: true, optionLabel: 'Option' }} />
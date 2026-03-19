<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Textarea from '../lib/components/textarea/Textarea.svelte';

  const { Story } = defineMeta({
    title: 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    argTypes: {
      label: { control: { type: 'text' } },
      placeholder: { control: { type: 'text' } },
      rows: { control: { type: 'number' } },
      disabled: { control: { type: 'boolean' } },
      value: { control: { type: 'text' } },
    },
  });
</script>

<Story
  name="Default"
  args={{
    label: 'Message',
    placeholder: 'Type here',
    rows: 4,
    value: '',
  }}
/>

<Story
  name="With Value"
  args={{
    label: 'Message',
    placeholder: 'Type here',
    rows: 4,
    value: 'A prefilled value for preview.',
  }}
/>

<Story
  name="With Helper"
  args={{
    label: 'Message',
    placeholder: 'Type here',
    rows: 4,
    value: '',
  }}
>
  You can include helper text or another component here.
</Story>

<Story
  name="Disabled"
  args={{
    label: 'Message',
    placeholder: 'Type here',
    rows: 4,
    value: 'Disabled textarea',
    disabled: true,
  }}
/>
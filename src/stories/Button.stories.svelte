<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '../lib/components/button/Button.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: { type: 'select' },
        options: ['Small', 'Medium', 'Large'],
      },
      variant: {
        control: { type: 'select' },
        options: ['Primary', 'Secondary'],
      },
      disabled: {
        control: { type: 'boolean' },
      },
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Example" args={{ size: 'Medium', variant: 'Primary' }}>Button</Story>

<Story name="Small" args={{ size: 'Small', variant: 'Primary' }}>Button</Story>

<Story name="Medium" args={{ size: 'Medium', variant: 'Primary' }}>Button</Story>

<Story name="Large" args={{ size: 'Large', variant: 'Primary' }}>Button</Story>

<Story name="Primary" args={{ size: 'Medium', variant: 'Primary' }}>Button</Story>

<Story name="Secondary" args={{ size: 'Medium', variant: 'Secondary' }}>Button</Story>

<Story name="Disabled (Legacy Prop)" args={{ size: 'Medium', variant: 'Primary', disabled: true }}>Button</Story>
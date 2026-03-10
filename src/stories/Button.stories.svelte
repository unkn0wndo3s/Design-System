<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '../components/button/Button.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['Small', 'Medium', 'Large'],
      },
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Example" args={{ size: 'Medium' }} >example button</Story>

<Story name="Small" args={{ size: 'Small'}}>small sized</Story>

<Story name="Medium" args={{ size: 'Medium' }} >medium sized</Story>

<Story name="Large" args={{ size: 'Large' }} >large sized</Story> 

<Story name="Disabled" args={{ size: 'Medium', disabled: true}} >disabled button</Story>
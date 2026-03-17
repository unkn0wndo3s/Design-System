<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Tooltip from '../lib/components/tooltip/Tooltip.svelte';

  const { Story } = defineMeta({
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {
      position: {
        control: { type: 'select' },
        options: ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'right', 'left', 'bottom', 'top'],
      },
      text: { control: { type: 'text' } },
    },
  });
</script>

<Story name="Bottom Right" args={{ position: 'bottom-right' }}>lorem ipsum dolore  ...</Story>
<Story name="Bottom Left" args={{ position: 'bottom-left' }}>lorem ipsum dolore  ...</Story>
<Story name="Top Right" args={{ position: 'top-right' }}>lorem ipsum dolore  ...</Story>
<Story name="Top Left" args={{ position: 'top-left' }}>lorem ipsum dolore  ...</Story>
<Story name="Right" args={{ position: 'right' }}>lorem ipsum dolore  ...</Story>
<Story name="Left" args={{ position: 'left' }}>lorem ipsum dolore  ...</Story>
<Story name="Bottom" args={{ position: 'bottom' }}>lorem ipsum dolore  ...</Story>
<Story name="Top" args={{ position: 'top' }}>lorem ipsum dolore  ...</Story>

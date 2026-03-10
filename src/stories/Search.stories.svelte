<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Search from '../components/search/Search.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/Search',
    component: Search,
    tags: ['autodocs'],
    argTypes: {
      placeholder: { control: 'string' },
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" args={{ placeholder: 'search text' }} />


<Story name="Disabled" args={{ placeholder: 'search text', disabled: true}} />
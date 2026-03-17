<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Search from '../lib/components/search/Search.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/Search',
    component: Search,
    tags: ['autodocs'],
    argTypes: {
      placeholder: { control: { type: 'text' } },
      disabled: { control: 'boolean' },
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" args={{ placeholder: 'search' }} ></Story>

<Story name="Focus" args={{ placeholder: 'search', autofocus: true }} ></Story>

<Story name="Disabled" args={{ placeholder: 'search', disabled: true}} ></Story>
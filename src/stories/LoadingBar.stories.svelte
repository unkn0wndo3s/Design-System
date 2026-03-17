<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LoadingBar from '../lib/components/loadingbar/LoadingBar.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/LoadingBar',
    component: LoadingBar,
    tags: ['autodocs'],
    argTypes: {
      state: {
        control: { type: 'select' },
        options: ['unknown', 'known'],
      },
      percentage: {
        control: { type: 'number', min: 0, max: 100 },
      },
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default (Unknown)" args={{ state: 'unknown' }} />

<Story name="Known" args={{ state: 'known' }} />

<Story name="Percent0" args={{ percentage: 0 }} />

<Story name="Percent25" args={{ percentage: 25 }} />

<Story name="Percent50" args={{ percentage: 50 }} />

<Story name="Percent75" args={{ percentage: 75 }} />

<Story name="Percent100" args={{ percentage: 100 }} />

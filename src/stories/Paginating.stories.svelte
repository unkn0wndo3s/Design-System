<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Paginating from '../lib/components/paginating/Paginating.svelte';
  import PaginationNumber from '../lib/components/paginationnumber/PaginationNumber.svelte';

  const { Story } = defineMeta({
    title: 'Components/Paginating',
    component: Paginating,
    tags: ['autodocs'],
    argTypes: {
      pages: { control: { type: 'object' } },
      selectedPage: { control: { type: 'text' } },
      disabled: { control: { type: 'boolean' } },
      itemStates: { control: { type: 'object' } },
    },
  });
</script>

<Story name="Default" args={{ pages: [1, 2, 3, 4, 5], selectedPage: 2 }} />

<Story
  name="Figma States"
  args={{
    pages: [1, 2, 3, 4, 5],
    selectedPage: 2,
    itemStates: { '3': 'Hover' },
  }}
/>

<Story name="Custom Content">
  <PaginationNumber label="Prev" />
  <PaginationNumber label={1} />
  <PaginationNumber label={2} selected />
  <PaginationNumber label={3} />
  <PaginationNumber label="Next" />
</Story>

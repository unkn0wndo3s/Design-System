<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Paginate from '../lib/components/paginate/Paginate.svelte';
  import PaginationNumber from '../lib/components/paginationnumber/PaginationNumber.svelte';

  const { Story } = defineMeta({
    title: 'Components/Paginate',
    component: Paginate,
    tags: ['autodocs'],
    argTypes: {
      selectedPage: { control: { type: 'number' } },
    },
  });
</script>

<Story name="Simple" args={{ selectedPage: 2 }}>
  <PaginationNumber page={1} url="#page-1" />
  <PaginationNumber page={2} url="#page-2" />
  <PaginationNumber page={3} url="#page-3" />
  <PaginationNumber page={4} url="#page-4" />
  <PaginationNumber page={5} url="#page-5" disabled/>
</Story>

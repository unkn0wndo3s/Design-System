<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Notification from '../lib/components/notification/Notification.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/Notifications',
    component: Notification,
    tags: ['autodocs'],
    argTypes: {
      type: {
        control: { type: 'select' },
        options: ['error', 'success', 'info', 'warning'],
      },
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" args={{ type: 'info' }} >custom message</Story>

<Story name="Information" args={{ type: 'info'}} >custom message</Story>

<Story name="Success" args={{ type: 'success' }} >success message</Story>

<Story name="Warning" args={{ type: 'warning' }} >warning message</Story>

<Story name="Error" args={{ type: 'error' }} >error message</Story>
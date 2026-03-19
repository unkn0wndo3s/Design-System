<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from '../lib/components/checkbox/Checkbox.svelte';

  const { Story } = defineMeta({
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
      checked: {
        control: { type: 'boolean' },
      },
      disabled: {
        control: { type: 'boolean' },
      },
    }
  });
</script>

<Story name="Default" args={{ checked: false, disabled: false }}/>

<Story name="Checked" args={{ checked: true, disabled: false }}/>

<Story name="Disabled" args={{ checked: false, disabled: true }}/>

<Story name="Disabled Checked" args={{ checked: true, disabled: true }}/>

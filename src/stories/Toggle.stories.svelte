<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Toggle from '../lib/components/toggle/Toggle.svelte';

  const { Story } = defineMeta({
    title: 'Components/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    argTypes: {
      checked: {
        control: { type: 'boolean' },
      },
      disabled: {
        control: { type: 'boolean' },
      },
      name: {
        control: { type: 'text' },
      },
    }
  });
</script>

<Story name="Default" args={{ checked: false, disabled: false}}/>

<Story name="Checked" args={{ checked: true, disabled: false}}/>

<Story name="Disabled" args={{ checked: false, disabled: true }}/>

<Story name="Disabled Checked" args={{ checked: true, disabled: true}}/>

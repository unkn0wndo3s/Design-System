<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Radio from '../lib/components/radio/Radio.svelte';

  const { Story } = defineMeta({
    title: 'Components/Radio',
    component: Radio,
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
      value: {
        control: { type: 'text' },
      },
    }
  });
</script>

<Story name="Default" args={{ checked: false, disabled: false, name: 'radio-default', value: 'option-1' }}/>

<Story name="Checked" args={{ checked: true, disabled: false, name: 'radio-checked', value: 'option-1' }}/>

<Story name="Disabled" args={{ checked: false, disabled: true, name: 'radio-disabled', value: 'option-1' }}/>

<Story name="Disabled Checked" args={{ checked: true, disabled: true, name: 'radio-disabled-checked', value: 'option-1' }}/>

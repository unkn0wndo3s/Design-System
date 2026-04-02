<script module lang="ts">
	import { defineMeta, type StoryContext } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import Input from '../lib/components/input/Input.svelte';

	type Args = ComponentProps<typeof Input>;

	const { Story } = defineMeta({
		title: 'Form/Input',
		component: Input,
		render: template,
		tags: ['autodocs'],
		argTypes: {
			children: { control: false },
			onclick: { action: 'click' },
			oninput: { action: 'input' },
			onchange: { action: 'change' },
			onfocus: { action: 'focus' },
			onblur: { action: 'blur' }
		}
	});
</script>

<script lang="ts">
	import SelectOption from '$lib/components/selectoption/SelectOption.svelte';
</script>

{#snippet template(args: Args, _context: StoryContext<Args>)}
	<div style="padding: var(--nds-spacing-lg); max-width: 36rem;">
		<Input {...args}>
			{#if args.type === 'select' && args.children}
				{#snippet children()}
					{@render args.children()}
				{/snippet}
			{/if}
		</Input>
	</div>
{/snippet}

<Story
	name="Text"
	args={{
		type: 'text',
		id: 'text-story',
		label: 'Username',
		placeholder: 'Pick a username',
		hint: 'Visible to other users'
	}}
/>

<Story
	name="Search"
	args={{
		type: 'search',
		id: 'search-story',
		label: 'Search',
		placeholder: 'Search something',
		hint: 'Search field with icon'
	}}
/>

<Story
	name="Textarea"
	args={{
		type: 'textarea',
		id: 'textarea-story',
		label: 'Description',
		placeholder: 'Write something useful for once',
		hint: 'Multiline input',
		rows: 6
	}}
/>

<Story
	name="Checkbox"
	args={{
		type: 'checkbox',
		id: 'checkbox-story',
		label: 'I accept the terms',
		checked: true
	}}
/>

<Story
	name="Toggle"
	args={{
		type: 'toggle',
		id: 'toggle-story',
		label: 'Enable notifications',
		checked: true
	}}
/>

<Story
	name="Button"
	args={{
		type: 'button',
		id: 'button-story',
		buttonLabel: 'Save changes',
		buttonType: 'button'
	}}
/>

<Story
	name="Invalid"
	args={{
		type: 'email',
		id: 'invalid-story',
		label: 'Email',
		placeholder: 'name@example.com',
		invalid: true,
		error: 'This email is invalid'
	}}
/>

<Story
	name="Select"
	args={{
		type: 'select',
		id: 'select-story',
		label: 'Country',
		hint: 'Select rendered with SelectOption children'
	}}
>
		<SelectOption value="">Select a country</SelectOption>
		<SelectOption value="fr">France</SelectOption>
		<SelectOption value="be">Belgium</SelectOption>
		<SelectOption value="ch">Switzerland</SelectOption>
		<SelectOption value="ca">Canada</SelectOption>
</Story>
<script lang="ts">
	import './input.scss';
	import type { Snippet } from 'svelte';

	type InputType =
		| 'text'
		| 'email'
		| 'password'
		| 'number'
		| 'search'
		| 'textarea'
		| 'select'
		| 'checkbox'
		| 'toggle'
		| 'button';

	type InputSize = 'sm' | 'md' | 'lg';
	type InputVariant = 'default' | 'filled' | 'ghost';

	type Props = {
		type?: InputType;
		size?: InputSize;
		variant?: InputVariant;
		id?: string;
		name?: string;
		label?: string;
		hint?: string;
		error?: string;
		placeholder?: string;
		value?: string | number;
		checked?: boolean;
		disabled?: boolean;
		required?: boolean;
		readonly?: boolean;
		invalid?: boolean;
		rows?: number;
		resize?: 'none' | 'vertical' | 'horizontal' | 'both';
		autocomplete?: import('svelte/elements').HTMLInputAttributes['autocomplete'];
		min?: number | string;
		max?: number | string;
		minlength?: number;
		maxlength?: number;
		step?: number | string;
		ariaLabel?: string;
		buttonType?: 'button' | 'submit' | 'reset';
		buttonLabel?: string;
		children?: Snippet;
		class?: string;
		onclick?: (event: MouseEvent) => void;
		oninput?: (event: Event) => void;
		onchange?: (event: Event) => void;
		onfocus?: (event: FocusEvent) => void;
		onblur?: (event: FocusEvent) => void;
	};

	let {
		type = 'text',
		size = 'md',
		variant = 'default',
		id,
		name,
		label = '',
		hint = '',
		error = '',
		placeholder = '',
		value = $bindable<string | number>(''),
		checked = $bindable(false),
		disabled = false,
		required = false,
		readonly = false,
		invalid = false,
		rows = 4,
		resize = 'vertical',
		autocomplete,
		min,
		max,
		minlength,
		maxlength,
		step,
		ariaLabel,
		buttonType = 'button',
		buttonLabel = 'Button',
		children,
		class: className = '',
		onclick,
		oninput,
		onchange,
		onfocus,
		onblur,
		...restProps
	}: Props & Record<string, unknown> = $props();

	const textLikeTypes: InputType[] = ['text', 'email', 'password', 'number', 'search'];

	function isTextLike(currentType: InputType) {
		return textLikeTypes.includes(currentType);
	}

	function isBoolean(currentType: InputType) {
		return currentType === 'checkbox' || currentType === 'toggle';
	}

	function hasTopLabel(currentType: InputType) {
		return isTextLike(currentType) || currentType === 'textarea' || currentType === 'select';
	}

	function describedBy() {
		const ids: string[] = [];

		if (hint && id) ids.push(`${id}-hint`);
		if (invalid && error && id) ids.push(`${id}-error`);

		return ids.length ? ids.join(' ') : undefined;
	}

	function fieldClass(currentType: InputType) {
		return [
			'nds-input',
			`nds-input--${currentType}`,
			`nds-input--${size}`,
			`nds-input--${variant}`,
			disabled ? 'is-disabled' : '',
			invalid ? 'is-invalid' : '',
			className
		]
			.filter(Boolean)
			.join(' ');
	}
</script>

<div class={fieldClass(type)}>
	{#if hasTopLabel(type) && label}
		<label class="nds-input__label" for={id}>
			<span>{label}</span>
			{#if required}
				<span class="nds-input__required" aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	{#if isTextLike(type)}
		<div class="nds-input__control-wrap">
			{#if type === 'search'}
				<span class="nds-input__icon nds-input__icon--leading" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none">
						<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
						<path d="M20 20L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				</span>
			{/if}

			<input
				class="nds-input__control"
				{id}
				{name}
				{disabled}
				{required}
				{readonly}
				{placeholder}
				autocomplete={autocomplete || undefined}
				{min}
				{max}
				{minlength}
				{maxlength}
				{step}
				type={type}
				bind:value
				aria-label={ariaLabel}
				aria-invalid={invalid || undefined}
				aria-describedby={describedBy()}
				onclick={onclick}
				oninput={oninput}
				onchange={onchange}
				onfocus={onfocus}
				onblur={onblur}
				{...restProps}
			/>
		</div>
	{:else if type === 'textarea'}
		<textarea
			class="nds-input__control nds-input__control--textarea"
			{id}
			{name}
			{disabled}
			{required}
			{readonly}
			{placeholder}
			{autocomplete}
			{minlength}
			{maxlength}
			bind:value
			aria-label={ariaLabel}
			aria-invalid={invalid || undefined}
			aria-describedby={describedBy()}
			style={`resize:${resize};`}
			{rows}
			onclick={onclick}
			oninput={oninput}
			onchange={onchange}
			onfocus={onfocus}
			onblur={onblur}
			{...restProps}
		/>
	{:else if type === 'select'}
		<div class="nds-input__control-wrap nds-input__control-wrap--select">
			<select
				class="nds-input__control nds-input__control--select"
				{id}
				{name}
				{disabled}
				{required}
				bind:value
				aria-label={ariaLabel}
				aria-invalid={invalid || undefined}
				aria-describedby={describedBy()}
				onclick={onclick}
				oninput={oninput}
				onchange={onchange}
				onfocus={onfocus}
				onblur={onblur}
				{...restProps}
			>
				{#if children}
					{@render children()}
				{/if}
			</select>

			<span class="nds-input__icon nds-input__icon--trailing" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none">
					<path
						d="M7 10L12 15L17 10"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</span>
		</div>
	{:else if isBoolean(type)}
		<label class={`nds-input__boolean ${type === 'toggle' ? 'nds-input__boolean--toggle' : 'nds-input__boolean--checkbox'}`}>
			<input
				class="nds-input__boolean-native"
				{id}
				{name}
				type="checkbox"
				{disabled}
				{required}
				bind:checked
				value={typeof value === 'string' ? value : String(value)}
				aria-label={ariaLabel ?? label}
				aria-invalid={invalid || undefined}
				aria-describedby={describedBy()}
				onclick={onclick}
				oninput={oninput}
				onchange={onchange}
				onfocus={onfocus}
				onblur={onblur}
				{...restProps}
			/>

			{#if type === 'checkbox'}
				<span class="nds-input__checkbox-box" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none">
						<path
							d="M5 13L9 17L19 7"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			{:else}
				<span class="nds-input__toggle-track" aria-hidden="true">
					<span class="nds-input__toggle-thumb"></span>
				</span>
			{/if}

			{#if label}
				<span class="nds-input__boolean-label">
					{label}
					{#if required}
						<span class="nds-input__required" aria-hidden="true">*</span>
					{/if}
				</span>
			{/if}
		</label>
	{:else if type === 'button'}
		<button
			class="nds-input__button"
			{id}
			{name}
			type={buttonType}
			{disabled}
			aria-label={ariaLabel ?? buttonLabel}
			onclick={onclick}
			onfocus={onfocus}
			onblur={onblur}
			{...restProps}
		>
			{buttonLabel}
		</button>
	{/if}

	{#if invalid && error}
		<p class="nds-input__feedback nds-input__feedback--error" id={id ? `${id}-error` : undefined}>
			{error}
		</p>
	{:else if hint && !isBoolean(type) && type !== 'button'}
		<p class="nds-input__feedback nds-input__feedback--hint" id={id ? `${id}-hint` : undefined}>
			{hint}
		</p>
	{/if}
</div>

<style lang="scss" global>
  @use "./input.scss";
</style>

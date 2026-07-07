import type { InjectionKey, Ref } from 'vue';

export interface SelectOptionEntry {
  value: string;
  label: string;
  disabled: boolean;
}

export interface SelectContext {
  selectedValue: Ref<string | null>;
  select: (value: string) => void;
  registerOption: (option: SelectOptionEntry) => void;
  unregisterOption: (value: string) => void;
}

export const selectKey: InjectionKey<SelectContext> = Symbol('nds-select');

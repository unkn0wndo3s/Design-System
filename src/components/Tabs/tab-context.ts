import type { InjectionKey, Ref } from 'vue';

export interface TabContext {
  activeTab: Ref<string | undefined>;
  setActive: (itemId: string) => void;
  registerItem: (itemId: string) => void;
}

export const tabKey: InjectionKey<TabContext> = Symbol('nds-tab');

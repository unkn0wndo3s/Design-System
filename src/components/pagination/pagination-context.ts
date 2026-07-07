import type { InjectionKey, Ref } from 'vue';

export interface PaginationContext {
  currentPage: Ref<number>;
  setPage: (page: number) => void;
}

export const paginationKey: InjectionKey<PaginationContext> = Symbol('nds-pagination');

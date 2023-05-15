import type { ComputedRef, InjectionKey, UnwrapRef } from 'vue';

import type { FormAction, SchemaFormProps } from '../types';

import { readonly as defineReadonly, inject, provide, reactive } from 'vue';

interface CreateContextOptions {
  readonly?: boolean;
  createProvider?: boolean;
  native?: boolean;
}

type ShallowUnwrap<T> = {
  [P in keyof T]: UnwrapRef<T[P]>;
};

function createContext<T>(
  context: any,
  key: InjectionKey<T> = Symbol(),
  options: CreateContextOptions = {},
) {
  const { readonly = true, createProvider = false, native = false } = options;
  const state = reactive(context);
  const provideData = readonly ? defineReadonly(state) : state;
  !createProvider && provide(key, native ? context : provideData);
  return {
    state,
  };
}

export function useContext<T>(key: InjectionKey<T> = Symbol(), defaultValue?: any): ShallowUnwrap<T> {
  return inject(key, defaultValue);
}

interface SchemaFormContent extends SchemaFormProps {
  action: FormAction;
}

export type FormProviderContextProps = ComputedRef<SchemaFormContent>;

const key: InjectionKey<FormProviderContextProps> = Symbol();

export function createSchemaFormContext(context: FormProviderContextProps) {
  return createContext<FormProviderContextProps>(context, key);
}

export function useSchemaFormContext() {
  return useContext<FormProviderContextProps>(key, true);
}

import type { ComputedRef, InjectionKey } from 'vue';

import { createContext, useContext } from '@zdzz/hooks';
import type { FormAction, FormProps } from '../types';

type SchemaFormContent = {
  action: FormAction;
} & FormProps<any>;

export type FormProviderContextProps = ComputedRef<SchemaFormContent>;

const key: InjectionKey<FormProviderContextProps> = Symbol();

export function createFormContext(context: FormProviderContextProps) {
  return createContext<FormProviderContextProps>(context, key, { native: true });
}

export function useFormContext() {
  return useContext<FormProviderContextProps>(key, true);
}

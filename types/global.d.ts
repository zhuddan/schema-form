import type { FormItemRule as _FormItemRule } from 'element-plus';

declare global {
  type FormRules<T = Recordable> = Partial<Record<keyof T, Arrayable<_FormItemRule>>>;
  type FormItemRule = _FormItemRule;
  const _DEV_: boolean;
}
export {};

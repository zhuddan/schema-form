import type { FormItemRule as _FormItemRule } from 'element-plus';
import type { Ref, PropType as _PropType } from 'vue';

declare global {
  const _DEV_: boolean;

  // common
  interface AnyObject {
    [key: string]: any;
  }

  type Awaitable<T> = Promise<T> | T;
  type Nullable<T> = T | null;
  type Arrayable<T> = T | T[];
  interface Fn<T = any, R = T> {
    (...arg: T[]): R;
  }

  // element-plus
  type FormRules<T = Recordable> = Partial<Record<keyof T, Arrayable<_FormItemRule>>>;
  type FormItemRule = _FormItemRule;

  // vue
  type MaybeRef<T> = Ref<UnwrapRef<T>> | T;
  type EmitType = (event: string, ...args: any[]) => void;
  type PropType<T> = _PropType<T>;
  /**
   * @description 浅层的RecordRef
   */
  type MaybeShallowRecordRef<T extends Recordable> = {
    [P in keyof T]: MaybeRef<T[P]>;
  };
  /**
   * @description 深层的RecordRef
   */
  type MaybeRecordRef<T extends Recordable> = {
    [P in keyof T]: T[P] extends Recordable ? MaybeRecordRef<T[P]> : MaybeRef<T[P]>;
  };

}
export {};

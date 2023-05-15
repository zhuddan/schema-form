import type { FormItemRule as _FormItemRule } from 'element-plus';
import type { Ref, UnwrapRef } from 'vue';

// common
export type AnyObject = Record<string, any>;
export type Awaitable<T> = Promise<T> | T;
export type Nullable<T> = T | null;
export type Arrayable<T> = T | T[];
export interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

// element-plus
export type FormRules<T = AnyObject> = Partial<
  Record<keyof T, Arrayable<_FormItemRule>>
>;
export type FormItemRule = _FormItemRule;

// vue
export type MaybeRef<T> = Ref<UnwrapRef<T>> | T;
export type EmitType = (event: string, ...args: any[]) => void;
// export type PropType<T> = _PropType<T>;
/**
 * @description 浅层的RecordRef
 */
export type MaybeShallowRecordRef<T extends AnyObject> = {
  [P in keyof T]: MaybeRef<T[P]>;
};
/**
 * @description 深层的RecordRef
 */
export type MaybeRecordRef<T extends AnyObject> = {
  [P in keyof T]: T[P] extends AnyObject
    ? MaybeRecordRef<T[P]>
    : MaybeRef<T[P]>;
};

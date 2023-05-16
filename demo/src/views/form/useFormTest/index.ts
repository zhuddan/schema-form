import type { CSSProperties, Ref, UnwrapRef } from 'vue';
import type { InputEmits, InputProps, SwitchEmits, SwitchProps } from 'element-plus';
export interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
/************************************************************/
export declare type AnyObject<T = any> = Record<string, T>;
export declare type ComponentType = 'Input' | 'Switch';
export declare type RecordFn = Record<string, Fn>;
export declare type CreateEmitType<T extends RecordFn> = {
  [K in keyof T as `on${Capitalize<string & K>}`]?: T[K] | ((...args: Parameters<T[K]>) => void);
};
export declare interface CommonProps {
  disabled: boolean;
  style: CSSProperties;
}

export declare interface FormAction<T extends AnyObject = AnyObject> {
  // 设置表单属性
  setProps: (props: Partial<FormProps<T>>) => void;
  // 对整个表单作验证
  validate: (callback?: (isValid: boolean) => void) => Promise<void>;
  // 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
  resetFields: () => void;
  // 清理指定字段的表单验证信息
  clearValidate: (props?: string | string[]) => void;
  // 对部分表单字段进行校验的方法
  validateField: (props: string | string[], callback: (err: string) => void) => void;
  // 滚动到指定表单字段
  scrollToField: (prop: string) => void;
  // 提交
  submit: () => Promise<void>;
}
export declare type CreateComponentProps<CP extends AnyObject, EV extends RecordFn > = Partial<CP & CreateEmitType<EV> & CommonProps>;

export declare interface AssembleComponent<
  CompName extends ComponentType,
  CompProps extends AnyObject,
  CompEvent extends RecordFn,
  FormModel extends AnyObject = AnyObject,
> {
  component: CompName;
  componentProps?: CreateComponentProps<CompProps, CompEvent>
  | ((formModel: FormModel, formAction: FormAction) => CreateComponentProps<CompProps, CompEvent>)
  ;
}
export declare type BaseFormSchema <T = any> = {
  field: T extends AnyObject ? (keyof T | 'divider') : string ;
} & { label?: string };

export declare type FormSchemaWithComponentProps<C, T extends AnyObject = AnyObject > = C & BaseFormSchema<T>;

export declare type Input<T extends AnyObject> = AssembleComponent<'Input', InputProps, InputEmits, T>;
export declare type FormSchemaInput<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Input<T>, T>;

export declare type Switch<T extends AnyObject> = AssembleComponent<'Switch', SwitchProps, SwitchEmits, T>;
export declare type FormSchemaSwitch<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Switch<T>, T>;

export declare type FormSchema<T extends AnyObject = AnyObject> = FormSchemaInput<T> | FormSchemaSwitch<T>;
/************************************************************/
export declare interface _FormItemRule {
  required?: boolean;
}
export declare type Arrayable<T> = T | T[];
export declare type FormRules<T = AnyObject> = Partial<Record<keyof T, Arrayable<_FormItemRule>>>;
// type MaybeRef<T> = T | Ref<T> ;
// type MaybeRef<T> = Ref<UnwrapRef<T>> | T;
type MaybeRef<T> = Ref<UnwrapRef<T>> | T ;

export declare interface FormProps<T extends AnyObject> {
  model: T;
  rules?: MaybeRef<FormRules<UnwrapRef<T>>>;
  schema?: MaybeRef<FormSchema<UnwrapRef<T>>[]>;
}

export declare interface User {
  name: string;
  age: number;
}

export function useForm<T extends AnyObject>(option: FormProps<T>): FormProps<T>;
export function useForm<T extends Ref<AnyObject>>(option: FormProps<T>): FormProps<Ref<UnwrapRef<T>>>;
export function useForm<T extends MaybeRef<AnyObject>>(option: FormProps<T>): FormProps<T> {
  return option;
}

// const c = ref({
//   name: '123',
// });

// useForm({
//   model: c,
//   schema: [
//     {
//       component: 'Input',
//       field: 'divider',
//     },
//   ],
// });
// const user: User = {
//   name: 'zd',
//   age: 1,
// };
// export const userRef = ref<User>(user);
// const rules: FormRules<User> = { age: [] };
// const rulesRefs = ref<FormRules<User>>(rules);
// const schema: FormSchema<User>[] = [
//   {
//     component: 'Switch',
//     componentProps: {
//     },
//     field: 'age',
//   },
// ];
// const schemaRef = ref<FormSchema<User>[]>(schema);
// const schemaComptedRef = computed(() => schemaRef.value);

// export const useForm3 = useForm({
//   model: userRef,
//   rules: rulesRefs,
//   schema: schemaComptedRef,
// });
// export {};


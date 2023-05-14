import { computed, ref } from 'vue';
import type { CSSProperties, Ref, UnwrapRef } from 'vue';
import type { InputEmits, InputProps, SwitchEmits, SwitchProps } from 'element-plus';

/************************************************************/
type ComponentType = 'Input' | 'Switch';
type RecordFn = Record<string, Fn>;
type CreateEmitType<T extends RecordFn> = {
  [K in keyof T as `on${Capitalize<string & K>}`]?: T[K] | ((...args: Parameters<T[K]>) => void);
};
interface CommonProps {
  disabled: boolean;
  style: CSSProperties;
}

interface FormAction<T extends Recordable = Recordable> {
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
type CreateComponentProps<CP extends Recordable, EV extends RecordFn > = Partial<CP & CreateEmitType<EV> & CommonProps>;
interface AssembleComponent<
  CompName extends ComponentType,
  CompProps extends Recordable,
  CompEvent extends RecordFn,
  FormModel extends Recordable = Recordable,
> {
  component: CompName;
  componentProps?: CreateComponentProps<CompProps, CompEvent>
  | ((formModel: FormModel, formAction: FormAction) => CreateComponentProps<CompProps, CompEvent>)
  ;
}
type BaseFormSchema <T = any> = {
  field: T extends Recordable ? (keyof T | 'divider') : string ;
} & { label?: string };

type FormSchemaWithComponentProps<C, T extends Recordable = Recordable > = C & BaseFormSchema<T>;

type Input<T extends Recordable> = AssembleComponent<'Input', InputProps, InputEmits, T>;
type FormSchemaInput<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Input<T>, T>;

type Switch<T extends Recordable> = AssembleComponent<'Switch', SwitchProps, SwitchEmits, T>;
type FormSchemaSwitch<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Switch<T>, T>;

type FormSchema<T extends Recordable = Recordable> = FormSchemaInput<T> | FormSchemaSwitch<T>;
/************************************************************/
type Recordable<T = any> = Record<string, T>;
interface _FormItemRule {
  required?: boolean;
}
type Arrayable<T> = T | T[];
type FormRules<T = Recordable> = Partial<Record<keyof T, Arrayable<_FormItemRule>>>;
// type MaybeRef<T> = T | Ref<T> ;
// type MaybeRef<T> = Ref<UnwrapRef<T>> | T;
type MaybeRef<T> = Ref<UnwrapRef<T>> | T ;

interface FormProps<T extends Recordable> {
  model: T;
  rules: MaybeRef<FormRules<UnwrapRef<T>>>;
  schema?: MaybeRef<FormSchema<UnwrapRef<T>>[]>;
}

interface User {
  name: string;
  age: number;
}

function useForm<T extends Recordable>(option: FormProps<T>): FormProps<T>;
function useForm<T extends Ref<Recordable>>(option: FormProps<T>): FormProps<Ref<UnwrapRef<T>>>;
function useForm<T extends MaybeRef<Recordable>>(option: FormProps<T>): FormProps<T> {
  return option;
}

const user: User = {
  name: 'zd',
  age: 1,
};
export const userRef = ref<User>(user);
const rules: FormRules<User> = { age: [] };
const rulesRefs = ref<FormRules<User>>(rules);
const schema: FormSchema<User>[] = [
  {
    component: 'Switch',
    componentProps: {
    },
    field: 'age',
  },
];
const schemaRef = ref<FormSchema<User>[]>(schema);
const schemaComptedRef = computed(() => schemaRef.value);

export const useForm3 = useForm({
  model: userRef,
  rules: rulesRefs,
  schema: schemaComptedRef,
});
export {};


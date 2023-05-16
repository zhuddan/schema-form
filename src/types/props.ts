import type { FormActionButton } from './action';
import type { AnyObject, Awaitable, FormRules, MaybeRef } from './global';
import type { ColEx, RolEx } from './layout';
import type { FormSchema } from './schema';
import type { FormProps as ElFormProps } from 'element-plus';
import type { UnwrapRef } from 'vue';

type MaybeShallowRecordRef<T extends AnyObject> = {
  [P in keyof T]: MaybeRef<T[P]>;
};

type _ElFormProps = MaybeShallowRecordRef<Omit<ElFormProps, 'model' | 'rules' >>;
export interface _FormProps extends _ElFormProps {
  //
  colProps?: Partial<ColEx>;

  rolProps?: Partial<RolEx>;

  // 是否显示操作栏
  showActionBar: boolean;
  // 操作栏 col props
  actionBarColProps?: Partial<ColEx>;
  // 是否显示提交按钮
  showSubmitButton: boolean;
  // 是否显示重置按钮
  showResetButton: boolean;
  // 提交按钮属性
  submitButtonOptions: Partial<FormActionButton>;
  // 重置按钮属性
  resetButtonOptions: Partial<FormActionButton>;
  // 提交函数
  submitHandler: () => Awaitable<void>;
}

export interface SimpleObjectFormProps<T extends AnyObject = AnyObject> extends Partial<_FormProps> {
  // 表单数据对象
  model?: T;
  // 表单验证规则
  rules?: FormRules<T>;
  // 字段 schemas
  schemas?: FormSchema<T>;
}

export interface BaseFormProps<T extends AnyObject = AnyObject> extends Partial<_FormProps> {
  // 表单数据对象
  model?: T;
  // 表单验证规则
  rules?: FormRules<UnwrapRef<T>>;
  // 字段 schemas
  schemas?: FormSchema<UnwrapRef<T>>[];
}

// export type SchemaFormProps<T extends MaybeRef<AnyObject> = MaybeRef<AnyObject>> = Partial<MaybeShallowRecordRef<BaseFormProps<T>>>;

export interface SchemaFormProps<T extends AnyObject = AnyObject> extends Partial<_FormProps> {
  // 表单数据对象
  model?: T;
  // 表单验证规则
  rules?: MaybeRef<FormRules<UnwrapRef<T>>>;
  // 字段 schemas
  schemas?: MaybeRef<FormSchema<UnwrapRef<T>>[]>;
}
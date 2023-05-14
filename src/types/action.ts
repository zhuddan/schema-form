import type { FormProps } from './props';
import type { ButtonEmits, ButtonProps } from 'element-plus';
import type { CreateEmitType } from './util';
import type { ColEx } from './layout';
import type { UnwrapRef } from 'vue';
export interface FormAction<T extends Recordable = Recordable> {
  // 设置表单属性
  setProps: (props: Partial<FormProps<T>>) => void;
  // 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
  resetFields: () => void;
  // 对整个表单作验证
  validate: (callback?: (isValid: boolean) => void) => Promise<void>;
  // 清理指定字段的表单验证信息
  clearValidate: (props?: string | string[]) => void;
  // 对部分表单字段进行校验的方法
  validateField: (props: string | string[], callback: (err: string) => void) => void;
  // 滚动到指定表单字段
  scrollToField: (prop: keyof UnwrapRef<T>) => void;
  // 提交
  submit: () => Promise<void>;
}

export type FormActionButton = {
  colProps?: Partial<ColEx>;
  label: string;
  actionType?: string;
  onClick: (e: Partial<FormActionButton>) =>(void | any);
} & Partial<ButtonProps & CreateEmitType<ButtonEmits>>;

import type { CheckboxGroupEmits, CheckboxGroupProps, CheckboxProps } from 'element-plus';
import type { AssembleComponent, WithOption } from '../../util';
export type CheckboxGroupComponentType = 'Checkbox' | 'CheckboxButton';

export type CheckboxGroupOption = WithOption<CheckboxProps>;

export type CheckboxGroup<T extends AnyObject> = AssembleComponent<'CheckboxGroup', CheckboxGroupProps & {
  options?: CheckboxGroupOption[];
}, CheckboxGroupEmits, T>;


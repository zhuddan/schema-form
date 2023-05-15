import type { CheckboxGroupEmits, CheckboxGroupProps, CheckboxProps } from 'element-plus';
import type { AssembleComponent, WithOption } from '../../util';
import type { AnyObject } from 'src/types/global';
export type CheckboxGroupComponentType = 'Checkbox' | 'CheckboxButton';

export type CheckboxGroupOption = WithOption<CheckboxProps>;

export type CheckboxGroup<T extends AnyObject> = AssembleComponent<'CheckboxGroup', CheckboxGroupProps & {
  options?: CheckboxGroupOption[];
}, CheckboxGroupEmits, T>;


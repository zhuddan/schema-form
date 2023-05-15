import type { AssembleComponent, WithOption } from '../../util';
import type { RadioEmits, RadioGroupProps, RadioProps } from 'element-plus';

export type RadioComponentType = 'Radio' | 'RadioButton';

export type RadioGroupOption = WithOption<RadioProps>;

export interface _RadioGroupProps extends RadioGroupProps {
  componentType: RadioComponentType;
  options: WithOption<RadioProps>[];
}

export type RadioGroup<T extends AnyObject> = AssembleComponent<'RadioGroup', _RadioGroupProps, RadioEmits, T>;

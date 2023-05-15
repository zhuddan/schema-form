import type { SwitchEmits, SwitchProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type Switch<T extends AnyObject> = AssembleComponent<'Switch', SwitchProps, SwitchEmits, T>;

import type { SwitchEmits, SwitchProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type Switch<T extends Recordable> = AssembleComponent<'Switch', SwitchProps, SwitchEmits, T>;

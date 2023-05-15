import type { SwitchEmits, SwitchProps } from 'element-plus';
import type { AssembleComponent } from '../../util';
import type { AnyObject } from 'src/types/global';

export type Switch<T extends AnyObject> = AssembleComponent<'Switch', SwitchProps, SwitchEmits, T>;

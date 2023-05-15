import type { InputNumberEmits, InputNumberProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type InputNumber<T extends AnyObject> = AssembleComponent<'InputNumber', InputNumberProps, InputNumberEmits, T>;

import type { InputNumberEmits, InputNumberProps } from 'element-plus';
import type { AssembleComponent } from '../../util';
import type { AnyObject } from 'src/types/global';

export type InputNumber<T extends AnyObject> = AssembleComponent<'InputNumber', InputNumberProps, InputNumberEmits, T>;

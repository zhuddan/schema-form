import type { InputEmits, InputProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type Input<T extends AnyObject> = AssembleComponent<'Input', InputProps & {
  maxlength: number;
}, InputEmits, T>;

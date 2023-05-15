import type { InputEmits, InputProps } from 'element-plus';
import type { AssembleComponent } from '../../util';
import type { AnyObject } from 'src/types/global';

export type Input<T extends AnyObject> = AssembleComponent<'Input', InputProps & {
  maxlength: number;
}, InputEmits, T>;

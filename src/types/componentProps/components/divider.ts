import type { DividerProps } from 'element-plus';
import type { AssembleComponent } from '../../util';
import type { AnyObject } from 'src/types/global';

export type Divider<T extends AnyObject> = AssembleComponent<'Divider', DividerProps, {}, T>;

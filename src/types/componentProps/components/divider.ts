import type { DividerProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type Divider<T extends Recordable> = AssembleComponent<'Divider', DividerProps, {}, T>;

import type { RateEmits, RateProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type Rate<T extends Recordable> = AssembleComponent<'Rate', RateProps, RateEmits, T>;

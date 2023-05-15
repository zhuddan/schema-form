import type { RateEmits, RateProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type Rate<T extends AnyObject> = AssembleComponent<'Rate', RateProps, RateEmits, T>;

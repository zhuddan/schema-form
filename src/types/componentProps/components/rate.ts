import type { RateEmits, RateProps } from 'element-plus';
import type { AssembleComponent } from '../../util';
import type { AnyObject } from 'src/types/global';

export type Rate<T extends AnyObject> = AssembleComponent<'Rate', RateProps, RateEmits, T>;

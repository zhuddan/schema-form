import type { AssembleComponent } from '../../util';
import type { TimeSelectProps } from 'element-plus/es/components/time-select/src/time-select';
import type { AnyObject, Fn } from 'src/types/global';

export type TimeSelect<T extends AnyObject> = AssembleComponent<'TimeSelect', TimeSelectProps, {
  change: Fn;
  blur: Fn;
  focus: Fn;
}, T>;
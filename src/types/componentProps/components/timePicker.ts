import type { AssembleComponent } from '../../util';
import type { TimePickerDefaultProps } from 'element-plus';
export interface TimePickerProps extends TimePickerDefaultProps {
  isRange: boolean;
}

export type TimePicker<T extends AnyObject> = AssembleComponent<'TimePicker', TimePickerProps, {
  change(v: boolean): void;
  blur(v: boolean): void;
  focus(v: boolean): void;
  panelChange(v: boolean): void;
  visibleChange(v: boolean): void;
}, T>;
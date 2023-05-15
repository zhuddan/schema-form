import type { AssembleComponent } from '../../util';
import type { TimePickerDefaultProps } from 'element-plus';
import type { DatePickerProps as DatePickerProps2 } from 'element-plus/es/components/date-picker/src/props/date-picker';
import type { AnyObject } from 'src/types/global';

export type DatePickerProps = DatePickerProps2 & TimePickerDefaultProps;
export type DatePicker<T extends AnyObject> = AssembleComponent<'DatePicker', DatePickerProps, {
  change(v: boolean): void;
  blur(v: boolean): void;
  focus(v: boolean): void;
  panelChange(v: boolean): void;
  visibleChange(v: boolean): void;
}, T>;
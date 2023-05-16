import type {
  Cascader,
  CheckboxGroup,
  ColorPicker,
  DatePicker,
  Divider,
  Input,
  InputNumber,
  RadioGroup,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  TimeSelect, Upload,
} from './componentProps';
import type { VNode } from 'vue';
import type { ColEx } from './layout';
import type { FormItemProps as __FormItemProps } from 'element-plus';
import type { AnyObject, Arrayable, FormItemRule } from './global';

interface _FormItemProps extends Omit<Partial<__FormItemProps>, 'label'> {
  // 标签上显示的自定义内容
  label?: string | VNode;
  // 子组件
  render?: VNode;
  // 自定义
  slot?: string;
  //
  colProps?: Partial<ColEx>;
  //
  rules?: Arrayable<FormItemRule>;
}

type BaseFormSchema <T = any> = {
  field: T extends AnyObject ? (keyof T | 'divider') : string ;
} & _FormItemProps;

export type FormSchemaWithComponentProps<C, T extends AnyObject = AnyObject > = C & BaseFormSchema<T>;

export type FormSchemaCascader<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Cascader<T>, T>;
export type FormSchemaCheckboxGroup<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<CheckboxGroup<T>, T>;
export type FormSchemaColorPicker<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<ColorPicker<T>, T>;
export type FormSchemaDatePicker<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<DatePicker<T>, T>;
export type FormSchemaDivider<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Divider<T>, T>;
export type FormSchemaInput<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Input<T>, T>;
export type FormSchemaInputNumber<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<InputNumber<T>, T>;
export type FormSchemaRadioGroup<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<RadioGroup<T>, T>;
export type FormSchemaRate<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Rate<T>, T>;
export type FormSchemaSelect<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Select<T>, T>;
export type FormSchemaSlider<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Slider<T>, T>;
export type FormSchemaSwitch<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Switch<T>, T>;
export type FormSchemaTimePicker<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<TimePicker<T>, T>;
export type FormSchemaTimeSelect<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<TimeSelect<T>, T>;
export type FormSchemaUpload<T extends AnyObject = AnyObject > = FormSchemaWithComponentProps<Upload<T>, T>;

export type ElFormSchema<T extends AnyObject = AnyObject > = FormSchemaCascader<T>
| FormSchemaCheckboxGroup<T>
| FormSchemaColorPicker<T>
| FormSchemaDatePicker<T>
| FormSchemaDivider<T>
| FormSchemaInput<T>
| FormSchemaInputNumber<T>
| FormSchemaRadioGroup<T>
| FormSchemaRate<T>
| FormSchemaSelect<T>
| FormSchemaSlider<T>
| FormSchemaSwitch<T>
| FormSchemaTimePicker<T>
| FormSchemaTimeSelect<T>
| FormSchemaUpload<T>
;
export type FormSchema<T extends AnyObject = AnyObject > = ElFormSchema<T>;


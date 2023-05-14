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
  field: T extends Recordable ? (keyof T | 'divider') : string ;
} & _FormItemProps;

type FormSchemaWithComponentProps<C, T extends Recordable = Recordable > = C & BaseFormSchema<T>;

export type FormSchemaCascader<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Cascader<T>, T>;
export type FormSchemaCheckboxGroup<T extends Recordable = Recordable > = FormSchemaWithComponentProps<CheckboxGroup<T>, T>;
export type FormSchemaColorPicker<T extends Recordable = Recordable > = FormSchemaWithComponentProps<ColorPicker<T>, T>;
export type FormSchemaDatePicker<T extends Recordable = Recordable > = FormSchemaWithComponentProps<DatePicker<T>, T>;
export type FormSchemaDivider<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Divider<T>, T>;
export type FormSchemaInput<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Input<T>, T>;
export type FormSchemaInputNumber<T extends Recordable = Recordable > = FormSchemaWithComponentProps<InputNumber<T>, T>;
export type FormSchemaRadioGroup<T extends Recordable = Recordable > = FormSchemaWithComponentProps<RadioGroup<T>, T>;
export type FormSchemaRate<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Rate<T>, T>;
export type FormSchemaSelect<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Select<T>, T>;
export type FormSchemaSlider<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Slider<T>, T>;
export type FormSchemaSwitch<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Switch<T>, T>;
export type FormSchemaTimePicker<T extends Recordable = Recordable > = FormSchemaWithComponentProps<TimePicker<T>, T>;
export type FormSchemaTimeSelect<T extends Recordable = Recordable > = FormSchemaWithComponentProps<TimeSelect<T>, T>;
export type FormSchemaUpload<T extends Recordable = Recordable > = FormSchemaWithComponentProps<Upload<T>, T>;

export type FormSchema<T extends Recordable = Recordable > = FormSchemaCascader<T>
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
// 自定义
// | FormSchemaStationSelector<T>
;


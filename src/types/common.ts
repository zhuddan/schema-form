import type { CSSProperties } from 'vue';

export type StyleType = Arrayable<CSSProperties | string>;
export interface CommonOptions {
  value: any;
  label: string | number;
  disabled?: boolean;
}

export type ComponentType = 'Cascader'
| 'CheckboxGroup'
| 'ColorPicker'
| 'DatePicker'
| 'Divider'
| 'Input'
| 'InputNumber'
| 'RadioGroup'
| 'Select'
| 'Slider'
| 'Switch'
| 'TimePicker'
| 'TimeSelect'
| 'Upload'
| 'Rate'
  ;
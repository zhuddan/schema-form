import type { ColorPickerEmits, ColorPickerProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type ColorPicker<T extends Recordable> = AssembleComponent<'ColorPicker', ColorPickerProps, ColorPickerEmits, T>;

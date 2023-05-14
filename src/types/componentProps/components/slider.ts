import type { SliderEmits, SliderProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type Slider<T extends Recordable> = AssembleComponent<'Slider', SliderProps, SliderEmits, T>;
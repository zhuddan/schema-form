import type { SliderEmits, SliderProps } from 'element-plus';
import type { AssembleComponent } from '../../util';
import type { AnyObject } from 'src/types/global';

export type Slider<T extends AnyObject> = AssembleComponent<'Slider', SliderProps, SliderEmits, T>;

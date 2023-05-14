import type { CascaderEmits, cascaderProps } from 'element-plus';
import type { ExtractPropTypes } from 'vue';

import type { AssembleComponent } from '../../util';

export type CascaderProps = ExtractPropTypes<typeof cascaderProps>;
export type Cascader<T extends Recordable> = AssembleComponent<'Cascader', CascaderProps, CascaderEmits, T>;


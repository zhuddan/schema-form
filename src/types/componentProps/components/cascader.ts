import type { CascaderEmits, cascaderProps } from 'element-plus';
import type { ExtractPropTypes } from 'vue';

import type { AssembleComponent } from '../../util';
import type { AnyObject } from 'src/types/global';

export type CascaderProps = ExtractPropTypes<typeof cascaderProps>;
export type Cascader<T extends AnyObject> = AssembleComponent<'Cascader', CascaderProps, CascaderEmits, T>;


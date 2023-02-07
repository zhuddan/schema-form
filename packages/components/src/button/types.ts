import type { ExtractPropTypes, PropType } from 'vue';

export const buttonProps = {
  type: {
    type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
  },
  size: {
    type: String as PropType<'large' | 'normal' | 'small' | 'mini'>,
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
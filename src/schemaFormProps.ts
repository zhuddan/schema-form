import type { BaseFormProps } from './types';
import { ElIcon } from 'element-plus';
import { Check, RefreshLeft } from '@element-plus/icons-vue';

type BP = Required<BaseFormProps>;
export const formProps = {
  /** ***************************************************************** */
  /** ***************************************************************** */
  /** ***************************************************************** */
  /** ***************************************************************** */
  // 基础
  colProps: {
    type: Object as PropType<BP['colProps']>,
  },

  rolProps: {
    type: Object as PropType<BP['rolProps']>,
    default: () => ({
      gutter: 10,
    }),
  },
  // 是否显示操作栏
  showActionBar: {
    type: Boolean,
    default: true,
  },

  // 操作栏 col props
  actionBarColProps: {
    type: Object as PropType<BP['actionBarColProps']>,
  },
  // 是否显示提交按钮
  showSubmitButton: {
    type: Boolean,
    default: true,
  },
  // 是否显示重置按钮
  showResetButton: {
    type: Boolean,
    default: true,
  },
  // 提交按钮属性
  submitButtonOptions: {
    type: Object as PropType<BP['submitButtonOptions']>,
    default: () => ({
      type: 'primary',
      actionType: 'submit',
      label: '提交',
      icon: h(ElIcon, () => h(Check)),
    }),
  },
  // 重置按钮属性
  resetButtonOptions: {
    type: Object as PropType<BP['resetButtonOptions']>,
    default: () => ({
      actionType: 'reset',
      label: '重置',
      icon: h(ElIcon, () => h(RefreshLeft)),
    }),
  },
  /** ***************************************************************** */
  /** ***************************************************************** */
  /** ***************************************************************** */
  /** ***************************************************************** */
  // model
  model: {
    type: Object,
    default: () => ({}),
  },
  schemas: {
    type: Array as PropType<BP['schemas']>,
    default: () => [],
  },
  rules: {
    type: Object as PropType<BP['rules']>,
    default: () => ({}),
  },

  // element 原生
  scrollToError: {
    type: Boolean,
    default: true,
  },

  hideRequiredAsterisk: {
    type: Boolean,
    default: false,
  },

  showMessage: {
    type: Boolean,
    default: true,
  },

  inlineMessage: {
    type: Boolean,
    default: false,
  },

  statusIcon: {
    type: Boolean,
    default: false,
  },

  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
};

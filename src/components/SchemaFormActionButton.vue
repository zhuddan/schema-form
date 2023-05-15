<script lang="ts" setup>
import { ElButton, ElCol, ElFormItem } from 'element-plus';
import { useSchemaFormContext } from '../hooks/useFormContent';
import type { FormActionButton } from '../types';
import { computed, unref } from 'vue';

const formContext = useSchemaFormContext();

const colBindValue = computed(() => formContext.value?.actionBarColProps ?? formContext.value?.colProps);
// function getBtnBindValue(btn: MaybeShallowRecordRef<FormActionButton>) {
//   const bindValue: Partial<FormActionButton> = {} ;
//   for (const key in btn) {
//     if (Object.prototype.hasOwnProperty.call(btn, key)) {
//       const element = btn[key];
//       bindValue[key] = unref(element);
//     }
//   }
//   return bindValue;
// }
const buttons = computed(() => {
  if (!formContext.value?.showActionBar || (!formContext.value?.showResetButton && !formContext.value?.showSubmitButton))
    return [];

  return [
    unref(formContext.value?.resetButtonOptions),
    unref(formContext.value?.submitButtonOptions),
  ];
});

async function handleClick(e?: Partial<FormActionButton>) {
  const onClickHandle = unref(e?.onClick);
  if (onClickHandle) {
    onClickHandle({
      ...e,
      onClick: undefined,
    });
    return;
  }
  if (e?.actionType == 'submit')
    formContext.value?.action.submit();
  if (e?.actionType == 'reset')
    formContext.value?.action.resetFields();
}
</script>

<template>
  <component
    :is="formContext?.inline ? 'div' : ElCol"
    v-bind="formContext?.inline ? {} : colBindValue"
    :class="{ 'display-inline-block': formContext?.inline }"
  >
    <ElFormItem label="&nbsp;">
      <ElButton
        v-for="(btn, index) in buttons"
        :key="index"
        v-bind="{ ...btn, onClick: undefined }"
        @click="handleClick(btn)"
      >
        {{ btn?.label }}
      </ElButton>
      <slot name="action"></slot>
    </ElFormItem>
  </component>
</template>

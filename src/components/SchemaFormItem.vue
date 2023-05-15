<script lang="ts" setup>
import { useVModel } from '@vueuse/core';
import { ElCol, ElDivider, ElFormItem } from 'element-plus';

import { isFunction } from '../utils';

import { componentMap } from '../componentMap';
import type { FormSchema } from '../types';
import { useSchemaFormContext } from '../hooks/useFormContent';
import { computed, h, toRaw, toRefs, unref, useAttrs, useSlots } from 'vue';

const props = defineProps<{
  schema: FormSchema<any>;
  formModel: Object;
}>();

const emits = defineEmits(['update:formModel']);

const formContext = useSchemaFormContext();

const slots = useSlots();
const model = useVModel(props, 'formModel', emits);
const attrs = useAttrs();
const getValues = computed(() => {
  const { formModel, schema } = toRefs(props);
  return {
    schema,
    model: formModel,
    field: unref(schema).field,
  };
});

const slotKey = computed(() => unref(props.schema?.slot));

const fieldKey = computed(() => unref(props.schema.field));
// 刷新
const slotComp = computed(() => {
  const key = unref(slotKey);
  if (key && (slots[key] as Function))
    return () => (slots[key] as any)(getValues.value);
  else
    return null;
});
const isDivider = computed(() => unref(props.schema.component) == 'Divider');

const getBindValue = computed(() => {
  const value: AnyObject = {
    ...attrs,
    ...props.schema,
    // label: label.value,
    rules: props.schema.rules,
    // model,
    prop: props.schema.field,

    label: undefined,
  };
  if (!props.schema.label)
    value.label = props.schema.field;

  return value;
});

function renderComponent() {
  if (props.schema.render)
    return props.schema.render;

  if (slotComp.value && slotComp.value != null)
    return slotComp.value;

  if (props.schema.component == 'Divider') {
    return () => h(
      ElDivider,
      {
        ... {
          ...props.schema.componentProps,
        },
      },
      () => unref(props.schema.label),
    );
  }
  return componentMap.get(unref(props.schema.component));
}

const compAttr = computed(() => {
  const componentProps = props.schema.componentProps || {};
  if (isFunction(componentProps))
    return componentProps(toRaw(unref(model)), formContext as any);
  return {
    ...(props.schema.componentProps || {}),
  };
});
function LabelRender() {
  return h(() => props.schema.label);
}

const colBindValue = computed(() => {
  if (props.schema.colProps)
    return props.schema.colProps;
  if (formContext.value?.colProps)
    return formContext.value?.colProps;
  return undefined;
});
const style = computed(() => formContext.value?.inline ? undefined : { width: '100%' });
</script>

<template>
  <component
    :is="formContext?.inline ? 'div' : ElCol"
    v-bind="formContext?.inline ? {} : colBindValue"
    :class="{ 'display-inline-block': formContext?.inline }"
  >
    <ElFormItem
      v-bind="{
        ...getBindValue,
        componentProps: undefined,
        component: undefined,
      }"
    >
      <template v-if="props.schema.label && !isDivider" #label>
        <LabelRender />
      </template>
      <slot
        v-if="slotKey && $slots[slotKey]"
        :model="model[fieldKey]"
        :name="slotKey"
      ></slot>
      <component
        v-bind="{
          ...compAttr,
        }"
        :is="renderComponent()"
        v-else
        v-model="model[fieldKey]"
        :style="style"
      />
    </ElFormItem>
  </component>
</template>

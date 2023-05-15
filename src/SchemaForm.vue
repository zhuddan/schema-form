<script lang="ts" setup>
import type { CSSProperties, Ref } from 'vue';
import type { AnyObject, EmitType, FormAction, FormSchema, Nullable, SimpleObjectFormProps } from './types';
import { ElForm, ElRow } from 'element-plus';

import type { FormProps as ElFormProps } from 'element-plus';

import { useFormEvents } from './hooks/useFormEvents';
import { useFormValues } from './hooks/useFormValues';

import { formProps } from './schemaFormProps';

import SchemaFormActionButton from './components/SchemaFormActionButton.vue';
import SchemaFormItem from './components/SchemaFormItem.vue';
import type { FormProviderContextProps } from './hooks/useFormContent';
import { createSchemaFormContext } from './hooks/useFormContent';
import { computed, onMounted, reactive, ref, toRaw, unref, useAttrs, watch } from 'vue';

const props = defineProps(formProps);
const emit = defineEmits([
  'update:model',
  'register',
  'submit',
  'reset',
  'action',
  'validateError',
]);

const attrs = useAttrs();
const formModel = reactive<AnyObject>({});
// el-form 的 ref
const elFormRef = ref<Nullable<FormAction>>();
// 通过useForm 设置的Props
const escapeProps = ref<Partial<SimpleObjectFormProps<any>>>({});
// 包含了 组件的 attr props 和 useFormProps
const bindValue = computed<SimpleObjectFormProps<any>>(() => ({
  ...attrs,
  ...props,
  ...escapeProps.value,
}));

const formAction = useFormEvents(
  emit as EmitType,
  elFormRef as Ref<FormAction>,
  bindValue,
  escapeProps,
);

// 如果直接传递
const getSchemas = computed(() => {
  const _schemas = unref(bindValue).schemas;
  return _schemas as FormSchema<any>[];
});
//

const { initFormModelValue } = useFormValues({
  formModel,
  bindValue,
  schemas: getSchemas,
  // escapeProps,
});

const style = computed<CSSProperties>(() => {
  const gutter: number = bindValue.value.rolProps?.gutter || 0;
  return (bindValue.value as any)?.inline ? { } : {
    paddingLeft: `${gutter}px`,
    paddingRight: `${gutter}px`,
  };
});

watch(
  () => formModel,
  () => {
    props.model;
    if (!Object.keys(props.model).length)
      escapeProps.value.model = toRaw(formModel);
    else
      emit('update:model', toRaw(formModel));
  },
  {
    deep: true,
  },
);

defineExpose(formAction);

onMounted(() => {
  emit('register', formAction);
});

const formContext: FormProviderContextProps = computed(() => (
  {
    ...bindValue.value,
    action: formAction,
  }
));

watch(
  () => getSchemas.value,
  async (schemas) => {
    if (schemas?.length)
      initFormModelValue();
  },
);
createSchemaFormContext(formContext);
</script>

<template>
  <ElForm
    v-bind="{
      ...(bindValue as ElFormProps),
      colProps: undefined,
      rolProps: undefined,
      showActionBar: undefined,
      actionBarColProps: undefined,
      showSubmitButton: undefined,
      showResetButton: undefined,
      submitButtonOptions: undefined,
      resetButtonOptions: undefined,
      submitHandler: undefined,
      model: undefined,
      schemas: undefined,
    }"
    ref="elFormRef"
    :model="formModel"
    :style="style"
  >
    <component
      :is="(bindValue as any).inline ? 'div' : ElRow"
      v-bind="(bindValue as any).inline ? {} : bindValue.rolProps"
      :class="{ 'display-inline-block': (bindValue as any).inline }"
    >
      <SchemaFormItem
        v-for="(schema, index) in getSchemas"
        :key="`${String(schema.field)}_${index}`"
        :form-model="formModel"
        :schema="schema"
      >
        <template v-for="item in Object.keys($slots)" #[item]="data">
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
      </SchemaFormItem>
      <SchemaFormActionButton v-if="bindValue.showActionBar">
        <template
          v-for="item in ['action']"
          #[item]="data"
        >
          <slot :name="item" v-bind="data || {}"></slot>
        </template>
        <slot></slot>
      </SchemaFormActionButton>
    </component>
  </ElForm>
</template>

<style>
  .display-inline-block {
    display: inline-block;
  }
</style>

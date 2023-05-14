<script lang="ts" setup>
import { ElRadio, ElRadioButton, ElRadioGroup, useAttrs } from 'element-plus';
import type { RadioComponentType, RadioGroupOption } from '../types/componentProps/components/radioGroup';

const props = defineProps({
  options: {
    type: Array as PropType<RadioGroupOption[]>,
    default: () => [],
  },
  componentType: {
    type: String as PropType<RadioComponentType>,
    default: 'Radio',
  },
});
const componentType = computed(() => (props.componentType === 'Radio' ? ElRadio : ElRadioButton));
const attrs = useAttrs();
const getBindValue = computed(() => {
  return {
    ...props,
    ...attrs,
  };
});
</script>

<template>
  <ElRadioGroup v-bind="getBindValue">
    <template v-for="item in options" :key="item.value">
      <component
        :is="componentType"
        v-bind="{
          ...item,
          value: undefined,
          label: undefined,
        }"
        :label="item.value"
      >
        {{ item.label }}
      </component>
    </template>
  </ElRadioGroup>
</template>

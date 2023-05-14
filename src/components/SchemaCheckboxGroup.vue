<script lang="ts" setup>
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from 'element-plus';
import type { CheckboxGroupComponentType, CheckboxGroupOption } from '../types/componentProps/components/checkbox';
import { computed, useAttrs } from 'vue';

const props = defineProps({
  options: {
    type: Array as PropType<CheckboxGroupOption[]>,
    default: () => [],
  },
  componentType: {
    type: String as PropType<CheckboxGroupComponentType>,
    default: 'Checkbox',
  },
});

const componentType = computed(() => (props.componentType === 'CheckboxButton' ? ElCheckboxButton : ElCheckbox));
const attrs = useAttrs();
const getBindValue = computed(() => {
  return {
    ...props,
    ...attrs,
  };
});
</script>

<template>
  <ElCheckboxGroup v-bind="getBindValue">
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
  </ElCheckboxGroup>
</template>

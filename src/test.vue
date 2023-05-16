<script setup lang="ts">
import type { SchemaFormProps } from './';
import { AssembleComponent, CascaderProps, SchemaForm, useForm } from './';
import { ref } from 'vue';
// console.log(c);
const c: SchemaFormProps = {
};
const model = ref({
  name: 'zd',
  age: 10,
});
const [] = useForm({
  model: model.value,
  schemas: [
    {
      component: 'Cascader',
      field: 'age',
      componentProps: {
        options: [],
      },
    },
  ],
});
</script>

<template>
  <p>1</p>
  <!-- <SchemaForm @register="register" /> -->
</template>

<style scoped>

</style>
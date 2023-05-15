<script setup lang="ts">
import type { SchemaFormProps } from './';
import { SchemaForm, useForm } from './';
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
      component: 'Input',
      field: 'age',
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
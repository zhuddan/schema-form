<script setup lang="ts">
import type { _FormProps } from '@zdzz/schema-form';
import { SchemaForm, useForm } from '@zdzz/schema-form';
import { ref } from 'vue';
const model = ref({
  name: 'zd',
  age: 10,
});

const c: _FormProps = {
  submitButtonOptions: [],
};

const [register] = useForm({
  schemas: [
    {
      component: 'Input',
      field: 'name',
      componentProps: {

      },
    },
    {
      component: 'InputNumber',
      field: 'age',
    },
  ],
});
</script>

<template>
  <pre>
    <code>
      {{ model }}
    </code>
  </pre>

  <SchemaForm @register="register" />
</template>

<style scoped>

</style>
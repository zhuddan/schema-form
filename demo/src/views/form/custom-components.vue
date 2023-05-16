<script setup lang="ts">
import { useForm } from '@zdzz/schema-form';
import type { AssembleComponent } from '@zdzz/schema-form';

const {} = useForm({
  model: {
    name: 'zdd',
  },
  schemas: [
    {
      component: 'ColorPicker',
      field: 'divider',
    },
  ],
});
type test = AssembleComponent<'MyInput', {}, {}, {}>;
</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>
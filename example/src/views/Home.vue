<script setup lang="ts">
import type { FormRules } from '@zdzz/schema-form';
import { ComponentType, SchemaForm, useForm } from '@zdzz/schema-form';
import 'element-plus/dist/index.css';
import { options } from './pages/d';
const formModel = ref({
  name: 'name',
  sex: '0',
  age: 18,
  grade: 2.5,
  birthday: '2000-08-08',
  like: ['sing', 'dance', 'rap'],
  address: ['yn', 'km', 'wh'],
  color: '#100000',
  liZhi: false,
  time: 2.5,
  fss: [],
});

const rules = ref<FormRules<typeof formModel.value>>({
  name: [{
    required: true,
    message: '姓名不能为空',
  }],
  age: [{
    required: true,
    message: '年龄不能为空',
  },
  {
    type: 'number',
    max: 35,
    message: '年龄不能大于35',
    trigger: ['change'],
  },
  {
    type: 'number',
    min: 18,
    message: '年龄不能小于18',
    trigger: ['change'],
  }],
  color: [{
    validator(rule, value, cb) {
      if (!value) {
        cb('请选择颜色');
        return;
      }
      if (value == '#000000') {
        cb(new Error('小🐓子，露出黑jio了吧'));
        return;
      }
      cb();
    },
  }],
});

const [register] = useForm({
  labelWidth: 60,
  colProps: {
    span: 12,
  },
  actionBarColProps: {
    span: 24,
  },
  model: formModel,
  schemas: [
    {
      field: 'name',
      component: 'Input',
      componentProps: {
        placeholder: '请输入名字',
      },
    },
    {
      field: 'age',
      component: 'InputNumber',
      componentProps: {
        placeholder: '年龄',
        controlsPosition: 'right',
      },
    },
    {
      field: 'address',
      component: 'Cascader',
      componentProps: {
        options,
      },
    },
  ],
  submitHandler() {
    console.log('提交');
  },
});
</script>

<template>
  <pre>
    <code>
      {{ formModel }}
    </code>
  </pre>
  <SchemaForm @register="register" />
</template>

<style scoped>

</style>
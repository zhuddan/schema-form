<script setup lang="ts">
import { SchemaForm, useForm } from '@zdzz/schema-form';
import { addressList } from './data';

const [register] = useForm({
  // element-form props
  size: 'large',
  labelWidth: 60,
  colProps: {
    span: 12,
  },
  actionBarColProps: {
    span: 24,
  },
  // model
  model: {
    name: '姓名',
    sex: '1',
    age: 18,
    grade: 2.5,
    birthday: '2000-08-08',
    like: ['sing', 'dance', 'rap'],
    address: ['yn', 'km', 'wh'],
    active: false,
  },
  // rules
  rules: {
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
  },
  // schemas
  schemas: [
    {
      field: 'name',
      label: '姓名',
      component: 'Input',
      componentProps: {
        placeholder: '请输入名字',
      },
    },
    {
      field: 'age',
      label: '年龄',
      component: 'InputNumber',
      componentProps: {
        placeholder: '年龄',
        controlsPosition: 'right',
      },
    },
    {
      field: 'sex',
      label: '性别',
      component: 'RadioGroup',
      componentProps: {
        componentType: 'RadioButton',
        options: [
          {
            label: '男',
            value: '1',
          },
          {
            label: '女',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'address',
      label: '住址',
      component: 'Cascader',
      componentProps: {
        options: addressList,
        placeholder: '请选择',
      },
    },
    {
      field: 'birthday',
      label: '生日',
      component: 'DatePicker',
      componentProps: {
        valueFormat: 'YYYY-MM-DD',
        format: 'YYYY年MM月DD日',
      },
    },
    {
      field: 'like',
      label: '特长',
      component: 'CheckboxGroup',
      componentProps: {
        options: [
          {
            label: '唱',
            value: 'sing',
          },
          {
            label: '跳',
            value: 'dance',
          },
          {
            label: 'rap',
            value: 'rap',
          },
          {
            label: '篮球',
            value: 'basketball',
          },
        ],
      },
    },
    {
      field: 'active',
      component: 'Switch',
    },

  ],
  submitHandler() {
    console.log('提交');
  },
});
</script>

<template>
  <div class="page">
    <SchemaForm @register="register" />
  </div>
</template>

<style scoped>

</style>
import SchemaForm, { useForm } from '@/components/SchemaForm';
import { Icon } from '@zdzz/components';
import { useDicts } from '@/hooks/business/useRuoyiDicts';
import { HighLight } from '@/components/HighLight';
import { ElButton } from 'element-plus';
const form1 = ref({
  name: '我是真爱坤',
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

type Form1Type = typeof form1.value;

const rules = ref<FormRules<Form1Type>>({
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

const type1 = ref('button');

const { sys_user_sex, sys_common_status } = useDicts(['sys_user_sex', 'sys_common_status']);
const loading = ref(false);
const inline = ref(false);

const [register, { resetFields, validate, setProps }] = useForm({
  scrollToError: true,
  size: 'large',
  labelPosition: 'top',
  labelWidth: '4em',
  rules,
  colProps: {
    span: 24,
    sm: 12,
    md: 8,
    lg: 6,
  },
  rolProps: {
    gutter: 40,
  },
  model: form1,
  inline,
  schemas: [
    {
      component: 'Divider',
      label: 'Ikun 信息',
      field: 'divider' as any,
      colProps: {
        span: 24,
      },
    },
    {
      component: 'Input',
      field: 'name',
      label: '姓名',
      componentProps: (a, b) => {
        return {
          inputStyle: {
            color: 'red',
          },
          // size: 'large',
        };
      },
    },
    {
      component: 'DatePicker',
      field: 'birthday',
      label: '生日',
    },
    {
      component: 'InputNumber',
      field: 'age',
      label: '年龄',
      componentProps: {
        controlsPosition: 'right',
      },
    },
    {
      component: 'RadioGroup',
      field: 'sex',
      label: '性别',
      componentProps: {
        options: sys_user_sex,
        onChange(v) {
          console.log('sex change:', v);
        },
      },
    },
    {
      component: 'Divider',
      label: 'Ikun 兴趣爱好',
      field: 'divider' as any,
      colProps: {
        span: 24,
      },
    },
    {
      component: 'ColorPicker',
      label: 'Ikun 最爱的颜色',
      field: 'color',
      componentProps: {
        predefine: [
          '#000000',
        ],
      },
    },

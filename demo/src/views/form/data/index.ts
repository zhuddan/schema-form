import type { CascaderProps } from '@zdzz/schema-form';

export const addressList: CascaderProps['options'] = [
  {
    label: '北京',
    value: 'bj',
    children: [
      {
        label: '北京市区',
        value: 'beijing',
        children: [
          {
            label: '昌平',
            value: 'cp',
          },
          {
            label: '朝阳',
            value: 'cy',
          },
          {
            label: '大兴',
            value: 'dx',
          },
          {
            label: '海淀',
            value: 'hd',
          },
        ],
      },
    ],
  },
  {
    label: '上海',
    value: 'sh',
    children: [
      {
        label: '上海市区',
        value: 'shanghai',
        children: [
          {
            label: '宝山',
            value: 'bs',
          },
          {
            label: '长宁',
            value: 'cn',
          },
          {
            label: '崇明',
            value: 'cm',
          },
          {
            label: '虹山',
            value: 'hs',
          },
        ],
      },
    ],
  },
];
import type { CSSProperties } from 'vue';
import type { Arrayable } from './global';
export type StyleType = Arrayable<CSSProperties | string>;
export interface CommonOptions {
  value: any;
  label: string | number;
  disabled?: boolean;
}

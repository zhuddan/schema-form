import type { AssembleComponent, WithOption } from '../../util';
import type { ElOption, ElSelect } from 'element-plus';

interface OptionProps { }
export type SelectOption = WithOption<OptionProps>;
export type _SelectProps = InstanceType<typeof ElSelect>['$props'];
export type _OptionProps = InstanceType<typeof ElOption>['$props'];

interface SelectProps extends _SelectProps {
  options: WithOption<{}>[];
}

export type Select<T extends AnyObject> = AssembleComponent<'Select', SelectProps, {
  onChange: Fn;
  onVisibleChange: Fn;
  onRemoveTag: Fn;
  onClear: Fn;
  onBlur: Fn;
  onFocus: Fn;
}, T>;

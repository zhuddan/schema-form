import type { FormAction } from './action';
import type { CommonOptions, ComponentType, StyleType } from './common';
import type { AnyObject, Fn } from './global';

export interface CommonProps {
  disabled: boolean;
  style: StyleType;
}

export type WithOption<OptionsProps extends AnyObject = AnyObject> = Partial<OptionsProps> & CommonOptions;

type RecordFn = Record<string, Fn>;

export type CreateEmitType<T extends RecordFn> = {
  [K in keyof T as `on${Capitalize<string & K>}`]?: T[K] | ((...args: Parameters<T[K]>) => void);
};

export type CreateComponentProps<CP extends AnyObject, EV extends RecordFn > = Partial<CP & CreateEmitType<EV> & CommonProps>;

export interface AssembleComponent<
  CompName extends ComponentType,
  CompProps extends AnyObject,
  CompEvent extends RecordFn,
  FormModel extends AnyObject = AnyObject,
> {
  component: CompName;
  componentProps?: CreateComponentProps<CompProps, CompEvent>
  | ((formModel: FormModel, formAction: FormAction) => CreateComponentProps<CompProps, CompEvent>)
  ;
}

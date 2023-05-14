import type { FormProps, FormSchema } from '../types';
import type { ComputedRef, Ref } from 'vue';

export function useFormValues({
  formModel,
  bindValue,
  schemas,
  escapeProps,
}: {
  formModel: Recordable;
  bindValue: ComputedRef<Recordable<any>>;
  schemas: ComputedRef<FormSchema<any>[]>;
  escapeProps?: Ref<Partial<FormProps<any>>>;
}) {
  schemas;
  escapeProps;
  function initFormModelValue() {
    const _bindValue = unref(bindValue);
    const model = toRaw(_bindValue.model);
    if (Object.keys(model).length) {
      for (const key in model) {
        if (Object.prototype.hasOwnProperty.call(model, key)) {
          const value = model[key];
          formModel[key] = value;
        }
      }
    }
  }
  return {
    formModel,
    initFormModelValue,
  };
}
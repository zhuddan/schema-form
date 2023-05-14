import { merge } from 'lodash-es';
import type { ComputedRef, Ref } from 'vue';
import { nextTick, toRaw, unref } from 'vue';

import type { FormAction, FormProps } from '../types';
export function getRecordRefRawValue<T extends Recordable>(maybeShallowRecordRef: MaybeShallowRecordRef<T>): T {
  const res = {} as T;
  const keys = Object.keys(maybeShallowRecordRef);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index] as keyof T;
    res[key] = toRaw(unref(maybeShallowRecordRef[key])) as any;
  }
  return res;
}
export interface UseFormActionContext {
  emit: EmitType;
  elFormRef: Ref<FormAction>;
  bindValue: ComputedRef<FormProps<any>>;
  escapeProps: Ref<Partial<FormProps<any>>>;
}

export function useFormEvents<T extends Recordable>(
  emit: EmitType,
  elFormRef: Ref<FormAction>,
  bindValue: ComputedRef<FormProps<any>>,
  escapeProps: Ref<Partial<FormProps<any>>>,
):
  FormAction<T> {
  async function clearValidate(name?: string | string[]) {
    await unref(elFormRef).clearValidate(name);
  }

  async function resetFields() {
    await unref(elFormRef).resetFields();
    nextTick(() => clearValidate());
  }
  async function validate(callback?: (isValid: boolean) => void): Promise<any> {
    return unref(elFormRef).validate(callback);
  }

  async function validateField(prop: string | string[], callback: (err: string) => void) {
    return await unref(elFormRef).validateField(prop, callback);
  }

  async function scrollToField(prop2: any) {
    return await unref(elFormRef).scrollToField(prop2);
  }
  function setProps(newFormProps: Partial<MaybeShallowRecordRef<FormProps<T>>>) {
    const _escapeProps = merge({ ...unref(escapeProps) }, { ...unref(newFormProps) }) as FormProps<T>;
    escapeProps.value = _escapeProps;
  }

  async function submit() {
    const _getBindValue = toRaw(unref(bindValue));
    if (_getBindValue.submitHandler) {
      unref(_getBindValue.submitHandler)();
      return;
    }
    const isValid = await validate();
    if (isValid) {
      const values = toRaw(unref(escapeProps).model);
      emit('submit', values);
    }
  }

  return {
    submit,
    setProps,
    resetFields,
    clearValidate,
    validate,
    validateField,
    scrollToField,
  };
}

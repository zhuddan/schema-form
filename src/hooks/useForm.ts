import type { FormAction, SchemaFormProps } from '../types';
import type { Ref, UnwrapRef } from 'vue';
import { nextTick, onUnmounted, ref, toRaw, unref, watch } from 'vue';

type UseFormReturn<T extends MaybeRef<AnyObject> = MaybeRef<AnyObject>> =
[(instance: FormAction<UnwrapRef<T>>) => void, FormAction<T>];

export function getRecordRefRawValue<T extends AnyObject>(maybeShallowRecordRef: MaybeRecordRef<T>): T {
  const res = {} as T;
  const keys = Object.keys(maybeShallowRecordRef);
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index] as keyof T;
    res[key] = toRaw(unref(maybeShallowRecordRef[key])) as any;
  }
  return res;
}

export default function useForm<T extends AnyObject>(props?: SchemaFormProps<T>): UseFormReturn<T> ;
export default function useForm<T extends Ref<AnyObject>>(props?: SchemaFormProps<T>): UseFormReturn<Ref<UnwrapRef<T>>> ;
export default function useForm<T extends MaybeRef<AnyObject>>(props?: SchemaFormProps<T>): UseFormReturn<T> {
  const formAction = ref<Nullable<FormAction<T>>>(null);
  const loadedRef = ref<Nullable<boolean>>(false);
  const isProdMode = !_DEV_;
  async function getForm() {
    const form = unref(formAction);
    if (!form) {
      throw new Error(
        'The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!',
      );
    }
    await nextTick();
    return form as FormAction<T>;
  }

  function register(instance: FormAction<T>) {
    if (isProdMode) {
      // 开发环境下，组件卸载后释放内存
      onUnmounted(() => {
        formAction.value = null;
        loadedRef.value = null;
      });
    }

    // form 组件实例 instance 已存在
    // 实际上 register 拿到的并不是 组件实例， 只是挂载了一些组件内部方法的 对象 formAction
    if (unref(loadedRef) && isProdMode && instance === unref(formAction))
      return;

    formAction.value = instance;
    loadedRef.value = true;

    // 监听 props， 若props改变了
    // 则使用 form 实例调用内部的 setProps 方法将新的props设置到form组件内部
    watch(
      () => props,
      () => {
        if (props) {
          const _props = getRecordRefRawValue(props as any) as unknown as SchemaFormProps<T>;
          instance.setProps({
            ..._props,
            // 如果 解构为普通对象会导致 响应性失效
            model: props.model,
          });
        }
      },
      { immediate: true, deep: true },
    );
  }

  const methods: FormAction<T> = {
    async setProps(props: Partial<SchemaFormProps<T>>) {
      const form = await getForm();
      form.setProps(props);
    },
    async resetFields() {
      const form = await getForm();
      form.resetFields();
    },
    async validate(callback?: (valid: boolean) => void): Promise<void> {
      const form = await getForm();
      return form.validate(callback);
    },
    async validateField(props: string | string[], callback: (err: string) => void) {
      const form = await getForm();
      form.validateField(props, callback);
    },

    async clearValidate() {
      const form = await getForm();
      form.clearValidate();
    },
    async scrollToField(prop: keyof UnwrapRef<T>) {
      const form = await getForm();
      form.scrollToField(prop as any);
    },
    async submit() {

    },
  };

  return [register, methods] as any;
}

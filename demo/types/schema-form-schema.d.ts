import type { AnyObject, AssembleComponent, ElFormSchema, FormSchemaWithComponentProps } from '@zdzz/schema-form';

declare module '@zdzz/schema-form' {
  type MyInput<T extends AnyObject> = AssembleComponent<'MyInput', { name: string }, { input(): void }, T>;
  type FormSchemaMyInput<T extends AnyObject = AnyObject> = FormSchemaWithComponentProps<MyInput<T>, T>;
  type FormSchema<T extends AnyObject = AnyObject> = ElFormSchema<T> | FormSchemaMyInput<T>;
}

export {};

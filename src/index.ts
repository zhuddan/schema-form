import { withInstall } from '@zdzz/shared';
import schemaFormItem from './components/SchemaFormItem.vue';
import useForm from './hooks/useForm';
import schemaForm from './SchemaForm.vue';
export const SchemaForm = withInstall(schemaForm);
export const SchemaFormItem = withInstall(schemaFormItem);

export { useForm };

export * from './types';
export default SchemaForm;

const c: Nullable<Fn> = null;
c;
import type { UploadProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type Upload<T extends Recordable> = AssembleComponent<'Upload', UploadProps, {}, T>;

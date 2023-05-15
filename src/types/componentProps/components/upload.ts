import type { UploadProps } from 'element-plus';
import type { AssembleComponent } from '../../util';

export type Upload<T extends AnyObject> = AssembleComponent<'Upload', UploadProps, {}, T>;

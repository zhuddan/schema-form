import type { UploadProps } from 'element-plus';
import type { AssembleComponent } from '../../util';
import type { AnyObject } from 'src/types/global';

export type Upload<T extends AnyObject> = AssembleComponent<'Upload', UploadProps, {}, T>;

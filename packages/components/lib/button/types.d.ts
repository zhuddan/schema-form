import type { ExtractPropTypes, PropType } from 'vue';
export declare const buttonProps: {
    type: {
        type: PropType<"default" | "primary" | "success" | "warning" | "danger">;
    };
    size: {
        type: PropType<"large" | "normal" | "small" | "mini">;
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

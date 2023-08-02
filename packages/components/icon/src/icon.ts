import { ExtractPropTypes, PropType } from 'vue';

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
} as const;

export type isconProps = ExtractPropTypes<typeof iconProps>;

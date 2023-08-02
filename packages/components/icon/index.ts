// 导出组件

import _Icon from './src/icon.vue';
import { withInstall } from '@zi-shui/utils/withInstall';

const Icon = withInstall(_Icon);

export default Icon;

export * from './src/icon';

declare module 'vue' {
  export interface GlobalComponents {
    ZIcon: typeof Icon;
  }
}

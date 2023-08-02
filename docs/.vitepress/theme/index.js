import DefaultTheme from 'vitepress/theme';
import ZIcon from '@zi-shui/components/icon';
import '@zi-shui/theme-chalk/src/index.scss';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon); // 注册组件},
  },
};

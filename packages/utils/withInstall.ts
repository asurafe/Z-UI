import { Plugin, App } from "vue";

export type SFCWithInstall<T> = T & Plugin;

export function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    const { name } = comp as unknown as { name: string };
    // 将组件注册成全局的组件
    app.component(name, comp as unknown as { name: string });
  };
  return comp as SFCWithInstall<T>;
}

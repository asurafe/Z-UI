## 图标

# Icon 图标

z-ui 推荐使用 xicons 作为图标库。

```
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

<script setup lang="ts">
import { AccessibilityOutline , ArrowRedoOutline} from '@vicons/ionicons5'
</script>

<z-icon color="#B1B2FF" size="40" @click="handleClick">
<AccessibilityOutline/>
</z-icon>

<z-icon color="#AAC4FF" size="40"><AccessibilityOutline/>
</z-icon>
<z-icon color="#D2DAFF" size="40"><AccessibilityOutline/>
</z-icon>

<div>

<z-icon color="#EBC7E8" size="60"><ArrowRedoOutline/>
</z-icon>

<z-icon color="#645CAA" size="60"><ArrowRedoOutline/>
</z-icon>

<z-icon color="#A084CA" size="60"><ArrowRedoOutline/>
</z-icon>

</div>

```vue
<template>
  <z-icon color="red" size="40">
    <CashOutline />
  </z-icon>
</template>

<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5';
</script>
```

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| color | string           | undefined | 图标颜色 |
| size  | number \| string | undefined | 图片大小 |

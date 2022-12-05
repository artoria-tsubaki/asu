/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@knight-lab/timelinejs';
declare module '@/utils/common.js';
declare module '@/utils/command.js';
declare module '@/utils/TweenMax.min.js';
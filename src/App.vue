<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { computed, nextTick, reactive, ref, watch } from 'vue'

import Home from './views/command.vue'
import Timeline from './views/timeline.vue'

// fullpage 参数
const state = reactive({
  pages: 3,
  page: 1,
  config: {
    disabled: false,
    direction: 'v',
    cache: true,
    bgArr: [],
    bgConfig: {
      fit: 'fill',
    },
    //  循环播放
    loop: true,
    // 自动轮播
    autoPlay: {
      play: false,
      // 切换间隔
      interval: 1000,
    },
    arrow: {
      // 上一页箭头
      last: true,
      // 下一页箭头
      next: true,
    },
    poi: {
      className: 'my-poi',
    },
  } as any,
})

// fullpage滚动页面触发事件
const onRollEnd = (page: number) => {
  // console.log(page)
  // console.log(state.page)
}

const videoPaused = computed(() => {
  return state.page === 1 // 当滚出home页面时video暂停
})
</script>

<template>
  <div class="app">
    <mv-full-page ref="myFullPage" :pages="state.pages" v-model:page="state.page" :config="state.config" @rollEnd="onRollEnd">
      <!-- <template #page1>
        <Home :isCurrentShow="videoPaused"></Home>
      </template> -->
      <template #page1>
        <Home :isCurrentShow="videoPaused"></Home>
      </template>
      <template #page2>
        <!-- <Timeline></Timeline> -->
      </template>
      <template #page3>
        <div>567</div>
      </template>
    </mv-full-page>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
video {
  height: 100%;
  width: auto;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue'

import Slideshow from '@/utils/command.js'

onMounted(() => {
  new Slideshow(document.querySelector('.content'))
})

const songLists = [
  {
    imageUrl: 'https://asu-1302665742.cos.ap-hongkong.myqcloud.com/asu_flower.jpg',
    title: '海の幽霊',
  },
  {
    imageUrl: 'https://asu-1302665742.cos.ap-hongkong.myqcloud.com/asu_milk.jpg',
    title: '恋風邪にのせて',
  },
  {
    imageUrl: 'https://asu-1302665742.cos.ap-hongkong.myqcloud.com/asu_walk.jpg',
    title: '綺麗',
  },
]

const textsTotal: number = 11
const strokeIndexs: number[] = [0, 2, 3, 8, 9]
const bottomIndexs: number[] = [9]

const isInStrokeIndexs = (i: number): string => {
  if(strokeIndexs.includes(i)) {
    return 'content__text-inner--stroke'
  }
  return ''
}

const isInBottomIndexs = (i: number): string => {
  if(bottomIndexs.includes(i)) {
    return 'content__text-inner--bottom'
  }
  return ''
}

const isMiddleIndex = (i: number): string => {
  if(i === Math.ceil(textsTotal / 2)) {
    return 'content__text-inner--center'
  }
  return ''
}

</script>

<template>
  <div class="command-page">
    <main>
      <div class="content">
        <div class="content__slide" v-for="(song, index) in songLists" :key="index">
          <div class="content__img">
            <div class="content__img-inner" :style="{ backgroundImage: `url(${song.imageUrl})` }"></div>
          </div>
          <div class="content__text-wrap">
            <span class="content__text content__text--full" v-for="i in textsTotal">
              <span :class="['content__text-inner', isInStrokeIndexs(i), isInBottomIndexs(i)]">{{ song.title }}</span>
            </span>
          </div>
        </div>  
        <nav class="content__nav">
          <button class="content__nav-button content__nav-button--prev">Prev</button>
          <button class="content__nav-button content__nav-button--next">Next</button>
        </nav>
      </div>
    </main>
  </div>
</template>

<style lang="less" scoped>
@import '@/css/command.css';
</style>

<script setup lang="ts">
import { onMounted } from 'vue'

import Slideshow from '@/utils/command.js'

onMounted(() => {
  new Slideshow(document.querySelector('.content'))
})
</script>

<template>
  <div class="command-page">
    <main>
      <div class="content">
        <div class="content__slide">
          <div class="content__img">
            <div class="content__img-inner" style="background-image: url(https://asu-1302665742.cos.ap-hongkong.myqcloud.com/asu_flower.jpg)"></div>
          </div>
          <div class="content__text-wrap">
            <span class="content__text">
              <span class="content__text-inner content__text-inner--stroke">海の幽霊</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">海の幽霊</span>
            </span>
            <span class="content__text content__text--full">
              <span class="content__text-inner content__text-inner--stroke">海の幽霊</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner content__text-inner--stroke">海の幽霊</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">海の幽霊</span>
            </span>
            <span class="content__text content__text--full">
              <span class="content__text-inner">海の幽霊</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner content__text-inner--bottom">海の幽霊</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">海の幽霊</span>
            </span>
            <span class="content__text content__text--full">
              <span class="content__text-inner content__text-inner--stroke">海の幽霊</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner content__text-inner--stroke content__text-inner--bottom">海の幽霊</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">海の幽霊</span>
            </span>
          </div>
        </div>
        <div class="content__slide">
          <div class="content__img">
            <div class="content__img-inner" style="background-image: url(https://asu-1302665742.cos.ap-hongkong.myqcloud.com/asu_milk.jpg)"></div>
          </div>
          <div class="content__text-wrap">
            <span class="content__text">
              <span class="content__text-inner content__text-inner--stroke">恋風邪にのせて</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">恋風邪にのせて</span>
            </span>
            <span class="content__text content__text--full">
              <span class="content__text-inner content__text-inner--stroke">恋風邪にのせて</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner content__text-inner--stroke">恋風邪にのせて</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">恋風邪にのせて</span>
            </span>
            <span class="content__text content__text--full">
              <span class="content__text-inner">恋風邪にのせて</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner content__text-inner--bottom">恋風邪にのせて</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">恋風邪にのせて</span>
            </span>
            <span class="content__text content__text--full">
              <span class="content__text-inner content__text-inner--stroke">恋風邪にのせて</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner content__text-inner--stroke content__text-inner--bottom">恋風邪にのせて</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">恋風邪にのせて</span>
            </span>
          </div>
        </div>
        <div class="content__slide">
          <div class="content__img">
            <div class="content__img-inner" style="background-image: url(https://asu-1302665742.cos.ap-hongkong.myqcloud.com/asu_walk.jpg)"></div>
          </div>
          <div class="content__text-wrap">
            <span class="content__text">
              <span class="content__text-inner content__text-inner--stroke">綺麗</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">綺麗</span>
            </span>
            <span class="content__text content__text--full">
              <span class="content__text-inner content__text-inner--stroke">綺麗</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner content__text-inner--stroke">綺麗</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">綺麗</span>
            </span>
            <span class="content__text content__text--full">
              <span class="content__text-inner">綺麗</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner content__text-inner--bottom">綺麗</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">綺麗</span>
            </span>
            <span class="content__text content__text--full">
              <span class="content__text-inner content__text-inner--stroke">綺麗</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner content__text-inner--stroke content__text-inner--bottom">綺麗</span>
            </span>
            <span class="content__text">
              <span class="content__text-inner">綺麗</span>
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

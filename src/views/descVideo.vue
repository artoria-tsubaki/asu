<template>
    <div class="home-page">
        <video ref="videoEle" autoplay muted loop src="@/assets/homeVideo.mp4" @loadeddata="autoplayVideo"></video>
        <div class="shadow-box" v-if="isVideoPaused">
          <svg t="1668916220413" class="play-icon" @click="manualplayVideo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3454" width="100" height="100"><path d="M852.727563 392.447107C956.997809 458.473635 956.941389 565.559517 852.727563 631.55032L281.888889 993.019655C177.618644 1059.046186 93.090909 1016.054114 93.090909 897.137364L93.090909 126.860063C93.090909 7.879206 177.675064-35.013033 281.888889 30.977769L852.727563 392.447107 852.727563 392.447107Z" p-id="3455" fill="#F25A24"></path></svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
const props = defineProps({
  isCurrentShow: Boolean
})
const videoEle = ref<null | HTMLVideoElement>(null)
const shadowBox = ref<null | HTMLDivElement>(null)
let isVideoPaused = ref(false)

const _playVideo = () => {
  const video = videoEle.value!
  console.log(video)
  video.muted = false
  video.play()
}

const autoplayVideo = () => {
  nextTick(() => {
    _playVideo()
  })
}

const manualplayVideo = () => {
  console.log('222');
  
  nextTick(() => {
    isVideoPaused.value = false
    _playVideo()
  })
}

watch(() => props.isCurrentShow, (newValue: boolean) => {
  // 当离开此页面的时候视频暂停，进入的时候视频播放
  nextTick(() => {
    const video = videoEle.value!
    if(!newValue) {
      video.pause()
      isVideoPaused.value = true
    }
  })
})
</script>

<style lang="less" scoped>
.home-page {
    height: inherit;
    overflow: hidden;
}

.shadow-box {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(29,29,27,.5);
  .play-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      filter: drop-shadow(0 0 2em #F25A24aa);
    }
  }
}
</style>
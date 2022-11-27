<template>
    <div class="tl-page">
        <div id="timeline-embed" class="timeline-container"></div>
    </div>
</template>

<script setup lang="ts">
import timeline_json from '../assets/timeline.json';
import { Timeline } from '@knight-lab/timelinejs';
import { nextTick, onMounted } from 'vue';

const option = {
    font:"Default",
    lang:"en",
    initial_zoom:"2",
    height:"100%",
    timenav_height_percentage: '25'
}

onMounted(() => {
    nextTick(() => {
        new Timeline('timeline-embed', timeline_json);
    })
})
</script>

<style lang="less" scoped>
@import '@knight-lab/timelinejs/dist/css/timeline.css';

.tl-page {
    height: inherit;
    .timeline-container {
        height: calc(100% - 10px);
        width: 100%;
    }
}
</style>
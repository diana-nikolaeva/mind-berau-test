<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['ask-modal'])

function onClick() {
  emit('ask-modal')
}
</script>

<template>
  <section class="video-block">
    <video autoplay muted loop playsinline>
      <source src="https://mind-bureau.website.yandexcloud.net/assets/video.mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="btn-contact btn" @click="onClick">
      <a href="#"
        >Связаться с нами
        <span>></span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.video-block {
  overflow: hidden;
  height: 640px;
  position: relative;
  margin-bottom: 60px;
  @media screen and (min-width: 1024px) {
    margin: 0 30px 80px 30px;
    height: 510px;
  }
  @media screen and (min-width: 1700px) {
    height: 860px;
    margin: 0 36px 130px 36px;
  }
  .btn-contact {
    position: absolute;
    bottom: -1px;
    right: -1px;

    @media screen and (min-width: 1024px) {
      border-bottom: 30px solid #fff;
      border-left: 8px solid transparent;
    }
  }
}
</style>

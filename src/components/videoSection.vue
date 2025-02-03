<script setup lang="ts">

</script>

<template>
    <section class="video-block">
        <video autoplay muted loop>
          <source src="./video/video.mp4">
          Your browser does not support the video tag.
        </video>
        <div class="btn-contact btn">
          <a href="#">Связаться с нами
            <span>></span>
          </a>
        </div>
    </section>
</template>

<style scoped>
 .video-block{
  overflow: hidden;
  height: 640px;
  position: relative;
  margin-bottom: 60px;
  @media screen and (min-width:1024px){
    margin: 0 30px 80px 30px;
    height: 510px;
  }
  @media screen and (min-width:1700px){
    height: 860px;
    margin: 0 36px 130px 36px;
  }
  .btn-contact{
    position: absolute;
    bottom: 0;
    right: 0;

    @media screen and (min-width:1024px){
      border-bottom: 30px solid #fff;
      border-left: 8px solid transparent;
    }
  }
 }
</style>

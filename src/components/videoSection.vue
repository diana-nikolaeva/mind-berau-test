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
    margin: 0 20px 50px 20px;
    height: 510px;
  }
  @media screen and (min-width:1700px){
    height: 860px;
  }
  .btn-contact{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 20px 40px 20px 40px;

    @media screen and (min-width:1024px){
      border-bottom: 20px solid #fff;
    }
  }
 }
</style>

<script setup lang="ts">
import MainMenu from './components/mainMenu.vue'
import videoSection from './components/videoSection.vue';
import contentBlock from './components/contentBlock.vue';
import tallBanner from './components/tallBanner.vue';
import smallBanner from './components/smallBanner.vue';
import footerBlock from './components/footerBlock.vue';
import modalWindow from './components/modalWindow.vue';

</script>

<template>
  <MainMenu />
  <videoSection />
  <contentBlock />
  <tallBanner />
  <smallBanner />
  <footerBlock />
  <modalWindow />
</template>

<style>
@font-face {
  font-family: "PF Din Text Comp Pro";
  src: url("./assets/fonts/pfdintextcomppro-regular.ttf");
}

body{
  font-family: "PF Din Text Comp Pro";
}
a{
  text-decoration: none;
}
.btn{
  background-color: #B21F24;
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);
    cursor: pointer;
    a{
      text-decoration: none;
        color:#fff;
        font-size: 12px;
        text-transform: uppercase;
    }
    span{
      margin-left: 50px;
    }
}
.btn-rotate{
      background-color: #B21F24;
      cursor: pointer;
      transform: skew(-23deg);
      width: fit-content;
      margin-left: 20px;
      padding: 10px 40px;
      @media screen and (min-width: 1024px){
        margin-left: 60px;
      }

      a{
      text-decoration: none;
        color:#fff;
        font-size: 12px;
        text-transform: uppercase;
        transform: skew(23deg);
        display: block;
      }
      span{
      margin-left: 50px;
      transform: skew(23deg);
      display: inline-block;
    }
  }
</style>

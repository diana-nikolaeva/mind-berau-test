<script setup lang="ts">
import MainMenu from './components/mainMenu.vue'
import videoSection from './components/videoSection.vue';
import contentBlock from './components/contentBlock.vue';
import tallBanner from './components/tallBanner.vue';
import smallBanner from './components/smallBanner.vue';
import footerBlock from './components/footerBlock.vue';
// import modalWindow from './components/modalWindow.vue';

</script>

<template>
  <MainMenu />
  <videoSection />
  <contentBlock />
  <tallBanner />
  <smallBanner />
  <footerBlock />
  <!-- <modalWindow /> -->
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
  background: url('./components/icons/bcgr-red.svg') no-repeat;
  background-size: cover;
  width: 183px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
    a{
      text-decoration: none;
      color:#fff;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.48px;
    }
    span{
      margin-left: 14px;
    }
}
.btn-rotate{
  background: url('./components/icons/bcgr-red-rotate.svg') no-repeat;
  background-size: cover;
  cursor: pointer;
  width: fit-content;
  margin-left: 20px;
  padding: 10px 40px;
  width: 195px;
  box-sizing: border-box;
  @media screen and (min-width: 1024px){
    margin-left: 60px;
  }

  a{
  text-decoration: none;
    color:#fff;
    font-size: 12px;
    text-transform: uppercase;
    display: block;
  }
  span{
  margin-left: 30px;
  display: inline-block;
}
}
</style>

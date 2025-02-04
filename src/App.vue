<script setup lang="ts">

// import homePageContent from './components/homePageContent.vue';

</script>

<template>
  <!-- <homePageContent/> -->
  <router-view></router-view>
</template>

<style>

@font-face {
    font-family: 'PF Din Text Cond Pro';
    font-style: normal;
    font-weight: normal;
    src: url('./assets/fonts/PFDinTextCondPro-Regular.woff');
    }

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
  box-sizing: content-box;
  font-family:"PF Din Text Cond Pro";
  @media screen and (min-width: 1024px){
    height: 50px;
    width: 220px;
  }

    a{
      text-decoration: none;
      color:#fff;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.48px;
      @media screen and (min-width: 1700px){
        font-size: 16px;
        etter-spacing: 0.637px;
      }
    }
    span{
      margin-left: 14px;
    }
}
.btn-rotate{
  background: url('./components/icons/bcgr-red-rotate.svg') no-repeat;
  cursor: pointer;
  width: fit-content;
  margin-left: 20px;
  padding: 10px 40px;
  box-sizing: border-box;
  font-family:"PF Din Text Cond Pro";
  background-size: contain;
  @media screen and (min-width: 1024px){
    margin-left: 60px;
  }

  a{
  text-decoration: none;
    color:#fff;
    font-size: 12px;
    text-transform: uppercase;
    display: block;
    @media screen and (min-width: 1700px){
      font-size: 14px;
      letter-spacing: 0.48px;
    }
  }
  span{
  margin-left: 10px;
  display: inline-block;
}
}
</style>

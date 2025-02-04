<script setup lang="ts"></script>

<template>
  <section class="small-banner">
    <div class="small-banner-container">
      <h2>Мы реализуем под ключ проекты любой сложности</h2>
      <div class="btn-rotate">
        <a href="#"
          >оставить заявку
          <span>></span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.small-banner {
  margin-bottom: 80px;
  @media screen and (min-width: 1700px) {
    margin-bottom: 100px;
  }
}

.small-banner-container {
  height: 500px;
  background: url('./icons/sdf.svg') no-repeat;
  background-size: cover;
  border-radius: 5px;
  @media screen and (min-width: 1024px) {
    height: 383px;
    margin: 0 30px;
  }
  h2 {
    color: #fff;
    text-transform: uppercase;
    padding: 40px 12px;
    font-size: 32px;
    font-weight: 500;
    font-family: 'PF Din Text Cond Pro';
    @media screen and (min-width: 1024px) {
      font-size: 47px;
      padding: 60px 0 37px 60px;
      width: 75%;
    }
    @media screen and (min-width: 1700px) {
      font-size: 50px;
      padding: 86px 0 50px 73px;
      width: 75%;
    }
  }
}
</style>

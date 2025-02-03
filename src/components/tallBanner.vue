<script setup lang="ts"></script>

<template>
  <section class="tall-banner">
    <div class="banner">
      <h2>Sn</h2>
      <div class="descr">
        Помогает повысить извлечение за счет поддержания оптимальных дозировок реагентов в ключевых
        точках процесса
      </div>
      <div class="btn">
        <a href="#"
          >Подробнее
          <span>></span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tall-banner {
  position: relative;
  margin-bottom: 50px;
  @media screen and (min-width: 1024px){
    margin: 0 20px 50px 20px;
  }
}
.banner {
  background-image: url('./images/img2.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 640px;
  @media screen and (min-width: 1024px) {
    min-height: 510px;
  }
  @media screen and (min-width: 1700px) {
    min-height: 860px;
  }
}
h2{
  font-size: 40px;
  color: #fff;
  padding: 60px 0 40px 10px;
  @media screen and (min-width: 1024px) {
    padding: 40px 0 40px 40px;
  }
  @media screen and (min-width: 1700px) {
    font-size: 80px;
    padding:  67px 0px 40px 69px;
  }
}
.descr{
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
    margin-left: 40px;
    width: 40%;
  }
  @media screen and (min-width: 1700px) {
    font-size: 28px;
    margin-left: 67px;
  }
}
.btn{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px 40px;
  @media screen and (min-width: 1024px){
    border-bottom: 20px solid #fff;
  }

}
</style>

<script setup lang="ts">
import contentSection from './contentSection.vue'
</script>

<template>
  <div class="container">
    <h1>
      <span class="red">Lorem ipsum,</span>
      <span>Lorem ipsum Lorem ipsum</span>
    </h1>
    <div class="desc">
      Lorem Ipsum компании разработано с учётом анализа передовых технологий, использованием лучших
      решений и их качественной модернизации под потребности конкретного заказчика. Успешная
      реализация проектов на ведущих предприятиях горно-обогатительной промышленности базируется на
      многолетнем опыте и высоких компетенциях наших сотрудников.
    </div>
    <contentSection :rotate="false" />
    <contentSection :rotate="true" />
  </div>
</template>

<style scoped>
.container {
  background-color: #f2f2f2;
  padding: 40px 12px 32px 12px;
  margin-bottom: 80px;
  @media screen and (min-width: 1024px) {
    padding: 40px 0 40px 30px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1700px) {
    padding: 101px 0 92px 36px;
    margin-bottom: 130px;
  }
}
h1 {
  font-size: 40px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 60px;
  font-family: 'PF Din Text Cond Pro';
  .red {
    color: #b21f24ed;
    display: flex;
    width: 100%;
    align-items: center;
    &::after {
      content: '';
      display: block;
      flex-grow: 1;
      height: 2px;
      background: #aa927a;
      margin-left: 50px;
      flex-grow: 1;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 47px;
    margin-left: 0;
    margin-bottom: 20px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1700px) {
    font-size: 66px;
    padding-right: 36px;
  }
}

h2 {
  font-size: 66px;
}
.desc {
  color: #aa927a;
  margin-bottom: 40px;
  font-size: 16px;
  @media screen and (min-width: 1024px) {
    margin-right: 324px;
    margin-bottom: 37px;
  }
  @media screen and (min-width: 1700px) {
    font-size: 28px;
  }
}
</style>

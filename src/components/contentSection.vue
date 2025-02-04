<script setup lang="ts">
const props = defineProps<{
  rotate: boolean
}>()
</script>

<template>
  <section class="content-section" :class="{ 'left-img': props.rotate }">
    <div class="img-container">
      <img class="img-container__img" src="./images/img1.jpg" alt="изображение1" />
      <div class="btn">
        <a href="#"
          >Подробнее
          <span>></span>
        </a>
      </div>
    </div>
    <div class="descr-img">
      <h3>Loren ipsum</h3>
      <p>
        Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые
        модификации, например, юмористические вставки или слова, которые даже отдалённо не
        напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
        какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem
        Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный
        объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum
        генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей
        предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет
        повторяющихся абзацей или "невозможных" слов.
      </p>
    </div>
  </section>
</template>

<style scoped>
.content-section {
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    padding-right: 30px;
  }
  &.left-img {
    margin-top: 10px;
    @media screen and (min-width: 1024px) {
      flex-direction: row-reverse;
      margin-top: 40px;
      .img-container {
        margin-left: 20px;
        margin-right: 0;
      }
    }
  }
}
h3 {
  color: #311311;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 0.8px;
  font-weight: 500;
  margin-bottom: 16px;
  font-family: 'PF Din Text Cond Pro';
  @media screen and (min-width: 1700px) {
    font-size: 28px;
  }
}
.descr-img {
  flex-basis: 40%;
  color: #7c6e6b;
  margin-bottom: 20px;
}
.img-container {
  flex-basis: 60%;
  position: relative;
  align-self: flex-start;
  img {
    width: 100%;
    display: block;
  }
  @media screen and (min-width: 1024px) {
    margin-right: 20px;
  }
}
.btn {
  position: absolute;
  bottom: 30px;
  right: 0;
  a {
    text-transform: uppercase;
  }
}
</style>

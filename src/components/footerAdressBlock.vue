<script setup lang="ts">

</script>

<template>
    <section class="footer-adress-block">
      <div class="adress-block">
        <div class="adress__icon">
          <img src="./icons/geoIcon.svg" alt="">
        </div>
        <div class="adress">
          г. Санкт-Петербург, <br/> 119186, Большой проспект Васильевского острова, дом 7. Литера З
        </div>
      </div>
      <div class="contacts">
        <a class="contacts__phone-number" href="tel:+74951234567">+7 (---) -5--05-11</a>
        <a href="mailto:info@info.ru">info@info.ru</a>
      </div>
      <div class="btn-rotate">
            <a href="#">оставить заявку
              <span>></span>
            </a>
          </div>
    </section>
</template>

<style scoped>
.footer-adress-block{
  background-color: #F2F2F2;
  margin-left: 12px;
  padding: 20px;
  color:#311311;
  font-size: 20px;
  @media screen  and (min-width:1024px){
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media screen  and (min-width:1700px){
    display: block;
    width: 406px;
    align-self: start;
  }
}
.adress-block{
  margin-bottom: 32px;
  display: flex;
  @media screen  and (min-width:1024px){
    flex-shrink: 1;
  }
}
.adress{
  margin-left: 15px;
}
.adress__icon{
  margin-top: 6px;
}
.contacts{
  margin-bottom: 30px;
  display: flex;
  @media screen  and (min-width:1024px){
    flex-direction: column;
    flex-shrink: 0;
    margin-bottom: 0;
    margin-left: 20px;
  }
  a{
    color:#311311;
    display: block;
    flex-grow: 1;

  }
  @media screen  and (min-width:1700px){
    margin-left: 46px;
    margin-bottom: 30px;
  }
}
.contacts__phone-number{

  font-weight: bold;
}
.btn-rotate{
  width: 196px;
  padding: 10px 20px;
  margin: 0;
  span{
    margin-left: 30px;
  }
  @media screen  and (min-width:1024px){
    flex-shrink: 0;
    height: fit-content;
  }
  @media screen  and (min-width:1700px){
    margin-left: 46px;
  }
}
</style>

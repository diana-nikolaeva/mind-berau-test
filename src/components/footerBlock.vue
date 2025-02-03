<script setup lang="ts">
import footerAdressBlock from './footerAdressBlock.vue';
</script>

<template>
  <footer>
    <div class="copyright"><span>&copy;</span></div>
    <div class="footer-wrapper">
      <div class="footer-container">

        <div class="column-footer">
          <h4>lorem ipsum</h4>
          <h5>флотомашины и чаны</h5>
          <ul>
            <li><a href="#">МП</a></li>
            <li><a href="#">ЧП</a></li>
            <li><a href="#">ЧКЗ</a></li>
            <li><a href="#">Нестандартное Lorem Ipsum</a></li>
          </ul>
          <h5>автоматизация</h5>
          <h6>Локальные АСУ</h6>
          <ul>
            <li><a href="#">PYB</a></li>
            <li><a href="">SD</a></li>
            <li><a href="">SC</a></li>
            <li><a href="">SK</a></li>
            <li><a href="">SP</a></li>
          </ul>
          <h6>АСУТП</h6>
          <h6>Интеллектуальные системы</h6>
          <ul>
            <li><a href="#">SN</a></li>
            <li><a href="#">SV</a></li>
            <li><a href="#">SP</a></li>
          </ul>
        </div>
        <div class="column-footer">
          <h4>услуги</h4>
          <ul class="footer-list">
            <li><a href="#">Технологические исследования и аудит</a></li>
            <li><a href="#">Проектирование</a></li>
            <li><a href="">Строительно-монтажные работы</a></li>
          </ul>
          <h5>сервисное сопровождение</h5>
          <ul>
            <li><a href="">Сервис</a></li>
            <li><a href="">Технологическая поддержка</a></li>
          </ul>
        </div>
        <div class="column-footer">
          <h4>Компания</h4>
          <ul class="footer-list">
            <li><a href="">Новости и события</a></li>
            <li><a href="">Проекты</a></li>
            <li><a href="">Карьера</a></li>
            <li><a href="">Отзывы заказчиков</a></li>
            <li><a href="">Документы</a></li>
          </ul>
          <h5>контакты</h5>
        </div>
        </div>
        <footerAdressBlock />
    </div>


    <div class="made-block">Сделано в <span class="red-text">Creative Mind Bureau</span></div>
  </footer>

</template>

<style scoped>
footer{
  border-top: 4px solid #AA927A;
}

.footer-wrapper{
  @media screen  and (min-width:1700px){
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
  }
}
.copyright{
  color:#AA927A;
  margin-left: 20px;
  margin-top: 40px;
}
.footer-container{
  @media screen and (min-width:1024px){
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
  }
  @media screen  and (min-width:1700px){
    flex-grow: 1;
  }
}
h4{
  font-size: 18px;
  text-transform: uppercase;
  color:#311311;
  margin: 30px 20px 20px 20px;
  border-bottom: 3px solid #AA92;
  padding-bottom: 15px;
  font-weight: bold;
}
h5{
  font-size: 14px;
  text-transform: uppercase;
  color:#311311;
  margin: 20px;
  font-weight: bold;
}
h6{
  font-size: 16px;
  color:#311311;
  margin-left: 38px;
}
ul{
  li{
    list-style: none;
    cursor: pointer;
    &:hover{
      background-color: #B21F24;
      a{
        color:#fff;
      }
    }
  }
  a{
    text-decoration: none;
    color:#AA927A
  }
}
.column-footer{
  flex-grow: 1;
}
.footer-list{
  padding-left: 20px;
}
.red-text{
  color:#B21F24;
}
.made-block{
  padding: 80px 0 100px 0;
  text-align: center;
  font-size: 16px;
  @media screen and (min-width:1024px) {
    padding: 150px 0 20px 0;
  }
}
</style>

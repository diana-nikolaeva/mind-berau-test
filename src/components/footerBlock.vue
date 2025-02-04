<script setup lang="ts">
import footerAdressBlock from './footerAdressBlock.vue'
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
footer {
  border-top: 3px solid #ebe8e5;
}

.footer-wrapper {
  @media screen and (min-width: 1700px) {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
  }
}
.copyright {
  color: #aa927a;
  margin-left: 20px;
  margin-top: 30px;
  @media screen and (min-width: 1700px) {
    display: none;
  }
}
.footer-container {
  margin-bottom: 80px;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 105px;
    padding: 30px;
    flex-grow: 1;
  }
}
h4 {
  font-size: 18px;
  text-transform: uppercase;
  color: #311311;
  margin: 28px 11px 20px 13px;
  border-bottom: 3px solid #ebe8e5;
  padding-bottom: 20px;
  font-weight: 500;
  letter-spacing: 0.72px;
  font-family: 'PF Din Text Cond Pro';
  @media screen and (min-width: 1024px) {
    margin: 28px 11px 20px 0;
  }
}
h5 {
  font-size: 14px;
  text-transform: uppercase;
  color: #311311;
  margin: 20px 0 13px 13px;
  font-weight: 500;
  letter-spacing: 0.56px;
  font-family: 'PF Din Text Cond Pro';
  @media screen and (min-width: 1024px) {
    margin: 20px 0 13px 0;
  }
}
h6 {
  font-size: 16px;
  color: #311311;
  margin-left: 27px;
  @media screen and (min-width: 1024px) {
    margin-left: 0;
  }
}
ul {
  padding-left: 27px;
  @media screen and (min-width: 1024px) {
    padding-left: 0;
  }
  li {
    list-style: none;
    cursor: pointer;
    &:hover {
      a {
        color: #fff;
        background-color: #b21f24;
        padding: 0 10px;
      }
    }
  }
  a {
    text-decoration: none;
    color: #aa927a;
    padding-right: 20px;
    transition: padding 0.2s;
  }
}
.column-footer {
  flex-grow: 1;
  @media screen and (min-width: 1024px) {
    margin-right: 60px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 1700px) {
    flex-grow: 0;
  }
}
.footer-list {
  padding-left: 20px;
  @media screen and (min-width: 1024px) {
    padding-left: 0;
  }
}
.red-text {
  color: #b21f24;
}
.made-block {
  padding: 40px 0 60px 0;
  text-align: center;
  font-size: 16px;
  @media screen and (min-width: 1024px) {
    padding: 200px 0 14px 0;
  }
}
</style>

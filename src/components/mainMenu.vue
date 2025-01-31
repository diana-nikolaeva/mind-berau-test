<script setup lang="ts">
import { ref } from 'vue'

const isHidden = ref(true)
function openPhoneMenu() {
  isHidden.value = !isHidden.value
}

const isHiddenSubMenu = ref(true)
function openSubMenu() {
  isHiddenSubMenu.value = !isHiddenSubMenu.value
}
</script>
<template>
  <header>
    <nav>
      <div class="container-main-menu">
        <ul class="top-menu" :class="{ 'top-menu_hidden': isHidden }">
          <li class="top-menu__item" @click="openSubMenu">Товары
            <ul class="top-menu__submenu" :class="{ 'sub-menu_hidden': isHiddenSubMenu }">
            <li class="top-menu__submenu__item">Флотомашины и чаны</li>
            <li class="top-menu__submenu__item">автоматизация</li>
            <li class="top-menu__submenu__item">sn</li>
          </ul>
          </li>
          <li class="top-menu__item">Услуги</li>
          <li class="top-menu__item">Компания</li>
        </ul>
        <div class="container container_phone">
          <div class="btn-order">Оставить заявку</div>
          <div class="contacts contacts_hidden">Контакты</div>
          <a href="#" class="search"></a>
          <div class="toggle-language toggle-language_hidden">EN</div>
          <div @click="openPhoneMenu" class="btn-open-phone-menu">&#9776;</div>
        </div>
      </div>
    </nav>
    <nav>
      <ul class="sub-menu-decktop">
        <li class="sub-menu-decktop__item">Флотомашины и чаны</li>
        <li class="sub-menu-decktop__item">автоматизация</li>
        <li class="sub-menu-decktop__item">sn</li>
      </ul>
    </nav>
  </header>
</template>

<style scooped lang="scss">
.container-main-menu {
  display: flex;
  color: #fff;
  height: 60px;
  align-content: space-between;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  @media screen and (min-width: 1024px) {
    height: 45px;
    width: 80%;
    padding-left: 50px;
    background: #614d49;
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);
  }
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .top-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    background: #614d49;
    padding: 10px 0;
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      position: static;
      height: 100%;
      justify-content: space-around;
    }
    .top-menu__submenu {
      list-style: none;
      background: #e8e1e0;
      color: #7c6e6b;
      @media screen and (min-width: 1024px) {
      display: none
    }
    }
  }
  .top-menu_hidden {
    display: none;
    @media screen and (min-width: 1024px) {
      display: flex;
    }
  }

  .top-menu__item {
    list-style: none;
    text-align: center;
    text-transform: uppercase;
    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
      margin-right: 4em;
    }
  }
}
.container {
  display: flex;
  flex-direction: row;
  height: 100%;
  background: #614d49;
  padding-right: 10px;
  padding-left: 10px;
  align-content: center;
  flex-wrap: wrap;
  clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);
  @media screen and (min-width: 1024px) {
    clip-path: none;
  }
  .search {
    background-image: url('icons/searchIcon.png');
    background-repeat: no-repeat;
    width: 17px;
    margin-left: 20px;
    height: 19px;
    margin-top: 5px;
    @media screen and (min-width: 1024px) {
      margin-top: 12px;
    }
  }
  .btn-order {
    background-color: #311311;
    width: 106px;
    font-size: 12px;
    padding: 8px;
    border-radius: 5px;
    margin-left: 20px;
    text-transform: uppercase;
    box-sizing: content-box;
    @media screen and (min-width: 1024px) {
      padding: 12px 20px;
      width: auto;
    }
  }
  .btn-open-phone-menu {
    margin-left: 20px;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
  .toggle-language {
    margin-left: 20px;
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
      margin-top: 8px;
    }
  }
  .contacts {
    margin-left: 20px;
    &.contacts_hidden {
      display: none;
    }
  }
}
.sub-menu_hidden{
  display: none;
}
.sub-menu-decktop{
  display: none;
  @media screen and (min-width: 1024px){
    display: flex;
    flex-direction: row;
    list-style: none;
    background: #e8e1e0;
    color: #7c6e6b;
    width: 80%;
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);
    height: 45px;
  }

}
</style>

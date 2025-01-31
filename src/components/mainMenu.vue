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
          <li class="top-menu__item top-menu__item_active" @click="openSubMenu">
            <span>Товары</span>
            <ul class="top-menu__submenu" :class="{ 'sub-menu_hidden': isHiddenSubMenu }">
              <li class="top-menu__submenu__item">Флотомашины и чаны</li>
              <li class="top-menu__submenu__item">автоматизация</li>
              <li class="top-menu__submenu__item">sn</li>
            </ul>
          </li>
          <li class="top-menu__item"><span>Услуги</span></li>
          <li class="top-menu__item"><span>Компания</span></li>
        </ul>
        <div class="container container_phone">
          <div class="btn-order">Оставить заявку</div>
          <div class="contacts">Контакты</div>
          <a href="#" class="search"></a>
          <div class="toggle-language toggle-language_hidden">EN</div>
          <div @click="openPhoneMenu" class="btn-open-phone-menu">&#9776;</div>
        </div>
      </div>
    </nav>
    <nav>
      <ul class="sub-menu-decktop">
        <li class="sub-menu-decktop__item"><span>Флотомашины и чаны</span></li>
        <li class="sub-menu-decktop__item sub-menu-decktop__item_active">
          <span>автоматизация</span>
        </li>
        <li class="sub-menu-decktop__item"><span>sn</span></li>
      </ul>
    </nav>
  </header>
</template>

<style scooped lang="scss">

nav{
  @media screen and (min-width: 1024px){
    margin: 0 20px;
  }


}

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
    background: #614d49;
    margin-top: 20px;
  }
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

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
    padding: 0;
    background: transparent;
    margin-left: -10px;
  }
}

.top-menu__submenu {
  list-style: none;
  background: #e8e1e0;
  color: #7c6e6b;
  @media screen and (min-width: 1024px) {
    display: none;
  }
}

.top-menu_hidden {
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
}

.top-menu__item,
.sub-menu-decktop__item {
  list-style: none;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    transform: skew(-23deg); /* Equal to skewX(10deg) */
    background: #614d49;

    padding: 0 15px;
    padding-right: 4em;
  }
  span {
    transform: skew(23deg);
  }
}
.top-menu__item {
  @media screen and (min-width: 1024px) {
    padding-left: 30px;
  }
}

.top-menu__item {
  &:hover,
  &_active {
    background: #e8e1e0;
    color: #7c6e6b;
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
      display: flex;
      align-items: center;
    }
  }
  .contacts {
    margin-left: 20px;
    display: none;
    @media screen and (min-width: 1024px){
      display: flex;
      align-items: center;
    }
  }
}
.sub-menu_hidden {
  display: none;
}
.sub-menu-decktop {
  display: none;
  width: calc(80% + 40px);
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    list-style: none;
    background: #e8e1e0;
    color: #7c6e6b;
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);
    height: 45px;
  }

  .sub-menu-decktop__item {
    @media screen and (min-width: 1024px) {
      background: #e8e1e0;
      margin: 10px 0;
      margin-left: 10px;
      font-size: smaller;
    }
    &:hover,
    &_active {
      background: red;
      color: #fff;
    }
  }
}
</style>

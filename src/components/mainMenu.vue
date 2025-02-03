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
    <div class="wrapper-top-menu">
      <nav>
        <div class="container-main-menu">
          <div class="background"></div>
          <ul class="top-menu" :class="{ 'top-menu_hidden': isHidden }">
            <li class="top-menu__item top-menu__item_active" @click="openSubMenu">
              <a href="#">Товары</a>
              <ul class="top-menu__submenu" :class="{ 'sub-menu_hidden': isHiddenSubMenu }">
                <li class="top-menu__submenu__item">Флотомашины и чаны</li>
                <li class="top-menu__submenu__item">автоматизация</li>
                <li class="top-menu__submenu__item">sn</li>
              </ul>
            </li>
            <li class="top-menu__item"><a href="#">Услуги</a></li>
            <li class="top-menu__item"><a href="#">Компания</a></li>
          </ul>
          <div class="container container_phone">
            <div class="btn-order"><a href="#">Оставить заявку</a></div>
            <div class="contacts"><a href="#">Контакты</a></div>
            <a href="#" class="search"></a>
            <div class="toggle-language toggle-language_hidden"><a href="#">EN</a></div>
            <div @click="openPhoneMenu" class="btn-open-phone-menu"><a href="#">&#9776;</a></div>
          </div>
        </div>
      </nav>
      <nav>
        <ul class="sub-menu-decktop">
          <li class="sub-menu-decktop__item"><a href="#">Флотомашины и чаны</a></li>
          <li class="sub-menu-decktop__item sub-menu-decktop__item_active">
            <a href="#">автоматизация</a>
          </li>
          <li class="sub-menu-decktop__item"><a href="#">sn</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.wrapper-top-menu {
  @media screen and (min-width: 1024px) {
    padding: 0 20px;
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
    width: 85%;
    margin-top: 20px;
    position: relative;
    // clip-path: polygon(10px 0, 100% 0, 100% 100%, -10px 100%, 0 52%);
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
  cursor: pointer;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    transform: skew(-23deg); /* Equal to skewX(10deg) */
    background: #614d49;

    padding: 0 15px;
    padding-right: 4em;
  }
  a {
    transform: skew(23deg);
    text-decoration: none;
    color: #fff;
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
    a {
      color: #7c6e6b;
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
    margin-left: 28px;
    height: 19px;
    margin-top: 13px;
    cursor: pointer;
    @media screen and (min-width: 1024px) {
      margin-top: 12px;
    }
  }
  .btn-order {
    background-color: #311311;
    font-size: 12px;
    padding: 13px 8px 11px 8px;
    border-radius: 5px;
    margin-left: 20px;
    text-transform: uppercase;
    box-sizing: content-box;
    font-weight: 400;
    letter-spacing: 0.48px;
    @media screen and (min-width: 1024px) {
      padding: 12px 20px;
      width: auto;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .btn-open-phone-menu {
    margin-left: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    @media screen and (min-width: 1024px) {
      display: none;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .toggle-language {
    margin-left: 20px;
    display: none;
    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
      cursor: pointer;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .contacts {
    margin-left: 20px;
    display: none;
    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.sub-menu_hidden {
  display: none;
}
.sub-menu-decktop {
  display: none;
  width: calc(85% + 30px);
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    list-style: none;
    background: #e8e1e0;
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%);
    height: 45px;
    a {
      color: #7c6e6b;
    }
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
      background: #b21f24ed;
      a {
        color: #fff;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .background {
    position: absolute;
    background-attachment: red;
    background: #614d49;
    top: 0;
    bottom: 0;
    left: 30px;
    right: 0;
    z-index: -1;
  }
}
</style>

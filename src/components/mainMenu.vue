<template>
  <header>
    <nav>
      <div class="container-main-menu">
          <ul class="top-menu top-menu_hidden">
            <li class="top-menu__item">Товары</li>
            <li  class="top-menu__item">Услуги</li>
            <li  class="top-menu__item">Компания</li>
        </ul>
        <div class="container">
          <div class="btn-order">Оставить заявку</div>
          <div class="contacts contacts_hidden">Контакты</div>
          <a href="#" class="search"></a>
          <div class="toggle-language toggle-language_hidden">EN</div>
          <div class="btn-open-phone-menu">&#9776;</div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scooped lang="scss">
.container-main-menu{
  display: flex;
  background:#614D49;
  color: #fff;
  height: 60px;
  align-content: center;
  flex-wrap: wrap;
@media screen and (min-width:1024px) {
  height: 45px;
}
}
nav{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .top-menu{
    display: flex;
    flex-direction: row;
  }
  .top-menu_hidden{
    display: none;
  }

  .top-menu__item{
    list-style: none;
   }
 }
 .container{
  display: flex;
  flex-direction: row;
  height: 38px;
  padding-right: 10px;
  padding-left: 10px;
  align-content: center;
  flex-wrap: wrap;
  .search{
    background-image: url('icons/searchIcon.png');
    background-repeat: no-repeat;
    width: 17px;
    margin-left: 20px;
    height: 19px;
    margin-top: 5px;
  }
  .btn-order{
    background-color: #311311;
    width: 106px;
    font-size: 12px;
    padding: 8px;
    border-radius: 5px;
    margin-left: 20px;
    text-transform: uppercase;
    box-sizing: content-box;

  }
  .btn-open-phone-menu{
    margin-left: 20px;
  }
  .toggle-language{
    margin-left: 20px;
    &.toggle-language_hidden{
      display: none;
    }
  }
  .contacts{
    margin-left: 20px;
    &.contacts_hidden{
      display: none;
    }
  }
  }

</style>

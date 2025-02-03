<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, numeric, email, minLength } from '@vuelidate/validators';
import { maxLength } from '@vuelidate/validators/dist/index.cjs';

const isSubmitted = ref(false);

const formState = reactive({
  name: '',
  email: '',
  tel:'',
  description:'',
  // file:''
});

const rules = {
  // name: { required: helpers.withMessage('This field cannot be empty', required),  $autoDirty: true },
  name: { required,  $autoDirty: true },
  email: { required, email,  $autoDirty: true },
  tel: {required, numeric, minLength: minLength(11), maxLength: maxLength(11),  $autoDirty: true },
  description: { required,  $autoDirty: true },
  // file:'file'
};

const validate = useVuelidate(rules, formState);


// const filesCount = ref(0);

// const filesCountCheck = () => {
//   const a =  filesCount.value < 4;
//   return a;
// }

// const maxSize = 5* 1024;
// // const maxSize = 300;

// const onChange = () => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const inputDom  = fileInput.value as any;
//   const count = inputDom.value.length;
//   filesCount.value = count;
// }


const onSubmit = async () => {
  isSubmitted.value = true;
  console.log('Submitted', validate.value.tel);
  const isFormCorrect = await validate.value.$validate();
  console.log(isFormCorrect);
}
</script>

<template>
  <div class="modal-window" @submit.prevent>
    <form @submit="onSubmit">
      <div class="btn-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M18 18L6 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="descr-form">Успех начинается с правильных решений. Оставьте здесь свои контакты, и мы свяжемся с вами, чтобы предложить оптимальную технологию по увеличению процента извлекаемости полезного в конечный продукт на вашем предприятии.</div>

      <input name="name" type="text" placeholder="Имя*"  v-model="formState.name" :class="{ 'has-error': isSubmitted && validate.name.$invalid }"/>
      <input name="email" type="email" placeholder="E-Mail*" v-model="formState.email" :class="{ 'has-error': isSubmitted && validate.email.$invalid }"/>
      <input name="tel" type="text" placeholder="Телефон*" v-model="formState.tel" :class="{ 'has-error': isSubmitted && validate.tel.$invalid }"/>




      <input name="description" type="text" placeholder="Описание проекта*" v-model="formState.description" :class="{ 'has-error': isSubmitted && validate.description.$invalid }"/>

      <p v-for="error of validate.$errors" :key="error.$uid">
        {{ error.$message }}
      </p>

          <label class="wrapper-input">
            <input class="input__file" type="file" placeholder="приложить файлы (до трех файлов)"/>
            <span>Приложить Файлы (До Трех Файлов)</span>
            <span class="add-file__icon"><img src="./icons/addFile.svg" alt="выберите файл"></span>
          </label>
      <div>Отправляя эту форму, я принимаю <a href="">политика конфиденциальности</a> этого сайта.</div>

      <button class="btn-rotate" disabled type="submit">отправить</button>
    </form>
</div>
</template>

<style scoped lang="scss">
.modal-window{
  position: fixed;
  top: 0;
  left: 100px;
}
.btn-close{
  width: 24px;
  height: 24px;
  position: absolute;
  right: -24px;
  top: -24px;
  cursor: pointer;
}
form{
display: flex;
width: 595px;
padding: 40px;
flex-direction: column;
align-items: flex-start;
gap: 40px;
border-radius: 4px;
background: #FFF;
position: relative;
color: #614D49;
}
input{
  display: flex;
  padding-bottom: 15px;
  align-items: center;
  align-self: stretch;
  border: 0;
  border-bottom: 1px solid #614D49;
  text-transform: capitalize;
  color: #614D49;
  &::placeholder{
   color: #614D49;
   font-family: "PF Din Text Comp Pro";
  }
}
a{
  color: #614D49;
  font-size: 16px;
}
.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.btn-rotate{
  border: 0;
  color:#fff;
  margin: 0;
  &.btn-rotate_noactive{
    background: grey;
  }
}
.has-error {
  border-bottom-color: red;
  color: red;
  &::placeholder {
    color: red;
    opacity: 1;
  }
}
.wrapper-input {
  border-bottom: 1px solid #614D49;
  width: 100%;
  padding-bottom: 15px;
  position: relative;



  .add-file__icon{
    position: absolute;
    right: 0;
  }
}
</style>



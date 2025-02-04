<script setup lang="ts">
import { Field, Form, defineRule, ErrorMessage} from 'vee-validate';
import { size, image } from '@vee-validate/rules';
import { ref } from 'vue';
import { MaskInput } from "vue-mask-next";

const emit = defineEmits(['close-modal']);

function closeModal(){
  emit('close-modal');
}

defineRule('fileValidation',fileValidation);
defineRule('size',(value: unknown) => {
  const result = size(value, {size: 5 * 1024});
  if (result === true) {
    return result;
  }

  return 'Файл должен быть не более 5 МБ';

});
defineRule('image',(value: unknown) => {
  const result = image(value);
  if (result === true) {
    return result;
  }

  return 'Неправильный формат файлов';

});

const required = (value: unknown) => {
  if (!value) {
    return 'Поле обязательно для заполнения';
  }

  return true;
}

const fileCount = ref(0);
function fileValidation(input: unknown) {
  const value = input as File[];
  fileCount.value = value?.length;
    if (!value || value.length < 4) {
      return true;
    }
    return 'много файлов';
  }

  function validateEmail(value: unknown) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value as string)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    }

function onSubmit(value: unknown) {
  console.log(value);
}

const mask = ref('');

</script>

<template>

    <div class="modal-window">
      <Form   @submit="onSubmit" v-slot="{errorBag, meta}">
      <div class="btn-close" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M18 18L6 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="descr-form">Успех начинается с правильных решений. Оставьте здесь свои контакты, и мы свяжемся с вами, чтобы предложить оптимальную технологию по увеличению процента извлекаемости полезного в конечный продукт на вашем предприятии.</div>
      <Field name="name" type="text" placeholder="Имя*" :class="{ 'has-error': errorBag.name }" :rules="required"/>
      <Field name="email" type="email" placeholder="E-Mail*" :class="{ 'has-error': errorBag.email }" :rules="validateEmail"/>
      <!-- <Field name="tel" type="text" placeholder="Телефон*" :class="{ 'has-error': errorBag.tel }">

      </Field> -->

      <MaskInput  mask="+7 ### ### ## ##" placeholder="Телефон*" />

      <Field name="description" type="text" placeholder="Описание проекта*" :class="{ 'has-error': errorBag.description }" :rules="required"/>
      <label class="wrapper-input" :class="{ 'has-error': errorBag.file }">
        <Field name="file" v-slot="{ handleChange, handleBlur }" :rules="{fileValidation: true, size: true, image: true}">
          <input type="file" @change="handleChange" @blur="handleBlur" class="input__file" placeholder="приложить файлы (до трех файлов)" multiple ref="fileInput"/>
        </Field>
        <ErrorMessage name="file"/>
        <span v-if="!errorBag.file && !fileCount">Приложить Файлы (До Трех Файлов)</span>
        <span v-if="!errorBag.file && fileCount"> Файлов загружено: {{ fileCount }}</span>
        <span class="add-file__icon"><img src="./icons/addFile.svg" alt="выберите файл"></span>
      </label>
      <div>Отправляя эту форму, я принимаю <a href="">политика конфиденциальности</a> этого сайта.</div>

      <button :disabled="!meta.valid" class="btn-rotate" type="submit">отправить</button>
        </Form>
</div>

</template>

<style scoped lang="scss">

.modal-window{
  position: fixed;
  top:50px;
  left: 20px;
  right: 20px;
  width: calc(100% - 40px);
  @media screen and (min-width:1024px) {
    left: 50%;
    top:50%;
    transform: translate(-25%,-50%);
  }



}
.btn-close{
  width: 24px;
  height: 24px;
  position: absolute;
  background: #614D49;
  cursor: pointer;
  right: 10px;
  top: 10px;
  @media screen and (min-width:1024px) {
    right: -24px;
    top: -24px;
    background: none;
  }
}
form{
display: flex;
width: 100%;
max-width: 595px;
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
  &:focus-visible{
    outline: none;
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
  text-transform: uppercase;
  &:disabled{
    background: url('./icons/btn-disabled-bcgr.svg') no-repeat;
    background-size: contain;
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



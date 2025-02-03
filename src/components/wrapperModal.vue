<script setup lang="ts">
  import { defineProps } from 'vue';
  import modalWindow from './modalWindow.vue';

  const emit = defineEmits(['close-modal-wrapper']);

  const props = defineProps({
    modalIsVisible: Boolean
  })

  function onCloseModal() {
    emit('close-modal-wrapper');
  }
</script>

<template>
  <div v-if = "props.modalIsVisible">
    <div class="wrapper-modal"></div>
    <modalWindow @close-modal="onCloseModal"/>
  </div>
</template>

<style scoped>
.wrapper-modal{
  position: fixed;
  background-color: #614D49;
  opacity: 50%;
  top:0vh;
  bottom: 0vh;
  right: 0vh;
  left: 0vh;
}
</style>

<script setup lang="ts">
const modalIsVisible = ref(false)
import MainMenu from './mainMenu.vue'
import videoSection from './videoSection.vue'
import contentBlock from './contentBlock.vue'
import tallBanner from './tallBanner.vue'
import smallBanner from './smallBanner.vue'
import footerBlock from './footerBlock.vue'
import wrapperModal from './wrapperModal.vue'
import { ref } from 'vue'

function showModal() {
  modalIsVisible.value = true
}
function closeModal() {
  modalIsVisible.value = false
}
</script>
<template>
  <MainMenu />
  <videoSection @ask-modal="showModal" />
  <contentBlock />
  <tallBanner />
  <smallBanner />
  <footerBlock />
  <wrapperModal :modalIsVisible="modalIsVisible" @close-modal-wrapper="closeModal" />
</template>

<template>
  <div class="w-11/12 sm:w-6/12 md:w-4/12 lg:w-3/12 h-screen bg-white fixed top-0 shadow-xl flex flex-col modal-content pt-16 pb-12 md:py-12 px-4 overflow-y-auto">
    <button type="button" class="absolute top-0 right-0 m-2 w-10 h-10 text-gray-800" @click="ev => $emit('close-click', ev)">
      <ion-icon name="close-outline"/>
    </button>
    <div class="w-full mb-10">
      <h1 class="text-center text-lg text-gray-800 font-bold">{{ title }}</h1>
    </div>
    <div class="pb-4">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalContent',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css">
  .modal-content {
    right: 0;
  }
</style>

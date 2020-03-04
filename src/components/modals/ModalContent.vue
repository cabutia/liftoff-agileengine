<template>
  <div class="w-11/12 sm:w-6/12 md:w-4/12 lg:w-3/12 h-screen bg-white fixed top-0 shadow-xl flex flex-col modal-content py-12 px-4 overflow-y-auto">
    <div class="w-full mb-10">
      <h1 class="text-center text-lg text-gray-800 font-bold">{{ title }}</h1>
    </div>
    <slot/>
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

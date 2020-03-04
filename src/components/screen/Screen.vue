<template>
  <div class="w-full h-full md:pl-56 pt-20">
    <div class="w-full relative">
      <div class="w-full flex sm:w-11/12 md:w-10/12 mx-auto px-4 md:mt-4">
        <ul class="flex items-center pl-4">
          <li>
            <router-link :to="linkToHome" class="flex items-center text-purple-600">
              <ion-icon name="home-outline"/>
            </router-link>
          </li>
        </ul>
        <div class="text-gray-700 text-2xl font-bold pl-4 ml-4 border-l border-gray-400">
          <h2>{{ title }}</h2>
        </div>
      </div>
      <div class="w-full sm:w-11/12 md:w-10/12 mx-auto px-4 pt-6 md:pt-12">
        <slot name="content"/>
      </div>
      <Loader/>
    </div>
    <slot name="modals"/>
  </div>
</template>

<script>
import Loader from '@/components/screen/Loader'

export default {
  name: 'Screen',
  components: {
    Loader
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    linkToHome () {
      return { name: 'projects.show' }
    }
  }
}
</script>

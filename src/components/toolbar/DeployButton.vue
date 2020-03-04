<template>
  <div class="px-2 flex relative ml-2" @click="ev => $emit('click', ev)">
    <button type="button" class="flex items-center justify-center px-2 bg-purple-500 text-white rounded-full md:rounded-md shadow-lg h-12 w-12 md:w-full md:h-10 whitespace-no-wrap">
      <ion-icon name="paper-plane-outline"/>
      <span class="ml-2 font-bold hidden md:inline">Deploy Project</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DeployButton'
}
</script>

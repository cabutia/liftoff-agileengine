<template>
  <div class="w-full">
    <label :for="name" class="text-xs uppercase text-gray-600">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'InputLabel',
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    }
  }
}
</script>

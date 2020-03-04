<template>
  <div class="loader" v-if="visible">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>

export default {
  name: 'MiniLoader',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .loader {
    @apply .absolute .top-0 .left-0 .w-full .h-full .bg-gray-100 .flex .items-center .justify-center;
    opacity: 0.95;
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 10px;
    height: 10px;
  }
  .lds-ellipsis div {
    @apply .bg-gray-700;
    position: absolute;
    top: 4px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 1px;
    animation: lds-ellipsis1 1s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 1px;
    animation: lds-ellipsis2 1s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 6px;
    animation: lds-ellipsis2 1s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 12px;
    animation: lds-ellipsis3 1s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(6px, 0);
    }
  }
</style>

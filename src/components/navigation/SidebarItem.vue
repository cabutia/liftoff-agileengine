<template>
  <li class="sidebar-item">
    <router-link :to="link" v-if="!external && link">
      <ion-icon :name="icon" v-if="icon"/>
      <span>{{ label }}</span>
    </router-link>
    <a :href="link ? link : '#'" v-if="external || !link">
      <ion-icon :name="icon" v-if="icon"/>
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    link: {
      type: [Object, String],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    external: {
      type: Boolean,
      default: false
    }
  }
}
</script>

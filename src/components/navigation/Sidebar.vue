<template>
  <div class="sidebar" :class="{ active: sidebarActive }">
    <div class="w-full px-4 py-4 flex justify-between items-center">
      <h1 class="text-xl uppercase text-center font-display font-bold text-gray-800">Liftoff</h1>
      <button type="button" class="h-10 w-10 flex md:hidden items-center justify-center" @click="toggleSidebar">
        <ion-icon name="close"/>
      </button>
    </div>
    <div class="w-full px-2">
      <SidebarGroup
        v-for="(group, i) in sidebar.groups" :key="i"
        :title="group.title">
        <SidebarItem
          v-for="(item, k) in group.items" :key="k"
          :label="item.label"
          :icon="item.icon"
          :external="item.external"
          :link="item.external ? null : item.link"/>
      </SidebarGroup>
    </div>
  </div>
</template>

<script>
import SidebarGroup from '@/components/navigation/SidebarGroup'
import SidebarItem from '@/components/navigation/SidebarItem'
import eventService from '@/services/eventService'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    SidebarGroup,
    SidebarItem
  },
  data () {
    return {
      sidebarActive: false
    }
  },
  mounted () {
    this.listenForSidebarUpdates()
  },
  methods: {
    listenForSidebarUpdates () {
      eventService.on(eventService.events.sidebar.toggle, this.toggleSidebar)
    },
    toggleSidebar () {
      this.sidebarActive = !this.sidebarActive
      this.setBodyOverflow()
    },
    setBodyOverflow () {
      document.body.style.overflow = this.sidebarActive ? 'hidden' : 'initial'
    }
  },
  computed: {
    ...mapGetters({
      sidebar: 'user/sidebar'
    })
  }
}
</script>

<style>
  .sidebar {
    @apply .fixed .bg-white .h-screen .w-56 .shadow-xl .z-20 .overflow-y-auto;
    transition: left .15s ease;
  }

  @media screen and (min-width: 769px) {
    left: 0;
  }

  @media screen and (max-width: 768px) {
      .sidebar {
        left: -100%;
      }

      .sidebar.active {
        left: 0;
      }
    }
</style>

<template>
  <div class="w-full flex flex-row items-center fixed top-0 left-0">
    <div class="ml-56 flex w-full p-4">
      <div class="flex items-center justify-between w-full bg-white rounded-md shadow-lg h-10 toolbar">
        <div class="flex">
          <div class="flex px-1">
            <ToolbarButton icon="person-circle-outline">
              <span class="text-gray-800 ml-1 whitespace-no-wrap hidden md:inline">
                {{ currentUser.name }}
              </span>
            </ToolbarButton>
          </div>
          <div class="flex px-1">
            <ToolbarButton tooltip="Projects" icon="apps-outline" @click="showProjectsModal"/>
            <ToolbarButton tooltip="Servers" icon="server-outline"/>
            <ToolbarButton tooltip="Routines" icon="layers-outline"/>
            <ToolbarButton tooltip="Repository" icon="git-branch-outline"/>
          </div>
        </div>
        <div class="flex px-1">
          <ToolbarButton tooltip="Notifications" icon="notifications-outline"/>
          <ToolbarButton tooltip="Language" icon="language-outline">
            <span class="text-gray-800 ml-1">
              {{ currentUser.lang | uppercase }}
            </span>
          </ToolbarButton>
          <ToolbarButton icon="exit-outline">
            <span class="text-gray-800 ml-1">Logout</span>
          </ToolbarButton>
        </div>
      </div>
      <DeployButton @click="showDeployModal"/>
    </div>
  </div>
</template>

<script>
import DeployButton from '@/components/toolbar/DeployButton'
import ToolbarButton from '@/components/toolbar/ToolbarButton'
import eventService from '@/services/eventService'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    DeployButton,
    ToolbarButton
  },
  methods: {
    showDeployModal () {
      eventService.emit(eventService.events.modals.show, 'DeployProjectModal')
    },
    showProjectsModal () {
      eventService.emit(eventService.events.modals.show, 'ProjectsModal')
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser'
    })
  },
  filters: {
    uppercase (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<template>
  <Modal name="ProjectsModal" title="Select project">
    <div class="w-full flex flex-row flex-wrap">
      <button
        class="w-full flex items-center border-b border-gray-200 hover:bg-gray-200 px-2 py-4 cursor-pointer text-left"
        @click="showAddProjectModal">
        <div class="flex items-center mr-1">
          <ion-icon name="add-outline"/>
        </div>
        <span class="text-gray-700 text-sm font-bold pl-2">New project</span>
      </button>
      <button
        class="w-full border-b border-gray-200 hover:bg-gray-200 px-2 py-4 cursor-pointer text-left"
        v-for="project in orderedProjects"
        :key="project.id"
        @click="() => setCurrentProject(project)">
        <span class="text-gray-700 text-sm font-bold">{{ project.name }}</span><br>
        <span class="text-sm text-gray-500">
          {{ project.provider | capitalize}}
          {{ project.repositoryUrl }}
        </span>
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/modals/Modal'
import { mapGetters } from 'vuex'
import eventService from '@/services/eventService'

export default {
  name: 'ProjectsModal',
  components: {
    Modal
  },
  methods: {
    setCurrentProject (project) {
      eventService.emit(eventService.events.loaders.show)
      this.$store.dispatch('projects/setCurrentProject', project)
      eventService.emit(eventService.events.modals.hide, 'ProjectsModal')
      setTimeout(() => {
        eventService.emit(eventService.events.loaders.hide)
      }, 500)
    },
    showAddProjectModal () {
      eventService.emit(eventService.events.modals.hide, 'ProjectsModal')
      eventService.emit(eventService.events.modals.show, 'AddProjectModal')
    }
  },
  computed: {
    ...mapGetters({
      projects: 'projects/projects',
      currentProject: 'projects/currentProject'
    }),
    orderedProjects () {
      const projects = [...this.projects]
      return projects.reverse()
    }
  },
  filters: {
    capitalize (value) {
      return value[0].toUpperCase() + value.substr(1)
    }
  }
}
</script>

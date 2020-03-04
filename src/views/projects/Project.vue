<template>
  <Screen :title="currentProject.name">
    <template slot="content">
      <div class="w-full flex flex-row flex-wrap">
        <div class="px-2 w-full md:w-1/3 mb-4">
          <div class="bg-white rounded shadow-sm p-4 w-full">
            <div class="h-16 w-16 rounded-full mx-auto my-8 bg-purple-100 flex items-center justify-center text-3xl text-purple-500">
              <ion-icon name="american-football-outline"/>
            </div>
            <p class="text-xl text-gray-700 font-bold text-center">
              {{ currentProject.overview.totalDeploys }}
            </p>
            <p class="text-sm text-gray-500 text-center">Total deploys</p>
          </div>
        </div>
        <div class="px-2 w-full md:w-1/3 mb-4">
          <div class="bg-white rounded shadow-sm p-4 w-full">
            <div class="h-16 w-16 rounded-full mx-auto my-8 bg-orange-100 flex items-center justify-center text-3xl text-orange-500">
              <ion-icon name="git-branch-outline"/>
            </div>
            <p class="text-xl text-gray-700 font-bold text-center">
              {{ currentProject.overview.currentCommit }}
            </p>
            <p class="text-sm text-gray-500 text-center">Current commit</p>
          </div>
        </div>
        <div class="px-2 w-full md:w-1/3 mb-4">
          <div class="bg-white rounded shadow-sm p-4 w-full">
            <div class="h-16 w-16 rounded-full mx-auto my-8 bg-green-100 flex items-center justify-center text-3xl text-green-500">
              <ion-icon name="timer-outline"/>
            </div>
            <p class="text-xl text-gray-700 font-bold text-center">
              {{ currentProject.overview.lastDeployDuration | formatDurationUnit }}
            </p>
            <p class="text-sm text-gray-500 text-center">Last duration</p>
          </div>
        </div>
      </div>
    </template>
    <template slot="modals">
      <DeployProjectModal/>
      <AddProjectModal/>
      <ProjectsModal/>
    </template>
  </Screen>
</template>

<script>
import Screen from '@/components/screen/Screen'
import DeployProjectModal from '@/views/projects/modals/DeployProjectModal'
import AddProjectModal from '@/views/projects/modals/AddProjectModal'
import ProjectsModal from '@/views/projects/modals/ProjectsModal'
import { mapGetters } from 'vuex'

export default {
  name: 'Project',
  components: {
    Screen,
    DeployProjectModal,
    AddProjectModal,
    ProjectsModal
  },
  computed: {
    ...mapGetters({
      currentProject: 'projects/currentProject'
    })
  },
  filters: {
    formatDurationUnit (value) {
      const division = (value / 60).toFixed(2)
      const val = value > 120 ? division : value
      const unit = value > 120 ? 'm' : 's'
      return val + unit
    }
  }
}
</script>

<template>
  <Screen title="Deploying">
    <template slot="content">
      <p class="text-sm text-gray-700">The main idea here, is that this view component is connected via Laravel Echo to our API.</p>
      <p class="text-sm text-gray-700">Now, each job in the fake que will run for a specified amount of time, with the setTimeout function.</p>

      <div class="w-full flex flex-col flex-wrap mt-8">
        <transition-group name="task">
          <div class="w-full flex items-center justify-between deploy-task mb-2 rounded" :class="getClassesForTaskStatus(task.status)" v-for="task in tasks" :key="task.id">
            <div class="w-auto mr-auto flex items-center px-2">
              <p class="text-sm">{{ task.name }}</p>
            </div>
            <div class="h-12 w-12 flex items-center justify-center" v-if="task.status < 1">
              <button type="button" class="flex items-center justify-center p-2 hover:shadow hover:bg-white rounded">
                <ion-icon name="terminal-outline"/>
              </button>
            </div>
            <div class="h-12 w-12 flex items-center justify-center">
              <ion-icon name="checkmark-done-outline" v-if="task.status === 0"/>
              <p v-if="task.status === 1">...</p>
            </div>
          </div>
        </transition-group>
      </div>
    </template>
    <template slot="modals">
      <DeployProjectModal/>
    </template>
  </Screen>
</template>

<script>
import Screen from '@/components/screen/Screen'
import DeployProjectModal from '@/views/projects/modals/DeployProjectModal'
import eventService from '@/services/eventService'

export default {
  name: 'Deploy',
  components: {
    Screen,
    DeployProjectModal
  },
  data () {
    return {
      loading: true,

      dummyTasks: [{
        id: 1,
        name: 'Clone new release',
        status: 2
      }, {
        id: 2,
        name: 'Install composer dependencies',
        status: 2
      }, {
        id: 3,
        name: 'Run migrations',
        status: 2
      }, {
        id: 4,
        name: 'Install npm dependencies',
        status: 2
      }, {
        id: 5,
        name: 'Build npm assets',
        status: 2
      }, {
        id: 6,
        name: 'Reload FPM',
        status: 2
      }]
    }
  },
  mounted () {
    this.listenForTaskUpdate()
    this.slowlyUpdateTasks()
  },
  methods: {
    slowlyUpdateTasks () {
      const sequence = [
        { taskId: 1, status: 1, timeout: 1 },
        { taskId: 1, status: 0, timeout: 2 },
        { taskId: 2, status: 1, timeout: 2 },
        { taskId: 2, status: 0, timeout: 3 },
        { taskId: 3, status: 1, timeout: 3 },
        { taskId: 3, status: 0, timeout: 4 },
        { taskId: 4, status: 1, timeout: 4 },
        { taskId: 4, status: 0, timeout: 5 },
        { taskId: 5, status: 1, timeout: 5 },
        { taskId: 5, status: 0, timeout: 6 },
        { taskId: 6, status: 1, timeout: 6 },
        { taskId: 6, status: 0, timeout: 7 }
      ]
      for (let i = 0; i < sequence.length; i++) {
        const taskUpdate = sequence[i]
        setTimeout(() => {
          eventService.emit(eventService.events.tasks.updated, {
            id: taskUpdate.taskId,
            status: taskUpdate.status
          })
        }, taskUpdate.timeout * 1000)
      }
    },
    listenForTaskUpdate () {
      eventService.on(eventService.events.tasks.updated, this.updateTask)
    },
    updateTask (updatedTask) {
      const task = this.dummyTasks.find(task => task.id === updatedTask.id)
      task.status = updatedTask.status
    },
    getClassesForTaskStatus (status) {
      if (status === 0) {
        return 'bg-green-200'
      }
      if (status === 1) {
        return 'bg-white'
      }
    },
    getIconForTaskStatus (status) {
      if (status === 0) {
        return 'bg-gray-200'
      }
      if (status === 1) {
        return 'bg-white'
      }
    }
  },
  computed: {
    tasks () {
      return this.dummyTasks.filter(task => task.status < 2)
    }
  }
}
</script>

<style>
  .deploy-task:last-child {
    @apply .shadow-lg;
  }

  .task-enter,
  .task-leave-to {
    opacity: 0;
    visibility: hidden;
    transform: scaleY(0.6) translateY(-50%);
  }

  .task-enter-to,
  .task-leave {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1) translateY(0);
  }

  .task-enter-active,
  .task-leave-active {
    transition: opacity .2s ease,
                visibility .2s ease,
                transform .2s ease;
  }
</style>

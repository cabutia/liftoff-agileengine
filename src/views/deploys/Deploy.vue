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
            <div class="h-12 w-12 flex items-center justify-center">
              <ion-icon name="checkmark-done-outline" v-if="task.status === 0"/>
              <p v-if="task.status === 1">...</p>
            </div>
          </div>
        </transition-group>
      </div>
    </template>
  </Screen>
</template>

<script>
import Screen from '@/components/screen/Screen'

export default {
  name: 'Deploy',
  components: {
    Screen
  },
  data () {
    return {
      loading: true,
      tasks: [],
      dummyTasks: [{
        id: 1,
        name: 'Clone new release',
        status: 0
      }, {
        id: 2,
        name: 'Install composer dependencies',
        status: 0
      }, {
        id: 3,
        name: 'Run migrations',
        status: 1
      }]
    }
  },
  mounted () {
    this.slowlyLoadTasks()
  },
  methods: {
    slowlyLoadTasks () {
      for (let i = 0; i < this.dummyTasks.length; i++) {
        setTimeout(() => {
          this.$set(this.tasks, i, this.dummyTasks[i])
        }, i * 1500)
      }
    },
    getClassesForTaskStatus (status) {
      if (status === 0) {
        return 'bg-gray-200'
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

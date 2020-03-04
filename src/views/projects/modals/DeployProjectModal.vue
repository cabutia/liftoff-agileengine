<template>
  <Modal name="DeployProjectModal" title="Deploy Project">
    <SelectInput label="Select target">
      <option v-for="(target, i) in currentProject.targets" :key="i" :value="target.name">
        {{ target.name }}
      </option>
    </SelectInput>
    <SelectInput label="Select server">
      <option v-for="server in currentProject.servers" :key="server.id" :value="server.id">
        {{ server.name }}
      </option>
    </SelectInput>
    <ModalButton label="Deploy project" classes="bg-purple-600 text-white" icon="paper-plane-outline" @click="runFakeDeploy"/>
  </Modal>
</template>

<script>
import Modal from '@/components/modals/Modal'
import ModalButton from '@/components/modals/ModalButton'
import SelectInput from '@/components/forms/SelectInput'
import { mapGetters } from 'vuex'

export default {
  name: 'DeployProjectModal',
  components: {
    Modal,
    ModalButton,
    SelectInput
  },
  data () {
    return {
      project: {
        name: '',
        provider: '',
        providerUrl: ''
      }
    }
  },
  methods: {
    updateProvider (value) {
      this.project.provider = value
    },
    runFakeDeploy () {
      this.$router.push({
        name: 'projects.deploy'
      })
    }
  },
  computed: {
    ...mapGetters({
      currentProject: 'projects/currentProject'
    })
  }
}
</script>

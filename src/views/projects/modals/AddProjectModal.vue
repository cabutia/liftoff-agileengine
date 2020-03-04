<template>
  <Modal name="AddProjectModal" title="New Project">
    <TextInput name="name" label="Project name" placeholder="My awesome project" v-model="project.name"/>
    <div class="w-full flex flex-col">
      <InputLabel label="Repository provider"/>
      <RadioInput name="provider" value="github" label="Github" @input="updateProvider"/>
      <RadioInput name="provider" value="gitlab" label="Gitlab" @input="updateProvider"/>
    </div>
    <TextInput name="providerUrl" label="Repository url" placeholder="myuser/myrepository" v-model="project.providerUrl"/>
    <ModalButton label="Save project" classes="bg-purple-600 text-white" icon="save-outline"/>
  </Modal>
</template>

<script>
import Modal from '@/components/modals/Modal'
import TextInput from '@/components/forms/TextInput'
import RadioInput from '@/components/forms/RadioInput'
import InputLabel from '@/components/forms/InputLabel'
import ModalButton from '@/components/modals/ModalButton'

export default {
  name: 'AddProjectModal',
  components: {
    Modal,
    TextInput,
    RadioInput,
    InputLabel,
    ModalButton
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
    }
  }
}
</script>

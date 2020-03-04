<template>
  <div id="app">
    <Navbar/>
    <Sidebar/>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '@/components/navigation/Sidebar'
import Navbar from '@/components/navigation/Navbar'
export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>

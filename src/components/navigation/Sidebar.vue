<template>
  <div class="fixed bg-white h-screen w-56 shadow-xl">
    <div class="w-full px-2 py-4">
      <h1 class="text-xl uppercase text-center font-display font-bold text-gray-800">Liftoff</h1>
    </div>
    <div class="w-full px-2">
      <SidebarGroup title="General">
        <SidebarItem label="Dashboard" icon="home-outline" external/>
      </SidebarGroup>
      <SidebarGroup title="Profile">
        <SidebarItem label="Settings" icon="person-circle-outline"/>
        <SidebarItem label="Invitations" icon="mail-unread-outline"/>
        <SidebarItem label="Billing" icon="card-outline"/>
      </SidebarGroup>
      <SidebarGroup title="Project">
        <SidebarItem label="Settings" icon="cog-outline"/>
        <SidebarItem label="Integrations" icon="logo-github"/>
        <SidebarItem label="Servers" icon="server-outline"/>
        <SidebarItem label="Routines" icon="layers-outline"/>
      </SidebarGroup>
      <SidebarGroup title="Deployments">
        <SidebarItem label="Deployments" icon="paper-plane-outline"/>
        <SidebarItem label="Statistics" icon="bar-chart-outline"/>
      </SidebarGroup>
    </div>
  </div>
</template>

<script>
import SidebarGroup from '@/components/navigation/SidebarGroup'
import SidebarItem from '@/components/navigation/SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    SidebarGroup,
    SidebarItem
  }
}
</script>

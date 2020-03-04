export default {
  user: {
    name: 'Leandro Gomez',
    email: 'leandrogrotnig11@gmail.com',
    lang: 'es'
  },
  availableLangs: ['es', 'en', 'pt'],
  sidebar: {
    groups: [{
      title: 'General',
      items: [{
        icon: 'home-outline',
        label: 'Dashboard',
        external: true
      }]
    }, {
      title: 'Profile',
      items: [{
        icon: 'person-circle-outline',
        label: 'Settings',
        external: true
      }, {
        icon: 'mail-unread-outline',
        label: 'Invitations',
        external: true
      }, {
        icon: 'card-outline',
        label: 'Billing',
        external: true
      }]
    }, {
      title: 'Project',
      items: [{
        icon: 'cog-outline',
        label: 'Settings',
        external: true
      }, {
        icon: 'logo-github',
        label: 'Integrations',
        external: true
      }, {
        icon: 'server-outline',
        label: 'Servers',
        external: true
      }, {
        icon: 'layers-outline',
        label: 'Routines',
        external: true
      }]
    }, {
      title: 'Deployments',
      items: [{
        icon: 'paper-plane-outline',
        label: 'Deployments',
        external: true
      }, {
        icon: 'bar-chart-outline',
        label: 'Statistics',
        external: true
      }]
    }]
  }
}

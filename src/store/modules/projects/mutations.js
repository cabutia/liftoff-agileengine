export default {
  setCurrentProject: (state, payload) => {
    state.currentProject = payload
    state.currentProject.overview = {
      totalDeploys: 42,
      currentCommit: '53abee',
      lastDeployDuration: 154
    }
    state.currentProject.targets = [{
      name: 'master',
      type: 'branch'
    }, {
      name: '0.0.1',
      type: 'tag'
    }]
    state.currentProject.servers = [{
      id: 1,
      name: 'Localhost',
      ipAddress: '127.0.0.1',
      port: 22,
      connectAs: 'liftoff',
      root: '/var/www/liftoff'
    }, {
      id: 2,
      name: 'QA',
      ipAddress: '123.123.123.123',
      port: 22,
      connectAs: 'liftoff',
      root: '/var/www/liftoff'
    }]
  },
  addProject: (state, project) => {
    const lastId = state.projects.reverse()[0].id
    project.id = lastId + 1
    state.projects.push(project)
  }
}

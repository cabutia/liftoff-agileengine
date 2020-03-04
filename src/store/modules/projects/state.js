export default {
  projects: [{
    id: 1,
    name: 'Lifotff - Vue front',
    provider: 'github',
    repositoryUrl: 'leandro-grg/liftoff-front'
  }, {
    id: 2,
    name: 'Lifotff - API',
    provider: 'github',
    repositoryUrl: 'leandro-grg/liftoff-api'
  }, {
    id: 3,
    name: 'AgileEngine',
    provider: 'github',
    repositoryUrl: 'leandro-grg/liftoff-agileengine'
  }],
  currentProject: {
    id: 3,
    name: 'AgileEngine',
    provider: 'github',
    repositoryUrl: 'leandro-grg/liftoff-agileengine',
    overview: {
      totalDeploys: 42,
      currentCommit: '53abee',
      lastDeployDuration: 154
    },
    targets: [{
      name: 'master',
      type: 'branch'
    }, {
      name: '0.0.1',
      type: 'tag'
    }],
    servers: [{
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
  }
}

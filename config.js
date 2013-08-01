module.exports = {
  app: {
    port: 13000
  },
  database: {
      name: 'soundtrack'
    , host: 'localhost'
  },
  sessions: {
      key: 'put yourself a fancy little key here'
  },
  connection: {
      clientTimeout: 2 * 60 * 1000
    , checkInterval: 30 * 1000
  }
}
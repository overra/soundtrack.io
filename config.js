module.exports = {
  app: {
    port: 13000
  },
  database: {
      name: process.env.SOUNDTRACK_DB_NAME || 'soundtrack'
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
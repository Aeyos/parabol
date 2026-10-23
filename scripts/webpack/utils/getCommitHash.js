const cp = require('child_process')

const getCommitHash = () =>
  process.env.COMMIT_HASH || cp.execSync('git rev-parse HEAD').toString().trim()

module.exports = getCommitHash

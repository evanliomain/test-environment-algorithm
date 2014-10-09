module.exports = {
  watch_unit: {
    options: {
      logConcurrentOutput: true,
      limit: 6
    },
    tasks: ['watch:js', 'watch:unit', 'watch:spec_unit']
  }
}

Package.describe({
  name: 'milligram:milligram-themes',
  version: '0.0.2',
  summary: 'A minimalist CSS framework for Themes.',
  git: 'https://github.com/milligram/milligram-themes.git',
  documentation: 'readme.md',
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0')
  api.addFiles(['dist/milligram.sass'], 'client')
})

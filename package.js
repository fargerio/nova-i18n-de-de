Package.describe({
  name: "fargerio:nova-i18n-de-de",
  summary: "Telescope i18n package (de_DE)",
  version: "0.26.5-nova",
  git: "https://github.com/fargerio/nova-i18n-de-de"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'nova:core@0.26.5-nova'
  ]);

  api.addFiles([
    'lib/de_DE.js'
  ], ["client", "server"]);
});

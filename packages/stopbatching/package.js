Package.describe({
  name: "stopbatching"
});

Package.onUse(function(api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'meteor-base@1.0.4'
  ]);

  api.addFiles([
    'stop.js'
  ], ['client']);

});

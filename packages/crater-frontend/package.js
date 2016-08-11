Package.describe({
  name: "crater-frontend"
});

Package.onUse(function(api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([

    'ecmascript',
    
    'nova:core',
    'nova:posts',
    'nova:users',
    'nova:base-components',
    'nova:newsletter',
    'nova:forms-tags',
    'fourseven:scss',
  ]);

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

  api.addFiles([
    'lib/stylesheets/main.scss',
  ], ['client']);

});

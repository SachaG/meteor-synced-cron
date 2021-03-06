Package.describe({
  summary: "Allows you to define and run scheduled jobs across multiple servers.",
  version: "0.2.3",
  name: "percolatestudio:synced-cron",
  git: "https://github.com/percolatestudio/meteor-synced-cron.git"
});

Npm.depends({later: "1.1.6", sinon: "1.10.2"});

Package.onUse(function (api) {
  api.use(['underscore', 'check'], 'server');
  
  api.add_files(['synced-cron-server.js'], "server");
  
  api.export('SyncedCron', 'server');
});

Package.onTest(function (api) {
  api.use(['synced-cron', 'tinytest']);
  api.add_files('synced-cron-tests.js', ['server']);
});
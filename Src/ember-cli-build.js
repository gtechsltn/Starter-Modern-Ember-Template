'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    emberData: {
      deprecations: {
        // New projects can safely leave this deprecation disabled.
        // If upgrading, to opt-into the deprecated behavior, set this to true and then follow:
        // https://deprecations.emberjs.com/id/ember-data-deprecate-store-extends-ember-object
        // before upgrading to Ember Data 6.0
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
    },
    // Add options here

  });

  // Import Font-Awesome 4.7.0 CSS
  app.import('public/assets/css/font-awesome.min.css');
  // app.import('node_modules/font-awesome/css/font-awesome.min.css');
  // ['eot', 'svg', 'ttf', 'woff', 'woff2'].forEach(ext => {
  //   app.import(`node_modules/font-awesome/fonts/fontawesome-webfont.${ext}`, {
  //     destDir: 'fonts'
  //   });
  // });

  app.import('node_modules/jquery/dist/jquery.min.js');
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');

  // Import from local vendor directory
  // app.import('./vendor/jquery-3.7.1.min.js');
  // app.import('./vendor/bootstrap.min.js');
  // app.import('./vendor/bootstrap.min.css');

  return app.toTree();
};

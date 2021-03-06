/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
      fingerprint: {
          enabled: false // TODO: remove this later
      }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  var extraAssets = new Funnel('bower_components/font-awesome/fonts', {
      destDir: '/fonts'
  });

  app.import('bower_components/mapbox.js/mapbox.js', { type: 'vendor' });
  app.import('bower_components/mapbox.js/mapbox.css');
  app.import('bower_components/leaflet.draw/dist/leaflet.draw.css');
  app.import('bower_components/leaflet.draw/dist/leaflet.draw.js');
  app.import('bower_components/leaflet.locatecontrol/dist/L.Control.Locate.mapbox.css');
  app.import('bower_components/leaflet.locatecontrol/dist/L.Control.Locate.min.js');
  app.import('vendor/leaflet-google.js');

  return app.toTree(extraAssets);
};

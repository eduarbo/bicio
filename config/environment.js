/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'bicio',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        contentSecurityPolicy: {
            'default-src': "'none'",
            'script-src': "'self' mt1.googleapis.com maps.googleapis.com mt0.googleapis.com 'unsafe-eval'",
            'font-src': "'self' fonts.gstatic.com fonts.googleapis.com",
            'connect-src': "'self' api.googleapis.com a.tiles.mapbox.com b.tiles.mapbox.com",
            'img-src': "'self' data: api.tiles.mapbox.com mt0.googleapis.com mt1.googleapis.com csi.gstatic.com maps.gstatic.com maps.googleapis.com api.mapbox.com a.tiles.mapbox.com b.tiles.mapbox.com",
            'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
            'media-src': "'self'"
        },
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};

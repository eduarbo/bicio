/* global L */
import Ember from 'ember';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

L.mapbox.accessToken = 'pk.eyJ1IjoiZWR1YXJibyIsImEiOiJjaWZ3MnFzbDYyZXB0dW5seWdsODZjYWgwIn0.0qLugYTbO45br1AYDU9I9Q';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

import Ember from 'ember';

var MapBoxComponent = Ember.Component.extend({
  classNames: ['map'],

  initMap: function () {
    L.mapbox.map(this.$()[0], 'mapbox.streets').setView([40, -74.50], 9);
  }.on('didInsertElement')
});

export default MapBoxComponent;

/* global L */
import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['map'],
    map: null, // Cache Leaflet Map object

    initMap: function () {
        const $map = this.$().get(0);
        const map = L.mapbox.map($map);

         // Initialise the FeatureGroup to store editable layers
        const drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);

        // Initialise the draw control and pass it the FeatureGroup of editable layers
        const drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        });
        map.addControl(drawControl);

        // display 'show me where I am' button
        map.addControl(new L.control.locate());

        // center map in current position
        map.locate({
            setView: true,
            maxZoom: 14
        });

        // Add Google map layer
        map.addLayer(new L.Google('ROADMAP'));

        this.set('map', map);

        // Setup map event listeners
        map.on('draw:created', this._onDrawCreated, this);
        map.on('locationfound', this._onLocationFound, this);

        Ember.debug(`[map-box] creating ${this.toString()}`);
    }.on('didInsertElement'),

    destroyMap: function () {
        if (this.get('map')) {
            Ember.debug(`[map-box] destroying ${this.toString()}`);
            this.set('map', null);
        }
    }.on('willDestroyElement'),


    // Map events ////////////////////////////////////////////////////////// {{{

    _onDrawCreated: function (e) {
        var type = e.layerType,
            layer = e.layer,
            map = this.get('map');

        if (type === 'marker') {
            // Do marker specific actions
        }

        // Do whatever else you need to. (save to db, add to map etc)
        map.addLayer(layer);
    },

    _onLocationFound: function (e) {
        var radius = e.accuracy / 2,
            map = this.get('map');

        L.marker(e.latlng).addTo(map);
        L.circle(e.latlng, radius).addTo(map);
    }
    // }}}
});

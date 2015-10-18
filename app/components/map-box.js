export default Ember.Component.extend({
    map: null,

    initMap: function () {
        const $map = this.$('.map').get(0);
        // const map = new google.maps.Map($map, {
        //     center: new google.maps.LatLng(40.718217, -73.998284),
        //     zoom: 13,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // });
        const map = L.mapbox.map($map, 'mapbox.run-bike-hike').setView([40, -74.50], 9);

        const featureGroup = L.featureGroup().addTo(map);

        new L.Control.Draw({
            edit: {
                featureGroup: featureGroup
            }
        }).addTo(map);

        map.on('draw:created', function (e) {
            featureGroup.addLayer(e.layer);
        })

        Ember.debug(`[map-box] creating ${this.toString()}`);
        this.set('map', map);
    }.on('didInsertElement'),

    destroyMap: function () {
        if (this.get('map')) {
            Ember.debug(`[map-box] destroying ${this.toString()}`);
            this.set('map', null);
        }
    }.on('willDestroyElement')
});

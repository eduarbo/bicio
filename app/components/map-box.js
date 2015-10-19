export default Ember.Component.extend({
    map: null,

    initMap: function () {
        const $map = this.$('.map').get(0);
        // const map = new google.maps.Map($map, {
        //     center: new google.maps.LatLng(40.718217, -73.998284),
        //     zoom: 13,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // });
        const map = L.mapbox.map($map, 'eduarbo.no42ckmo')
            .locate({setView: true, maxZoom: 14});

        // display 'show me where I am' button
        L.control.locate().addTo(map);

        const featureGroup = L.featureGroup().addTo(map);

        new L.Control.Draw({
            edit: {
                featureGroup: featureGroup
            }
        }).addTo(map);

        // Events
        map.on('draw:created', function (e) {
            featureGroup.addLayer(e.layer);
        });
        map.on('locationfound', this.onLocationFound.bind(this));

        Ember.debug(`[map-box] creating ${this.toString()}`);
        this.set('map', map);
    }.on('didInsertElement'),

    destroyMap: function () {
        if (this.get('map')) {
            Ember.debug(`[map-box] destroying ${this.toString()}`);
            this.set('map', null);
        }
    }.on('willDestroyElement'),

    onLocationFound: function (e) {
        var radius = e.accuracy / 2,
            map = this.get('map');

        L.marker(e.latlng).addTo(map);

        L.circle(e.latlng, radius).addTo(map);
    }
});

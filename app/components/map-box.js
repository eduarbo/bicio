export default Ember.Component.extend({
    initMap: function () {
        const map = L.mapbox.map(this.$('.map').get(0), 'mapbox.run-bike-hike').setView([40, -74.50], 9);
        
        const featureGroup = L.featureGroup().addTo(map);
        const drawControl = new L.Control.Draw({
            edit: {
                featureGroup: featureGroup
            }
        }).addTo(map);

        map.on('draw:created', function (e) {
            featureGroup.addLayer(e.layer);
        });
    }.on('didInsertElement')
});

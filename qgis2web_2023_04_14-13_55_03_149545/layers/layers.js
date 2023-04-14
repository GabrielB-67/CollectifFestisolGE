var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1 = new ol.format.GeoJSON();
var features_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1 = format_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1.readFeatures(json_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1.addFeatures(features_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1);
var lyr_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1, 
                style: style_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1,
                interactive: true,
                title: '<img src="styles/legend/ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1.png" /> Liste Collectif Festisol GE — liste_collectif_festisol_ge__carto'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1];
lyr_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1.set('fieldAliases', {'fid': 'fid', 'Nom du collectif': 'Nom du collectif', 'Adresse': 'Adresse', 'Ville': 'Ville', 'latitude': 'latitude', 'longitude': 'longitude', 'Contact': 'Contact', 'Fonction': 'Fonction', 'Mail': 'Mail', 'Numero': 'Numero', 'Site Internet': 'Site Internet', });
lyr_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1.set('fieldImages', {'fid': 'Hidden', 'Nom du collectif': 'TextEdit', 'Adresse': 'TextEdit', 'Ville': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', 'Contact': 'TextEdit', 'Fonction': 'TextEdit', 'Mail': 'TextEdit', 'Numero': 'TextEdit', 'Site Internet': 'TextEdit', });
lyr_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1.set('fieldLabels', {'Nom du collectif': 'header label', 'Adresse': 'header label', 'Ville': 'inline label', 'Contact': 'inline label', 'Fonction': 'inline label', 'Mail': 'header label', 'Numero': 'inline label', 'Site Internet': 'header label', });
lyr_ListeCollectifFestisolGEliste_collectif_festisol_ge__carto_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
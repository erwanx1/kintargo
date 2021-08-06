ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-37.224062, 15.386651, -34.900804, 18.168201]);
var wms_layers = [];

var lyr_kintargobasemap_georeferenced_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "kintargo-basemap_georeferenced",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/kintargobasemap_georeferenced_0.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [-37.224062, 15.386651, -34.900804, 18.168201]
                            })
                        });
var format_districts_1 = new ol.format.GeoJSON();
var features_districts_1 = format_districts_1.readFeatures(json_districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_districts_1.addFeatures(features_districts_1);
var lyr_districts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_districts_1, 
                style: style_districts_1,
                interactive: true,
                title: '<img src="styles/legend/districts_1.png" /> districts'
            });
var format_poi_2 = new ol.format.GeoJSON();
var features_poi_2 = format_poi_2.readFeatures(json_poi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_2.addFeatures(features_poi_2);
var lyr_poi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poi_2, 
                style: style_poi_2,
                interactive: true,
    title: 'poi<br />\
    <img src="styles/legend/poi_2_0.png" /> Cemetery<br />\
    <img src="styles/legend/poi_2_1.png" /> Commerce<br />\
    <img src="styles/legend/poi_2_2.png" /> Community<br />\
    <img src="styles/legend/poi_2_3.png" /> Entertainment<br />\
    <img src="styles/legend/poi_2_4.png" /> Gate<br />\
    <img src="styles/legend/poi_2_5.png" /> Government<br />\
    <img src="styles/legend/poi_2_6.png" /> Inn<br />\
    <img src="styles/legend/poi_2_7.png" /> Park<br />\
    <img src="styles/legend/poi_2_8.png" /> Residential<br />\
    <img src="styles/legend/poi_2_9.png" /> School<br />\
    <img src="styles/legend/poi_2_10.png" /> Temple<br />\
    <img src="styles/legend/poi_2_11.png" /> <br />'
        });

lyr_kintargobasemap_georeferenced_0.setVisible(true);lyr_districts_1.setVisible(true);lyr_poi_2.setVisible(true);
var layersList = [lyr_kintargobasemap_georeferenced_0,lyr_districts_1,lyr_poi_2];
lyr_districts_1.set('fieldAliases', {'id': 'id', 'kintargo_districts_District': 'kintargo_districts_District', 'kintargo_districts_Description': 'kintargo_districts_Description', 'kintargo_districts_Population': 'kintargo_districts_Population', });
lyr_poi_2.set('fieldAliases', {'id': 'id', 'kintargo_POI_Name': 'kintargo_POI_Name', 'kintargo_POI_District': 'kintargo_POI_District', 'kintargo_POI_Type': 'kintargo_POI_Type', 'kintargo_POI_Status': 'kintargo_POI_Status', 'kintargo_POI_NotableNPCs': 'kintargo_POI_NotableNPCs', 'kintargo_POI_Allegiance': 'kintargo_POI_Allegiance', 'kintargo_POI_Details': 'kintargo_POI_Details', });
lyr_districts_1.set('fieldImages', {'id': 'Range', 'kintargo_districts_District': 'TextEdit', 'kintargo_districts_Description': 'TextEdit', 'kintargo_districts_Population': 'Range', });
lyr_poi_2.set('fieldImages', {'id': 'Range', 'kintargo_POI_Name': 'TextEdit', 'kintargo_POI_District': 'TextEdit', 'kintargo_POI_Type': 'TextEdit', 'kintargo_POI_Status': 'TextEdit', 'kintargo_POI_NotableNPCs': 'TextEdit', 'kintargo_POI_Allegiance': 'TextEdit', 'kintargo_POI_Details': 'TextEdit', });
lyr_districts_1.set('fieldLabels', {'id': 'no label', 'kintargo_districts_District': 'header label', 'kintargo_districts_Description': 'inline label', 'kintargo_districts_Population': 'inline label', });
lyr_poi_2.set('fieldLabels', {'id': 'no label', 'kintargo_POI_Name': 'header label', 'kintargo_POI_District': 'inline label', 'kintargo_POI_Type': 'inline label', 'kintargo_POI_Status': 'inline label', 'kintargo_POI_NotableNPCs': 'inline label', 'kintargo_POI_Allegiance': 'inline label', 'kintargo_POI_Details': 'inline label', });
lyr_poi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
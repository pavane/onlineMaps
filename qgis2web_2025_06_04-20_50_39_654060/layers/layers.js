var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_mine_probability_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'mine_probability<br />\
    <img src="styles/legend/mine_probability_1_0.png" /> 0.1<br />\
    <img src="styles/legend/mine_probability_1_1.png" /> 0.999621<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/mine_probability_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11704460.760572, 4952214.413514, -11704283.823313, 4952380.452741]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_mine_probability_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mine_probability_1];

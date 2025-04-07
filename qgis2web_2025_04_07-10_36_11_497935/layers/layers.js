var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_mine_probability_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'mine_probability<br />\
    <img src="styles/legend/mine_probability_1_0.png" /> 0.0000<br />\
    <img src="styles/legend/mine_probability_1_1.png" /> 0.0187<br />\
    <img src="styles/legend/mine_probability_1_2.png" /> 0.0375<br />\
    <img src="styles/legend/mine_probability_1_3.png" /> 0.0562<br />\
    <img src="styles/legend/mine_probability_1_4.png" /> 0.0750<br />\
    <img src="styles/legend/mine_probability_1_5.png" /> 0.0937<br />\
    <img src="styles/legend/mine_probability_1_6.png" /> 0.1125<br />\
    <img src="styles/legend/mine_probability_1_7.png" /> 0.1312<br />\
    <img src="styles/legend/mine_probability_1_8.png" /> 0.1499<br />\
    <img src="styles/legend/mine_probability_1_9.png" /> 0.1687<br />\
    <img src="styles/legend/mine_probability_1_10.png" /> 0.1874<br />\
    <img src="styles/legend/mine_probability_1_11.png" /> 0.2062<br />\
    <img src="styles/legend/mine_probability_1_12.png" /> 0.2249<br />\
    <img src="styles/legend/mine_probability_1_13.png" /> 0.2437<br />\
    <img src="styles/legend/mine_probability_1_14.png" /> 0.2624<br />\
    <img src="styles/legend/mine_probability_1_15.png" /> 0.2812<br />\
    <img src="styles/legend/mine_probability_1_16.png" /> 0.2999<br />\
    <img src="styles/legend/mine_probability_1_17.png" /> 0.3186<br />\
    <img src="styles/legend/mine_probability_1_18.png" /> 0.3374<br />\
    <img src="styles/legend/mine_probability_1_19.png" /> 0.3561<br />\
    <img src="styles/legend/mine_probability_1_20.png" /> 0.3749<br />\
    <img src="styles/legend/mine_probability_1_21.png" /> 0.3936<br />\
    <img src="styles/legend/mine_probability_1_22.png" /> 0.4124<br />\
    <img src="styles/legend/mine_probability_1_23.png" /> 0.4311<br />\
    <img src="styles/legend/mine_probability_1_24.png" /> 0.4498<br />\
    <img src="styles/legend/mine_probability_1_25.png" /> 0.4686<br />\
    <img src="styles/legend/mine_probability_1_26.png" /> 0.4873<br />\
    <img src="styles/legend/mine_probability_1_27.png" /> 0.5061<br />\
    <img src="styles/legend/mine_probability_1_28.png" /> 0.5248<br />\
    <img src="styles/legend/mine_probability_1_29.png" /> 0.5436<br />\
    <img src="styles/legend/mine_probability_1_30.png" /> 0.5623<br />\
    <img src="styles/legend/mine_probability_1_31.png" /> 0.5811<br />\
    <img src="styles/legend/mine_probability_1_32.png" /> 0.5998<br />\
    <img src="styles/legend/mine_probability_1_33.png" /> 0.6185<br />\
    <img src="styles/legend/mine_probability_1_34.png" /> 0.6373<br />\
    <img src="styles/legend/mine_probability_1_35.png" /> 0.6560<br />\
    <img src="styles/legend/mine_probability_1_36.png" /> 0.6748<br />\
    <img src="styles/legend/mine_probability_1_37.png" /> 0.6935<br />\
    <img src="styles/legend/mine_probability_1_38.png" /> 0.7123<br />\
    <img src="styles/legend/mine_probability_1_39.png" /> 0.7310<br />\
    <img src="styles/legend/mine_probability_1_40.png" /> 0.7497<br />\
    <img src="styles/legend/mine_probability_1_41.png" /> 0.7685<br />\
    <img src="styles/legend/mine_probability_1_42.png" /> 0.7872<br />\
    <img src="styles/legend/mine_probability_1_43.png" /> 0.8060<br />\
    <img src="styles/legend/mine_probability_1_44.png" /> 0.8247<br />\
    <img src="styles/legend/mine_probability_1_45.png" /> 0.8435<br />\
    <img src="styles/legend/mine_probability_1_46.png" /> 0.8622<br />\
    <img src="styles/legend/mine_probability_1_47.png" /> 0.8809<br />\
    <img src="styles/legend/mine_probability_1_48.png" /> 0.8997<br />\
    <img src="styles/legend/mine_probability_1_49.png" /> 0.9184<br />\
    <img src="styles/legend/mine_probability_1_50.png" /> 0.9372<br />\
    <img src="styles/legend/mine_probability_1_51.png" /> 0.9559<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/mine_probability_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11704474.550749, 4952219.250092, -11704316.608132, 4952387.696807]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_mine_probability_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mine_probability_1];

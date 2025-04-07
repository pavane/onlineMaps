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
    <img src="styles/legend/mine_probability_1_1.png" /> 0.0196<br />\
    <img src="styles/legend/mine_probability_1_2.png" /> 0.0392<br />\
    <img src="styles/legend/mine_probability_1_3.png" /> 0.0588<br />\
    <img src="styles/legend/mine_probability_1_4.png" /> 0.0784<br />\
    <img src="styles/legend/mine_probability_1_5.png" /> 0.0980<br />\
    <img src="styles/legend/mine_probability_1_6.png" /> 0.1176<br />\
    <img src="styles/legend/mine_probability_1_7.png" /> 0.1373<br />\
    <img src="styles/legend/mine_probability_1_8.png" /> 0.1569<br />\
    <img src="styles/legend/mine_probability_1_9.png" /> 0.1765<br />\
    <img src="styles/legend/mine_probability_1_10.png" /> 0.1961<br />\
    <img src="styles/legend/mine_probability_1_11.png" /> 0.2157<br />\
    <img src="styles/legend/mine_probability_1_12.png" /> 0.2353<br />\
    <img src="styles/legend/mine_probability_1_13.png" /> 0.2549<br />\
    <img src="styles/legend/mine_probability_1_14.png" /> 0.2745<br />\
    <img src="styles/legend/mine_probability_1_15.png" /> 0.2941<br />\
    <img src="styles/legend/mine_probability_1_16.png" /> 0.3137<br />\
    <img src="styles/legend/mine_probability_1_17.png" /> 0.3333<br />\
    <img src="styles/legend/mine_probability_1_18.png" /> 0.3529<br />\
    <img src="styles/legend/mine_probability_1_19.png" /> 0.3725<br />\
    <img src="styles/legend/mine_probability_1_20.png" /> 0.3922<br />\
    <img src="styles/legend/mine_probability_1_21.png" /> 0.4118<br />\
    <img src="styles/legend/mine_probability_1_22.png" /> 0.4314<br />\
    <img src="styles/legend/mine_probability_1_23.png" /> 0.4510<br />\
    <img src="styles/legend/mine_probability_1_24.png" /> 0.4706<br />\
    <img src="styles/legend/mine_probability_1_25.png" /> 0.4902<br />\
    <img src="styles/legend/mine_probability_1_26.png" /> 0.5098<br />\
    <img src="styles/legend/mine_probability_1_27.png" /> 0.5294<br />\
    <img src="styles/legend/mine_probability_1_28.png" /> 0.5490<br />\
    <img src="styles/legend/mine_probability_1_29.png" /> 0.5686<br />\
    <img src="styles/legend/mine_probability_1_30.png" /> 0.5882<br />\
    <img src="styles/legend/mine_probability_1_31.png" /> 0.6078<br />\
    <img src="styles/legend/mine_probability_1_32.png" /> 0.6275<br />\
    <img src="styles/legend/mine_probability_1_33.png" /> 0.6471<br />\
    <img src="styles/legend/mine_probability_1_34.png" /> 0.6667<br />\
    <img src="styles/legend/mine_probability_1_35.png" /> 0.6863<br />\
    <img src="styles/legend/mine_probability_1_36.png" /> 0.7059<br />\
    <img src="styles/legend/mine_probability_1_37.png" /> 0.7255<br />\
    <img src="styles/legend/mine_probability_1_38.png" /> 0.7451<br />\
    <img src="styles/legend/mine_probability_1_39.png" /> 0.7647<br />\
    <img src="styles/legend/mine_probability_1_40.png" /> 0.7843<br />\
    <img src="styles/legend/mine_probability_1_41.png" /> 0.8039<br />\
    <img src="styles/legend/mine_probability_1_42.png" /> 0.8235<br />\
    <img src="styles/legend/mine_probability_1_43.png" /> 0.8431<br />\
    <img src="styles/legend/mine_probability_1_44.png" /> 0.8627<br />\
    <img src="styles/legend/mine_probability_1_45.png" /> 0.8824<br />\
    <img src="styles/legend/mine_probability_1_46.png" /> 0.9020<br />\
    <img src="styles/legend/mine_probability_1_47.png" /> 0.9216<br />\
    <img src="styles/legend/mine_probability_1_48.png" /> 0.9412<br />\
    <img src="styles/legend/mine_probability_1_49.png" /> 0.9608<br />\
    <img src="styles/legend/mine_probability_1_50.png" /> 0.9804<br />\
    <img src="styles/legend/mine_probability_1_51.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/mine_probability_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11704433.652468, 4952278.755086, -11704357.507174, 4952328.190657]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_mine_probability_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mine_probability_1];

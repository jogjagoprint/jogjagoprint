var wms_layers = [];
var lyr_BatasDesaDIY2018_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://gis.jogjaprov.go.id/geoserver/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "geonode:admin_diy_pemendagri",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Batas Desa DIY 2018",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BatasDesaDIY2018_0, 0]);var lyr_JalanDIYline_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://gis.jogjaprov.go.id/geoserver/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "geonode:ca_jalan_ln_25k",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Jalan DIY (line)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_JalanDIYline_1, 0]);

lyr_BatasDesaDIY2018_0.setVisible(true);lyr_JalanDIYline_1.setVisible(true);
var layersList = [lyr_BatasDesaDIY2018_0,lyr_JalanDIYline_1];

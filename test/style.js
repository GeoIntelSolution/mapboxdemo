const style1={
    "version": 8,
    "sources": {
        "p_checkwell":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_checkwell&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "l_rainpipe":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:l_rainpipe&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "p_rainpoint":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_rainpoint&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "p_deviatedwell":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_deviatedwell&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "p_threecon":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_threecon&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "l_sewagepipe":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:l_sewagepipe&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "p_connect":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_connect&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "p_reserve":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_reserve&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "right":{
            "type":"raster",
            "tiles":["http://183.129.204.238:9899/geoserver/gwc/service/wmts?layer=test%3Ageotransformt&style=&tilematrixset=EPSG%3A900913&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A900913%3A{z}&TileCol={x}&TileRow={y}"],
            "tileSize":256
        },//dxt begin
        "greenground":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuanDxt:greenpolygon&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "landscape":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuanDxt:landformpolyline&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "river":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuanDxt:riverpolygon&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "roadcenter":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuanDxt:l_roadcenter&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        },
        "transportfacilities":{
            "type":"vector",
            "tiles": ["http://183.129.204.238:9899/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuanDxt:transportfacilitiespolyline&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
        }
        
},
"layers": [
    {
        "id": "background",
        "type": "background",
        "paint": {
            "background-color": "#F2F5F7",
            "background-opacity": 1
        }
    },
    {
        "id": "greenground",
        "type": "fill",
        "source":"greenground",
        "source-layer":"greenpolygon",
        "paint": {
           "fill-color":"#b6e59e"
        },
        "layout": {
            "visibility": "visible"
        }
    },
    {
        "id": "landscape",
        "type": "line",
        "source":"landscape",
        "source-layer":"landformpolyline",
        "min-zoom":17,
        "paint": {
           "line-color":"rgb(191,191,191)"
        },
        "layout": {
            "visibility": "none"
        }
    },
    {
        "id": "river",
        "type": "fill",
        "source":"river",
        "source-layer":"riverpolygon",
        "paint": {
           "fill-color":"#74CFF0"
        },
        "layout": {
            "visibility": "visible"
        }
    },
    {
        "id": "transportfacilities",
        "type": "line",
        "source":"transportfacilities",
        "source-layer":"transportfacilitiespolyline",
        "minzoom":16,
        "paint": {
            "line-color": "#EBC547",
            "line-opacity": 1,
            "line-width": 2
        },
        "layout": {
            "visibility": "visible"
        },

    },
    {
        "id": "roadcenter",
        "type": "line",
        "minzoom":16,
        "source":"roadcenter",
        "source-layer":"l_roadcenter",
        "paint": {
            "line-color": "#EBC547",
            "line-opacity": 1,
            "line-width": 2
        },
        "layout": {
            "visibility": "visible"
        }
    },
     {
        "id":"l_rainpipe",
        "type":"line",
        "source":"l_rainpipe",
        "source-layer":"l_rainpipe",
        "paint":{
            "line-width":1,
            "line-color":"rgba(23,124,189,1)"
        },
        "layout": {
            "visibility": "visible"
        },
    },
    {
        "id":"l_sewagepipe",
        "type":"line",
        "source":"l_sewagepipe",
        "source-layer":"l_sewagepipe",
        "paint":{
            "line-width":1,
            "line-color":"#1faf8b"
        },
        "layout": {
            "visibility": "visible"
        },
    },    
   
]}; 
from decimal import Decimal

def calZ():
    cx=Decimal("171.513661")
    cy=Decimal("231.444310")
    cz=Decimal("144.354691")

    rx=Decimal("0.04071667")
    ry=Decimal("4.58312149")
    rz=Decimal("-4.76085987")
    s=Decimal("-11.22505400")

    #A
    XS=Decimal("-2667092.1479")
    YS=Decimal("4912666.4562")
    ZS=Decimal("3061248.5038")
   

    BX=XS-rz*YS+ry*ZS
    BX=cx+(1+s*Decimal("0.000001"))*BX

    BY=rz*XS+YS-rx*ZS
    BY=cy+(1+s*Decimal("0.000001"))*BY

   
    BZ=rx*YS-ry*XS+ZS
    BZ=cz+(1+s*Decimal("0.000001"))*BZ
    print(BX,BY,BZ)
    # print(cz)

calZ()


 l_rainpipe     
 l_sewagepipe   
 p_checkwell    
 p_connect      
 p_deviatedwell 
 p_rainpoint    
 p_reserve      
 p_threecon     

  const simple={
            "version":8,
            "source":{
                "p_checkwell":{
                    "type":"vector",
                    "tiles":["http://192.168.1.93:9219/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_checkwell&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
                },
                "l_rainpipe":{
                    "type":"vector",
                    "tiles":["http://192.168.1.93:9219/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:l_rainpipe&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]                    
                },
                "p_rainpoint":{
                    "type":"vector",
                    "tiles":["http://192.168.1.93:9219/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_rainpoint&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
                },
                "p_deviatedwell":{
                    "type":"vector",
                    "tiles":["http://192.168.1.93:9219/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_rainpoint&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
                },
                "p_threecon":{
                    "type":"vector",
                    "tiles":["http://192.168.1.93:9219/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_checkwell&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
                },
                "l_sewagepipe":{
                    "type":"vector",
                    "tiles":["http://192.168.1.93:9219/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_checkwell&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
                },
                "p_connect":{
                    "type":"vector",
                    "tiles":["http://192.168.1.93:9219/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_checkwell&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
                },
                "p_reserve":{
                    "type":"vector",
                    "tiles":["http://192.168.1.93:9219/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=GuYuan:p_checkwell&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}"]
                }
            },
            "layers":[
                {
                    "id": "background",
                    "type": "background",
                    "paint": {
                        "background-color": "#ffffff",
                        "background-opacity": 0.8
                    }
                },
                {
                    "id": "l_sewagepipe",
                    "type": "line",
                    "source": "l_sewagepipe",
                    "source-layer": "l_sewagepipe",
                    "paint": {
                        "line-color": "rgb(146, 100, 216)",
                        "line-width": 3
                    }
                }
            ],
        }
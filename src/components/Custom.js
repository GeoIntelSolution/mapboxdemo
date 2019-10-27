import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';
import Config from '../config';
import Turf from 'turf';


const renderUrl = (bootUrl,layername,projections)=>{
    console.log(bootUrl)
    return  `${bootUrl}?`+
    `REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=${layername}`+
    `&STYLE=&TILEMATRIX=${projections}:{z}&TILEMATRIXSET=${projections}&`+
    `FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}`;
}

export default class Custom extends Component
{
    constructor()
    {
        super();
        this.state = {
            url:Config.server_url,
            viewport: {
              width: "100vw",
              height: "100vh",
              latitude: 26.00197,
              longitude: 119.338782,
              zoom: 12,
              pitch:50,
              bearing:-20
            }
          };
    }

  



    render() {

    //    const simple={
    //     "version": 8,
    //     "sources": {
    //         "osm": {
    //                 "type": "vector",
    //                 "tiles": [
    //                         renderUrl(Config.server_url,"cangshan:buildings","EPSG:900913"),
    //                 ]
    //                 //"tiles": ["http://TegolaServerHost:8082/maps/zoning/{z}/{x}/{y}.vector.pbf"]
    //             },
    //         "rivers":
    //         {
    //             "type":"vector",
    //             "tiles":[
    //                 renderUrl(Config.server_url,"cangshan:river","EPSG:900913")
    //             ]
    //         },
    //         "polyline":
    //         {
    //             "type":"vector",
    //             "tiles":[
    //                     renderUrl(Config.server_url,"cangshan:riverway","EPSG:900913")
    //             ]
    //         }
    //     },

    //         "layers": [
    //             {
    //                 "id": "background",
    //                 "type": "background",
    //                 "paint": {
    //                     "background-color": "#121313"
    //                 }
    //             },

    //             {
    //                 "id": "buildings",
    //                 "type": "fill",
    //                 "source": "osm",
    //                 "source-layer": "buildings",
    //                 "filter": ["==", "$type", "Polygon"],
    //                 "paint": {
    //                     "fill-color": "#444443"
    //                 }

    //             },
    //             {
    //                 "id":"rivers",
    //                 "type":"fill",
    //                 "source":"rivers",
    //                 "source-layer":"river",
    //                 "paint":{
    //                     "fill-color":"#252626"
    //                 }
    //             },
    //             {
    //                 "id":"roads",
    //                 "type":"line",
    //                 "source":"polyline",
    //                 "source-layer":"riverway",
    //                 "paint":{
    //                     "line-color":"#ff0000"

    //                 }
    //             }


    //         ]

    // };

    const simple={
        "version": 8,
        "sources": {
            "testriver":{
                  "type":"geojson",
                  "data":"http://192.168.1.254:8888/public/csv/river1541578201836.json"
            },

            "parkpts": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:parkpts&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "greenground": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:greenground&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "rivers": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:water&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "river": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:river&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "buildings": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:buildings&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "jiewuguan": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:jiewuguan&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "roads": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:roads&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "roadnet": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:roadnet&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "provincialhighway": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:provincialhighway&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "countyroad": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:countyroad&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "expressway": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:expressway&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "reservoir": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:reservoir&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
            "sewagepipe": {
                "type": "vector",
                    "tiles": ["http://183.129.204.238:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshan:sewagepipe&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            }
    },
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "#fff",
                "background-opacity": 1
            }
        },{
            "id":"greenground",
            "type":"fill",
            "source":"greenground",
            "source-layer":"greenground",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#b6e59e"
            }
        },
         {
            "id":"roadnet",
            "type":"fill",
            "source":"roadnet",
            "source-layer":"roadnet",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#EFE9E1",
                // "fill-outline-color":"#D0D0D0",
                "fill-translate": [
                    0,
                    0
                ]
            }
        },
        {
            "id":"expressway",
            "type":"line",
            "source":"expressway",
            "source-layer":"expressway",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F2934A",
                "line-opacity": 1,
                "line-width": 5
            }
        },{
            "id":"provincialhighway",
            "type":"line",
            "source":"provincialhighway",
            "source-layer":"provincialhighway",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#F2934A",
                "line-opacity": 1,
                "line-width": 4
            }
        },{
            "id":"countyroad",
            "type":"line",
            "source":"countyroad",
            "source-layer":"countyroad",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color":  "#EBC547",
                "line-opacity": 1,
                "line-width": 3
            }
        },
        {
            "id": "buildings",
            "type": "fill-extrusion",
            "source": "buildings",
            "source-layer": "buildings",
            "paint": {
                "fill-extrusion-height": 30,
                "fill-extrusion-color": "hsl(210, 20%, 97%)",
                "fill-extrusion-opacity": 0.53
             }
        },
        {
            "id":"rivers",
            "type":"fill",
            "source":"rivers",
            "source-layer":"water",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#74CFF0"
            }
        },
       
        {
            "id":"river",
            "type":"fill",
            "source":"river",
            "source-layer":"river",
            "layout": {
                "visibility": "visible"
            },
            "interactive" :false,
            "paint": {
                "fill-color": [
                    "match",["get","gid"],
                    1,"#FFA300",
                    "#88ace7"
                ]
            }
        },
        {
            "id":"jiewuguan",
            "type":"line",
            "source":"jiewuguan",
            "source-layer":"jiewuguan",
            "minzoom": 11.9,
            "maxzoom": 21.7,
            "layout": {},
            "paint": {
                "line-color": "#8dcbf7",
                "line-dasharray": [4, 2]
            }
        },{
            "id": "reservoir",
            "type": "line",
            "source": "reservoir",
            "source-layer": "reservoir",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ededcf",
                "line-width": 4
            }
        },{
            "id": "sewagepipe",
            "type": "line",
            "source": "sewagepipe",
            "source-layer": "sewagepipe",
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "line-color": "rgb(146, 100, 216)",
                "line-width": 3
            }
        }
        // ,
        // {
        //     "id":"testriver",
        //     "type":"fill",
        //     "source":"testriver",
        //     "layout": {
        //         "visibility": "visible"
        //     },
        //     "paint": {
        //         "fill-color": "rgba(255,244,0,1)",
        //     }
        // }
    ]};


        return (
            <div className="ui fourteen  wide column ">
                  <ReactMapGL 
                        mapStyle={simple}
                         {...this.state.viewport}
                        onClick={(evt)=>console.log(evt)} 
                        onViewportChange={(viewport) =>{
                            console.log(viewport)
                            this.setState({viewport})}}
                  />
             </div>
        )
    }


}
import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';
import Config from '../config';
import Turf from 'turf';

export default class PipeCentered extends Component
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
    const simple={
        "version": 8,
        "sources": {
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
                "background-color": "#142a21",
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
                "fill-color": "#142a21"
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
                "line-color": "#50a882",
                "line-opacity": 1,
                "line-width": 5
            }
        },
         {
            "id":"roadnet",
            "type":"fill",
            // "min-zoom":14,
            "source":"roadnet",
            "source-layer":"roadnet",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#3c7e61",
                // "fill-outline-color":"#D0D0D0",
                "fill-translate": [
                    0,
                    0
                ]
            }
        },
       {
            "id":"provincialhighway",
            "type":"line",
            "source":"provincialhighway",
            "source-layer":"provincialhighway",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#285441",
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
            "type": "fill",
            "source": "buildings",
            "source-layer": "buildings",
            "paint": {
                "fill-color": "#071a11",
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
                "fill-color": "#285441"
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
    ]};


        return (
            <div className="fourteen wide column ">
                  <ReactMapGL 
                        mapStyle={simple}
                         {...this.state.viewport}
                        onViewportChange={(viewport) =>{
                            console.log(viewport)
                            this.setState({viewport})}}
                  />
             </div>
        )
    }


}
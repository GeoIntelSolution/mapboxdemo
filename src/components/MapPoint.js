import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';
// import ReactMapGL from 'react-mapbox-gl';
export default class MapPoint extends Component
{
    constructor()
    {
        super();
        this.state = {
            viewport: {
              width: "100vw",
              height: "100vh",
            longitude: 119.32121,
            latitude:  26.022041,         //   longitude: 120.261497,
            // longitude:111.94523,
            // latitude:44.42117,  
            zoom: 13,
              pitch:50,
              bearing:-20
            }
          };
    }

  



    render() {

   console.log("hELLO");
    const simple={
        "version": 8,
        "sources": {
            "wrong":{
                "type":"vector",
                "tiles": ["http://192.168.1.254:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=sqlserver:flowpipe&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/x-protobuf;type=mapbox-vector&TILECOL={x}&TILEROW={y}"]
            },
              "right":{
                "type":"raster",
                "tiles":["http://192.168.1.254:8083/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=cangshanmobile&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILECOL={x}&TILEROW={y}"],
                "tileSize":256
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
           "id":"xproject",
           "type":"raster",
           "source":"right",
           "source-layer":"xproject"
        }
    ]};


        return (
            <div className="fourteen wide column ">
                  <ReactMapGL maxZoom={18}
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
import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';
export default class MapTester extends Component
{
    constructor()
    {
        super();
        this.state = {
            viewport: {
              width: "100vw",
              height: "100vh",
            //  longitude:  -179.14350338367416,
            //  latitude: 18.906117143691233,
            //   latitude: 30.164680,
            longitude: 120.26090868883423,
            latitude:  30.598002857796907,         //   longitude: 120.261497,
              zoom: 7,
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
                "type":"geojson",
                "data":"http://192.168.1.254:3000/json/testPoint.json"
                // "data":"http://192.168.1.254:8888/public/csv/topo1542158098679.json"

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

            id:"test",
            "type":"circle",
            "source":"wrong",
            "paint":{
                'circle-radius':2
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
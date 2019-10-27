import React from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';


let Map =class Map extends React.Component
{
    map;

    componentDidUpdate() {
        this.setFill();
    }

    componentDidMount(){
        this.map=new mapboxgl.Map({
            container:this.mapContainer,
        });
        

        this.map.on('load',()=>{
            this.map.addSource('osm',{
                type:'vector',
                tiles:[
                    renderUrl(Config.server_url,"changshan:buildings","EPSG:900913"),
                ]
            });

            this.map.addLayer({
                id:'buildings',
                type:'fill',
                source:'osm'
            });

            this.map.setViewport(Config.startViewport);
            this.setFill();
        })

    }



    setFill(){
        const {property,stops} =this.props.active;

        this.map.setPaintProperty('buildings','fill-color',"#D5D3D5");
    }


    render(){
        return(
            <div ref={el=>this.mapContainer =el } className="absolute top right left bottom">
            </div>
        )
    }

}


const mapState2props=(state)=>{
    return {state};
}

const LoadMap =connect(mapState2props)(Map);

export default LoadMap;
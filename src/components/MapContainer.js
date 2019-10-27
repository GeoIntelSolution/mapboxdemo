import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';
// import {acesstoken} from '../constants';
import Config from '../config';




export default class MapContainer extends Component
{
    constructor(){
        super();
      this.state = {
        viewport: {
          width: 1500,
          height: 678,
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 8
        }
      };
    }
    
      render() {
        return (
          <ReactMapGL className="right" mapboxApiAccessToken={Config.access_token}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
          />
        );
      }

}
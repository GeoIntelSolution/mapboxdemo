import React,{PureComponent} from 'react';
import {Link} from 'react-router-dom';
export default class ControlPanel extends PureComponent
{
    constructor(props){
        super(props);
    }
    
  


    render(){

        

        let position={
            marginRight:"25px"
        }
        return (
            <div className="ui right floated vertical buttons" style={position}>
                <div   className="ui positive circular icon button" onClick={this.props.onLoadStyle} ><i className="edit icon"></i></div>
                <div   className="ui positive circular icon button" onClick={this.props.onShowModal} ><i className="map icon"></i></div>
                <div   className="ui positive circular icon button" onClick={this.props.onFixedHere} ><i className="circle icon"></i></div>
                <div   className="ui positive circular icon button" onClick={(evt)=>this.props.onCrop(evt)} ><i className="crop icon"></i></div>
            </div>
        )
    }
}
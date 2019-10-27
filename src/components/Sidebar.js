import React,{Component} from 'react';
import {Menu,Item,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
export default class Sidebar extends Component
{
   

    render()
    {
        let titleStyle={
            "color":"#fff",
            "fontSize":"24px"
        };

        let itemStyle={
            "color":"#f0f0f0",
            "fontSize":"16px",
            cursor:'pointer'
        };

        let myright={
            "float":"right",
            "marginRight":"1em"
        };

        let verticalMenu={
            height:"100%",
            width:"100%",
           
            position:"absolute"
        }
        
        return (
            <div className="ui two wide column" >
                
            <div className="ui inverted vertical  menu" style={verticalMenu}>
                <div className="ui   item">
                 
                 <p className="center aligned text" style={titleStyle} >
                 <i className="recycle icon"></i>
                    GIS pro</p>
                </div>
                <div className="ui item">
                    <Link to="/polygon" className="center aligned text" style={itemStyle} >
                        Polygon  <i className="right floated crop icon" style={myright} ></i></Link>
                </div>
                <div className="item">
                    <Link to="/loadmap" className="center aligned text" style={itemStyle} >
                            loadmap <i className="right floated search icon" style={myright} ></i></Link>
                </div>
                <div className="item">
                    <Link to="/point" className="center aligned text" style={itemStyle} >
                            点选 <i className="right floated hand pointer icon" style={myright} ></i></Link>
                </div>
                <div className="item">
                    <Link to="/guyuan" className="center aligned text" style={itemStyle} >
                            guyuan <i className="right floated fire extinguisher icon" style={myright} ></i></Link>
                </div>
                <div className="item">
                    <Link to="/platform" className="center aligned text" style={itemStyle} >
                            platform <i className="right floated map icon" style={myright} ></i></Link>
                </div>
                <div className="item">
                    <Link to="/treeview" className="center aligned text" style={itemStyle} >
                            toc1 <i className="right floated map icon" style={myright} ></i></Link>
                </div>
                <div className="item">
                    <Link to="/worker1" className="center aligned text" style={itemStyle} >
                            toc2 <i className="right floated map icon" style={myright} ></i></Link>
                </div>
                <div className="item">
                    <Link to="/worker2" className="center aligned text" style={itemStyle} >
                            toc3 <i className="right floated map icon" style={myright} ></i></Link>
                </div>
            </div>
            </div>    
        )
    }

}
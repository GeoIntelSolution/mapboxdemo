import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom';

import MapContainer from './MapContainer'
import MapvtContainer from './MapvtContainer'
import LoadMap from './LoadMap'
import MapTester from './MapTester'
import Custom from './Custom';
import GuYuan from './GuYuan';
import PipeCentered from './PipeCentered';
import Platform from './Platform';
import MapPoint from './MapPoint';
import Donald from './Donald';
import Trump from './Trump';
import TreeViewTest from './TreeViewTest';
import "../mapbox-gl.css";
// <Route exact path="/" component={MapContainer}/>
// <Route exact path="/polygon" component={MapvtContainer}/>


const Main=()=>(
    <Switch>
        <Route exact path="/" component={MapPoint}/>
        <Route exact path="/polygon" component={PipeCentered}/>
        <Route exact path="/loadmap" component={MapTester}/>
        <Route exact path="/Point" component={Custom}/>
        <Route exact path="/guyuan" component={GuYuan}/>
        <Route exact path="/platform" component={Platform}/>
        <Route exact path="/treeview" component={TreeViewTest}/>
        <Route exact path="/worker1" component={Donald}/>
        <Route exact path="/worker2" component={Trump}/>
    </Switch>    
)

export default Main;
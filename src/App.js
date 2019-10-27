import React,{Component} from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

let style={
    "minHeight":"100vh",
    "minWidth":"100vw"
}

const App=()=>(
        <div  className="ui grid" style={style}>
            <Sidebar/>
            <Main >
            </Main>
        </div>    
)


export default  App;

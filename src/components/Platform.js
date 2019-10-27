import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';
import ControlPanel from './ControlPanel';
import Config from '../config';
import Modal from 'react-modal';
import {Treebeard} from 'react-treebeard';
import decorators from "react-treebeard/dist/components/Decorators";
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import {js as jBeautify}  from 'js-beautify';
import defaultTheme from "react-treebeard/dist/themes/default";


const CustomHeader = ({ node, style, prefix }) => (
  <div style={style.base}>
    <div style={{ ...style.title, display: "flex"}}>
      {/* <span
        style={{
          display: "flex",
          width: "10px",
          height: "10px",
          marginTop:"0.5em",
         marginRight:"0.2em",   
          backgroundColor: node.color
        }}
      /> */}
      <i style={{
        display: "flex",
        width: "10px",
        height: "10px",
        marginRight:"0.5em", 
        color:node.color
      }} className={node.img}>

      </i>

      <i style={{
        display: "flex",
        width: "10px",
        height: "10px",
        marginRight:"0.5em", 
      }} className={node.visible?"eye icon":"low vision icon"}>
      </i>
      {` ${node.name.toUpperCase()}`}
    </div>
  </div>
);

class CutomContainer extends decorators.Container {
  render() {
    const { style, decorators, terminal, onClick, node } = this.props;
    return (
      <div
        onClick={onClick}
        ref={ref => (this.clickableRef = ref)}
        style={style.container[0]}
      >
        <decorators.Header node={node} style={style.header} />
        <span style={{ float: "right" }}>
          {!terminal ? this.renderToggle() : null}
        </span>
      </div>
    );
  }
}

const data = {
  name: 'root',
  toggled: true,
  children: [
      {
          name: 'parent',
          children: [
              { name: 'child1' },
              { name: 'child2' }
          ]
      },
      {
          name: 'loading parent',
          loading: true,
          children: []
      },
      {
          name: 'parent',
          children: [
              {
                  name: 'nested parent',
                  children: [
                      { name: 'nested child 1' },
                      { name: 'nested child 2' }
                  ]
              }
          ]
      }
  ]
};

const customStyles = {
    content : {
      top                   : '40%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  const customMirrorStyles = {
    content : {
      width                 : '500px', 
      top                   : '30%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


const selectoptions=(start,end)=>{
    var options=[];
    for(let i = start;i<end;i++){
        options.push(<option key={"option"+i} value={i}>{i}</option>)
    }
    return options;
}  

const tocStyle={
  "marginTop":"20px",
  "position":"absolute",
  "zIndex":10000
};

Modal.setAppElement("#root");
export default class Platform extends Component
{
    constructor(props)
    {
        super(props);
        this.instance=null;
        let containerWidth=window.innerWidth*0.875;
        let containerHeight=window.innerHeight;
        this.state = {
            catalog:Config.catalog,
            objectID:'5cdd65861c757c74fc451eff',
            viewport: {
              width: containerWidth,
              height: containerHeight,
            //  longitude:  -179.14350338367416,
            //  latitude: 18.906117143691233,
            //   latitude: 30.164680,
            longitude:120.57489605342477,
            latitude:  31.35595573106957,         //   longitude: 120.261497,
              zoom: 12,
              pitch:0,
              bearing:0
            },
            style:null,
            modalIsOpen:false,
            LayerModal:false,
            gridsetIsOn:false,
            zoomCheck:null,
            data:data,
            displayData:null,
            editorDataDesc:{
              type:"source",
              order:-1,
              name:''     
           },
           closeCodeMirrorModal:false
          };
        this._onLoadStyle = this._onLoadStyle.bind(this);  
        this._resize = this._resize.bind(this);
        this.divRef =  React.createRef();  
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this._onViewportChange=this._onViewportChange.bind(this);
        this._fixedHere = this._fixedHere.bind(this);  
        this._onCrop = this._onCrop.bind(this);
        this._drawGridSet=this._drawGridSet.bind(this);
        this._hideGridSet=this._hideGridSet.bind(this);
        this._onViewportChange=this._onViewportChange.bind(this);
        this.onToggle=this.onToggle.bind(this);
        this.openCodeMirrorModal=this.openCodeMirrorModal.bind(this);
        this.afterOpenCodeMirrorModal=this.afterOpenCodeMirrorModal.bind(this);
        this.closeCodeMirrorModal=this.closeCodeMirrorModal.bind(this);
        this.saveCodeMirrorModal=this.saveCodeMirrorModal.bind(this);
        this.findColor=this.findColor.bind(this);  
    }



    onToggle(node,toggled){
      const {cursor, data} = this.state;
      if(cursor){
          this.setState(()=>({cursor,active:false}));
      }
      let desc={};
      node.active = true;
      if(node.children){
          node.toggled = toggled;
      }
      if(toggled&&node.children.length===0){
          console.log(node);
          let layerName =node.parent;
          let  parentName=node.src;
          console.log(parentName);
          if(layerName==="background"){
              switch(node.name){
                  case "source":
                      this.setState(()=>({displayData:"background has no source"}));
                      break;
                  case "layer":
                      const layer=this.state.style["layers"][node.order];
                      desc={
                          type:node.name,
                          order:node.order
                      }
                      this.setState(()=>({displayData:jBeautify(JSON.stringify(layer),{ident:2}),editorDataDesc:desc}));
                      break;
                  case "visible":
                      this.setState(()=>({displayData:"background shall be open forever"}));
                      break;        
              }
              this.openCodeMirrorModal();
              return;
          }


          switch(node.name){
              case "source":
                  const sourceNode = this.state.style["sources"][parentName];
                  desc={
                      type:node.name,
                      name:parentName
                  }
                  this.setState(()=>({displayData:jBeautify(JSON.stringify(sourceNode),{ident:2}),editorDataDesc:desc}));
                  break;
              case "layer":
                  const layer=this.state.style["layers"][node.order];
                  desc={
                      type:node.name,
                      order:node.order
                  }
                  this.setState(()=>({displayData:jBeautify(JSON.stringify(layer),{ident:2}),editorDataDesc:desc}));
                  break;
              case "visible":
                  this.setState(()=>({displayData:"background shall be open forever"}));
                  break;        
          }
          this.openCodeMirrorModal();

      }


      this.setState(() => ({cursor: node, data: Object.assign({}, data)}));
  }

  
  findColor(l){
    let res={};
    switch(l.type){
      case"background":
        res= {
          color:l["paint"]["background-color"]||"#FFFFFF",
          img:"leaf icon"
        };
        break;
      case "line":
          res= {
          color:l["paint"]["line-color"]||"#FFFFFF",
          img:"window minimize outline icon"
      };
        break;
      case 'circle':
        res=  {
          color:l["paint"]["circle-color"]||"#FFFFFF",
          img:"circle icon"
        };
        break;
      case 'symbol':
        res= {
          color:l["paint"]?l["paint"]["text-color"]||"#FFFFFF":"#FFFFFF",
          img:"marker icon"
        };
        break
      case 'fill':
        res= {
          color:l["paint"]["fill-color"]||"#FFFFFF",
          img:"stop icon"
        };
        break;
      case "raster":
        res= {
         color: "#FFFFFF",
         img:"image icon"
        };  
        break;
      default:
        res= {
          color:l["paint"][l.type+"-color"]||"#FFFFFF"
        };          
    }

    if(l["layout"]){
      if(l["layout"]["visibility"]){
        if(l["layout"]["visibility"]==="none")
        {
          res["visible"]= false;
        }
        else{res["visible"]=true;}
      }else{
      res["visible"]= true;
      }
    }else{
      res["visible"]=true;
    }
    
    return res;
  }

    componentDidMount(){
      fetch(`${Config.prefix}/${this.state.catalog}.json`)
        .then(res=>res.json())
        .then(d=>{
            const latestOne =d;
            console.log(latestOne);
            const childs=latestOne.style["layers"].map((l,index)=>{
              const colorCL=this.findColor(l)

              return {
                name:l.id,
                color:colorCL.color,
                img:colorCL.img,
                visible:colorCL.visible,
                children:[
                    {
                        name:"source",
                        parent:l.id,
                        src:l.source,
                        order:index,
                        visible:colorCL.visible,
                        children:[],
                    },
                    {
                        name:"layer",
                        parent:l.id,
                        src:l.source,
                        order:index,
                        visible:colorCL.visible,
                        children:[]

                    },
                    {
                         name:"visible",
                         parent:l.id,
                         src:l.source,
                         order:index,
                         visible:colorCL.visible,
                         children:[]

                    }
                ]
            }
          });

          let toc ={
               name:"root",
               visible:true,
               children:childs
          };
          console.log(toc);

            if(latestOne["viewport"]){
                this.setState({
                    style:latestOne.style,
                    data:toc,
                    viewport:latestOne["viewport"],
                    catalog:latestOne["catalog"],
                    objectID:latestOne["_id"]});
            }else{
            this.setState({
                style:latestOne.style,
                objectID:latestOne["_id"],
                data:toc,
                catalog:latestOne["catalog"]
                });
            }    
        });

     
        window.addEventListener("resize",this._resize);
    }

    _onLoadStyle(){
        // window.history.pushState(null,null,`/test/${this.state.objectID}`);
        window.location.assign(`${Config.prefix}/test/${this.state.objectID}`)
    }

  
    openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
        this.inputWidth.value=this.state.viewport.width;
        this.inputHeight.value=this.state.viewport.height;
        this.inputLongitude.value=this.state.viewport.longitude;
        this.inputLatitude.value=this.state.viewport.latitude;
        this.inputPitch.value= this.state.viewport.pitch;
        this.inputBearing.value=this.state.viewport.bearing;
        this.selectZoom.value=this.state.viewport.zoom;
        this.inputCatalog.value=this.state.catalog;
        
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

      _onViewportChange(){
         // set catalog    
         //change the viewport
          const viewport={
              width:parseInt(this.inputWidth.value,10),
              height:parseInt(this.inputHeight.value,10),
              longitude:parseFloat(this.inputLongitude.value),
              latitude:parseFloat(this.inputLatitude.value),
              pitch: parseFloat(this.inputPitch.value),
              bearing:parseFloat(this.inputBearing.value),
              zoom:this.selectZoom.value?parseFloat(this.selectZoom.value):13
          };

          const post={
            "style":this.state.style,
            "prev":this.state.objectID,
            "catalog":this.inputCatalog.value,
            "viewport":viewport
          };


          console.log(viewport);
        //   this.setState({
        //       viewport:viewport
        //   });
          fetch(`${Config.prefix}/saveStyle`,{
            method:"POST",
            body:JSON.stringify(post),
            headers:{
              "Content-Type":"application/json"
            }
          }).then(res=>res.json())
          .then(d=>{
              Config.catalog=post.catalog;  
              this.setState({
                  catalog:post.catalog,
                  viewport:post.viewport
              });
          })
          .catch(err=>console.log(err));


          //sync with the db
          this.closeModal();
      }


      _fixedHere(){
        const post={
            "style":this.state.style,
            "prev":this.state.objectID,
            "catalog":this.state.catalog,
            "viewport":this.state.viewport
          };


          console.log(this.state.viewport);
        //   this.setState({
        //       viewport:viewport
        //   });
          fetch(`${Config.prefix}/saveStyle`,{
            method:"POST",
            body:JSON.stringify(post),
            headers:{
              "Content-Type":"application/json"
            }
          }).then(res=>res.json())
          .then(d=>console.log(d))
          .catch(err=>console.log(err));
      }
   
    _resize(){
       console.log("resize");
       let containerWidth=window.innerWidth*0.875;
       let containerHeight=window.innerHeight;
       this.setState({
        viewport:{
            width:containerWidth,
            height:containerHeight,
            ...this.state.viewport
        }
       })     
    }

    findAndChange(name,layers,visible){
      let oldLayers1=layers;
      const changeId=oldLayers1.findIndex(l=>l.id===name);
      console.log(changeId);
      let newLayers2 = null;
      if(name==="gridset"){
             newLayers2=[...oldLayers1.slice(0,changeId),{
              "id": "gridset",
              "type":"line",
              "source":"gridset",
              "paint":{
                "line-color":"rgb(233,0,0)"
              },
              "layout":{
                "visibility":!visible?"visible":"none"
              }
            },...oldLayers1.slice(changeId+1,oldLayers1.length)];
          }
      else{
        newLayers2=[...oldLayers1.slice(0,changeId),{
          "id": "center",
          "type":"symbol",
          "source":"center",
          "paint":{
          },
          "layout":{
            "visibility":!visible?"visible":"none",
            "text-field":"{desc}",
            "text-font":["Open Sans"]
          }
        },...oldLayers1.slice(changeId+1,oldLayers1.length)];
      }          

      return newLayers2;
    }

    _hideGridSet(visible){

      let newLayers2 =this.findAndChange("gridset",this.state.style["layers"],visible);
      newLayers2=this.findAndChange("center",newLayers2,visible);
      
      let newStyle1={
        ...this.state.style,
        "layers":newLayers2
      }
      this.setState({style:newStyle1,
        gridsetIsOn:visible
      });
    }


    getBBox(columnId,rowId,tileWidth,tileHeight,zoom){
      const marginRight=columnId*tileWidth;
      const marginTop=rowId*tileHeight;
      
      let minX,maxX,maxY,minY;
      if(marginRight>180){
        minX=marginRight-180;
      }
      else{
        minX=-marginRight;
      }

      if(marginTop>90){
        maxY=marginTop-90;
      }
      else{
        maxY=90-marginTop;
      }

      maxX = minX+tileWidth;
      minY = maxY-tileHeight;
      var coordinates=[
        [minX,minY],
        [maxX,minY],
        [maxX,maxY],
        [minX,maxY],
        [minX,minY]
      ];

      return {
        "rect":{
          "type":"Feature",
          "geometry":{
            "type":"LineString",
            "coordinates":coordinates
          },
          "properties":{
          }
        },
        "center":{
          "type":"Feature",
          "geometry":{
            "type":"Point",
            "coordinates":[(minX+maxX)/2,(maxY+minY)/2]
          },
          "properties":{
            "desc":zoom+":"+rowId+"x"+columnId
          }

        }
      }
    }

    _drawGridSet(){
        //show the griset;
        const centerX= this.state.viewport.longitude;
        const centerY= this.state.viewport.latitude;
        const zoom= Math.ceil(this.state.viewport.zoom);
        
       
        let tileWidth= 360/(1<<zoom);
        let tileHeight = 180/(1<<zoom);

        const columnId =Math.floor((180+centerX)/tileWidth);
        const rowId =Math.floor((90-centerY)/tileHeight);
   
        const features=[];
        const centerpts=[];  
        for(let i = -5;i<5;i++){
          for(let j=-5;j<5;j++){
            const data =this.getBBox(columnId+i,rowId+j,tileWidth,tileHeight,zoom);
            features.push(data["rect"]);
            centerpts.push(data["center"]);
          }
        }



        const rect={
          "type":"geojson",
          "data":{
            "type":"FeatureCollection",
            "features":features
          }
       
        };


        const pt={
          "type":"geojson",
          "data":{
            "type":"FeatureCollection",
            "features":centerpts
          }
       
        };


        console.log(pt);

        // console.log(tileWidth,tileHeight,columnId,rowId,centerX,minX,minY,maxX,maxY,geojson);
        
        const oldSources=this.state.style["sources"];
        const newSources={
          ...oldSources,
          "gridset":rect,
          "center":pt
        };
        
        
        const oldLayers=this.state.style["layers"];
        const findIndx =oldLayers.findIndex(l=>l.id==="gridset");
        console.log("i need to know",findIndx);
        let newLayers;
        if(findIndx===-1){
          newLayers=[...oldLayers,{
            "id": "gridset",
            "type":"line",
            "source":"gridset",
            "paint":{
              "line-color":"rgb(233,0,0)"
            },
            "layout":{
              "visibility":"visible"
            }
          },{
            "id": "center",
            "type":"symbol",
            "source":"center",
            "paint":{
            },
            "layout":{
              "visibility":"visible",
              "text-field":"{desc}",
              "text-font":["Open Sans"],
              // "icon-image":"bg-checkwell"
            }
          }];
      }else{
       
        newLayers= this.findAndChange("gridset",oldLayers,true);
        newLayers= this.findAndChange("center",newLayers,true);
        console.log("i really need to know",newLayers);


      }


        const newStyle={
          ...this.state.style,
          "sources":newSources,
          "layers":newLayers
        };
        this.setState({
          style:newStyle,
          gridsetIsOn:true,
          zoomCheck:zoom
        });
    }

    _onCrop(evt){
      console.log(evt.stopPropagation());
      let id=this.state.style.layers.findIndex(l=>l.id==="gridset");
      let visible=false;
      if(id!==-1){
          visible =this.state.style.layers[id]["layout"]["visibility"]==="visible";
      }
      if(this.state.style["sources"]["gridset"]&&id!==-1&&this.state.zoomCheck===Math.ceil(this.state.viewport.zoom)){
        console.log("invisible");
        this._hideGridSet(visible);
        return;
      }else{
        
        this._drawGridSet();
      }

    }


    __viewportChange(viewport){
      console.log(viewport)
      if(!this.state.gridsetIsOn){
        this._drawGridSet();
      }

      // const myViewPort={
      //   width:viewport.width,
      //   height:viewport.height,
      //   longitude:viewport.longitude,
      //   latitude:viewport.latitude,
      //   zoom:viewport.zoom,
      //   pitch:viewport.pitch,
      //   bearing:viewport.bearing
      // };
      this.setState({viewport});
    }

    openCodeMirrorModal() {
      this.setState({CodeMirrorIsOpen: true});
    }
  
    afterOpenCodeMirrorModal() {
      // references are now sync'd and can be accessed.
    }
  
    closeCodeMirrorModal() {
      this.setState({CodeMirrorIsOpen: false});
    }
 

    saveCodeMirrorModal(){
      console.log("changes");
      console.log(this.instance.getValue());
      console.log(this.state.editorDataDesc);
      const type=this.state.editorDataDesc.type;
      const t=JSON.parse(this.instance.getValue());
      let newStyle={};
      if(type==="source"){
          const name =this.state.editorDataDesc.name;
          const oldSources=this.state.style["sources"];
          const newSources={
              ...oldSources,
              [name]:t
          };

          newStyle={
              ...this.state.style,
              sources:newSources
          }
      }else{
          const order =this.state.editorDataDesc.order;
          const oldLayers=this.state.style["layers"];
          const newLayers=[
              ...oldLayers.slice(0,order),
              t,
              ...oldLayers.slice(order+1,oldLayers.length)    
          ];
          newStyle={
              ...this.state.style,
              "layers":newLayers
          }

      }
      console.log(newStyle);

      const post={
        "style":newStyle,
        "prev":this.state.objectID,
        "catalog":this.state.catalog,
        "viewport":this.state.viewport
      };

      fetch(`${Config.prefix}/saveStyle`,{
        method:"POST",
        body:JSON.stringify(post),
        headers:{
          "Content-Type":"application/json"
        }
      }).then(res=>res.json())
      .then(d=>{
          Config.catalog=post.catalog;  
          this.setState({
            style:newStyle
          });
      })
      .catch(err=>console.log(err));


      this.closeCodeMirrorModal();
    }
 
    render() {
        decorators.Header =CustomHeader;
        // decorators.Container=CutomContainer;
        defaultTheme.tree.base = {
          ...defaultTheme.tree.base,
          color: "white",
          backgroundColor: "#1D1D1D"
        };
        return (
            <div id="container" className="fourteen wide column ">
               <div style={tocStyle}>
            <Treebeard data = {this.state.data}  
                onToggle={this.onToggle}
            >
            </Treebeard>
            <Modal
          isOpen={this.state.CodeMirrorIsOpen}
          onAfterOpen={this.afterOpenCodeMirrorModal}
          onRequestClose={this.closeCodeMirrorModal}
          style={customMirrorStyles}
          decorators={decorators}
        >
             <div className="ui segment">
            <CodeMirror
                editorDidMount={editor => { this.instance = editor }}
                value={this.state.displayData}
                options={{
                    mode: 'javascript',
                    theme: 'material',
                    lineNumbers: true
                }}
                onBeforeChange={(editor, data, value) => {
                    this.setState({value});
                  }}
                onChange={(editor, value) => {
                    console.log('uncontrolled', {value});
                }}
            />
            </div>
            <div className="ui right floated buttons">
                     <div className="ui red button" onClick={this.saveCodeMirrorModal}>
                         Update
                     </div>   
                     <div className="ui green button" onClick={this.closeCodeMirrorModal}>
                         Cancel
                     </div>   
            </div>   
        </Modal>
            </div>  
            <ReactMapGL   onResize={this._resize}
                    mapStyle={this.state.style} 
                   {...this.state.viewport}
                  onClick={(evt)=>console.log(evt)}
                 
                  onViewportChange ={(viewport) =>{
                     console.log(viewport)
                    this.setState({viewport})}
                  }
            >
                <ControlPanel onLoadStyle={this._onLoadStyle}  onShowModal={this.openModal} onFixedHere={this._fixedHere} onCrop={this._onCrop} />
            </ReactMapGL>
            <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
         <div  className="ui card" style={{"height":"100%","width":"100%"}}>
             <div className="content">
                 <div className="header">
                 ViewPort 设置
                 </div>
             </div>
             <div className="ui segment">
             <div className="ui  form">
                 <div className="field">
                     <label>MapSize</label>
                     <div className="two fields">
                        <div className="field">
                            <input type="text" name="RECT[WIDTH]" placeholder="width" ref={inputWidth=>this.inputWidth=inputWidth}></input>
                        </div>
                        <div className="field">
                            <input type="text" name="RECT[HEGHT]" placeholder="height" ref={inputHeight=>this.inputHeight=inputHeight}></input>
                        </div>
                     </div>
                 </div>   
                 <div className="field">
                     <label>Center</label>
                     <div className="two fields">
                        <div className="field">
                            <input type="text" name="Center[lonitude]" placeholder="longitude" ref={inputLongitude=>this.inputLongitude=inputLongitude}></input>
                        </div>
                        <div className="field">
                            <input type="text" name="Center[latitude]" placeholder="latitude"  ref={inputLatitude=>this.inputLatitude=inputLatitude}></input>
                        </div>
                     </div>
                 </div>
                       
                 <div className="field">
                    <label>zoom</label>
                    <select className="ui fluid dropdown" ref={selectZoom=>this.selectZoom=selectZoom}> 
                      {selectoptions(1,20)}
                    </select>
                 </div>   
                 <div className="field">
                    <label>pitch</label>
                    <input type="text" name="pitch" ref={inputPitch=>this.inputPitch=inputPitch}></input>
                 </div>
                 <div className="field">
                    <label>bearing</label>
                    <input type="text" name="bearing" ref={inputBearing=>this.inputBearing=inputBearing}></input>
                 </div>
                 <div className="field">
                    <label>catalog</label>
                    <input type="text" name="bearing" ref={inputCatalog=>this.inputCatalog=inputCatalog}></input>                   
                 </div>
                 <div className="ui right floated buttons">
                     <div className="ui red button" onClick={this._onViewportChange}>
                         Update
                     </div>   
                     <div className="ui green button" onClick={this.closeModal}>
                         Cancel
                     </div>   
                 </div>   
             </div>
             </div>        
         </div>   
        </Modal>   
       </div>
        )
    }


}
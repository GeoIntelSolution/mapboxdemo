import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';
import ControlPanel from './ControlPanel';
import Config from '../config';
import Modal from 'react-modal';

const customStyles = {
    content : {
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

Modal.setAppElement("#root");
export default class GuYuan extends Component
{
    constructor(props)
    {
        super(props);
        let containerWidth=window.innerWidth*0.875;
        let containerHeight=window.innerHeight;
        this.state = {
            catalog:"guyuan",
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
            modalIsOpen:false
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
    }


    componentDidMount(){    
        fetch(`${Config.prefix}/${this.state.catalog}.json`)
        .then(res=>res.json())
        .then(d=>{
            const latestOne =d;

            if(latestOne["viewport"]){
                this.setState({
                    style:latestOne.style,
                    viewport:latestOne["viewport"],
                    objectID:latestOne["_id"]});
            }else{
            this.setState({
                style:latestOne.style,
                objectID:latestOne["_id"],
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
        
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

      _onViewportChange(){
          //change the viewport
          const viewport={
              width:parseInt(this.inputWidth.value,10),
              height:parseInt(this.inputHeight.value,10),
              longitude:parseFloat(this.inputLongitude.value),
              latitude:parseFloat(this.inputLatitude.value),
              pitch: parseFloat(this.inputPitch.value),
              bearing:parseFloat(this.inputBearing.value),
              zoom:parseFloat(this.selectZoom.value)
          };

          const post={
            "style":this.state.style,
            "prev":this.state.objectID,
            "catalog":this.state.catalog,
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
          .then(d=>console.log(d))
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

    _onCrop(){

    }

    render() {
        let title={
            color:"#ffffff"
        };
        return (
            <div id="container" className="fourteen wide column ">
            <ReactMapGL   onResize={this._resize}
                    mapStyle={this.state.style} 
                   {...this.state.viewport}
                  onClick={(evt)=>console.log(evt)} 
                  onViewportChange ={(viewport) =>{
                      console.log(viewport)
                      this.setState({viewport})}}
            >
                <ControlPanel onLoadStyle={this._onLoadStyle}  onShowModal={this.openModal} onFixedHere={this._fixedHere} onCrop={this._onCrop}/>
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
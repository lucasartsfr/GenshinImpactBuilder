import React, {Component, PureComponent } from "react";
import { createPortal } from "react-dom";
import Canvas from "./Canvas";

class MainArtifact extends PureComponent  {    

    CanvasRef = React.createRef();
    
    render(){
      // Create Button for Build
      var Builder = Object.keys(this.props.BuildNumber).map((val) => {
        var Selected = (val == 1) && "selectedlink";
        return <a data-build={val} key={val} className={`BuildLink ${Selected}`}>{this.props.BuildNumber[val].BuildName}</a>
      })

      var MainStatsOrder = Object.entries(this.props.MainAtrifactProps).map((Val, index) => {
        let Two = (Val[1] instanceof Array) ? Val[1].map(x => <span className="MainArtifactText" key={x}>{x}</span>) : <span key={Val[1]} className="MainArtifactText">{Val[1]}</span>;
        return (                 
          <div className={`MainArtifactBlock ${Val[0]}`}  key={"Key"+Val[0]+Val[1]} data-mainstat={Val[0]}>
            <div className="MainArtifactImageContainer">
              <img alt="Bubble" className="MainArtifactBubble" src={`img/artifact/main/bubble.webp`}/>
              <img  alt="Artifact" className="MainArtifactImage" src={`img/artifact/main/${Val[0]}.webp`}/>
            </div>            
            {Two}
          </div>);
      });
        return(
            <div className="ImageContainer" >      
              <div onClick={this.props.Action} className="BuildChara">{Builder}</div>               
                <div className="CharacterImgDiv">                  
                {/* style={{backgroundImage: `url('img/character/${this.props.Name}.webp')`}} */}
                  <Canvas ref={this.CanvasRef} />
                  <img key={this.props.Name} src={`img/character/${this.props.Name}.webp`} alt="logo" className="CharacterImg"/> 
                </div>
                <div className="MainArtefactStats">
                    {MainStatsOrder}
                </div> 
            </div>
        )
    }
}

export default MainArtifact;
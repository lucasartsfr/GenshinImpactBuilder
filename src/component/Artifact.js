import React, {Component, PureComponent} from "react";

class Artifact extends PureComponent {
    render(){       
                
        var ArtifactList = Object.entries(this.props.ArtifactProps).map(function(Value, index) {   
            let SetArtifact = Value[1].map(x => 
                <div className={`Artifact ArtifactRate`} key={x} data-star={x}>
                    <img src={`img/artifact/${x}.webp`} className="ArtifactImage"/>                
                    <div className="ArtifactName">
                        <h3 className="CommontTitle">{(Value[1].length > 1) ? "2x "+x : "4x "+x}</h3>
                    </div>
                </div>
            ) 
          
            return (<div key={index} className="SetArtifact">{SetArtifact}<hr/></div>)
        });

        return(
            <div className="ArtifactContainer CommonContainer">
                <h2 className="CommonH2">Artéfacts</h2>
                {ArtifactList}
            </div>
        )
    }
}

export default Artifact;
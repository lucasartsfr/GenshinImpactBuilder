import React, {PureComponent} from "react";
import Tilt from 'react-parallax-tilt';

class Artifact extends PureComponent {
    render(){       
        
        const {HoverArtifact, ArtifactProps} = this.props;

        var ArtifactList = Object.entries(ArtifactProps).map((Value, index) => {   
            let SetName = (Value[1].length > 1) ? Value[1][0]+","+Value[1][1] : Value[1][0]
            let SetArtifact = Value[1].map((x) =>{ 
                // const Reduce = x.split('.').reduce((o,i) => o[i], window); 
                // const Path = (Reduce !== undefined) ? Reduce : x;
                const Path = window.Arte[x].Set
               return(<Tilt className={`parallax-effect Artifact ArtifactRate`} key={Path} data-star={Path}>
                        {/* <img src={`https://api.lucasarts.fr/genshin/img/setartifact/${Path}/Fleur.webp`} alt={Path} className="inner-element ArtifactImage"/>                 */}
                        <img src={`${URL}Artifacts/${Path}/Fleur.webp`} alt={Path} className="inner-element ArtifactImage"/>                
                        <div className="ArtifactName">
                            <h3 className="CommontTitle">{(Value[1].length > 1) ? "2x "+Path : "4x "+Path}</h3>
                        </div>
                </Tilt>)
            }) 
          
            return (<div key={index} onMouseOver={HoverArtifact} data-set={SetName} className="SetArtifact">{SetArtifact}<hr/></div>)
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
import React, {Component} from "react";


class ArtifactEffect extends Component {

    render(){       
            
        const {HoverSet} = this.props; // Set On Hover
        // const HoverConvert = HoverSet.map(x => x.split('.').reduce((o,i) => o[i], window)) // Keep Array Of Names
        const SearchArte = Object.keys(window.Arte).map(NameArte => {  
            const SetArte = window.Arte[NameArte].Set;
            const Two = window.Arte[NameArte].Two;
            const Four = window.Arte[NameArte].Four;
            var ToReturn;
            if(HoverSet.length === 1 && HoverSet.includes(NameArte)){
                ToReturn = 
                (
                <div className="SetArtifactDesc" key={SetArte}>
                    <div className="SetArtifactDescGroup">
                        <span className="SetNumber">2</span>
                        <span className="SetDesc">{Two}</span>
                    </div>
                    <div className="SetArtifactDescGroup">
                        <span className="SetNumber">4</span>
                        <span className="SetDesc">{Four}</span>
                    </div>
                </div>
                )
            }
            else if(HoverSet.length === 2 && HoverSet.includes(NameArte)){
                ToReturn = 
                (
                <div className="SetArtifactDesc" key={SetArte}>
                    <div className="SetArtifactDescGroup">
                        <span className="SetNumber">2</span>
                        <span className="SetDesc">{Two}</span>
                    </div>
                </div>
                )
            }
            return ToReturn;
        })

        return(
            <div className="ArtifactEffect">
                <h2 className="CommonH2">Effet Artefact</h2>
                {SearchArte}
            </div>
        )
    }
}

export default ArtifactEffect;
import React, {Component, PureComponent} from "react";

import { GiPiercingSword as Normal } from "react-icons/gi";
import { GiLightningTrio as Skill } from "react-icons/gi";
import { GiGooeyImpact as Burst } from "react-icons/gi";

// GiTripleBeak GiBrightExplosion GiBurningEmbers GiFlameSpin GiGooeyImpact GiLightningTrio GiCornerExplosion GiMineExplosion RiSwordFill
 

class Aptitude extends PureComponent {

    render(){       
        // Icones
        const Map = {"NORMAL": Normal,"SKILL": Skill,"BURST": Burst}

        // Subs Statistics
        var SubStatsOrder = Object.entries(this.props.AptitudeProps).map((key, index) => {
            let Tagname = Map[key[0]];
            return (
                <div className="SubStats" key={index} data-priority={key[0]}> 
                    <Tagname className="IconesSubStats" />  {key[1]}
                </div>
            )
        });
        
        return(
            <div className="SubstatsContainer">
                <h2 className="CommonH2">Aptitude Prioritaire</h2>
                {SubStatsOrder}   
            </div>
        )
    }
}

export default Aptitude;
import React, {PureComponent} from "react";

import { GiPiercingSword as Normal } from "react-icons/gi";
import { GiLightningTrio as Skill } from "react-icons/gi";
import { GiGooeyImpact as Burst } from "react-icons/gi";

// GiTripleBeak GiBrightExplosion GiBurningEmbers GiFlameSpin GiGooeyImpact GiLightningTrio GiCornerExplosion GiMineExplosion RiSwordFill
 

class Aptitude extends PureComponent {

    render(){       
        // Icones
        const Map = {"NORMAL": Normal,"SKILL": Skill,"BURST": Burst}
        const {AptitudeProps} = this.props;
        // Subs Statistics
       
        var SubStatsOrder = AptitudeProps.map((key, index) => {
            let Finder = (window[key]) ? key : Object.keys(window).find(FindKey => window[FindKey] === key); // Switch JSON or FIREBASE
            let Tagname = Map[Finder];
            return (
                <div className="SubStats" key={index} data-priority={Finder}> 
                    <Tagname className="IconesSubStats" />  {window[Finder]}
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
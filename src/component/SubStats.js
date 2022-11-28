import React, {Component} from "react";
import { GiBroadsword as Atk } from "react-icons/gi";
import { GiRollingEnergy as Er } from "react-icons/gi";
import { BsShieldShaded as Def } from "react-icons/bs";
import { SiElement as Em } from "react-icons/si";
import { GiFlatStar as Tc } from "react-icons/gi";
import { GiBouncingSword as Dctc } from "react-icons/gi";
import { MdBloodtype as Pv} from "react-icons/md";

// GiAtomicSlashes GiFlatStar GiBouncingSword

class SubStats extends Component {

    render(){       
        // Icones        
        const Map = {"ATK": Atk,"DCTC": Dctc,"ER": Er,"DEF": Def,"EM": Em,"TC":Tc,"PV":Pv}
        const {SubStatsProps} = this.props;
        // Subs Statistics
        var SubStatsOrder = SubStatsProps.map(function(key, index) {
            let Finder = (window[key]) ? key : Object.keys(window).find(FindKey => window[FindKey] === key); // Switch JSON or FIREBASE
            let Tagname = Map[Finder];
            return (
                <div className="SubStats" key={index} data-priority={Finder}> 
                    <Tagname className="IconesSubStats" />  {window[Finder]}
                </div>
            );
        });
        
        return(
            <div className="SubstatsContainer">
                <h2 className="CommonH2">Sub Stats</h2>
                {SubStatsOrder}   
            </div>
        )
    }
}

export default SubStats;
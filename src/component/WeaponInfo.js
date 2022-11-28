import React, {PureComponent} from "react";
import {GiRoundStar as Stars} from "react-icons/gi";

class WeaponInfo extends PureComponent {

    
    render(){ 
        const WeaponName = this.props.HoverWeapon[0];
        const Type = this.props.HoverWeapon[1];
        const HoverWeaponPosition = this.props.HoverWeaponPosition;
        
        // Si le Type existe, on cherche les propriétés de l'arme
        var Selected;
        (WeaponName) && Object.keys(window[Type]).map((item) => { (window[Type][item].Nom === WeaponName) && (Selected = item); return Selected});

        const TheWeapon = (Selected) && window[Type][Selected];       
        return( (Selected) &&
            <div className="WeaponInfoContainer" style={{left : HoverWeaponPosition[0], top : HoverWeaponPosition[1]}}>
                <h2 className={`WeaponInfo${TheWeapon.Star}`}>{WeaponName}</h2>
                <div className={`TopWeaponInfo WeaponRate${TheWeapon.Star}`}>
                    <div className="LeftWeaponInfo">
                        <h4>{window["Traductions"][Type]}</h4>
                        <h3>{TheWeapon.Main}</h3>
                        <h4>Base Attaque</h4>
                        <h3>{TheWeapon.Base}</h3>
                        <h5>{[...Array(TheWeapon.Star)].map((e, i) => <Stars key={i}/>)}</h5>
                    </div>
                    <div className="RightWeaponInfo">
                        <img alt={WeaponName} src={`${URL}Weapons/${Type}/${WeaponName}.webp`} />
                    </div>
                </div>
                <div className="BottomWeaponInfo">
                    <p>{TheWeapon.Description}</p>
                </div>
            </div>
        )
    }
}

export default WeaponInfo;
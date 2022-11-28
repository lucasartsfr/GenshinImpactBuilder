import React, {PureComponent} from "react";
import {GiRoundStar as Stars} from "react-icons/gi";
import Tilt from 'react-parallax-tilt';
import WeaponInfo from "./WeaponInfo";

class Weapon extends PureComponent {

    
    render(){      

        const {BestWeapon, WeaponType, WeaponProps, HoverWeaponOn, HoverWeaponOut, HoverWeapon, HoverWeaponPosition} = this.props;
        
        var WeaponList = Object.entries(WeaponProps).reverse().map((Value, index) => {      
            const ToReurn = Value[1].map((x) => {
                // const Reduce = x.split('.').reduce((o,i) => o[i], window);                 
                // const Path = (Reduce !== undefined) ? Reduce : x;
                const Path = window[WeaponType][x].Nom
                return (<Tilt className={`parallax-effect Weapon WeaponRate${Value[0]}`} key={Path} data-star={Value[0]}>           
                    {/* <img alt={Path} src={`https://api.lucasarts.fr/genshin/img/weapon/${WeaponType}/${Path}.webp`} className="WeaponImage"/>     */}
                    <img alt={Path} src={`${URL}Weapons/${WeaponType}/${Path}.webp`} className="WeaponImage"/>    
                    {x === BestWeapon && <img alt="Best Weapon" className="BestWeapon" src={`${URL}Weapons/best.webp`} />}            
                    <div className="WeaponName">
                        <div className="WeaponStarBis">{[...Array(parseInt(Value[0]))].map((e, i) => <Stars key={i}/>)}</div>
                        <h3 className="CommontTitle" data-type={WeaponType} data-name={Path}>{Path}</h3>                    
                    </div>
                </Tilt>)
           })
            return ToReurn;
        });

        return(
            <div className="WeaponContainer CommonContainer" onMouseLeave={HoverWeaponOut} onMouseOver={HoverWeaponOn}>
                <h2 className="CommonH2">Armes</h2>
                <WeaponInfo 
                  HoverWeapon={HoverWeapon}
                  HoverWeaponPosition={HoverWeaponPosition} />
                {WeaponList}
            </div>
        )
    }
}

export default Weapon;
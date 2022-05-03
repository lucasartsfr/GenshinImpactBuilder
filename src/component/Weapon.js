import React, {Component, PureComponent} from "react";

class Weapon extends PureComponent {
    render(){        
        var WeaponList = Object.entries(this.props.WeaponProps).reverse().map((Value, index) => {    
           return Value[1].map(x =>
            <div className={`Weapon WeaponRate${Value[0]}`} key={x} data-star={Value[0]}>
                <img src={`img/weapon/${this.props.WeaponType}/${x}.webp`} className="WeaponImage"/>                
                <div className="WeaponName">
                <div className="WeaponStar">{"⭐ ".repeat(Value[0])}</div>
                    <h3 className="CommontTitle">{x}</h3>
                </div>
            </div>)
        });

        return(
            <div className="WeaponContainer CommonContainer">
                <h2 className="CommonH2">Armes</h2>
                {WeaponList}
            </div>
        )
    }
}

export default Weapon;
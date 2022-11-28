import React, {PureComponent} from "react";

class SelectType extends PureComponent {    

    render(){    

        const SelectType = window.Type.map(Type => {
            return <option key={Type}>{Type}</option>;
        })

        return(
                <div className="FiltreType">
                    <span className="SelectName">Type<b className="StarDeco">✦</b></span>
                    <select className="SelectGenshin" onChange={this.props.SelectedType}>
                        {SelectType}
                    </select>
                </div>   
        )
    }
}

export default SelectType;
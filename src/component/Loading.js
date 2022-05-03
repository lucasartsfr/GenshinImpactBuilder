import React, {Component} from "react";


class Loading extends Component {
    render(){
        return(
            <div className={`Loading LoadedIs${this.props.Loaded}`}>
                <div className="LoadingLogoContainer">
                    <img src="img/theme/genshin.png" alt="Logo Genshin" className="LogoGenshin"/>
                </div>
                <div className="LoadingTextContainer">
                    <h2>Narukami Island</h2>
                    <p>Ceci est un message de test</p>
                </div>    
                <div className="LoadingElementContainer">
                    <hr className="Separator"></hr>
                    <img src="img/theme/loading.png" alt="Logo Elements" className="LogoElements"/>
                    <hr className="Separator"></hr>
                </div>
            </div>
        )
    }
}

export default Loading;
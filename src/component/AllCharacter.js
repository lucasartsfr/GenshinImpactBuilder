import React, {PureComponent} from "react";
import {GiRoundStar as Stars} from "react-icons/gi";
import ScrollContainer from 'react-indiana-drag-scroll';
import SelectType from './SelectType';

class AllCharacter extends PureComponent {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            spam : false
        };
      }

      // Scroll Throught Character List
      onWheel = (e) => {
        //var Dir = (e.deltaY/100);
        var container = e.target.closest('.ListSelectCharacter');
        //var Item = Dir*(document.querySelector('.SelectCharacter').offsetWidth + (2*parseFloat(window.getComputedStyle(e.target).getPropertyValue('margin-right'))));
        if(this.state.spam){return}
        this.setState({spam : true})
        setTimeout(() => {  
            this.setState({spam : false})
            container.scrollTo({left: container.scrollLeft + e.deltaY*4})
        },300)
    }
    
    render(){
        // Image For Each Character
        const {Name, Type, Action, SelectedType} = this.props;
        const isAll = (Type === "Tous") && true; // Si tous est selectionné        

        let Characters = Object.keys(window.DataChara).map((value) => {
            var ToReturn;
            const isSelected = (value === Name) ? "selected" : ""; // Si perso sélectionné            
            const isType = (window.DataChara[value].Type === Type) ? true : false; // Si Perso a le type selectionné   
            const ToShow = (!isAll && !isType) ? "hide" : ""; // Hide Perso qui n'a pas le Type.

            // ToReturn = <img key={value} id={value} src={`https://api.lucasarts.fr/genshin/img/character/${value}/mini.png`} alt={value} className={`SelectCharacter ChangeCharacter ${ToShow} ${isSelected}`}/>;
            ToReturn = <img key={value} id={value} src={`${URL}Characters/${value}/mini.webp`} alt={value} className={`SelectCharacter ChangeCharacter ${ToShow} ${isSelected}`}/>;            
            return ToReturn;
        });
        
        return(
            <div className="SelectAllCharacter">
                <div className="SelectedCharacterInfo">
                    <div className="SelectedCharaterTypeContainer">
                        <img className="SelectedCharaterType" alt={window.DataChara[Name].Type} src={`${URL}Types/${window.DataChara[Name].Type}.png`}/>
                    </div>
                    <div className="SelectCharacterName">
                        <h1>{Name}</h1>
                        <h3 className="SelectedCharacterStar">{[...Array(parseInt(window.DataChara[Name].Star))].map((e, i) => <Stars className="AllCharacterStars" key={i}/>)}</h3>
                    </div>
                </div>
                
                <div onClick={Action} onWheel={this.onWheel} className="ListSelectCharacter">   
                    <ScrollContainer vertical={false} className="scroll-container ListSelectCharacter">    
                        {Characters}      
                    </ScrollContainer>
                </div>
                
                <div className="FlexSpace">
                    <SelectType SelectedType={SelectedType} />
                </div>
            </div>
        )
    }
}

export default AllCharacter;
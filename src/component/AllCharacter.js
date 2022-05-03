import React, {Component, PureComponent} from "react";

class AllCharacter extends PureComponent {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            spam : false
        };
      }

      onWheel = (e) => {
        var Dir = (e.deltaY/100)
        console.log('ok')
        var container = e.target.closest('.ListSelectCharacter');
        var Item = Dir*(document.querySelector('.SelectCharacter').offsetWidth + (2*parseFloat(window.getComputedStyle(e.target).getPropertyValue('margin-right'))));
        if(this.state.spam){return}
        this.setState({spam : true})
        setTimeout(() => {
            this.setState({spam : false})
            container.scrollTo({left: container.scrollLeft + e.deltaY*4})
        },300)
    }
    
    render(){
        // Image For Each Character
        let test = Object.keys(this.props.AllCharacterProps).map(function(value){
            return <img key={value} id={value} src={`img/character/mini/${value}.png`} alt={value} className="SelectCharacter"/>
        });
        
        return(
            <div className="SelectAllCharacter">
                <div className="SelectedCharacterInfo">
                    <div className="SelectedCharaterTypeContainer">
                        <img className="SelectedCharaterType" src={`img/type/${this.props.AllCharacterProps[this.props.Name].Type}.png`}/>
                    </div>
                    <div className="SelectCharacterName">
                        <h1>{this.props.Name}</h1>
                        <h3 className="SelectedCharacterStar">{"⭐ ".repeat(this.props.AllCharacterProps[this.props.Name].Star)}</h3>
                    </div>
                </div>
                <div onClick={this.props.Action} onWheel={this.onWheel} className="ListSelectCharacter">         
                    {test}      
                </div>
                <div className="FlexSpace"></div>
            </div>
        )
    }
}

export default AllCharacter;
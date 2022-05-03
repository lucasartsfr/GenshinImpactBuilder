import React, {Component, PureComponent } from "react";
import Weapon from "./Weapon";
// import {DataChara} from './data.js';
import Artifact from "./Artifact";
import MainArtifact from "./MainArtifact";
import SubStats from "./SubStats";
import AllCharacter from "./AllCharacter";
import Aptitude from "./Aptitude";
import { logDOM } from "@testing-library/react";

class Character extends PureComponent  {
  
  // State and Ref
  state = {Name: "Aloy",  Build: 1, Chara : window.DataChara}
  SwitchAudio = new Audio("audio/switch-anemo.mp3");  
  ClickAudio = new Audio("audio/click-medium.mp3");
  MainArtifactRef = React.createRef();

  // Change Character + Animation OnClick
  ChangeCharacter = (e) => {
    if(e.target.classList.contains('SelectCharacter')){
      this.SwitchAudio.currentTime = 0;     
      this.MainArtifactRef.current.CanvasRef.current.ChangeCharacterAnimation()      
      this.setState({Name: e.target.id, Build : 1 });
      (document.querySelector('.selected')) && document.querySelector('.selected').classList.remove('selected')
      document.querySelector('.BuildLink').classList.add('selectedlink')
      e.target.classList.add('selected')
      // e.target.scrollIntoView(); 
      
      this.SwitchAudio.play();
    }
  }

  ChangeBuild = (e) => {    
    if(e.target.classList.contains('BuildLink')){  
      this.ClickAudio.currentTime = 0;      
      (document.querySelector('.selectedlink')) && document.querySelector('.selectedlink').classList.remove('selectedlink')
      e.target.classList.add('selectedlink')
      var GetNewBuild = parseInt(e.target.getAttribute('data-build'));      
      this.setState({Build : GetNewBuild})
      this.ClickAudio.play();
    }
  }

  componentDidMount = (e) => {
    window.addEventListener('load', function(){
      document.querySelector('.Loading').classList.add('Hide');
    });    
  }

  render(){
      return(
          <div className={`CharacterContainer ${this.state.Chara[this.state.Name].Type}`}>   

              <AllCharacter Name={this.state.Name} Action={this.ChangeCharacter} AllCharacterProps={this.state.Chara} /> 
              <div className="Core">
                <div className="Left">
                  <Weapon WeaponType={this.state.Chara[this.state.Name].Weapon} WeaponProps={this.state.Chara[this.state.Name].Build[this.state.Build].Weapons}/>
                  <Aptitude AptitudeProps={this.state.Chara[this.state.Name].Build[this.state.Build].Aptitude}/>
                </div>
                
                <MainArtifact Action={this.ChangeBuild} ref={this.MainArtifactRef} Name={this.state.Name} BuildNumber={this.state.Chara[this.state.Name].Build} MainAtrifactProps={this.state.Chara[this.state.Name].Build[this.state.Build].MainStats}/>  

                <div className="Right">
                  <Artifact ArtifactProps={this.state.Chara[this.state.Name].Build[this.state.Build].Artifact}/>
                  <SubStats SubStatsProps={this.state.Chara[this.state.Name].Build[this.state.Build].SubStats}/>
                </div>  
              </div>  
          </div>
      )
  }
}

export default Character;
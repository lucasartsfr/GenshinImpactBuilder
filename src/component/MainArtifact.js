import React, {PureComponent } from "react";
import Tilt from 'react-parallax-tilt';

class MainArtifact extends PureComponent  {    

    
    render(){

      const {Action, NbBuild, Name, BuildNumber, MainAtrifactProps} = this.props;

      // Create Button for Build
      var Builder = Object.keys(BuildNumber).map((val) => {
        var Selected = (parseInt(val) === NbBuild) && "selectedlink"; // Select Build Name & Reset
        return <button data-build={val} key={val} className={`BuildLink ${Selected}`}>{BuildNumber[val].BuildName}</button>
      })

      // For Main State (Coupe, Sablier, Casque)
      var MainStatsOrder = Object.entries(MainAtrifactProps).map((Val, index) => {
        // Check if Two Stats or One (Split line)
        let Two = (Val[1] instanceof Array) ? Val[1].map(x => <span className="MainArtifactText" key={window[x]}>{window[x]}</span>) : <span key={window[Val[1]]} className="MainArtifactText">{window[Val[1]]}</span>;
        // Get first Set for Character
        const BestSet = BuildNumber[NbBuild].Artifact[1][0];
        // const BestSetBis = BestSet.split('.').reduce((o,i) => o[i], window); 
        // const SelectSet = (BestSetBis) ? BestSetBis : BestSet;
        const SelectSet = window.Arte[BestSet].Set;
        return (                 
          <div className={`MainArtifactBlock ${Val[0]}`}  key={"Key"+Val[0]+Val[1]} data-mainstat={Val[0]}>
            <div className="MainArtifactImageContainer">
              <img alt="Bubble" className="MainArtifactBubble" src={`${URL}Backgrounds/Bubble/bubble.webp`}/>
              {/* <img  alt="Artifact" className="MainArtifactImage" src={`https://api.lucasarts.fr/genshin/img/setartifact/${SelectSet}/${Val[0]}.webp`}/> */}
              <img  alt="Artifact" className="MainArtifactImage" src={`${URL}Artifacts/${SelectSet}/${Val[0]}.webp`}/>

            </div>            
            {Two}
          </div>);
      });
      
        return(
            <div className="ImageContainer" >      
              <div onClick={Action} className="BuildChara">{Builder}</div>               
                <Tilt trackOnWindow={true} tiltMaxAngleX={1} tiltMaxAngleY={1} className="CharacterImgDiv">  
                  <div id="MyCanvas" className="Switched"></div>              
                  {/* <img key={Name} src={`https://api.lucasarts.fr/genshin/img/character/${Name}/${Name}.webp`} alt="Personnage" className="CharacterImg"/>
                  <img key={"Flip"+Name} src={`https://api.lucasarts.fr/genshin/img/character/${Name}/${Name}.webp`} alt="Personnage" className="CharacterImg Fliped"/>  */}
                  <img key={Name} src={`${URL}Characters/${Name}/${Name}.webp`} alt="Personnage" className="CharacterImg"/>
                  <img key={"Flip"+Name} src={`${URL}Characters/${Name}/${Name}.webp`} alt="Personnage" className="CharacterImg Fliped"/> 
                </Tilt>
                <div className="MainArtefactStats">
                    {MainStatsOrder}
                </div> 
            </div>
        )
    }
}

export default MainArtifact;
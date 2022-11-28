import React, {useEffect, useState} from "react";
import Weapon from "./Weapon";
import Artifact from "./Artifact";
import ArtifactEffect from "./ArtifactEffect";
import MainArtifact from "./MainArtifact";
import SubStats from "./SubStats";
import AllCharacter from "./AllCharacter";
import Aptitude from "./Aptitude";
import Team from "./Team";

function Character (){

  // State
  const [Name, setName] = useState(window.location.href.split("?=")[1]?.replaceAll('%20',' ') || "Albedo");
  const [HoverWeapon, setHoverWeapon] = useState(['','Sword']);
  const [HoverWeaponPosition, setHoverWeaponPosition] = useState([-9000,-9000]);
  const [HoverSet, setHoverSet] = useState(["Coquille des rêves opulents"]);
  const [Build, setBuild] = useState(1);
  const [SelectedType, setSelectedType] = useState("Tous");
  // Audio Settings & Ref
  const SwitchAudio = new Audio("https://api.lucasarts.fr/genshin/Theme/Audio/switch-anemo.mp3");  
  const ClickAudio = new Audio("https://api.lucasarts.fr/genshin/Theme/Audio/click-medium.mp3");
  const MainArtifactRef = React.createRef();

  // Change Character + Animation OnClick
  const ChangeCharacter = (e) => {
    if(e.target.classList.contains('ChangeCharacter')){
     SwitchAudio.currentTime = 0; // Pause Audio             
     SwitchAudio.play();  
     ChangeCharacterAnimation();
      setName(e.target.id)
      setBuild(1)
      setHoverSet(window.DataChara[e.target.id].Build[1].Artifact[1])
      setHoverWeaponPosition([-9000,-9000])
    }
  }

  // Change Build Character
  const ChangeBuild = (e) => {    
    if(e.target.classList.contains('BuildLink')){  
     ClickAudio.currentTime = 0;      
      (document.querySelector('.selectedlink')) && document.querySelector('.selectedlink').classList.remove('selectedlink')
      e.target.classList.add('selectedlink')
      var GetNewBuild = parseInt(e.target.getAttribute('data-build'));   
      setBuild(GetNewBuild);
      setHoverSet(window.DataChara[Name].Build[GetNewBuild].Artifact[1])
      ClickAudio.play();
    }
  }

  // Switch Character Animation
  const ChangeCharacterAnimation = () => {
    document.getElementById('MyCanvas')?.classList.remove('Switched')
    setTimeout(()=> { document.getElementById('MyCanvas')?.classList.add('Switched') },10)                    
  }

  // On Load
  useEffect(()=>{
    setTimeout(()=>{
      document.querySelector('.Loading').classList.add('Hide');
      ChangeCharacterAnimation(); 
    },1000)    
    console.log("Mount !")
  }, [])
  
  const HoverArtifact = (e) =>{
    const closest = e.target.closest(".SetArtifact")
    const Set = closest.getAttribute('data-set').split(',');
    setHoverSet(Set)
  }

  // On Weapon Hover
  const HoverWeaponOn = (e) => {
    if(e.target.classList.contains('parallax-effect')){
      const closest = e.target.closest(".parallax-effect")
      const HoverName = closest.querySelector('h3').getAttribute('data-name');
      const Type = closest.querySelector('h3').getAttribute('data-type');
      setHoverWeapon([HoverName,Type]);
      setHoverWeaponPosition([e.target.getBoundingClientRect().left+124, e.target.getBoundingClientRect().top])
    }
  }

  // When out of DIV
  const HoverWeaponOut = (e) =>{
    setHoverWeapon(['','Sword'])
    setHoverWeaponPosition([-9000,-9000])
  }

  // Select Type
  const SelectedTypeUpdate = (e) => {
    setSelectedType(e.target.value)
  }

  const DataChara = window["DataChara"]; // Get All Characters
  const Type = DataChara[Name].Type; // Get Type of Character
  const NbBuild = Build // Get Build 1 or 2                 
    
  return <div className={`CharacterContainer ${Type}`}> 

  <video autoPlay={true} muted={true} loop={true} className={`Video ${Type}`}>
    <source src={`https://api.lucasarts.fr/genshin/Backgrounds/Types/video/Cryo.mp4`}></source>
  </video>

    <AllCharacter 
        SelectedType={SelectedTypeUpdate} 
        Action={ChangeCharacter}
        Type={SelectedType} 
        Name={Name}/> 
    
    <div className="Core">
      <div className="Left">

        <Weapon 
          HoverWeaponOn={HoverWeaponOn}   
          HoverWeaponOut={HoverWeaponOut}                  
          BestWeapon={DataChara[Name].Build[NbBuild].BestWeapon} 
          WeaponType={DataChara[Name].Weapon} 
          WeaponProps={DataChara[Name].Build[NbBuild].Weapons}
          
          HoverWeapon={HoverWeapon}
          HoverWeaponPosition={HoverWeaponPosition}/>
        
        <Aptitude 
          AptitudeProps={DataChara[Name].Build[NbBuild].Aptitude}/>       
        
        <Team 
          ChangeCharacter={ChangeCharacter} 
          Name={Name}/>       
      </div>
      
       <MainArtifact 
        Action={ChangeBuild} 
        NbBuild={NbBuild}                   
        ref={MainArtifactRef} 
        Name={Name} 
        BuildNumber={DataChara[Name].Build} 
        MainAtrifactProps={DataChara[Name].Build[NbBuild].MainStats}/> 
  
       <div className="Right">
        <Artifact 
          HoverArtifact={HoverArtifact} 
          ArtifactProps={DataChara[Name].Build[NbBuild].Artifact}/>

        <SubStats  
          SubStatsProps={DataChara[Name].Build[NbBuild].SubStats}/>

        <ArtifactEffect 
          HoverSet={HoverSet} />
      </div>   
    </div>  
</div>;
}

export default Character;
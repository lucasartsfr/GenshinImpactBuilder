import React, { useEffect, useState } from 'react';
import Character from './component/Character.js';
import FireStoreParser from 'firestore-parser';

function App() {
    // If Firebase Loaded
    const [Loaded, setLoaded] = useState(false)

    window["URL"] = "https://api.lucasarts.fr/genshin/";
    // On Load
    useEffect(()=>{
        window["DataChara"] = {};
        window["Weapons"] = {};
        window["Arte"] = {};      
        // Get All Characters 
        (async () =>  {    
      
            const CharacterList = await fetch("https://api.lucasarts.fr/genshin/Characters.json").then(response => response.json()).then(json => FireStoreParser(json['documents']))
            const WeaponList = await fetch("https://api.lucasarts.fr/genshin/Weapons.json").then(response => response.json()).then(json => FireStoreParser(json['documents']))
            const ArtifactList = await fetch("https://api.lucasarts.fr/genshin/Artifacts.json").then(response => response.json()).then(json => FireStoreParser(json['documents']))
            const VariablesList = await fetch("https://api.lucasarts.fr/genshin/Variables.json").then(response => response.json()).then(json => FireStoreParser(json['documents']))
            const TypesList = await fetch("https://api.lucasarts.fr/genshin/Types.json").then(response => response.json()).then(json => FireStoreParser(json['documents']))
          

            WeaponList.map((WeaponType) => { return window[WeaponType.name.split('/').pop()] = WeaponType.fields; }); // Save Weapon Type (Sword, Bow etc..) With Content

            ArtifactList.map((ArtifactSet) => { return window["Arte"][ArtifactSet.name.split('/').pop()] = ArtifactSet.fields; }); // Save All Artifacts

            VariablesList.map((Variable) =>{ return window[Variable.name.split('/').pop()] = Variable.fields[0] }); // Save All Variables in Window[Variable]
            
            window["Type"] = TypesList[0].fields[0] ; 

            CharacterList.map((Character) =>{     
              setLoaded(true)
              return window["DataChara"][Character.name.split('/').pop()] = Character.fields; // Save CharacterList to window.DataChara
            });
            
          })();
    },[])

    return(
        <div className="App">
          {Loaded && <Character />}
        </div>
    )
}

export default App;

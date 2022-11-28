import React, {PureComponent} from "react";

class Team extends PureComponent {
    render(){    
        
        const {ChangeCharacter, Name} = this.props;
        const Team = window.DataChara[Name].Team; // Get Team Comp   

        const BuilderTeam = Object.keys(Team).map(NameTeam => {
            const TeamMember = Team[NameTeam].map((member, index) => {
                const CharacterStar = parseInt(window.DataChara[member].Star); // Get Star Character
                return (<div key={index} onClick={ChangeCharacter} id={member} className={`Team ChangeCharacter TeamRate${CharacterStar}`}>       
                            <img alt={member} src={`${URL}Characters/${member}/mini.webp`} className="TeamImage"/>            
                            <div className="TeamName">
                                <h3 className="CommontTitle">{member}</h3>                    
                            </div>
                        </div>)
            })
            return (<div key={NameTeam} className="TeamList"><h3 className="TeamListTitle">{NameTeam}</h3>{TeamMember}</div>)
        })

        return(
            <div className="TeamContainer CommonContainer">
                <h2 className="CommonH2">Team</h2>
                {BuilderTeam}
            </div>
        )
    }
}

export default Team;
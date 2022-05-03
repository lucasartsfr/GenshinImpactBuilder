import React, { Component, PureComponent } from "react";

class Canvas extends PureComponent {

    ChangeCharacterAnimation = () => {
        document.getElementById('MyCanvas').classList.remove('Switched')
        setTimeout(()=> {
          document.getElementById('MyCanvas').classList.add('Switched')
        },10)            
        
    }
  
    componentDidMount() {
        this.ChangeCharacterAnimation();
    };
  
    render() {
      return(
            <div id="MyCanvas" className="Switched"></div>
      );
    }
  }
  

export default Canvas;
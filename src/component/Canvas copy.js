import React, { useRef, useEffect, Component } from "react";

class Canvas extends Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }

    ChangeCharacterAnimation = () => {
      document.getElementById('MyCanvas').classList.remove('Switched')
        var current = 0;
        const canvas = this.canvasRef.current;
        const X = canvas.width  = canvas.offsetWidth;
        const Y = canvas.height = canvas.offsetHeight;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, X, Y); 
        const image = new Image();       
        
        
        document.getElementById('MyCanvas').classList.add('Switched')

        // var Thisinterval = setInterval(() => {
        //     if(current < 25){ 
        //         (current % 2 === 0) && context.clearRect(0, 0, X, Y);                
        //         var StateBis = (current < 10) ? "0"+current : ""+current;                
        //         image.onload = () => {context.drawImage(image, 0, 0, X , Y )}
        //         image.src = 'img/background/switch2/Benett_000'+StateBis+'.png';  
        //         current++; 
        //     }
        //     else{clearInterval(Thisinterval)}
        // },33)
    }
  
    componentDidMount() {
        this.ChangeCharacterAnimation();
    };
  
    render() {
      return(
            <canvas id="MyCanvas" className="Switched" ref={this.canvasRef}/>
      );
    }
  }
  

export default Canvas;
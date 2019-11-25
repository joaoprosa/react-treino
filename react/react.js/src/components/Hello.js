import React from  'react';
import '../App.css'

class Hello extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           lampada: 'apagada'
       }
   }
    lampada = 'apagada'  
    
    apagar = () => {
        this.setState({
            lampada: 'apagada',
        })
    }
    acender = () => {
        this.setState({
            lampada: 'acesa',
        })
    }
    render() {
        return (
            <div>
                <h1 className='title'>
                    {this.state.lampada}
                </h1>
            <span>
                <button onClick={this.apagar}>Apagar</button>
                <button onClick={this.acender}>Acender</button>
            </span>
            </div>
        )
    }
}


export default Hello;  
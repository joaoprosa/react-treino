import React from  'react';

class form extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           form: 'Form',
           dados: 'Dados',
           nome: '',
           idade: '',
           estado: ''
       }
   }
   mudarNome = (ev) => {
        this.setState({
            nome: ev.target.value,
        })
    }
   mudarIdade = (ev) => {
        this.setState({
            idade: ev.target.value
        })
    }
    mudarEstado = (ev) => {
        this.setState({
            estado: ev.target.value
        })
    }    
    render() {
        return (
            <div>
                <h1 className='title'>
                    {this.state.form}
                </h1>
            <span>
                <input onChange={this.mudarNome} type='text'/>
                <input onChange={this.mudarIdade} type='text'/>
                <input onChange={this.mudarEstado} type='text'/>
            </span>
            <h1>
                {this.state.dados}
            </h1>
            <p>{this.state.nome}</p>
            <p>{this.state.idade}</p>
            <p>{this.state.estado}</p>
            </div>
        )
    }
}


export default form;  
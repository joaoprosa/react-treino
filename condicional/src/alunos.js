import React from 'react';
import App from './App';

class Alunos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alunos: [
        {
          nome: 'Gabriel garoto de PROGRAMAção',
          idade: 22 + ' anos',
        },
        {
          nome: 'João:',
          idade: 19 + ' anos',
        },
        {
          nome: 'Lucas:',
          idade: 24 + ' anos',
        },
        {
          nome: 'Maicon:',
          idade: 23 + ' anos',
        },
        {
          nome: 'Cícero:',
          idade: 24 + ' anos',
        },
        {
          nome: 'Geysa:',
          idade: 20 + ' anos',
        },
        {
          nome: 'Lucas Emanuel:',
          idade: 16 + ' anos',
        },
        {
          nome: 'Cleitin do Complexo:',
          idade: 19 + ' anos',
        },
        {
          nome: 'Luan Vlad Imortal:',
          idade: 168 + ' anos',
        },
        {
          nome: 'Jorge:',
          idade: 58 + ' anos',
        },
        {
          nome: 'Estefania:',
          idade: 22 + ' anos',
        },
        {
          nome: 'Carol:',
          idade: 19 + ' anos',
        },
        {
          nome: 'Vitor: ',
          idade: 24 + ' anos',
        },
      ]
    }
  }
  clicar= () => {
    this.state.alunos.map(chamar => {
      console.log( chamar.nome , chamar.idade)
      return null
    })
  }
  render() {
    return (
      <div>
        {/* <button onClick={() => this.clicar}>AODsifhsn</button> */}
      </div>
    )
  }
}

export default Alunos;
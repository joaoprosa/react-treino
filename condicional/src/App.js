import React from 'react';
import logo from './logo.svg';
import Alunos from './alunos';
import Props from './Props';
import Menu from './Menu';
import imagem from './imagem1'
import imagem2 from './imagem2'
import imagem3 from './imagem3'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      components: [
        `Baleia Orca` ,
        `Penguins`,
        `Onças`,
      ],
      // renderizado: 

    }
  }
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Menu components={this.state.components}/>
        <Alunos/>
        {/* <Props/> */}
      </header>
    </div>
  );
}
}

export default App;

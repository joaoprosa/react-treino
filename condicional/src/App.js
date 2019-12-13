import React from 'react';
import logo from './logo.svg';
// import Alunos from './components/alunos';
// import Props from './components/Props';
import Menu from './components/Menu';
import Imagem from './components/imagem1';
import Imagem2 from './components/imagem2';
import Imagem3 from './components/imagem3';
import './App.css';;

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      components: [
        `Baleia Orca` ,
        `Penguins`,
        `Onças`,
      ],
      renderizado: '',

    }
  }

    animais = (components) => {
      this.setState({
        renderizado: components,
      })
    }

   renderizarComponents = () => {
    switch (this.state.renderizado){
      case 'Baleia Orca':
        return <Imagem/>;
      break;
      case 'Penguins':
        return <Imagem2/>;
      break;
      case 'Onças':
        return <Imagem3/>;
      default: 
      return null;
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
        <Menu components={this.state.components}
              animais={this.animais}
        />
        {this.renderizarComponents()}
        {/* <Alunos/> */}
        {/* <Props/> */}
      </header>
    </div>
  );
}
}

export default App;

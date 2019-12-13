import React from 'react';
import App from '../App'


class Menu extends React.Component {
    cliquei = (components) => {
        console.log (components)
        this.props.animais(components)
    }

    render(){
        return(
            <div>
                <p>&#9776;</p>
                {this.props.components.map(components => {
                    return(
                        <p onClick={() => this.cliquei(components)} key={components}>{components}</p>
                    )
                })}
            </div>
        )
            
    }
}
export default Menu;
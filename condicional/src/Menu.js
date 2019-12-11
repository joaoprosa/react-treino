import React from 'react';

class Menu extends React.Component {
    render(){
        // console.log(this.props.components)
        return(
            <div>
                <p>&#9776;</p>
                {this.props.components.map(imagem => {
                    return(
                        <p>{imagem}</p>
                    )
                })}
            </div>
        )
            
    }
}
export default Menu;
import React from 'react';

class Option extends React.Component {

    render() {
        const {item,handleRemove } = this.props; 

        return (
            <li className = " list-group-item text-capitalize d-flex justify-content-between bg-dark text-white">
                 <h6>{item} </h6>
                <span>
                     <button onClick = {handleRemove }
                     className=" bg-transparent border-0 text-danger"> remove</button>
               </span>
                   
            </li> 
        )
    }
}


export default Option;
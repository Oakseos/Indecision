import React from 'react';
import Option   from './Option'

class Options extends React.Component {

    render() {
        const { items, handleRemove } = this.props;
        return ( 
            <div> 
                 <ul className="list-group my-5">
                    {
                    items.map(item => { 
                        return ( <Option key={item.id} 
                                    item = {item.title}
                                    handleRemove = {() => handleRemove(item.id)}/>
                        )
                    })
                }
                </ul>
               
             </div>
        
        );
    }
}



export default Options;
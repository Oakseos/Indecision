import React from 'react';
import Header from './Components/Header';
import Action from './Components/Action';
import Options from './Components/Options';
import AddOption from './Components/AddOption';
import Footer from './Components/Footer'


import {v1 as uuid} from 'uuid';

class App extends React.Component { 
    state = {
      myHeading: {
        title: "Indecision",
        subTitle:" Put your life in the life of a computer", 
          },
        items: [],
        item : " ",
        id: uuid(),
        editItem: false
        }; 

    handleChange=(e)=> { 
      this.setState({ 
       item: e.target.value
      })
    }
    


   

    handleAddOption = (e) => { 
      e.preventDefault(); 

      const newItem = { 
        id: this.state.id,
        title: this.state.item

      }
     

     const  updatedItems = [...this.state.items,newItem];
      this.setState({ 
        items: updatedItems,
        item:"",
        id: uuid(),
        editItem: false
      });
    }


   
    handleRemove = (id) => { 
      const filteredItem = this.state.items.filter( item => item.id !== id)

      this.setState({ 
        items: filteredItem
      });
    } 

      
     
 

  render() { 
    
    return( 
    <div> 
      <div> 
      <Header title = {this.state.myHeading.title}
              subTitle= {this.state.myHeading.subTitle} 
        />
      </div>
      <div className= "container-fluid rounded bg-dark">
        <div className="row">
          <div className=" col-lg-6 col-sm-12  mx-auto mt-5">
              <Action/>
              <Options 
                  items = {this.state.items}
                  handleRemove= {this.handleRemove} /> 
              <AddOption handleChange = {this.handleChange}
                        handleAddOption={this.handleAddOption} />
              <Footer/>
          </div>
       </div>
    </div>

    </div>
    
    );     
  }
}

export default App;

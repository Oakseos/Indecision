import React from 'react';

class AddOption extends React.Component {
    render() {
        const { handleAddOption, handleChange} = this.props
        return (
           <div className= " card card-body bg-transparent my-2 "> 
            <form>
            <div className="input-group d-flex justify-content-between">    
                <input type="text  " 
                        className="form-control text-capitalize bg-transparent text-white mr-2"
                        placeholder="Your Options"
                        onChange= {handleChange} />

                    <div className="input-group-append">
                         <button type ="button" 
                         className= " btn bg-info text-white mx-1  "

                         onClick ={ handleAddOption}> Add Option  </button>
                       
                    </div>
                    </div>
            </form>
        </div>
        );
    }
}

export default AddOption;
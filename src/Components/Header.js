import React from 'react';

class Header extends React.Component { 
    render() { 
        const {title, subTitle} = this.props;

        return (
            <div className = "container bg-dark border border-warning border-right-0 border-left-0"
                 >
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-2 text-center text-white "> 
                    <h2>{title}</h2> 
                    <h6>{subTitle}</h6>
                    </div>
                </div>
            </div>
            );
            }

    }

    

export default Header;
import React from 'react';
//import PropTypes from 'prop-types';
 

const Header = (props) => {
    const {branding} = props;
    return (
        <nav className ="navbar mb-3 pt-3 pb-3 py-0  text-sm-center text-md-left">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>

                {/* <ul className="navbar-nav mr-auto-right">
                    <li className="nav-item">  
                        <a href="/" className="nav-link">Home</a>
                    </li>
                </ul> */}
            </div>
        </nav>

    
    );
}

Header.defaultProps = {
    branding :'Real-Time Cryptocurrency Dashboard'

};
// Header.propTypes = {
//     branding : PropTypes.string.isRequired
// };


export default Header;  

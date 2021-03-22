import React from "react";
import PropTypes from "prop-types";

function Navbar(props){
    // functional componentta render olmaz.
    return (
        <div>
            <h3>
                {props.title}
            </h3>
        </div>
    )
}

// 2. alternatif yazım
//const Navbar = () => {
//}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default App"
}
export default Navbar;
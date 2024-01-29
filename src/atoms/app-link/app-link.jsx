import React from 'react';
import {Link} from "react-router-dom";

const AppLink = ((props) => {
    const {children, to} = props
    return (
        <Link to={to}>
            {children}
        </Link>
    );
});

export default AppLink;

import React, {Fragment} from 'react';
import Navbar from "../../organisms/navbar/navbar";
import Footer from "../../organisms/footer/footer";

const BaseLayout = (props) => {
    const {children} = props
    return (
        <Fragment>
            <Navbar/>
            {children}
            <Footer/>
        </Fragment>
    );
};

export default BaseLayout;

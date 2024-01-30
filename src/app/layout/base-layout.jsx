import React, {Fragment} from 'react';
import Navbar from "../../organisms/navbar/navbar";
import Footer from "../../organisms/footer/footer";

const BaseLayout = (props) => {
    const {children} = props
    return (
        <Fragment>
            <Navbar/>
            <main className={"container"}>
                {children}
            </main>
            <Footer/>
        </Fragment>
    );
};

export default BaseLayout;

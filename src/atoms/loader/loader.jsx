import React from 'react';
import "./loader.scss"

const Loader = () => {
    const numbers = ["one", "two", "three", "four", "five"]
    return (
        <div className={"loader-page"}>
            <div className={"box"}>
                <ul>
                    {
                        numbers.map(el => (
                            <li key={el}>{el}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Loader;

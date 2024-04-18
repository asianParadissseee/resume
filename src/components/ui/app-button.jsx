import React from 'react';

const AppButton = ({onClick, children, ...otherProps}) => {
    return (
        <button
            onClick={onClick}
            {...otherProps}
            className="px-12 py-4 bg-transparent border hover:bg-zinc-800 hover:text-gray-300
                     dark:hover:text-zinc-800 dark:hover:bg-gray-300 transition duration-500 rounded-full
                     dark:text-white text-zinc-800 dark:border-gray-300 border-black">
            {children}
        </button>
    );
};

export default AppButton;
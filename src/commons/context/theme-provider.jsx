import React, {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext(null)
const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
        return () => {
            document.body.classList.remove('dark');
            document.body.classList.remove('light');
        };
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <ThemeContext.Provider value={{handleThemeSwitch,theme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
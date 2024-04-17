import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || "dark";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
        localStorage.setItem('theme', theme);

        return () => {
            document.body.classList.remove('dark');
            document.body.classList.remove('light');
        };
    }, [theme]);

    const handleThemeSwitch = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ handleThemeSwitch, theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

import React from 'react';
import AnimatedCursor from "react-animated-cursor";
import {useTheme} from "@/commons/hooks/use-theme";

const AppCursor = () => {
    const {handleThemeSwitch, theme} = useTheme()
    return (
        <div>
            <AnimatedCursor
                innerSize={14}
                outerSize={14}
                color={theme === "dark" ? "255, 255, 255" : "0,0,0"}
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
        </div>
    );
};

export default AppCursor;
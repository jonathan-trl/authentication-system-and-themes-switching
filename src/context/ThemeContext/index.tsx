import { createContext, useEffect, useState } from "react";
import { ETheme, ITheme, IThemeProvider, Themes } from "./types";

import { ThemeProvider as ThemeProviderStyled } from "styled-components";

export const ThemeContext = createContext<ITheme>({} as ITheme);

export const ThemeProvider = ({ children }: IThemeProvider) => {
    const [theme, setTheme] = useState(ETheme.light);

    useEffect(() => {
        loadTheme();
    }, []);

    function loadTheme() {
        const savedTheme = localStorage.getItem("@theme") as ETheme;
        if (savedTheme) setTheme(savedTheme);
    }

    function toggleTheme() {
        let selectedTheme;
        if (theme == ETheme.light) {
            selectedTheme = ETheme.dark;
        } else {
            selectedTheme = ETheme.light;
        }

        setTheme(selectedTheme);
        localStorage.setItem("@theme", selectedTheme);
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProviderStyled theme={Themes[theme]}>
                {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    );
};
